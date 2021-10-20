function exitSuccess(message) {
    console.info(`✔  success   ${message}`);
    process.exit(0);
}

module.exports = exitSuccess;