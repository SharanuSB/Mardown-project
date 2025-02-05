const API_URL = import.meta.env.VITE_API_URL;

export const convertMarkdown = async (markdown) => {
  const response = await fetch(`${API_URL}/api/convert`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ markdown }),
  });
  
  if (!response.ok) throw new Error('Conversion failed');
  return response.json();
};