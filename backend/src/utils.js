const { marked } = require("marked");
const sanitizeHtml = require("sanitize-html");

// Configure marked
marked.use({ gfm: true, breaks: true, mangle: false, headerIds: false });

// Convert Markdown to sanitized HTML
const parseMarkdown = (markdown) => {
  const rawHtml = marked.parse(markdown);
  return sanitizeHtml(rawHtml, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "h1", "h2"],
    allowedAttributes: { img: ["src", "alt"], a: ["href", "title", "target"] },
  });
};

module.exports = { parseMarkdown };