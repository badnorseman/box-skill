"use strict";
const Http = require("Http");

exports.invoke = async (event = {}, context, callback) => {
  console.debug(`Skill triggered by event: ${JSON.stringify(event)}`); // eslint-disable-line no-console

  // Make sure that event has body component
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Bad request"
      })
    };
  }

  const { body } = event;
  const filesReader = new FilesReader(body);
  const fileContext = filesReader.getFileContext();
  const skillsWriter = new SkillsWriter(fileContext);

  await skillsWriter.saveProcessingCard();

  try {
    /**
     * TODO:
     * Replace mock with call to real API
     * Read file from Box by passing fileContext.fileDownloadURL
     * Save data into topics
     */
    const cards = [];
    const topics = JSON.stringify([{ text: "Box Skill" }]); // Remove when implemented successfully
    cards.push(skillsWriter.createTopicsCard(topics));

    await skillsWriter.saveDataCards(cards);
  } catch (error) {
    console.error(
      `Processing failed for file: ${fileContext.fileId} with error: ${
        error.message
      }`
    ); // eslint-disable-line no-console
  } finally {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: "Processed successfully"
      })
    });
  }
};

exports.http = async event => {
  let h = new Http(event);
  return await h.get();
};