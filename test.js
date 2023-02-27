const fs = require('fs');

const currentDate = new Date();
const Dateformat = currentDate.toISOString().slice(0, 10);
const Timeformat = currentDate.toISOString().slice(11, 19);

const content = `This is the content of the file created at ${Timeformat}`;

fs.writeFile(`${Dateformat}.txt`, content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created!');
});