const express = require("express");
const { convertMarkdown } = require("./controller");

const router = express.Router();

// Markdown conversion route
router.post("/convert", convertMarkdown);

module.exports = router;