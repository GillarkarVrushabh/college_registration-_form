// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById("username").value), {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Select_Course: document.getElementById("course").value,
        Gender: document.getElementById("gender").value,
        Date_of_Birth: document.getElementById("dob").value,
        Address: document.getElementById("address").value,
        

    }).then(() => {
        alert("Login Successful");
    }).catch((error) => {
        console.error("Error writing document: ", error);
        alert("An error occurred, please try again later.");
    });
});
