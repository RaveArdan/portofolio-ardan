const fs = require('fs');
fetch('https://hafidzhumaidi.vercel.app/assets/index-CVidOCxR.js')
  .then(r => r.text())
  .then(text => {
    const classRegex = /"([^"]*(?:flex|grid|text-|bg-|p-|m-|rounded)[^"]*)"/g;
    let match;
    const classes = [];
    while ((match = classRegex.exec(text)) !== null) {
      if(match[1].length > 5 && match[1].includes(' ')) {
        classes.push(match[1]);
      }
    }
    console.log(classes.slice(0, 50).join('\n'));
  });

