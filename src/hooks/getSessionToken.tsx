'use server'
import { cookies } from "next/headers";

export default async function getSessionToken() {
  const cookieStore = await cookies()

  const session = cookieStore.get('accessToken')?.value

  if (session) {
    return session
  }
  return null;
}
