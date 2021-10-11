function PanggilForEach(){
  var kalimat = ["Saya", "Ingin", "Belajar", "Bersama"]
  kalimat.forEach(function (item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
  });
}
PanggilForEach();