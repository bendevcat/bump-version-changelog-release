function runInWorkspace(command, args) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, { cwd: workspace });
      let isDone = false;
      const errorMessages = [];
      child.on('error', (error) => {
        if (!isDone) {
          isDone = true;
          reject(error);
        }
      });
      child.stderr.on('data', (chunk) => errorMessages.push(chunk));
      child.on('exit', (code) => {
        if (!isDone) {
          if (code === 0) {
            resolve();
          } else {
            reject(`${errorMessages.join('')}${EOL}${command} exited with code ${code}`);
          }
        }
      });
    });
    //return execa(command, args, { cwd: workspace });
}

module.exports = runInWorkspace;