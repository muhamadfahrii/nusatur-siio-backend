const moment = require("moment");

const datetime = () => moment(new Date()).format("YYYY-MM-D H:mm:ss");

module.exports = { datetime };
