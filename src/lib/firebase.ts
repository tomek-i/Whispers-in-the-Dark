// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getMessaging, getToken } from "firebase/messaging"
import { env } from "@/env/client.env"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig)
// const firebase_analytics = getAnalytics(firebase_app)

// Initialize Realtime Database and get a reference to the service
const firebase_database = getDatabase(firebase_app)

// Initialize Firebase Cloud Messaging and get a reference to the service
const firebase_messaging = getMessaging(firebase_app)

getToken(firebase_messaging, {
  vapidKey: env.NEXT_PUBLIC_FIREBASE_MESSAGING_VAPID_KEY,
})

export const firebase = {
  app: firebase_app,
  // analytics: firebase_analytics,
  database: firebase_database,
  messaging: firebase_messaging,
}
