const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const CdkWorkshop = require('../lib/cdk_workshop-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
