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
    //act
    let actual = sayici.asagiSay();
    //assert
    expect(actual).toBe(3);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    //act
    sayici.asagiSay();
    let actual = sayici.asagiSay();
    //assert
    expect(actual).toBe(2);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    //act
    for (let i = 0; i < 999; i++) {
      sayici.asagiSay();
    }
    let actual = sayici.asagiSay();
    //assert
    expect(actual).toBe(0);
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
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toEqual("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 39; i++) {
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
    focus.sur(100);
    focus.sur(100);
    focus.sur(100);

    expect(focus.depo).toEqual(10);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.benzinal(10);
    focus.sur(10);
    const actual = focus.odometer;
    expect(actual).toEqual(10);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.sur(600); //600
    focus.benzinal(50);
    //act
    let actual = focus.sur(600);
    //assert
    expect(actual).toBe(1200);
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
