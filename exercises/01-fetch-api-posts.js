/* 
TODO-01: Create a function named fetchPostsThen
         Use fetch('https://dummyjson.com/posts')
         Use .then() to convert response to JSON
         Use another .then() to log the posts data
         Use .catch() to handle errors

TODO-02: Export fetchPostsThen and test it in main.js
*/

export
const fetchPostsThen = () => {
	const endpoint = "https://dummyjson.com/posts";
	fetch(endpoint)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to fetch posts");
			}
			return res.json();
		})
		.then((data) => {
			console.log(data.posts[0]);
		})
		.catch((error) => {
			console.log("Error occurred: ", error);
		});
};

// fetchPostsThen();
