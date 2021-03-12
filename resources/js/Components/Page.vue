    <template>
    <body>
        
    
        <div class="home-container ">
            <div class="content">
                <div class="title m-b-md">
                    {{title}}
                </div>

                <div class="links">
                    <div v-for="(p) in project">
                        <div class="project-card">
                            <img v-bind:src="p.img" alt="">
                            <span class="card-title bold">{{p.name}}</span>
                            <br>
                            <span class="card-title">{{p.desc}}</span>
                            <br>
                            <a v-bind:href="p.github">Github</a>
                            <!-- <navlink v-bind:href="p.github">Github</navlink> -->
                        </div>
                </div>
                </div>
            </div>
        </div>
        </body>
    </template>

    <script>
        export default {
            props : ['title', 'project']
        }
    </script>
    <style scoped>
        html, body {
            
            font-family: 'Raleway', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .card-title{
            font-size: 24px;
            margin-top: 20px;
}

.bold{
    font-weight: bolder;
}

        .project-card{
            max-width: 600px;
            max-height: 600px;
            margin-top: 20px;
            margin-bottom: 100px;
            border: 5px solid black;
            border-radius: 3px;
            padding: 10px;
            padding-left: 15px;
            text-align: justify;
            margin: 30px;
        }

      

        .project-card img{
            height: 300px;
            width: 100%;
            object-fit: contain;
        }

        .project-card a{
            text-decoration: none;
            color: black;
            text-align: right;
            font-style: italic;
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
            background-color: #47ac7c;
            color: #363636;
        }

        .title{
            font-size: 36px;
        }
   
  
    </style>