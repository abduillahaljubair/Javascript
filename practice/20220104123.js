
async function fetchData(username) {
    try {

      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
      const userData = await userResponse.json();
  
      if (userData.length === 0) {
        console.log(`User with username "${username}" not found.`);
        return null;
      }
      
      const userId = userData[0].id;
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      const postsData = await postsResponse.json();
  
      return postsData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  function sortPosts(posts, order = 'asc') {
    return posts.sort((a, b) => {
      const aWordCount = a.title.split(' ').length;
      const bWordCount = b.title.split(' ').length;
      return order === 'asc' ? aWordCount - bWordCount : bWordCount - aWordCount;
    });
  }

  async function main(username) {
    const posts = await fetchData(username);
    if (posts) {
      const sortedPosts = sortPosts(posts, 'asc');
      console.log('Sorted Posts:', sortedPosts);
    }
  }

  main('Bret');
  main('Antonette');
  main('Samantha');
  main('Karianne');
  main('Kamren');
  