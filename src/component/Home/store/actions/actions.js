import t from "./types"

export function addItem(payload) {
    console.log("payload..............",payload)
    return { type: t.ADD_ITEM, payload:payload }
};

export function removeItem(payload,index) {
    let listArray=payload.filter((_, j) => j !== index)
    return { type: t.REMOVE_ITEM, payload:listArray }
};

export function updateItem(payload) {
    console.log("payload..............",payload)
    return { type: t.UPDATE_ITEM, payload:payload }
};