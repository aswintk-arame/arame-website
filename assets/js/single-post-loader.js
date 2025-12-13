document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  const post = blogPosts.find(p => p.id === postId);

  if (post) {
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = `Published on: ${post.date}`;
    document.getElementById('page-title').textContent = `${post.title} - AraMe Global Blog`;

    const postImage = document.getElementById('post-image');
    postImage.src = post.image;
    postImage.alt = post.title;

    document.getElementById('post-content').innerHTML = post.fullContent;

  } else {
    document.getElementById('post-title').textContent = "404 - Article Not Found";
    document.getElementById('post-content').innerHTML = "<p class='text-center'>Sorry, the blog post you are looking for does not exist.</p>";
    document.getElementById('post-image').style.display = 'none';
  }
});