
<template>
<body>
     <div class="home-container">
  <div>
    <div class="about-content row">
      <div class="about-text col-12 col-lg-6">
        <h1>{{title}}</h1>
        <br>
        <p>{{text}}</p>
          
        <div class="but">
            <a href="https://www.wft.wtf">My website</a>
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

        .home-container{
            padding-top: 70px;
            min-height: 100vh;
            width: 100vw;
            border-top: 1vh solid black;
            border-left: 1vh solid black;
            border-right: 1vh solid black;
            padding-left: 10%;
            padding-right: 10%;
            }

        .but{
            text-decoration: none;
            mix-blend-mode: difference;
            padding: 5px;
            width:160px;
            font-size: 18px;
            font-weight: bolder;
            border-radius: 3px;
            text-align: center;
            border: 1px solid white;
            color: black;
            background-color: white;
        }
        .but:hover{
            color:white;
            background-image: url(https://media.giphy.com/media/LUl2tRY5oVlBu/giphy.gif);
            text-decoration: none;
        }

        .but a:hover{
            color: white;
        }
    
        .but a{
            color: black;
        }

        .about-image {
           text-align: center;
            height: 300px;
            width: 300px;
            padding: 20px;
        }

            
        .about-image img{
        height: 300px;
        width: 300px;
        border: 3px solid black;
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