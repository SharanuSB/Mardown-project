import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useMarkdownConversion = () => {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');
    const [loading, setLoading] = useState(false);
    const debouncedMarkdown = useDebounce(markdown, 300);
  
    useEffect(() => {
      const convert = async () => {
        if (!debouncedMarkdown) {
          setHtml('');
          return;
        }
        
        setLoading(true);
        try {
          const response = await fetch('http://localhost:5000/api/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ markdown: debouncedMarkdown }),
          });
          
          if (!response.ok) throw new Error('Conversion failed');
          const result = await response.json();
          setHtml(result.html);
        } catch (error) {
          console.error('Conversion failed:', error);
        } finally {
          setLoading(false);
        }
      };
  
      convert();
    }, [debouncedMarkdown]);
  
    return { markdown, setMarkdown, html, loading };
  };

  export default useMarkdownConversion;
  