function logError(error) {
    console.error(`✖  fatal     ${error.stack || error}`);
}

module.exports = logError;