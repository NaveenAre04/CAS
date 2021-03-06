import { API } from "../../backend";


export const getmeToekn = (userId, token) => {
    return fetch(`${API}/paymnet/gettoken/${userId}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}


export const processPayment = (userId, token, paymnetInfo) => {
    return fetch(`${API}/payment/braintree/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(paymnetInfo)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}