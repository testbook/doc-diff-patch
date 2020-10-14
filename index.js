const structDiff = require('./dependencies/structDiff');
const structPatch = require('./dependencies/structPatch');

/**
 * Summary. Function to find the difference between 2 objects
 *
 * @param {Object}   originalStruct   Original object.
 * @param {Object}   changedStruct    Object with changed values.
 * @param {Object}   [filter]         Object which defines which keys diff is required.
 *
 * @return {Object} Diff of originalStruct and changedStruct.
 */
exports.structDiff = function(originalStruct, changedStruct, filter) {
    const diff = new structDiff(originalStruct, changedStruct, filter);
    return diff.getStructDiff();
};

/**
 * Summary. Function to get the original object from a already existing diff
 *
 * @param {Object}   changedStruct   Recent version of the object.
 * @param {Object}   changes         Diff between the current version and previous version.
 *
 * @return {{val: Object, err: string}} The previous version and error if any.
 */
exports.patchDiff = function(changedStruct, changes) {
    const diff = new structPatch(changedStruct, changes);
    return diff.getStructPatch();
};