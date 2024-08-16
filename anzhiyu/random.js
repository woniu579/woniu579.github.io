var posts=["2023/05/22/疾风亦有归途！/","2023/05/04/大提琴Cello要点/","2023/05/10/Study Goals/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };