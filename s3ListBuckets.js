let AWS = require('aws-sdk')

const s3 = new AWS.S3()

s3.listBuckets((err, data) => {
    if(err) {
        console.log("err", err)
    } else {
        console.log("Success", data.Buckets)
    }
})