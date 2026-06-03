import fs from 'fs';

const jsxFile = '/home/dev2/Desktop/rekory-website/Components/BusinessSolutions/BusinessSolutions.jsx';
const styleFile = '/home/dev2/Desktop/rekory-website/Components/BusinessSolutions/BusinessSolutions.styles.js';

let jsx = fs.readFileSync(jsxFile, 'utf8');
let styles = fs.readFileSync(styleFile, 'utf8');

console.log("Files loaded.");
