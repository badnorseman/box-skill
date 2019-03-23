"use strict";

const { getMockTopics } = require("../getMockTopics");

describe("getMockTopics", () => {
  test("gives mock topics for testing", () => {
    const data = getMockTopics();
    expect(JSON.parse(data)).toEqual([{ text: "Box Skill" }]);
  });
});
