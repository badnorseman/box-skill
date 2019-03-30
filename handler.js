"use strict";
const {
  FilesReader,
  SkillsWriter
} = require("./skills-kit-library/skills-kit-2.0");
const Http = require("Http");

/**
 * Invoke
 * @param {Object} event       event that invoked box skill
 * @param {string} context     not used
 * @param {Function} callback  called if box skill processed successful
 * @return {Object}            returned data
 */
exports.invoke = async (event = {}, context, callback) => {
  console.debug(`Skill invoked by event: ${JSON.stringify(event)}`); // eslint-disable-line no-console

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
  console.debug(`fileContext: ${JSON.stringify(fileContext)}`); // eslint-disable-line no-console
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
    const topics = [{ text: "Box Skill" }]; // Remove when implemented successfully
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
  console.debug(`Http invoked by event: ${JSON.stringify(event)}`); // eslint-disable-line no-console

  let h = new Http(event);
  return await h.get();
};
