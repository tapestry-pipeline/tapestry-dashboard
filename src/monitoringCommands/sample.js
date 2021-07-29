// import { S3Client } from "@aws-sdk/client-s3";
// // Set the AWS Region.
// const REGION = "us-west-1"; //e.g. "us-east-1"
// // Create an Amazon S3 service client object.
// const s3Client = new S3Client({ region: REGION });
// export { s3Client };

// const  { EC2Client } = require( "@aws-sdk/client-ec2");
// const {DescribeInstancesCommand} = require("@aws-sdk/client-ec2")
// // import { DescribeInstancesCommand } from "@aws-sdk/client-ec2";
// const REGION = "us-west-1"; 
// const ec2Client = new EC2Client({ region: REGION });

// const run = async () => {
//   try {
//     const data = await ec2Client.send(new DescribeInstancesCommand({}));
//     console.log("Success", JSON.stringify(data));
//     return data;
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
// run();
const  { EC2Client } = require( "@aws-sdk/client-ec2");
const { MonitorInstancesCommand, UnmonitorInstancesCommand, DescribeInstancesCommand } = require("@aws-sdk/client-ec2");
const {DescribeInstancesRequest, DescribeInstancesRequestCommandInput} = require("@aws-sdk/client-ec2");
const REGION = "us-west-1"; //e.g. "us-east-1"
const ec2Client = new EC2Client({ region: REGION });
// const { ec2Client } = require("./libs/ec2Client");

// Set the parameters
const params = { InstanceIds: ["i-01834be77e30bf12f"] }; // Array of INSTANCE_IDs
const state = "ON"; // STATE; i.e., 'ON' or 'OFF'

// const run = async () => {
//   if (process.argv[2].toUpperCase() === "ON") {
//     try {
//       const data = await ec2Client.send(new MonitorInstancesCommand(params));
//       console.log("Success", data.InstanceMonitorings);
//       return data;
//     } catch (err) {
//       console.log("Error", err);
//     }
//   } else if (process.argv[2].toUpperCase() === "OFF") {
//     try {
//       const data = await ec2Client.send(new UnmonitorInstancesCommand(params));
//       console.log("Success", data.InstanceMonitorings);
//       return data;
//     } catch (err) {
//       console.log("Error", err);
//     }
//   }
// };
// run();
// const params  = {
//   InstanceId: "i-01834be77e30bf12f";
// }
const run = async () => {
  try {
    // {InstanceIds: ["i-01834be77e30bf12f"]}
    // {StackId: "arn:aws:cloudformation:us-west-1:982848192314:stack/test-full-kb-airbyte/dd91c060-f087-11eb-9b1f-06bd1af66c8b" }
    let data = await ec2Client.send(new DescribeInstancesCommand({InstanceIds: ["i-01834be77e30bf12f"]}));
    console.log("Success");
    let instancesList = data['Reservations'][0].Instances
    instancesList.forEach(instance => {
      console.log(instance.Monitoring.State)
    });
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();

// import { CloudWatchClient,  ListDashboardsCommand } from "@aws-sdk/client-cloudwatch";
// const { CloudWatchClient,  ListDashboardsCommand } = require("@aws-sdk/client-cloudwatch");

// // const {DescribeInstancesCommand} = require("@aws-sdk/client-ec2")
// // import { DescribeInstancesCommand } from "@aws-sdk/client-ec2";
// const REGION = "us-west-1"; 
// const cwClient = new CloudWatchClient({ region: REGION });

// const run = async () => {
//   try {
//     const data = await cwClient.send(new ListDashboardsCommand({}));
//     console.log("Success", JSON.stringify(data));
//     return data;
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
// run();

// i-01834be77e30bf12f