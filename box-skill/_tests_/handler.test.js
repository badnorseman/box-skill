"use strict";

const { handler } = require("../handler");

describe("handler", () => {
  test("gives bad request when event is missing", async () => {
    expect.assertions(1);
    const data = await handler();
    expect(JSON.parse(data.body)).toEqual({ message: "Bad request" });
  });

  test("gives bad request when event body is missing", async () => {
    expect.assertions(1);
    const event = {};
    const data = await handler(event);
    expect(JSON.parse(data.body)).toEqual({ message: "Bad request" });
  });

  test.skip("gives error message when processing fails", async () => {
    expect.assertions(1);
    const event = { body: {} };
    const data = await handler(event);
    expect(JSON.parse(data.body)).toEqual({
      message: "Skill processing failed for file"
    });
  });

  test.skip("gives data when processing succeeds", async () => {
    expect.assertions(1);
    const event = { body: { id: 1 } };
    const data = await handler(event);
    expect(JSON.parse(data.body)).toEqual({
      message: "Skill processed successfully"
    });
  });
});
