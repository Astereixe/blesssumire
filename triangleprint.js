let printSegitiga = 999;

let output = "";
//validasi tipe data number atau bukan
if (typeof printSegitiga == "number") {
  for (let i = printSegitiga; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      output = output + j;
    }
    output = output + "\n";
  }
  console.log(output);
} else {
  console.log("not number value");
}
