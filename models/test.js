module.exports.checkUniqueName = (uniqueName) => {
    return /^[A-Z0-9\-\._ ]*$/.test(uniqueName);
};
