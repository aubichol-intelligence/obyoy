import {
    REQUEST_FETCH_LEADERBOARD,
    SUCCESS_FETCH_LEADERBOARD,
    FAILURE_FETCH_LEADERBOARD,
    // REQUEST_FETCH_PROFILE,
    // SUCCESS_FETCH_PROFILE,
    // FAILURE_FETCH_PROFILE,
    REQUEST_FETCH_NEWLINE,
    SUCCESS_FETCH_NEWLINE,
    FAILURE_FETCH_NEWLINE,
    REQUEST_SUBMIT_TRANSLATEDLINE,
    SUCCESS_SUBMIT_TRANSLATEDLINE,
    FAILURE_SUBMIT_TRANSLATEDLINE,
    // REQUEST_LOGOUT,
    // SUCCESS_LOGOUT,
    // FAILURE_LOGOUT,
    // UPDATE_SESSION_EXPIRY,
} from "../Constant/home";

export const requestLeaderboard = () => ({
    type: REQUEST_FETCH_LEADERBOARD,
})
export const leaderboardSuccess = () => ({
    type: SUCCESS_FETCH_LEADERBOARD,
})
export const leaderboardFailure = () => ({
    type: FAILURE_FETCH_LEADERBOARD,
})
// export const requestFetchProfile = (user_id) => ({
//     type: REQUEST_FETCH_PROFILE,
//     payload: user_id,
// })
export const requestFetchNewline = (user_id) => ({
    type: REQUEST_FETCH_NEWLINE,
    payload: user_id,
})
export const fetchNewlineSuccess = () => ({
    type: SUCCESS_FETCH_NEWLINE,
})
export const fetchNewlineFailure = () => ({
    type: FAILURE_FETCH_NEWLINE,
})

export const requestSubmitTranslatedline = (line_id, input) => ({
    type: REQUEST_SUBMIT_TRANSLATEDLINE,
    payload: { line_id, input },
})
export const submitTranslatedlineSuccess = () => ({
    type: SUCCESS_SUBMIT_TRANSLATEDLINE,
})
export const submitTranslatedlineFailure = () => ({
    type: FAILURE_SUBMIT_TRANSLATEDLINE,
})
// export const logout = () => ({
//     type: SUCCESS_LOGOUT,
// })
// export const updateSessionExpiry = (nextDay) => ({
//     type: UPDATE_SESSION_EXPIRY,
//     payload: nextDay,
// })