import t from "./types"

export function insertUser(payload) {
    return { type: t.AUTH_USER, payload:payload }
};