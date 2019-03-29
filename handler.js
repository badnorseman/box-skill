"use strict";
const Boxskill = require("./Boxskill");
const Http = require("Http");

exports.invoke = (event = {}, context, callback) => {
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

  let b = new Boxskill(body, context, callback);
  return b.invoke();
};

exports.http = async event => {
  let h = new Http(event);
  return await h.get();
};
