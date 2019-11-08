export const signup = user => (
    $.ajax({
        method: "POST",
        url: `/v1/users`,
        data: { user }
    })
);

export const login = user => (
    $.ajax({
        method: "POST",
        url: `/v1/session`,
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: `/v1/session`
    })
)