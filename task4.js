// Dữ liệu
const billValues = [275, 40, 430];

// if/else
billValues.forEach(bill => {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  const totalValue = bill + tip;

  console.log(`hóa đơn là ${bill}, tiền tiếp là ${tip}, tổng bill là ${totalValue}`);
});

//ko sài esle if
// Dữ liệu
const billValues1 = [275, 40, 430];

// Tính tip và in ra kết quả
billValues1.forEach(bill1 => {
  var tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
  var totalValue1 = bill1 + tip1;
    console.log("KHÔNG SÀI ESLE IF");
  console.log(`hóa đơn là ${bill1}, tiền tiếp là ${tip1}, tổng bill là ${totalValue1}`);
});

