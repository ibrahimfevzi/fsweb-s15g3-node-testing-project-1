/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  obj.isim = obj.isim.trim();
  return obj;
}
// const obj = { isim: "  jane  " };
// console.log(nesneyiTrimle(obj));

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  obj[prop] = obj[prop].trim();
  return obj;
}
// const obj2 = { isim: "  jane  ", yas: " 34 " };
// console.log(verileniTrimle(obj2, "isim"));

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  let enBuyuk = tamsayilar[0].tamsayi;
  for (let i = 0; i < tamsayilar.length; i++) {
    if (tamsayilar[i].tamsayi > enBuyuk) {
      enBuyuk = tamsayilar[i].tamsayi;
    }
  }
  return enBuyuk;
}
// const tamsayilar = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
// console.log(enBuyukTamsayiyiBul(tamsayilar));

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacın ilk değeri
   */

  // ✨ gerekli propları ekleyin
  this.ilkSayi = ilkSayi;

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek:
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.asagiSay = () => {
    let sayi = this.ilkSayi;
    if (sayi > 0) {
      sayi--;
    }
    this.ilkSayi = sayi;
    return sayi;
  };
}

// const sayac = new Sayici(3);
// console.log(sayac.asagiSay()); // 2
// console.log(sayac.asagiSay()); // 1
// console.log(sayac.asagiSay()); // 0
// console.log(sayac.asagiSay()); // 0

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin
  this.mevsimler = ["ilkbahar", "yaz", "sonbahar", "kış"];

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.sonraki = () => {
    // ✨ kodlar buraya
    let mevsim = this.mevsimler[0];
    this.mevsimler.shift();
    this.mevsimler.push(mevsim);
    return this.mevsimler[0];
  };
}

// const mevsimler = new Mevsimler();
// console.log(mevsimler.sonraki()); // "yaz"
// console.log(mevsimler.sonraki()); // "sonbahar"
// console.log(mevsimler.sonraki()); // "kış"
// console.log(mevsimler.sonraki()); // "ilkbahar"
// console.log(mevsimler.sonraki()); // "yaz"

function Araba(isim, depoBenzin, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */

  this.odometer = 0; // araba 0 kilometrede yüklenecek
  this.depo = depoBenzin; // araba full depoyla yüklenecek
  this.kml = kml; // araba 1 litreyle 20 km yol gidecek
  this.isim = isim; // arabanın ismi "focus" olacak

  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    let benzin = this.depo;
    let yol = this.odometer;
    let kml = this.kml;
    let toplamYol = yol + gidilecekyol;
    let toplamBenzin = benzin - gidilecekyol / kml;
    if (benzin > 0) {
      this.odometer = toplamYol;
      this.depo = toplamBenzin;
    }
    return this.odometer;
  };

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya
    let benzin = this.depo;
    let yol = this.odometer;
    let kml = this.kml;
    let toplamBenzin = benzin + litre;
    let toplamYol = yol + litre * kml;
    if (benzin < 20) {
      this.depo = toplamBenzin;
    }
    return this.odometer;
  };
}

/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  return new Promise((resolve, reject) => {
    if (sayi % 2 === 0) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}

// asenkronCiftSayi(2)
//   .then((result) => {
//     console.log(result); // true
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// asenkronCiftSayi(3)
//   .then((result) => {
//     console.log(result); // false
//   })
//   .catch((error) => {
//     console.error(error);
//   });

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
