var dizi = ["durmuş", "ahmet", 1, 2, 3, 4];
var dizi2 = ["ali", "osman", 5, 6, 7, 8]
console.log(dizi[0]);
console.log(dizi2);

var ad = "durmuş";
var soyad = "türkmen";
var tc = Number("1245679");
var address = {
     sehir: "kayseri",
     ilce: "yahyalı"

}

console.log(ad, soyad, tc, address);

var IndexCan;
var IndexAda;

const kgcan = 60;
const kgada = 40;

const heigtCan = 1.70;
const heigtAda = 1.50;

IndexCan = (kgcan) / (heigtCan * heigtCan);
IndexAda = (kgada) / (heigtAda * heigtAda);

console.log(IndexAda, IndexCan);

let adaHigherIndex = IndexAda > IndexCan;
let canHigherIndex = IndexCan > IndexAda;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük :" + adaHigherIndex);
console.log("Can'nın kilo indeksi ada'ın kilo indeksinden daha büyük :" + canHigherIndex);

let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaFazla = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30) && (IndexAda <= 34.9);

console.log(AdaZayif);
console.log(AdaNormal);
console.log(AdaFazla);
console.log(AdaSisman);

var dt = new Date();
console.log(dt.getDate);
console.log(dt.getFullYear);
console.log(dt);

var dtA = new Date("11/15/2021 14:50");
console.log(dtA);

var start = new Date('09/19/1999');
var end = new Date('11/15/2021');

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;
var ay = gun / 30;
var yıl = ay / 12;
console.log("yaş : " + yıl);

var num = 15.123456789;
console.log(num.toPrecision(7)); // toplamda 3 basamaklı sayı 
console.log(num.toFixed(3)); // ondalık kısmı 3 basamakta sınırlama
console.log(Math.round(num)); // en yakın sayıya yuvarlama
console.log(Math.ceil(num)); // yukarı yuvarla
console.log(Math.floor(num)); // aşagı yuvarla

// min max sayıyı bulma
console.log(Math.min(1, 2, 40, 56, 58, 93));
console.log(Math.max(1, 2, 40, 56, 58, 93));

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretme 
var min = 50;
var max = 100;
console.log(Math.floor(min + Math.random() * (max - min)));

// bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplama

var brutmaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;
var toplamMaas = (mesaiSuresi * mesaiUcreti) + brutmaas;

var toplamNetmaas = (toplamMaas - (toplamMaas * 0.25));
console.log(toplamMaas, toplamNetmaas.toFixed(2));

// cümlede kaç karakter

var sentence = " template literals or tamplate string is the ability ";

var url = "http:// sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

console.log(sentence.length);
// cümle kaç kelimeden oluşuyor
console.log(sentence.trim().split(" ").length);

// tüm cÜmleyi küçük harfe çevir

console.log(sentence.toLocaleLowerCase());
console.log(sentence.toLocaleUpperCase());

//cümlenin başındaki ve sonundaki boşlukları silin
console.log(sentence.trim());



var cars = ["Bmw", "Mercedes", "Opel", "Mazda"];

console.log(cars);
console.log(typeof cars);
console.log(cars.length);
console.log(cars[0]);
console.log(cars[cars.length - 1]);

cars[4] = "Renault"; // dizinin sonuna değer ekleme

cars.push("Toyota");

// dizinin başına deger ekleme

cars.unshift("Seat");

// dizinin başından ve sonundan değer silme

cars.shift("Seat"); // baştan deger silme
cars.pop("Toyota"); // sondan deger silme

// diziyi alfabetik olarak sıralama
cars.reverse();

var numbers = [1, 2, 5, 80, 15]; // diziyi sırala

function compare(a, b) {
     if (a > b) return 1;
     if (a == b) return 0;
     if (a < b) return -1;
}

console.log(numbers.sort(compare));
console.log(cars);

// opel degeri dizinin elemanı mı
console.log(cars.indexOf("Opel"));
console.log(cars.includes("Opel"));

// elemanları bir dizi içinde göstermek

var studentA = ["Durmuş", "Türkmen", 1999];
var studentB = ["Mehmet Ali", "Küçükkaplan", 1998];
var studentC = ["Ahmet", "Saban", 1997];

var students = [studentA, studentB, studentC];

console.log(students);




































































