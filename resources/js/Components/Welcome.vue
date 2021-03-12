
<template>
<body>
    

    <div class="home-container salmon scrollable center">
  <div>
    <div class="about-content row">
      <div class="about-text col-12 col-lg-6">
        <h1>{{title}}</h1>
        <br>
        <p>{{text}}</p>
          
        <div class="but">
            <a href="www.wft.wtf">My website</a>
        </div>
      </div>
      <div class="about-image col-12 center col-lg-6">
        <img :src="img_src" alt="">
      </div>
    </div>
</div>
  </div>
</div>
</body>
    </template>
    <script>
        export default {
            props : ['title', 'text', 'img_src']
        }
    </script>
    <style scoped>
        html, body {
            background-color: #f6b75c;
            color: #363636;
            font-family: 'Raleway', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .about-image img{
            height: 200px;
            width: 200px;

        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>