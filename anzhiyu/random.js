var posts=["2023/06/07/风很温柔，花很烂漫，你很特别，我很喜欢！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };