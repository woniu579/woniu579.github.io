var posts=["2023/05/10/Study Goals/","2023/05/22/疾风亦有归途！/","2023/06/07/风很温柔，花很烂漫，你很特别，我很喜欢！/","2024/04/18/“Work-hard-for-yourself”/","2023/05/04/大提琴Cello笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };