const TOKEN = process.env.OH_TOKEN;
const OH_URL = process.env.OH_URL || "https://127.0.0.1:443";
const PORT = parseInt(process.env.OH_BRIDGE_PORT || "41234");
const TRANSITION_DURATION_DIVIDER = parseInt(process.env.OH_DURATION_DIVIDER || "1");
const CONFIG_FILE = process.env.CONFIG_FILE || "./config.js";

module.exports = { TOKEN, OH_URL, PORT, TRANSITION_DURATION_DIVIDER, CONFIG_FILE };
