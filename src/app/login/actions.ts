'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface userProps {
  accessToken: string
  refreshToken: string
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string
  message: string
}

export default async function ActionLogin (formData : FormData){
  const username = formData.get('username') 
  const password = formData.get('password') 

  const response = await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
  const userData : userProps = await response.json()
  const cookieStore = await cookies();

  if (userData.message === 'Invalid credentials') {
    cookieStore.set('StatusCredentials', 
      JSON.stringify({error: true, msg: "Login inválido"}), {
      expires: new Date(Date.now() + 10 * 300) 
    })

    console.log('Please enter valid credentials')
  }else {
    cookieStore.set("accessToken", userData.accessToken)
    cookieStore.set("refreshToken", userData.refreshToken)

    cookieStore.set('StatusCredentials', 
      JSON.stringify({error: false, msg: "Login feito com sucesso!"}), {
      expires: new Date(Date.now() + 10 * 300) 
    })

    redirect("/home");
  }
}