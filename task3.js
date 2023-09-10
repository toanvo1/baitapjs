// dữ liệu 1 
var caheo = [96,108,89]
var gau = [88,91,110]
//DTB 
var DTB  = (diem)=>{
    
    var ketquaDTB = diem.reduce((acc,diem) => acc + diem,0 )
    return ketquaDTB/ diem.length;
}
DTBcaheo = DTB(caheo);
DTBgau = DTB(gau)

console.log("Dữ liệu 1");
console.log("Điểm trung bình của cá Heo", DTBcaheo)
console.log("Điểm trung bình của chú Gấu", DTBgau)
if(DTBcaheo > DTBgau && DTBcaheo >= 100 ){
    console.log("cá heo chiến thắng");
}else if(DTBcaheo < DTBgau && DTBcaheo >= 100 ){
    console.log("gấu chiến thắng");
}else if(DTBcaheo === DTBgau && DTBcaheo >= 100 && DTBgau >= 100 ){
    console.log("Hòa");
}else{
    console.log("không ai thắng ")
}

// dữ liệu 2 
var caheo1 = [97, 112, 101]
var gau1 = [109, 95, 123]

DTb1 = (diem1) =>{
    var DTb1 = diem1.reduce((acc,diem1) => acc + diem1, 0)
    {
        return DTb1 /diem1.length
    }
}
dtbcaheo1 = DTb1(caheo1)
dtbgau1 = DTb1(gau1)
console.log("dữ liệu 2 ")
console.log("điểm trung bình của cá heo 1", dtbcaheo1);
console.log("điểm trung bình của gấu1", dtbgau1);

if(dtbcaheo1 > dtbgau1 && dtbcaheo1 >=100){
    console.log("người chiến thắng là cá heo");
}else if(dtbcaheo1<dtbgau1 && dtbgau1 >= 100){
    console.log("gấu chiến thắng");
}else if (dtbcaheo1 === dtbgau1 && dtbcaheo1>=100 &&dtbgau1>=100) {
    console.log("hòa");
}else{
    console.log("thua");
}
// dữ liệu 3 
var caheo2 = [97, 112, 101]
var gau2 = [109, 95, 106]

dtb2 = (diem2)=>{
   var dtb2 =diem2.reduce((acc,diem2 )=> acc+diem2,0)
    return dtb2/diem2.length
}

dtbcaheo2= dtb2(caheo2)
dtbgau2=dtb2(gau2)

console.log("dữ liệu 3");
console.log("điểm trung bình của cá heo", dtbcaheo2);
console.log("điểm trung bình của gấu", dtbgau2);
if(dtbcaheo2 > dtbgau2 && dtbcaheo2 >=100){
    console.log("người chiến thắng là cá heo");
}else if(dtbcaheo2<dtbgau2 && dtbgau2 >= 100){
    console.log("gấu chiến thắng");
}else if (dtbcaheo2 === dtbgau2 && dtbcaheo2>=100 &&dtbgau2>=100) {
    console.log("hòa");
}else{
    console.log("thua")
}