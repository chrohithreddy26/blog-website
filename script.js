document.addEventListener('DOMContentLoaded', function() {
  // Post 1
  const post1CommentForm = document.getElementById('post1-comment-form');
  const post1CommentsContainer = document.getElementById('post1-comments');

  post1CommentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('post1-comment-name').value;
    const message = document.getElementById('post1-comment-message').value;
    
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `<strong>${name}</strong>: ${message}`;
    
    post1CommentsContainer.appendChild(commentElement);
    post1CommentForm.reset();
  });

  // Post 2
  const post2CommentForm = document.getElementById('post2-comment-form');
  const post2CommentsContainer = document.getElementById('post2-comments');

  post2CommentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('post2-comment-name').value;
    const message = document.getElementById('post2-comment-message').value;
    
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `<strong>${name}</strong>: ${message}`;
    
    post2CommentsContainer.appendChild(commentElement);
    post2CommentForm.reset();
  });

  // Post 3
  const post3CommentForm = document.getElementById('post3-comment-form');
  const post3CommentsContainer = document.getElementById('post3-comments');

  post3CommentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('post3-comment-name').value;
    const message = document.getElementById('post3-comment-message').value;
    
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `<strong>${name}</strong>: ${message}`;
    
    post3CommentsContainer.appendChild(commentElement);
    post3CommentForm.reset();
  });
});
