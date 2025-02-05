import { useEffect, useState, useCallback } from "react";
import useDebounce from "./useDebounce";
import { convertMarkdown } from "../services/api";

const INITIAL_MARKDOWN = `# Welcome to MD Editor

Try writing some markdown here:

\`\`\`
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

- Lists
- Are
- Supported

**Bold** and *italic* text works too!
`;

const useMarkdownConversion = () => {
  const [markdown, setMarkdown] = useState(INITIAL_MARKDOWN);
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);
  const debouncedMarkdown = useDebounce(markdown, 300);

  const convert = useCallback(async (text) => {
    if (!text) {
      setHtml('');
      return;
    }
    
    setLoading(true);
    try {
      const result = await convertMarkdown(text);
      setHtml(result.html);
    } catch (error) {
      console.error('Conversion failed:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    convert(debouncedMarkdown);
  }, [debouncedMarkdown, convert]);

  return { markdown, setMarkdown, html, loading };
};

export default useMarkdownConversion;
  