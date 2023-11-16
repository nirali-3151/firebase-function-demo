# firebase-function-demo

if we want to  create backend using fireabse then  we can create a “Backend” just using Firebase. for that we need to use firebase functinos

 Cloud Functions should be written in JavaScript using a Node.js (v6.9.x) environment
 
 ## Environment setup

```npm install -g firebase-tools```

## require dependancy
```firebase-admin``` <br />
```firebase-functions```

## Project Structure
![Screenshot from 2023-01-16 18-07-56](https://user-images.githubusercontent.com/100589028/212680044-c780b68e-1a6d-4734-acf0-f32cc20c2e08.png)


# start with project build
**STEP 1:** <br />
- run command to initilize firebase-functions :
```firebase init functions```

**STEP 2:**

- serviceAccount = "JSON file  of firebase configuration"

to get JSON File :
- ```go to firebase project -> settings ->  service accounts ->  generate new private key ```

- initialize firebase firestore :=


- admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


# integrate typescript with node js

required dev dependancies :
``` 
@types/express
@types/node
ts-node
typescript
```

# Deploy functions to a production environment
``` firebase deploy --only functions```
