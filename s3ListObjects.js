let AWS = require('aws-sdk')

s3 = new AWS.S3()

let bucketParams = {
    Bucket: 'ihrchallenge',
    Key: 'songData.json'
}

s3.getObject(bucketParams, (err, data) => {
    if (err) {
        console.log("Err", err)
    } else {
        console.log("Success", data)
    }

    let objectData = data.Body.toString();
    console.log(objectData)
});