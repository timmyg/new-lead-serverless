// handler.js
"use strict";
const Hubspot = require("hubspot");
const hubspot = new Hubspot({ apiKey: process.env.hubspotApiKey }); // more on this in step 3

module.exports.hello = async event => {
  // get email from http body
  const email = JSON.parse(event.body).email;
  // create contact in Hubspot
  const newContact = {
    properties: [
      { property: "email", value: email },
      { property: "source", value: "landing page" }
    ]
  };
  const contact = await hubspot.contacts.create(newContact);
  return {
    statusCode: 200,
    body: JSON.stringify({
      contact
    })
  };
};
