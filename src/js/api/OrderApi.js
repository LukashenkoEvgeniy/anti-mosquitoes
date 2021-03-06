
export default class OrderApi {

    API_URL = "http://91.239.81.76:3343/";

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
