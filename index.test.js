const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  test("[3] verilen propu trimliyor", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar ", baz: " baz" };
    const actual = utils.verileniTrimle(input, "foo");
    expect(actual).toEqual(expected);
  });

  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "  foo ", bar: "bar ", baz: "baz" };
    const actual = utils.verileniTrimle(input, "baz");
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    const input = [
      { tamsayi: 1 },
      { tamsayi: 2 },
      { tamsayi: 3 },
      { tamsayi: 2 },
    ];
    const actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toEqual({ tamsayi: 3 });
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    const actual = sayici.asagiSay();
    expect(actual).toEqual(2);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    const actual = sayici.asagiSay();
    expect(actual).toEqual(1);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    const actual = sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    expect(actual).toEqual(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("yaz");
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 40; i++) {
      mevsimler.sonraki();
    }
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    const actual = focus.sur(10);
    expect(actual).toEqual(10);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(10);
    const actual = focus.benzin;
    expect(actual).toEqual(19);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.benzinal(10);
    focus.sur(10);
    const actual = focus.odometer;
    expect(actual).toEqual(10);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.benzinal(100);
    const actual = focus.benzin;
    expect(actual).toEqual(20);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", () => {
    return utils.asenkronCiftSayi(20).then((actual) => {
      expect(actual).toEqual(true);
    });
  });
  test("[20] tek sayı verilirse false çözümlüyor", () => {
    return utils.asenkronCiftSayi(21).then((actual) => {
      expect(actual).toEqual(false);
    });
  });
});
