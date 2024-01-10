"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMemberCopId = void 0;
function validateMemberCopId(copId) {
    return /COP\d{3}[A-Z][A-Z]/.test(copId);
}
exports.validateMemberCopId = validateMemberCopId;
