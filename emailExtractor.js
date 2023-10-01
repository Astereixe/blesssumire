const emails = [
  'psychologicalmock-u@gmail.com',
  'idioticdiffusion21@hotmail.com',
  'offbeatsuasion48@example.com',
  'cobbledrecruitment3@yahoo.com',
  'geblingextreme15@hotmail.com',
  'hugepenthouse61@yahoo.com',
  'coincidentalgroin12@example.com',
  'erodingbulwark41@hotmail.com',
  'agreeablepaunch51@gmail.com',
];
// regex pattern to extract username from email
const pattern = /([^@]+)@/;
// using map
const usernames = emails
  .map((email) => {
    const match = email.match(pattern);
    return match ? match[1] : null;
  })
  .filter((username) => username !== null);
console.log(usernames.join('\n'));
