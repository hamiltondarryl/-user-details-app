
#Task 1: Advanced React Component with Custom Hook

Create a React component named UserDetails that fetches and displays details of a user
based on the user ID passed as a prop. The component should:

- Use a custom hook useFetchUser to handle the data fetching.
- Implement caching within the custom hook to avoid redundant API calls for the same user ID.
- Show a loading state while fetching data.
- Handle and display errors if the API request fails.
- Allow the user details to be refreshed manually with a button click.