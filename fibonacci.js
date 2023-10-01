const count = 50;
const num = [];
for (let index = 0; index < count; index++) {
  let current;
  if (index == 0) {
    current = 0;
  } else if (index == 1) {
    current = 1;
  } else {
    current = num[index - 1] + num[index - 2];
  }
  num.push(current);
  console.log(current);
}
