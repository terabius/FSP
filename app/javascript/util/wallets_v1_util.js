export const addCoin = (symbol) => (
    $.ajax({
        type: "POST",
        url: '/v1/coins',
        data: symbol
        // success: success,
        // dataType: json
    })
);

export const removeCoin = (id) => (
    $.ajax({
        type: "DELETE",
        url: `/v1/coins/${id}`,
    })
);

