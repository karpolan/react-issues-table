import dataSample from "./issues.json"

/**
 * Gets list of Issues from API or from Local .json file.
 * @returns {Array<Object>} - array of "issue" objects
 */
export const loadIssues = async () => {
	const apiCall = await fetch('https://api.github.com/repos/facebook/react/issues');
	const data = await apiCall.json();
	if (data)
		return [...data]; // Data from API
	else 
		return [...dataSample]; // Mock data from Local .json file
}
