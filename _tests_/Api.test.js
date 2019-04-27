const Api = require("../Api");

describe("Api", () => {
  describe("testUpload", () => {
    describe("tests photo from picsum.photos", () => {
      test("gives filename when processing succeeds", async () => {
        jest.setTimeout(30000);
        const api = new Api();
        const fileURL = "https://picsum.photos/4434/3729?image=22";
        const results = await api.readFileAndtestUpload(fileURL);
        expect(JSON.parse(results.body)).toEqual({
          filename: "3729?image=22"
        });
      });
    });
    describe("tests file from box.com", () => {
      test("gives filename when processing succeeds", async () => {
        jest.setTimeout(30000);
        const api = new Api();
        const fileURL =
          "https://api.box.com/2.0/files/445580121558/content?access_token=1!UCGOE4L5gnrqegzQkno7hTjcVnmJvwkpCjvKuGVhy44GVQl5ymqOpB6I4Vj8A0tpzRkAupF53bsbbF52cFwtgvwFbe8HUpOsvDnFvVr93MAHAiG9keXzJczPngJjp18Pdj4Rc4Egeb41eGWPeA8efjlnenz-Eqs-QSkKq1YaN7feqsB7y4G5mKpWCQVszvcE_E0yEJ2JQtngM9SDQsTBE95vdCM39xnWN6o2vxE6LEOTztN_ZVKogtSzb3h-C6bYUofvO4Mvs2kpBJPvBOfp6Iy5S0GNWdsfAtphkRFtRERJikpbXTiF-qvlJ2C0Px3wckSxEoq5HUUhPKCSFZiZq6fb5gC7TIROpdRgeaMb6nNyxFw3b4p2u9fOFakyfuJ26ax9Piswh_L3L-rxjTs_ArLYCCAMiB5uarEFrDFlAmu_uGTAax0.";
        const results = await api.readFileAndtestUpload(fileURL);
        expect(JSON.parse(results.body)).toEqual({
          filename:
            "content?access_token=1!UCGOE4L5gnrqegzQkno7hTjcVnmJvwkpCjvKuGVhy44GVQl5ymqOpB6I4Vj8A0tpzRkAupF53bsbbF52cFwtgvwFbe8HUpOsvDnFvVr93MAHAiG9keXzJczPngJjp18Pdj4Rc4Egeb41eGWPeA8efjlnenz-Eqs-QSkKq1YaN7feqsB7y4G5mKpWCQVszvcE_E0yEJ2JQtngM9SDQsTBE95vdCM39xnWN6o2vxE6LEOTztN_ZVKogtSzb3h-C6bYUofvO4Mvs2kpBJPvBOfp6Iy5S0GNWdsfAtphkRFtRERJikpbXTiF-qvlJ2C0Px3wckSxEoq5HUUhPKCSFZiZq6fb5gC7TIROpdRgeaMb6nNyxFw3b4p2u9fOFakyfuJ26ax9Piswh_L3L-rxjTs_ArLYCCAMiB5uarEFrDFlAmu_uGTAax0."
        });
      });
    });
  });
  describe("readAndClassifyFile", () => {
    describe("uploads photo from picsum.photos", () => {
      test("gives data when processing succeeds", async () => {
        jest.setTimeout(30000);
        const api = new Api();
        const fileURL = "https://picsum.photos/4434/3729?image=22";
        const results = await api.readAndClassifyFile(fileURL);
        expect(JSON.parse(results.body)).toHaveProperty(
          "message",
          "You seem surprised, "
        );
      });
    });
    describe("uploads file from box.com", () => {
      test("gives data when processing succeeds", async () => {
        jest.setTimeout(30000);
        const api = new Api();
        const fileURL =
          "https://api.box.com/2.0/files/447617885038/content?access_token=1!C7Tqpu7mOG6kNaIepjm_7gcN7pq2QHF6wCtTY85ZsPqopzQlvvuCa6GtsiNFkM0Gyvx5Onjpo9B9Qa9OjZUXqeaUjLm9rkGCwBRjJd10tEYvkeiYimyQr8IUgjO9c2nEEhJMG8yi6XiFCkg-sllAKoZxBdwbHGOxNimfvM-JJGcngc5VsCoO26sIbeqviuWL5QwGVBecmwrFgNCoUKGWc0eyKMQTqS1XHygu7YNhnIo3wZeXsh3w4SkZkPFnvdKkdD1Y-nsJZt_O7GyB5CQ0xmmOAMv9U3RnCGA42SyrQaugF-CxeybgrQutI9hk0R2X0kmpw4sRKI0m03pZ0yYZxiT4sJfiyzns2120eCfFIraXMFJFCZJAu8wi2S8NsxL0l75sgDA4RZZjmKOX2KzPjlERdIQYepW_fpHFhtfcIaUFJSdpJho.";
        const results = await api.readAndClassifyFile(fileURL);
        expect(JSON.parse(results.body)).toHaveProperty(
          "message",
          "You seem happy, "
        );
      });
    });
  });
});
