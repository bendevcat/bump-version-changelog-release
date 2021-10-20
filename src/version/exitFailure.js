function exitFailure(message) {
    logError(message);
    process.exit(1);
}

module.exports = exitFailure;