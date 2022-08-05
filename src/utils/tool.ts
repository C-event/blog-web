export const getSession = (value:string) => {
   return window.sessionStorage.getItem(value)
}

export const setSession = (value:string) => {
  window.sessionStorage.setItem('token', value)
}