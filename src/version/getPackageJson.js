function getPackageJson() {
    const pathToPackage = path.join(workspace, 'package.json');
    if (!existsSync(pathToPackage)) throw new Error("package.json could not be found in your project's root.");
    return require(pathToPackage);
}

module.exports = getPackageJson;