const Content = require("../models/Content");

// TEACHER: Upload Content
exports.uploadContent = async (req, res) => {
  try {
    const {
      title,
      description,
      subject,
      start_time,
      end_time,
      rotation_duration,
    } = req.body;

    if (!title || !subject) {
      return res.status(400).json({ message: "Title & Subject required" });
    }

    const content = await Content.create({
      title,
      description,
      subject,
      file_path: req.file.path,
      file_type: req.file.mimetype,
      file_size: req.file.size,
      uploaded_by: req.user.id,
      start_time,
      end_time,
      rotation_duration,
    });

    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PRINCIPAL: Approve Content
exports.approveContent = async (req, res) => {
  try {
    const { id } = req.params;

    const content = await Content.findByPk(id);

    if (!content) return res.status(404).json({ message: "Not found" });

    content.status = "approved";
    content.approved_by = req.user.id;
    content.approved_at = new Date();

    await content.save();

    res.json({ message: "Content approved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PRINCIPAL: Reject Content
exports.rejectContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const content = await Content.findByPk(id);

    if (!content) return res.status(404).json({ message: "Not found" });

    content.status = "rejected";
    content.rejection_reason = reason;

    await content.save();

    res.json({ message: "Content rejected" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};