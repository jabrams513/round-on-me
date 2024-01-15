// Event handler function for form submission
async function newFormHandler(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve values from form inputs
  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;

  // Check if both title and content are provided
  if (title && content) {
    try {
      // Send a POST request to the server to create a new post
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response is successful
      if (response.ok) {
        // Redirect to the dashboard after successful post creation
        document.location.replace("/dashboard");
      } else {
        // Display an alert with the error status text if the response is not okay
        alert(`Error: ${response.statusText}`);
      }
    } catch (err) {
      // Log and display an alert for unexpected errors during the fetch operation
      console.error("An error occurred:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  } else {
    // Display an alert if either title or content is missing
    alert("Please provide both title and content for the new post.");
  }
}

// Attach the event listener to the form's submit event
document.querySelector("#add-post-form").addEventListener("submit", newFormHandler);