document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-posts-container");

  if (typeof blogPosts !== "undefined" && container) {
    blogPosts.forEach((post) => {
      const postUrl = `./single-post.html?id=${post.id}`;

      const cardHTML = `
                <div class="col">
                    <div class="post-card">
                        <img src="${post.image}" class="post-image" alt="${post.title}">
                        <div class="card-body-custom">
                            <h4>${post.title}</h4>
                            <p>${post.excerpt}</p>
                            <a href="${postUrl}" class="read-more-link">Read More &rarr;</a>
                        </div>
                    </div>
                </div>
            `;

      container.insertAdjacentHTML("beforeend", cardHTML);
    });
  }
});
