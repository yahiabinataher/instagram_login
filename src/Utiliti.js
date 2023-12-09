import {toast} from "react-toastify"

export const createToast = (msg,type = "error") => {
 return toast[type](msg)
}

/**
 * mobail number checking
 */
export const  isMobail = (mobail) =>{
    const pattern = /^(01|\+8801|8801)[0-9]{9}$/;
    return pattern.test(mobail)
}

/**
 * email checking
 */
export const isEmail = (email) =>{
    const pattern = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}$/
    return pattern.test(email)
}