"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildAction = exports.createVcsUrl = exports.GitType = exports.API_USER = exports.API_RECENT_BUILDS = exports.API_ALL_PROJECTS = exports.API_PROJECT = exports.API_ME = exports.API_BASE = void 0;
exports.API_BASE = "https://circleci.com/api/v1.1";
exports.API_ME = "/me";
exports.API_PROJECT = "/project";
exports.API_ALL_PROJECTS = "/projects";
exports.API_RECENT_BUILDS = "/recent-builds";
exports.API_USER = "/user";
/**
 * @description Currently supported VCS types
 * @see GitInfo
 */
var GitType;
(function (GitType) {
    GitType["GITHUB"] = "github";
    GitType["BITBUCKET"] = "bitbucket";
})(GitType = exports.GitType || (exports.GitType = {}));
/**
 * Create a base project url
 * @param type - Type of version control, default "github"
 * @param owner - Owner of the repository
 * @param repo - Target repository
 */
function createVcsUrl(_a) {
    var _b = _a.type, type = _b === void 0 ? GitType.GITHUB : _b, owner = _a.owner, repo = _a.repo;
    return exports.API_PROJECT + "/" + type + "/" + owner + "/" + repo;
}
exports.createVcsUrl = createVcsUrl;
var BuildAction;
(function (BuildAction) {
    BuildAction["RETRY"] = "retry";
    BuildAction["CANCEL"] = "cancel";
})(BuildAction = exports.BuildAction || (exports.BuildAction = {}));
//# sourceMappingURL=lib.js.map