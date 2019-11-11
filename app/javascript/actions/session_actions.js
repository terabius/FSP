import * as SessionAPIUtil from "../util/session_v1_util";

// action types
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// action creators
const receiveCurrentUser = payload => ({
    type: RECEIVE_CURRENT_USER,
    payload
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

// thunk action creators
export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
    .then(
        payload => (dispatch(receiveCurrentUser(payload))),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);

export const login = user => dispatch => (
    SessionAPIUtil.login(user)
    .then(
        payload => (dispatch(receiveCurrentUser(payload))),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
    .then(
        () => dispatch(logoutCurrentUser())
    )
);

