const { boxSkillFunction } = require("../handler");

const fileId = 34426356747;
const fileName = "sampleFileName.mp3";
const fileSize = 4200656;
const boxRequestId = "50067dc9-b656-4712-a8fa-7b3dd53848cc_1591214556";
const skillId = 75;
const readToken = "readtoken12345";
const writeToken = "writetoken12345";

const eventBody = {
  id: boxRequestId,
  skill: {
    id: skillId
  },
  source: {
    id: fileId,
    name: fileName,
    size: fileSize
  },
  token: {
    read: {
      access_token: readToken
    },
    write: {
      access_token: writeToken
    }
  }
};

describe("handler", () => {
  test("gives bad request when event is missing", async () => {
    expect.assertions(1);
    const data = await boxSkillFunction();
    expect(JSON.parse(data.body)).toEqual({ message: "Bad request" });
  });

  test("gives bad request when event body is missing", async () => {
    expect.assertions(1);
    const data = await boxSkillFunction({});
    expect(JSON.parse(data.body)).toEqual({ message: "Bad request" });
  });

  test.skip("gives error message when processing fails", async () => {
    expect.assertions(1);
    const body = JSON.stringify(eventBody);
    const data = await boxSkillFunction({ body });
    expect(JSON.parse(data.body)).toEqual({
      message: "Skill processing failed for file"
    });
  });

  test("gives data when processing succeeds", async () => {
    expect.assertions(1);
    const body = JSON.stringify(eventBody);
    const data = await boxSkillFunction({ body });
    expect(JSON.parse(data.body)).toEqual({
      message: "Skill processed successfully"
    });
  });
});
