/*

Retrieve data from the CI build that kicked off this CD/RO pipeline

*/

var args = {
	projectName: myPipelineRuntime.projectName,
	ciBuildDetailName: Object.keys(myPipelineRuntime.ciBuildDetails)[0]
}
var ciBuildDetailInfo = api.getCIBuildDetail(args).ciBuildDetailInfo
// JSON.stringify(ciBuildDetailInfo) // Use this to examine the datastructure of ciBuildDetailInfo
ciBuildDetailInfo.buildUrl