// export const setToLocalStorage = (params) => {
//     if (!params || typeof window === "undefined") {
//        return ""
//    }
//   return localStorage.setItem(key, token)
// }
export const setToLocalStorage = (params) => {
    if (!params || typeof window === "undefined") {
       return ""
   }
  return localStorage.setItem(key, token)
}

export const getFromLocalStorage = (params) => {
    if (!params || typeof window === "undefined") {
       return ""
   }
  return localStorage.getItem(key)
}

