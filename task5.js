// Định nghĩa hàm tính trung bình của 3 điểm số
//const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
var caheo1 = [44, 23, 71]
var gau1 = [65, 54, 49]

var caheo2 = [85, 54, 41]
var gau2 = [23, 34, 27]

var dtb2 = (diem2)=>{
   var dtb2 =diem2.reduce((acc,diem2 )=> acc+diem2,0)
    return dtb2/diem2.length
}
dtbcaheo1= dtb2(caheo1)
dtbgau1=dtb2(gau1)

dtbcaheo2= dtb2(caheo2)
dtbgau2=dtb2(gau2)
///////////////////////////////////
// kiểm tra người chiến thắng
const checkWinner = (caheo, gau) => {
  if (caheo >= 2 * gau) {
    console.log(`cá heo thắng (${caheo} vs. ${gau})`);
  } else if (gau >= 2 * caheo) {
    console.log(`gấu  thắng (${gau} vs. ${caheo})`);
  } else {
    console.log("Không có đội chiến thắng.");
  }
};
// dữ liệu 1
console.log("dữ liệu 1:");
checkWinner(dtbcaheo1, dtbgau1);

// dữ liệu 2
console.log("dữ liệu 2:");
checkWinner(dtbcaheo2, dtbgau2);
