let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
let mydata = {
  name: "Dsssaa",
  email: "dennywpasdsdsds@gmail.com",
  hobby: "mendengarkan musik",
};

const newData = { ...data, ...mydata };
const { street, city } = data.address;
console.log(newData);
console.log(`${street} ${city}`);
