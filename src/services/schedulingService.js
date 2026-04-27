const Content = require("../models/Content");

exports.getActiveContent = async (teacherId) => {
  const now = new Date();

  // Step 1: Get approved content of this teacher
  const contents = await Content.findAll({
    where: {
      uploaded_by: teacherId,
      status: "approved",
    },
    order: [["id", "ASC"]],
  });

  // Step 2: Filter by time window
  const activeContents = contents.filter(c =>
    c.start_time &&
    c.end_time &&
    now >= new Date(c.start_time) &&
    now <= new Date(c.end_time)
  );

  // Edge Case 1: No active content
  if (activeContents.length === 0) return null;

  // Step 3: Total rotation duration
  const totalDuration = activeContents.reduce(
    (sum, c) => sum + (c.rotation_duration || 5),
    0
  );

  // Step 4: Current time logic
  const currentMinute = Math.floor(Date.now() / 60000);
  const mod = currentMinute % totalDuration;

  let cumulative = 0;

  for (let content of activeContents) {
    cumulative += content.rotation_duration || 5;

    if (mod < cumulative) {
      return content;
    }
  }

  return null;
};