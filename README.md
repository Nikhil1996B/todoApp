##Libraries used
- `React` for view components

##Adding a new dependency
- run `yarn add <Dependency-name> ` in root folder of frontend code where
+package.json is located. use `--dev` if it is a development dependency
- This will result in mainly three changes which must be checked-in to repo
- changes in offline-mirror
- changes in yarn.lock ( according to git it is a binary file )
- changes in package.json

##Development Environment Setup

##Build and Run
###Requirements
- `nodejs version 12.16.2`
- If you are behind proxy make sure you have proxy settings for `npm`
###Build
- open terminal in  `~/todo` directory
- run `npm install` to install packages
- run `npm build` to build source code

###Run
- run - `npm start watch`

##TODO
- Add feature
- ✔ Drag and drop feature
- ✔ delete feature 

##Source code directory structure
```
src
|--App.js //Todo board parent component
|  |--Component
|  |--Card
|  |--List
|--HTTP //Will contain only http request response logic in isolation with framework and business logic

.  .....
....

```
