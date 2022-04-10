/* 
    1. At First Create a new project in from console.firebase.google.com
    2. npm install firebase in your firebase project
    3. Now, Create firebase.init.js and import getAuth to export auth
    4. The we have to go Firebase settings > Authenticaton > enable Email and Password auth
    5. After that Create Login, Signup component, and  setup route in app.js file
    6. setup form field and submit fied handler 
    7. npm install --save react-firebase-hooks {firebase hooks installation}
    8. useCreateUserWithEmailAndPassword for sign in which comes from firbase hooks library
    9. now apply the condition if any user is created  then redirect to the expected page.
    10. for sign in apply useSignInWithEmailAndPassword.
    11. Create RequireAuth component from react router and check user exists and  also track user location.
    12. In app.js file protected component should wrap with the RequireAuth.
*/






/* 
   These are Firebase hosting steps:
   ===========================================
    1. npm install -g firebase-tools
    2. firebase login
    3. firebase init
    4. firebase deploy
*/