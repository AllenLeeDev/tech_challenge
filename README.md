## Prerequisites
Create a `.env` file inside of `./client` with: `PORT: 1717` <br>
Make sure to have AWS SAM CLI installed

## Available Scripts

You have to start the AWS SAM server: 

### `cd ./sam-app`
### `sam build`
### `sam deploy --guided`
### `sam local start-api`

Next you can start the React app:

### `cd ./client`
### `yarn`
### `yarn start`


The songData.json is hosted in AWS S3 with the AWS CLI Configuration set up locally to authenticate my local machine. 

## File Structure Methodology
Within React I followed the Atomic Design structure. Atomic Design is based off of grouping components by their size and complexity. 

You will find an example of this `./client/src/components/atoms` in this case atoms holds the typing effect that is then passed to LandingPage. The typing effect cannot effectively be broken down any further so it is the smallest of the entire atomic structure. 

Runs the React app in the development mode.\
Open [http://localhost:1717](http://localhost:1717) to view it in the browser.

## Open GraphQL/Apollo playground
Open [http://localhost:3000/dev/playground](http://localhost:1717/dev/playgound) to view it in the browser.

