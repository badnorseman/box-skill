const Model = require("../Model");

describe("Model", () => {
  test.skip("gives data when processing succeeds", async () => {
    const imageURL = "https://picsum.photos/4434/3729?image=22";
    const m = new Model(imageURL);
    const data = await m.get();
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
  test("gives data when processing succeeds", async () => {
    const imageURL = "https://picsum.photos/4434/3729?image=22";
    const m = new Model(imageURL);
    const data = await m.getImage();
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
  test.skip("gives data when processing succeeds", async () => {
    const imageURL = "https://picsum.photos/4434/3729?image=22";
    const m = new Model(imageURL);
    const data = await m.post();
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
});
