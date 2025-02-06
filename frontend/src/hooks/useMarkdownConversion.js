import { useEffect, useState, useCallback } from "react";
import useDebounce from "./useDebounce";
import { convertMarkdown } from "../services/api";
import { toast } from '../components/Toast/Toast';

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
      toast.dismiss();
      
      if (error.message === 'Failed to fetch') {
        toast.error('Server is not running. Please start the backend server.', {
          id: 'server-error', 
        });
      } else if (error.response?.status === 500) {
        toast.error('Server error. Please try again later.', {
          id: 'server-error',
        });
      } else {
        toast.error(`Error: ${error.message || 'Something went wrong'}`, {
          id: 'server-error',
        });
      }
      setHtml(''); 
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
  