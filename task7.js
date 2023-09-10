// Mark
const mark = {
    hoVaTen: 'Mark Miller',
    canNang: 78, // kg
    chieuCao: 1.69, // mét
    tinhBMI: function () {
      this.bmi = this.canNang / (this.chieuCao ** 2);
      return this.bmi;
    },
  };
  
  // John
  const john = {
    hoVaTen: 'John Smith',
    canNang: 92, // kg
    chieuCao: 1.95, // mét
    tinhBMI: function () {
      this.bmi = this.canNang / (this.chieuCao ** 2);
      return this.bmi;
    },
  };
  
  // Tính BMI cho Mark và John
  mark.tinhBMI();
  john.tinhBMI();
  
  // So sánh BMI và ghi kết quả ra console
  if (mark.bmi > john.bmi) {
    console.log(`${mark.hoVaTen}'s BMI (${mark.bmi.toFixed(1)}) cao hơn so với ${john.hoVaTen} (${john.bmi.toFixed(1)})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.hoVaTen}'s BMI (${john.bmi.toFixed(1)}) cao hơn so với ${mark.hoVaTen} (${mark.bmi.toFixed(1)})!`);
  } else {
    console.log(`${mark.hoVaTen} và ${john.hoVaTen} có cùng chỉ số BMI là ${mark.bmi.toFixed(1)}.`);
  }
  