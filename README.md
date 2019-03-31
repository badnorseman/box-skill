# Box Skill Service

The Box Skill Service is a server that is connected to a Box Skill. It is triggered when a image is upoaded to folder in Box. It is retrieving data and writing metadata to the image file in Box.

## Getting Started

First you need to clone the repository and install dependencies.
Open a terminal and enter `git clone https://github.com/urbanvikingr/box-skill.git`.
Then enter `cd box-skill` followed by `npm install`.

Now you can test the service.
Enter `npm run test` in the terminal.

You can deploy to AWS.
Enter `npm run deploy` in the terminal.

Now you can validate the deployment.
Enter `serverless invoke -f http` or `serverless invoke -f http -d hello` in the terminal.

You run the service by logging into Box and uploading an image.

## Request Change

First you fork the repository or create a branch to work on.
After you have completed the change and tested that everything works, you create a pull request with the change.
