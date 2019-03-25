const { http, search } = require("../index");

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

describe("http", () => {
  test.skip("gives message for processing succeeds", () => {
    expect.assertions(1);
    return http().then(data =>
      expect(data).toEqual({
        message: "Processed successfully"
      })
    );
  });
});

describe("search", () => {
  test("gives bad request when event is missing", async () => {
    expect.assertions(1);
    const data = await search();
    expect(JSON.parse(data.body)).toEqual({ message: "Bad request" });
  });

  test.skip("gives bad request when event body is missing", async () => {
    expect.assertions(1);
    const data = await search({});
    expect(JSON.parse(data.body)).toEqual({ message: "Bad request" });
  });

  test.skip("gives error message when processing fails", async () => {
    expect.assertions(1);
    const body = JSON.stringify(eventBody);
    const data = await search({ body });
    expect(JSON.parse(data.body)).toEqual({
      message: "Processing failed for file"
    });
  });

  test.skip("gives data when processing succeeds", async () => {
    expect.assertions(1);
    const body = JSON.stringify(eventBody);
    const data = await search({ body });
    expect(JSON.parse(data.body)).toEqual({
      message: "Processed successfully"
    });
  });
});
