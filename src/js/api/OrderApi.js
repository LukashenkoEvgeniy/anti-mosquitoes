
export default class OrderApi {

    API_URL = "http://176.38.128.64:8989/";

    options = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
    };

    sendOrder(order){
        console.log(order);
        return fetch(this.API_URL + 'order', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: (JSON.stringify(order))
        });
    }

}