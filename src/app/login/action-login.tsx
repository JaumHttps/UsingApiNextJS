'use server'
export default async function register (formData : FormData){
  
  const username = formData.get('username') 
  const password = formData.get('password') 

  const response = await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
  const result = await response.json()
  
  console.log(result)
  

}