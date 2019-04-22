"use strict";
require("dotenv").config();
const {
  FilesReader,
  SkillsWriter
} = require("./skills-kit-library/skills-kit-2.0");
const Model = require("./Model");

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
  const skillsWriter = new SkillsWriter(fileContext);

  await skillsWriter.saveProcessingCard();

  try {
    const cards = [];
    const m = new Model();
    const topics = await m.uploadFile(fileContext.fileDownloadURL);
    console.debug(`topics: ${JSON.stringify(topics)}`); // Remove when implemented successfully
    topics = [{ text: fileContext.fileType }]; // eslint-disable-line no-console
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
