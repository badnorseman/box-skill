const Model = require("../Model");

describe("Model", () => {
  test.skip("gives data when processing succeeds", async () => {
    const m = new Model();
    const fileURL = "https://picsum.photos/4434/3729?image=22";
    const data = await m.testupload(fileURL);
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
  test.skip("gives data when processing succeeds", async () => {
    const m = new Model();
    const fileURL = "https://picsum.photos/4434/3729?image=22";
    const data = await m.uploadfile(fileURL);
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
  test("gives data when processing succeeds", async () => {
    const m = new Model();
    const fileURL = "/images/coolguy.jpg";
    const data = await m.readFile(fileURL);
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
});
