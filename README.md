# Resume with Vue/Vuetify and Firebase

```
npm install
npm run serve
npm run build
npm run lint
```


## Import/Export Firebase Data

* Install `[node-firestore-import-export](https://www.npmjs.com/package/node-firestore-import-export)` globally by using the command `npm install -g node-firestore-import-export`
* Create a new private key from firebase project.
    
    * Goto  `Project Settings` -> `Service Accounts` in firebase console.
    * Click on `Generate new private key`. Save the file and note down the file location and name.

* To export existing databases from Firebase, replace the filename and the path in the following command and run in the terminal.

```js
firestore-export --accountCredentials <location>/<filename> --backupFile myDatabase.json

e.g. firestore-export --accountCredentials fb-key.json --backupFile myDatabase.json
```
* To import JSON file to the firebase DB use the following command. Please ensure the JSON file is valid.

```js
firestore-import --accountCredentials path/to/credentials/file.json --backupFile /backups/myDatabase.json

e.g. e.g. firestore-import --accountCredentials fb-key.json --backupFile myDatabase.json

```

You can download the sample JSON file from [here](data.json)


