import service from "./service";

export  const getUserData=(uid) => {
    return service({
        url: '/userData',
        method: "POST",
        data: {
            uid:uid
        }
    })
}