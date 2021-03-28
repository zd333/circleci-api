"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserAgentHeader = exports.createJsonHeader = exports.getGitType = exports.queryParams = exports.validateVCSRequest = void 0;
var types_1 = require("./types");
var package_json_1 = require("../package.json");
/**
 * Validate a Request object for endpoints that require
 * certain information
 * @param token - CircleCI API token
 * @param type - Git type
 * @param owner - Repository owner
 * @param repo - Target repository
 * @throws If options passed in are not valid
 */
function validateVCSRequest(_a) {
    var token = _a.token, _b = _a.vcs, type = _b.type, owner = _b.owner, repo = _b.repo;
    if (!token) {
        throw new Error("CircleCiApi - No token was provided");
    }
    var missing = [];
    if (!type) {
        missing.push("type");
    }
    if (!owner) {
        missing.push("owner");
    }
    if (!repo) {
        missing.push("repo");
    }
    if (missing.length) {
        throw new Error("CircleCiApi - Missing options " + missing);
    }
}
exports.validateVCSRequest = validateVCSRequest;
/**
 * Take a Options object and map it to query parameters
 * @example { limit: 5, branch: "develop" } => /builds?branch=develop&limit=5
 * @param opts - Query param object, branch is defaulted to master
 * @param ignoreBranch - Ignore the 'branch' option
 * @returns A string containing url encoded query params
 */
function queryParams(opts) {
    if (opts === void 0) { opts = {}; }
    var params = Object.keys(opts)
        .filter(function (key) { return typeof opts[key] !== "undefined" && opts[key] !== null; })
        .reduce(function (prev, key) { return __spreadArrays(prev, [
        key + "=" + encodeURIComponent(opts[key]),
    ]); }, [])
        .join("&");
    return params.length ? "?" + params : "";
}
exports.queryParams = queryParams;
/**
 * Takes a string and will return the matching type, or
 * default to GitType.GITHUB
 * @default GitType.GITHUB
 * @see GitType
 * @param type - Raw string type
 */
function getGitType(type) {
    var formatted = type.trim().replace(/ /g, "").toLowerCase();
    if (formatted === types_1.GitType.BITBUCKET) {
        return formatted;
    }
    return types_1.GitType.GITHUB;
}
exports.getGitType = getGitType;
/**
 * Create JSON headers for Axios
 */
function createJsonHeader() {
    return {
        headers: {
            "Content-Type": "application/json",
            Accepts: "application/json",
        },
    };
}
exports.createJsonHeader = createJsonHeader;
/**
 * Modify an existing AxiosRequestConfig object with the user-agent set to
 * the current version of the library
 */
function addUserAgentHeader(_a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.headers, headers = _b === void 0 ? {} : _b, config = __rest(_a, ["headers"]);
    return __assign(__assign({}, config), { headers: __assign(__assign({}, headers), { "User-Agent": package_json_1.organization + "/" + package_json_1.name + " " + package_json_1.version }) });
}
exports.addUserAgentHeader = addUserAgentHeader;
//# sourceMappingURL=util.js.map