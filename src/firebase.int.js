import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    
    /* apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID, */
  
  apiKey: "AIzaSyCYUdiiY98CbegbrajtbNvbI-7bvaA38ow",
  authDomain: "green-bikester-b23b0.firebaseapp.com",
  projectId: "green-bikester-b23b0",
  storageBucket: "green-bikester-b23b0.appspot.com",
  messagingSenderId: "769869616091",
  appId: "1:769869616091:web:755ad5183ac65ab9874dfe", 
  
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


