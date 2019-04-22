const Model = require("../Model");
const FILEPATH = "/images/";

describe("Model", () => {
  test.skip("gives data when processing succeeds", async () => {
    const m = new Model();
    const fileURL = "https://picsum.photos/4434/3729?image=22";
    const data = await m.testupload(fileURL);
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
  test("gives data when processing succeeds", async () => {
    const m = new Model();
    const filename = "coolguy.jpg";
    const data = await m.testupload(FILEPATH + filename);
    expect(JSON.parse(data.body)).toEqual({
      filename: filename
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
});
