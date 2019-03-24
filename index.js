"use strict";
const {
  FilesReader,
  SkillsWriter
} = require("./skills-kit-library/skills-kit-2.0.js");

/**
 * Http call returns status code 200
 * @return {Object}  status code and message
 */
exports.http = (request, response) => {
  response.status(200).send("Skill processed successfully");
};

/**
 * Search by image file to retrieve metadata
 * @param {Object} event       event that triggers search
 * @param {string} context     not used
 * @param {Function} callback  called if skill processed successful
 * @return {Object}            metadata card
 */
// exports.search = async (event = {}, context, callback) => {
//   console.debug(`Skill triggered by event: ${JSON.stringify(event)}`); // eslint-disable-line no-console

//   // Make sure that event has body component
//   if (!event.body) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify({
//         message: "Bad request"
//       })
//     };
//   }

//   const { body } = event;
//   const filesReader = new FilesReader(body);
//   const fileContext = filesReader.getFileContext();
//   const skillsWriter = new SkillsWriter(fileContext);

//   await skillsWriter.saveProcessingCard();

//   try {
//     /**
//      * TODO:
//      * Replace mock with call to real API
//      * Read file from Box by passing fileContext.fileDownloadURL
//      * Save metadata into topics
//      */
//     const cards = [];
//     const topics = JSON.stringify([{ text: "Box Skill" }]); // Remove when implemented successfully
//     cards.push(skillsWriter.createTopicsCard(topics));

//     await skillsWriter.saveDataCards(cards);
//   } catch (error) {
//     console.error(
//       `Skill processing failed for file: ${fileContext.fileId} with error: ${
//         error.message
//       }`
//     ); // eslint-disable-line no-console
//   } finally {
//     callback(null, {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Skill processed successfully"
//       })
//     });
//   }
// };
