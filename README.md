
# React Issues Table

This is a "test task" for position of Front-end Web developer for well known public company on the travel market.

[On-line Demo](https://karpolan.com/demos/react-issues-table/)

## Notes

Ready to use **IssuesTable** React Component in */src/components/IssuesTable/IssuesTable.js*

Usage:
``` 
import IssuesTable from './IssuesTable' 

...

<IssuesTable issues={...Array of issues here} />
```

Pagination for "long data" could be added using **[Pagination](https://react.semantic-ui.com/addons/pagination/)** component from [Semantic UI](https://react.semantic-ui.com/) library.

If you need "live updates" for issues, use **loadIssues()** function from *src/storage/issues.js*
 
## Task

Your assignment is to write a UI (component) to display React project issue status from GitHub.

You can get the issue status data by using the following API: https://api.github.com/repos/facebook/react/issues

You should use the table component from semantic-ui, and you can use other components in this library to improve the UX.
https://react.semantic-ui.com/collections/table

Build a table like the following to display React project issue status.

| Issue Number | Title | Created At | Updated At | Labels | State |
					
Labels field should be a bulleted list with label names.

### Format

We are working in Node 8 and prefer ES6+ for the solution. Please write clean and concise React components.  No libraries outside the listed libraries should be used. The solution can be one or more source files.

### Style

While getting the right answer is important, we are also interested in how well thought out your solution is; are there easier, or faster ways? Is the code understandable to another engineer picking it up? If there are obvious ways it could be abstracted or extended, is it designed to support that? 


### Questions?

Some aspects of the problem are intentionally vague. We recommend that you make your own decisions rather than ask us and wait for an answer. Document any important assumptions that you make in your solution.

## Feedback

I spent about 3 hours to build this project including research of **Semantic UI** and writing the documentation...

In 2 weeks I've got following feedback:

- Mostly well documented 
- Candidate probably has not used React before. Code is split into functions assigned to local variables instead of React components, which is inefficient and not idiomatic. It would be difficult to organize a larger project with this style. 
- Uses data as component keys, ignoring the warnings printed to the JS console (keys in react must be unique, and in particular "created at" and "updated at" are often identical) 
- Console statements left in code 
- Loading state is broken (says "there are no issues" while issues are loading)  

## Conclusion

LOL and ROTFL: **Candidate probably has not used React before**

BTW, there is no console warnings and keys are unique inside the lists :)



## It is built using React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
