const {
  FilesReader,
  SkillsWriter
} = require("skills-kit-library/skills-kit-2.0");

class Boxskill {
  constructor(event, context, callback) {
    this.event = event;
    this.context = context;
    this.callback = callback;
  }

  /**
   * Invoke
   * @param {Object} event       event that triggers box skill
   * @param {string} context     not used
   * @param {Function} callback  called if box skill processed successful
   * @return {Object}            data
   */
  async invoke() {
    const filesReader = new FilesReader(this.event);
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
      this.callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: "Processed successfully"
        })
      });
    }
  }
}

module.exports = Boxskill;
