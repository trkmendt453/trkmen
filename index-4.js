// var trafigecikis = new Date('04/20/2016');
// trafigecikis.setHours(0,0,0,0);
// var trafigecikiMs = Date.now() - trafigecikis.getTime();
// var trafiktekiGun = Math.floor(trafigecikiMs/(1000*60*60*24));

// if (trafiktekiGun<=365) {

//     console.log('1. servis bakım süreci geldi')   
// }else if (trafiktekiGun>=365 && trafiktekiGun<=365*2) {
//     console.log('2. servis bakım süreniz geldi');    
// }else if (trafiktekiGun>365*2 && trafiktekiGun<=365*3) {
//     console.log('3. servis bakım süreniz geldi');
    
// }else {
//     console.log('bilinmeyen bir süre');
// }
// console.log(trafiktekiGun);

var result = prompt("Orada Kim Var");

if (result == 'cancel') {
    console.log('iptal Edildi'); 
}else if (result == 'Durmuş') {

    var password = prompt('Şifrenizi Girin');
    if (password == 'cancel') {
        console.log('iptal edildi');   
    }else if (password == '1234') {
        console.log('Hoş geldin Admin');
    }else{
        console.log('Yanlış Şifre');
    }
    
}else{
    console.log('Sizi tanımıyorum');
}

