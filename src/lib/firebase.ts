// Import the functions you need from the SDKs you need
import { env as clientEnv } from "@/env/client.env"
import { env as serverEnv } from "@/env/server.env"
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: clientEnv.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: clientEnv.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: clientEnv.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: clientEnv.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: clientEnv.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: clientEnv.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: clientEnv.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: serverEnv.FIREBASE_DATABASE_URL,
}
console.log({ firebaseConfig })
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig)
// const firebase_analytics = getAnalytics(firebase_app)
const database = getDatabase(firebase_app)

export const firebase = {
  app: firebase_app,
  // analytics: firebase_analytics,
  db: database,
}
