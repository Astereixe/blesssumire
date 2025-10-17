const average = (bahasaIndonesia, bahasaInggris, matematika, ipa) => {
  if (bahasaIndonesia || bahasaInggris || matematika || ipa) {
    // validasi tak boleh kosong
    if (
      // validasi tipe data number
      typeof bahasaIndonesia == "number" &&
      typeof bahasaInggris == "number" &&
      typeof matematika == "number" &&
      typeof ipa == "number"
    ) {
      if (
        // validasi input nilai tak boleh kurang dari 0
        bahasaIndonesia >= 0 &&
        bahasaInggris >= 0 &&
        matematika >= 0 &&
        ipa >= 0
      ) {
        if (
          // validasi input nilai tak boleh lebih dari 100
          bahasaIndonesia <= 100 &&
          bahasaInggris <= 100 &&
          matematika <= 100 &&
          ipa <= 100
        ) {
          const average =
            (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;
          if (average <= 100 && average >= 90) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade A");
          } else if (average <= 89 && average >= 80) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade B");
          } else if (average <= 79 && average >= 70) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade C");
          } else if (average <= 69 && average >= 60) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade D");
          } else {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade E");
          }
        } else {
          console.log("nilai input tak boleh lebihh dari 100");
        }
      } else {
        console.log("nilai input tak boleh kurang dari 0");
      }
    } else {
      console.log("semua type data harus number");
    }
  } else {
    console.log("semua nilai harus diisi");
  }
};

average(1000,1000,1000,1000);
