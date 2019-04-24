const readFile = require("../readFile");
const readLocalFile = require("../readLocalFile");
const uploadFile = require("../uploadFile");

describe("uploadFile", () => {
  describe("tests file from local folder", () => {
    test("gives filename when processing succeeds", async () => {
      jest.setTimeout(30000);
      const filename = "coolguy.jpg";
      const file = await readLocalFile(filename);
      const data = await uploadFile(file);
      console.debug(`data: ${JSON.stringify(data)}`); // Remove when implemented successfully
      expect(JSON.parse(data.body)).toEqual({
        filename
      });
    });
  });
  describe("uploads photo from picsum.photos", () => {
    test.skip("gives data when processing succeeds", async () => {
      jest.setTimeout(30000);
      const fileURL = "https://picsum.photos/4434/3729?image=22";
      const file = await readFile(fileURL);
      const data = await uploadFile(file);
      expect(data.body).toBe("");
    });
  });
  describe("uploads file from box.com", () => {
    test.skip("gives data when processing succeeds", async () => {
      jest.setTimeout(30000);
      const fileURL =
        "https://api.box.com/2.0/files/445580121558/content?access_token=1!UCGOE4L5gnrqegzQkno7hTjcVnmJvwkpCjvKuGVhy44GVQl5ymqOpB6I4Vj8A0tpzRkAupF53bsbbF52cFwtgvwFbe8HUpOsvDnFvVr93MAHAiG9keXzJczPngJjp18Pdj4Rc4Egeb41eGWPeA8efjlnenz-Eqs-QSkKq1YaN7feqsB7y4G5mKpWCQVszvcE_E0yEJ2JQtngM9SDQsTBE95vdCM39xnWN6o2vxE6LEOTztN_ZVKogtSzb3h-C6bYUofvO4Mvs2kpBJPvBOfp6Iy5S0GNWdsfAtphkRFtRERJikpbXTiF-qvlJ2C0Px3wckSxEoq5HUUhPKCSFZiZq6fb5gC7TIROpdRgeaMb6nNyxFw3b4p2u9fOFakyfuJ26ax9Piswh_L3L-rxjTs_ArLYCCAMiB5uarEFrDFlAmu_uGTAax0.";
      const file = await readFile(fileURL);
      const data = await uploadFile(file);
      expect(data.body).toBe({});
    });
  });
});
