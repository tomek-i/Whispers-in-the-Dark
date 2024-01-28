"use client"
import signUp from "@/lib/auth/singup"
import { useRouter } from "next/navigation"
import React, { FormEvent } from "react"

export default function Page() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const router = useRouter()

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { result, error } = await signUp(email, password)

    if (error) {
      return console.log(error)
    }

    // {
    //     "uid": "lQIOcOGHlCbBckTYtYOtwfSHbHt1",
    //     "email": "tomek.iwainski@gmail.com",
    //     "emailVerified": false,
    //     "isAnonymous": false,
    //     "providerData": [
    //         {
    //             "providerId": "password",
    //             "uid": "tomek.iwainski@gmail.com",
    //             "displayName": null,
    //             "email": "tomek.iwainski@gmail.com",
    //             "phoneNumber": null,
    //             "photoURL": null
    //         }
    //     ],
    //     "stsTokenManager": {
    //         "refreshToken": "AMf-vBxt22uZ8uDOH_i_22o0Q_0Q8SOoOgz5IbIqwwQvKm6ZHSFyJYlSW0Wn4x27DlsvKAC0q41b4HfV_zq1nOTPcV-krNEs6-d_qBlSuovQDkM1qc_bWqXuCm486iC7bAdr1_332v7FXr2lDEAl5-nJ0hDQl457zWL0x0_d6qsd_ygCk0TkpkOcli69ExM9KDpshv1LXJx6Di5T8XhSpCW94F-7LAoE96HTqq5tmaC1-6cNoihSTx4",
    //         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjViNjAyZTBjYTFmNDdhOGViZmQxMTYwNGQ5Y2JmMDZmNGQ0NWY4MmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmxvb2Qtb24tdGhlLWNsb2NrIiwiYXVkIjoiYmxvb2Qtb24tdGhlLWNsb2NrIiwiYXV0aF90aW1lIjoxNzA2NDQ2MTE2LCJ1c2VyX2lkIjoibFFJT2NPR0hsQ2JCY2tUWXRZT3R3ZlNIYkh0MSIsInN1YiI6ImxRSU9jT0dIbENiQmNrVFl0WU90d2ZTSGJIdDEiLCJpYXQiOjE3MDY0NDYxMTYsImV4cCI6MTcwNjQ0OTcxNiwiZW1haWwiOiJ0b21lay5pd2FpbnNraUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidG9tZWsuaXdhaW5za2lAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QQB9KmqpHatNL150-73zhdIHiQBHY2KkMBbuvaEu39gwKgCr-r-5XseF9FrjE5wxUEbesrBLsvZ1Unbx6KcE0ZF3q8W6pxDMqkdAfDT6TbkjophgGWnmKRiqRucXHhybnACQTcyVQD9RS2ctH2fEu09oWAsoolM13Taav2HwT0th6VJhFxr8gmvQ_BxtS0IvnYaCTj9h2z58qq9ttZOVMSJLrVcALU2CwSmHMBa9A8svKVvjGnSL4z3Vhw5TQyEPKzDoT_qEjOduuF361kEfjwQ6zMgSIyr9xEbhlGaIGfxiu_BYsEmiDVujO_4QyIy2umxPCtMjuVGWtaUYwGychg",
    //         "expirationTime": 1706449715670
    //     },
    //     "createdAt": "1706446116045",
    //     "lastLoginAt": "1706446116045",
    //     "apiKey": "AIzaSyCJ2ZLp2HTHIkKIhAKDhKA_NV2tlNHxf7s",
    //     "appName": "[DEFAULT]"
    // }

    // else successful
    console.log(result)
    return router.push("/admin/dashboard")
  }
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mb-30 mt-60">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  )
}
