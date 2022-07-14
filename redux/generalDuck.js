const dataInitial = {
    array: [],
    theme: false
}

const OBTENER_DATA_GENERAL = 'OBTENER_DATA_GENERAL'
const CHANGUE_THEME = 'CHANGUE_THEME'

export default function generalData(state = dataInitial, action) {
    switch (action.type) {
        case OBTENER_DATA_GENERAL:
            return { ...state, array: action.payload }
        case CHANGUE_THEME:
            return { ...state, theme: action.payload }
        default:
            return state
    }
}

export const generalDataAction = (payload) => (dispatch, getState) => {
    dispatch({
        type: OBTENER_DATA_GENERAL,
        payload: payload
    })
}

export const changueThemeAction = (payload) => (dispatch, getState) => {
    dispatch({
        type: CHANGUE_THEME,
        payload: payload
    })
}