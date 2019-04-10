const Http = require("../Http");

describe("Http", () => {
  test("gives message for processing succeeds", async () => {
    const h = new Http();
    const data = await h.get();
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
});
