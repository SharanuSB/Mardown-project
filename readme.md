# Markdown Editor

Real-time Markdown to HTML converter with live preview.

## Project Structure
```
markdown-editor/
├── backend/
│   ├── src/
│   │   ├──  controller.js
│   │   ├──  routes.js
│   │   └──  utils.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Editor/
    │   │   └── Preview/
    │   ├── hooks/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Installation

### Backend Setup
```bash
cd backend
npm install
node server.js
```

Dependencies:
- express
- cors
- marked
- sanitize-html

### Frontend Setup
1. Create a `.env` file in the frontend directory with:
```
VITE_API_URL=http://localhost:5000
```

2. Install dependencies and run:
```bash
cd frontend
npm install
npm run dev
```


Dependencies:
- react
- @tailwindcss/typography
- tailwindcss
- vite

## Environment Variables
Make sure to create a `.env` file in the frontend directory with the following:
```
VITE_API_URL=http://localhost:5000
```

## Sample Markdown
```markdown
# Heading 1
## Heading 2

**Bold** and *Italic*

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello World');
\`\`\`
```

