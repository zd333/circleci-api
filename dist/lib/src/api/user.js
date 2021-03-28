"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
var types_1 = require("../types");
var client_1 = require("../client");
/**
 * Get authenticated user
 * @see https://circleci.com/docs/api/v1-reference/#getting-started
 * @example GET - /me
 */
function getMe(token, _a, customHeaders) {
    var circleHost = (_a === void 0 ? {} : _a).circleHost;
    return client_1.client(token, circleHost, customHeaders).get(types_1.API_ME);
}
exports.getMe = getMe;
//# sourceMappingURL=user.js.map