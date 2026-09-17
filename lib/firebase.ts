import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import type { Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCAQhzh8BWtgu094fIrtl8NUO4ANB9SQCQ",
  authDomain: "apex-horizons.firebaseapp.com",
  projectId: "apex-horizons",
  storageBucket: "apex-horizons.firebasestorage.app",
  messagingSenderId: "275862759813",
  appId: "1:275862759813:web:600ac9822e7344c477fcec",
  measurementId: "G-TCG1T1K9WE"
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

export let analytics: Analytics | undefined;
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
    isSupported().then(supported => {
      if (supported) analytics = getAnalytics(app);
    });
  });
}
