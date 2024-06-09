document.querySelector('#new-post-btn').addEventListener('click', () => {
    const title = prompt('Enter post title');
    const content = prompt('Enter post content');
    if (title && content) {
      fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(() => document.location.reload());
    }
  });
  