var posts=["2024/02/21/hello-world/","2023/05/10/Study Goals/","2023/05/22/疾风亦有归途！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };