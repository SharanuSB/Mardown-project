const { parseMarkdown } = require("./utils");

// Controller for Markdown conversion
const convertMarkdown = (req, res) => {
  const { markdown } = req.body;

  if (!markdown) return res.json({ html: "" });

  const html = parseMarkdown(markdown);
  res.json({ html });
};

module.exports = { convertMarkdown };