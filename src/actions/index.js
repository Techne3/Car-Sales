
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feature => {
    console.log("Add Feature");
    return { type: ADD_FEATURE, payload: feature };
};


export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeItem = feature => {
    console.log("Remove Feature");
    return { type: REMOVE_FEATURE, payload: feature };
};