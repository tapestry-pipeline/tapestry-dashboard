const { ListMetricsCommand, GetMetricDataCommand, GetMetricDataCommandInput} = require("@aws-sdk/client-cloudwatch");
const { CloudWatchClient } = require("@aws-sdk/client-cloudwatch");
// Set the AWS Region.
const REGION = "us-west-1"; //e.g. "us-east-1"
// Create an Amazon CloudWatch service client object.
const cwClient = new CloudWatchClient({ region: REGION });
const  { EC2Client } = require( "@aws-sdk/client-ec2");
const {DescribeInstancesCommand} = require("@aws-sdk/client-ec2");
const {
  ElasticLoadBalancingV2Client,
  DescribeLoadBalancersCommand,
  DescribeLoadBalancerAttributesCommand
} = require("@aws-sdk/client-elastic-load-balancing-v2");
const ec2Client = new EC2Client({ region: REGION });
const loadBalancerClient = new ElasticLoadBalancingV2Client({ region: REGION })

// const params = {
//   Dimensions: [
//     {
//       Name: "InstanceId" /* required */,
//       Value: "i-01834be77e30bf12f"
//     },
//   ],
//   MetricName: "CPUUtilization",
//   Namespace: "AWS/EC2",
// };

// console.log(GetMetricDataCommandInput());
// const run = async () => {
//   try {
//     const data = await cwClient.send(GetMetricData(params));
//     console.log("Success. Metrics:", JSON.stringify(data.Metrics));
//     // console.log(data.Metrics[0].Dimensions)
//     console.log(data)
//     return data;
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

// run();



// const run = async () => {
//   // {InstanceIds: ["i-01834be77e30bf12f"]}
//   // {StackId: "arn:aws:cloudformation:us-west-1:982848192314:stack/test-full-kb-airbyte/dd91c060-f087-11eb-9b1f-06bd1af66c8b" }
//   // {"LoadBalancerArns": ["arn:aws:elasticloadbalancing:us-west-1:982848192314:loadbalancer/app/test-Airby-TP8W272IWYRO/a15b091de7d16b51"]}
//   return loadBalancerClient.send(new DescribeLoadBalancersCommand({}))
//     .then((data => {
//       console.log(JSON.stringify(data))
//     }))

//    .catch((error => {
//     console.log("Error", error);
//    }))
  

// };

const run = async () => {
  // {InstanceIds: ["i-01834be77e30bf12f"]}
  // {StackId: "arn:aws:cloudformation:us-west-1:982848192314:stack/test-full-kb-airbyte/dd91c060-f087-11eb-9b1f-06bd1af66c8b" }
  // {"LoadBalancerArns": ["arn:aws:elasticloadbalancing:us-west-1:982848192314:loadbalancer/app/test-Airby-TP8W272IWYRO/a15b091de7d16b51"]}
  return loadBalancerClient.send(new DescribeLoadBalancerAttributesCommand({"LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-1:982848192314:loadbalancer/app/test-Airby-TP8W272IWYRO/a15b091de7d16b51"}))
    .then((data => {
      console.log(JSON.stringify(data))
    }))

   .catch((error => {
    console.log("Error", error);
   }))
  

};



const getInstanceState = async() => {
let instanceState = await run();
console.log(instanceState)
}

getInstanceState();