var posts=["2024/11/04/qwertyu/","2024/11/04/123456789/","2024/11/04/sampah/","2024/11/04/test/","2024/11/04/puisi/","2024/11/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };