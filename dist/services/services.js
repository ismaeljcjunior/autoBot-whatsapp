var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/services/services.ts
var services_exports = {};
__export(services_exports, {
  default: () => services_default
});
module.exports = __toCommonJS(services_exports);
var import_venom_bot = require("venom-bot");
var Sender = class {
  // Add definite assignment assertion
  constructor() {
    this.initialize();
  }
  async sendText(to, body) {
    this.client.sendText(to, body);
  }
  initialize() {
    const qdCode = (base64Qrimg) => {
    };
    const status = (statusSession) => {
    };
    const start = (client) => {
      this.client = client;
      this.sendText("5562982329395@c.us", " hello word");
    };
    (0, import_venom_bot.create)("ws-sender", qdCode, status).then((client) => start(client)).catch((error) => console.error(error));
  }
};
var services_default = Sender;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
