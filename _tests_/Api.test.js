const Api = require("../Api");

describe("Api", () => {
  describe("testUpload", () => {
    describe("tests file from local folder", () => {
      test("gives filename when processing succeeds", async () => {
        jest.setTimeout(30000);
        const api = new Api();
        const filename = "coolguy.jpg";
        const file = await api.readLocalFile(filename);
        const data = await api.testUpload(file);
        expect(JSON.parse(data.body)).toEqual({
          filename
        });
      });
    });
    describe("tests photo from picsum.photos", () => {
      test("gives filename when processing succeeds", async () => {
        jest.setTimeout(30000);
        const api = new Api();
        const url = "https://picsum.photos/4434/3729?image=22";
        const file = await api.readFile(url);
        const data = await api.testUpload(file);
        expect(JSON.parse(data.body)).toEqual({
          filename: "3729?image=22"
        });
      });
    });
    describe("tests file from box.com", () => {
      test("gives filename when processing succeeds", async () => {
        jest.setTimeout(30000);
        const api = new Api();
        const url =
          "https://api.box.com/2.0/files/445580121558/content?access_token=1!UCGOE4L5gnrqegzQkno7hTjcVnmJvwkpCjvKuGVhy44GVQl5ymqOpB6I4Vj8A0tpzRkAupF53bsbbF52cFwtgvwFbe8HUpOsvDnFvVr93MAHAiG9keXzJczPngJjp18Pdj4Rc4Egeb41eGWPeA8efjlnenz-Eqs-QSkKq1YaN7feqsB7y4G5mKpWCQVszvcE_E0yEJ2JQtngM9SDQsTBE95vdCM39xnWN6o2vxE6LEOTztN_ZVKogtSzb3h-C6bYUofvO4Mvs2kpBJPvBOfp6Iy5S0GNWdsfAtphkRFtRERJikpbXTiF-qvlJ2C0Px3wckSxEoq5HUUhPKCSFZiZq6fb5gC7TIROpdRgeaMb6nNyxFw3b4p2u9fOFakyfuJ26ax9Piswh_L3L-rxjTs_ArLYCCAMiB5uarEFrDFlAmu_uGTAax0.";
        const file = await api.readFile(url);
        const data = await api.testUpload(file);
        expect(JSON.parse(data.body)).toEqual({
          filename:
            "content?access_token=1!UCGOE4L5gnrqegzQkno7hTjcVnmJvwkpCjvKuGVhy44GVQl5ymqOpB6I4Vj8A0tpzRkAupF53bsbbF52cFwtgvwFbe8HUpOsvDnFvVr93MAHAiG9keXzJczPngJjp18Pdj4Rc4Egeb41eGWPeA8efjlnenz-Eqs-QSkKq1YaN7feqsB7y4G5mKpWCQVszvcE_E0yEJ2JQtngM9SDQsTBE95vdCM39xnWN6o2vxE6LEOTztN_ZVKogtSzb3h-C6bYUofvO4Mvs2kpBJPvBOfp6Iy5S0GNWdsfAtphkRFtRERJikpbXTiF-qvlJ2C0Px3wckSxEoq5HUUhPKCSFZiZq6fb5gC7TIROpdRgeaMb6nNyxFw3b4p2u9fOFakyfuJ26ax9Piswh_L3L-rxjTs_ArLYCCAMiB5uarEFrDFlAmu_uGTAax0."
        });
      });
    });
  });
});
