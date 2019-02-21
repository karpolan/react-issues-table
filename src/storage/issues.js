import dataSample from "./issues.json"

export const loadIssues = () => {
	// TODO: Change to live data from API https://api.github.com/repos/facebook/react/issues
	let result = {...dataSample} 
	return result;
}
