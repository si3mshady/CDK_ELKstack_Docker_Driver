const cdk = require('@aws-cdk/core');
const es = require('@aws-cdk/aws-elasticsearch')
const logs = require('@aws-cdk/aws-logs')

class CdkWorkshopStack extends cdk.Stack {


  constructor(scope, id, props) {
    super(scope, id, props);

    const domain = new es.Domain(this, 'sandBoxElasticSearch', {

      version: es.ElasticsearchVersion.V7_1,
      capacity: {  masterNodes: 2 }, logging: { appLogEnabled: true },
      nodeToNodeEncryption: true, encryptionAtRest: {enabled: true},
      enforceHttps: true, useUnsignedBasicAuth: true,       
      fineGrainedAccessControl : {
        masterUserName:'Master!user1',  masterUserPassword: 'Master!password1'
      }
    
    });


    
    new logs.LogGroup(this, 'DockerComposeLogs', {logGroupName:"DockerComposeLogs"})
   
    
    }}



module.exports = { CdkWorkshopStack }



// https://docs.aws.amazon.com/cdk/api/latest/docs/aws-kinesis-readme.html
//https://github.com/aws/aws-cdk/tree/master/packages/%40aws-cdk/aws-elasticsearch