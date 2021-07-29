const  { EC2Client } = require( "@aws-sdk/client-ec2");
const {DescribeInstancesCommand} = require("@aws-sdk/client-ec2");
// const REGION = "us-west-1"; //e.g. "us-east-1"
const REGION = "us-west-1"; //e.g. "us-east-1"
const ec2Client = new EC2Client({ region: REGION });

const run = async () => {
    // {InstanceIds: ["i-01834be77e30bf12f"]}
    // {StackId: "arn:aws:cloudformation:us-west-1:982848192314:stack/test-full-kb-airbyte/dd91c060-f087-11eb-9b1f-06bd1af66c8b" }
    return ec2Client.send(new DescribeInstancesCommand({InstanceIds: ["i-01834be77e30bf12f"]}))
      .then((data => {
        console.log(data)
        let instancesList = data['Reservations'][0].Instances;
        instanceState = instancesList[0].State.Name;
        return instanceState 
      }))

     .catch((error => {
      console.log("Error", error);
     }))
    
  
};


const getInstanceState = async() => {
  let instanceState = await run();
  console.log(instanceState)
}

module.exports = {
  getInstanceState
}

get
