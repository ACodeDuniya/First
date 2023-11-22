async function createAndDeletePost() {
  try {
    // Create a new post
    const newPost = await createPost({ title: 'New Post', content: 'Content' });
    console.log('Post created:', newPost);

    // Delete the created post
    const deleteResult = await deletePost(newPost.id);
    console.log(deleteResult);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the async function to create and delete a post
createAndDeletePost();
