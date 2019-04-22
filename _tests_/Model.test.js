const Model = require("../Model");

describe("Model class", () => {
  describe("testUpload method", () => {
    test("gives filename when processing succeeds", async () => {
      jest.setTimeout(30000);
      const m = new Model();
      const filename = "3729?image=22";
      const fileURL = "https://picsum.photos/4434/3729?image=22";
      const data = await m.testUpload(fileURL);
      expect(JSON.parse(data.body)).toEqual({
        filename
      });
    });
  });
  describe("uploadFile method", () => {
    test("gives data when processing succeeds", async () => {
      jest.setTimeout(30000);
      const m = new Model();
      const filename = "3729?image=22";
      const fileURL = "https://picsum.photos/4434/3729?image=22";
      const data = await m.uploadFile(fileURL);
      expect(JSON.parse(data.body)).toEqual({
        filename
      });
    });
  });
});
