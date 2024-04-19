var posts=["2024/04/18/“Work-hard-for-yourself”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };