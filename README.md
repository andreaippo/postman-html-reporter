# postman-html-reporter

## Requires node.js

Recommended installation method: use your package manager of choice to install Node Version Manager (the package is typically called "nvm").

E.g. brew install nvm

Then install node's (and npm's) latest version:

nvm install node

## Usage

### Preparation

Export the postman collection and environment to files in the "Postman" directory inside your user home directory, e.g. %home%/Postman/myCollection.postman_collection.json and %home%/Postman/myEnv.postman_environment.json)

### Collection run and report generation

Go to the root of this repo and enter:
`node index.js myCollection myEnv`

The HTML report will be generated inside the "newman" subfolder of this repo.
