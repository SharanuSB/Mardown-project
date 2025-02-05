import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { convertMarkdown } from "../services/api";

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
          const result = await convertMarkdown(debouncedMarkdown);
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
  