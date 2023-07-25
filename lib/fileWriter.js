const fs = require('fs');

function saveSVGToFile(svg, filename) {
  fs.writeFile(filename, svg, (err) => {
    if (err) {
      console.error('Error saving SVG file:', err);
    } else {
      console.log(`Generated ${filename}`);
    }
  });
}

module.exports = { saveSVGToFile };
