function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.20;
    }
  }
  
  // Tạo mảng 'bills' đề cho 
  const bills = [125, 555, 44];
  
  // Sài map tạo mảng 'tips' từ mảng 'bills'
  const tips = bills.map(calcTip);
  
  // Sài map tạo mảng 'total' từ mảng 'bills' và 'tips'
  const total = bills.map((bill, index) => bill + tips[index]);

  console.log('Tips:', tips);   // [18.75, 111, 8.8]
  console.log('Total:', total); // [143.75, 666, 52.8]
  