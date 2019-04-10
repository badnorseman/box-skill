const Model = require("../Model");

describe("Model", () => {
  test("gives data when processing succeeds", async () => {
    const fileName = "sampleFileName.mp3";
    const m = new Model();
    const data = await m.get();
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
});
