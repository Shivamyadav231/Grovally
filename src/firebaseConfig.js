import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Simple runtime validation to help debug invalid/missing env vars
{
  const required = ["apiKey", "authDomain", "projectId", "appId"];
  const missing = required.filter((k) => !firebaseConfig[k]);
  if (missing.length) {
    console.error(
      "Firebase config missing values:",
      missing.join(", "),
      "\nMake sure you set VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID and VITE_FIREBASE_APP_ID in your .env (or hosting) and restart the dev server."
    );
  }

  // Basic check for obviously invalid API key
  if (firebaseConfig.apiKey && firebaseConfig.apiKey.length < 20) {
    console.error(
      "Firebase API key looks invalid. Verify you copied the Web API key from Firebase project settings."
    );
  }
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
