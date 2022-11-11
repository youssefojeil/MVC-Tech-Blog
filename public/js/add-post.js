async function newPostHandler(event) {
    event.preventDefault();
    
    
    const newTitle = document.querySelector('#title').value;
    const newContent = document.querySelector('#content').value;
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({

        title: newTitle,
        content: newContent,
       
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add Post');
    }
  }
  
  document
    .querySelector('.new-post-btn')
    .addEventListener('submit', newPostHandler);