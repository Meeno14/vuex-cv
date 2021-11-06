<template>
    <div class="container row">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">   
        <div class="header" v-for="data in agenda" :key="data">
            <fieldset class="line"> <legend>RESUME</legend></fieldset>
            <h1>{{data.nama}}</h1>
        </div>
        <div class="left" v-for="data in agenda" :key="data">
            <img src="https://www.meme-arsenal.com/memes/c5dacca912d61073f678c6569809ed80.jpg">
            <h2>PROFILE</h2><hr class="dashed">
            <p><b>NAME</b><br>
            {{data.nama}}</p>
            <p><b>DATE OF BIRTH</b><br>
            {{data.birthday}}</p>
            <p><b>ADDRESS</b><br>
            {{data.alamat}}</p>
            <p><b>WEBSITE</b><br>
            {{data.web}}</p>
            <h2>AWARDS</h2><hr class="dashed">
            <p><b>1st LOMBA MAKAN KERUPUK</b></p>
            <h2>CONTACT</h2><hr class="dashed">
            <div class="flexr bottom">
                <div>
                    <p class="zero">
                    <b>HOME NUMBER&nbsp;</b><br>
                    --- --- --- ---&nbsp;<br>
                    <b>PHONE NUMBER&nbsp;</b><br>
                    {{data.phone}} <br>
                    <b>EMAIL&nbsp;</b><br>    
                    {{data.email}}&nbsp;</p><br><br>
                </div>
                <div>
                    <i class="fas fa-home"></i><br>
                    <i class="fa fa-phone"></i><br>
                    <i class="fas fa-envelope"></i>
                </div>
            </div>
            <h2>SOCIAL</h2><hr class="dashed">
            <div class="flexr bottom">
                <div>
                    <p class="zero">
                    <b>TWITTER&nbsp;</b><br>
                    @Meeno&nbsp;<br>
                    <b>FACEBOOK&nbsp;</b><br>
                    Helmi&nbsp;<br></p>
                </div>
                <div>
                    <i class="fab fa-twitter"></i><br>
                    <i class="fab fa-facebook"></i>
                </div>
            </div>
        </div>
        <div class="right" v-for="data in agenda" :key="data">
            <h2>GRAPHIC ARTIST</h2><hr>
            <div class="block">
                <div class="flexl">
                    <i class="icon fa fa-briefcase"></i>
                    <div class="title"><h2 class="zero">&nbsp; WORK EXPERIENCE</h2></div>
                </div><hr class="dashed">
                <div class="row">
                    <div class="col" style="width: 28%">
                        <p><b>DATA UTAMA</b><br>
                        Feb 2019 - Now<br></p>
                    </div>
                    <div class="col" style="width: 72%">
                        <p><b>NETWORK ENGINEER</b><br>
                        {{data.work}}</p>
                        <br><br><br><br><br><br><br>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="flexl">
                    <i class="icon fas fa-book"></i>
                    <div class="title"><h2 class="zero">&nbsp; EDUCATION</h2></div>
                </div><hr class="dashed">
                <div class="row">
                    <div class="col" style="width: 30%">
                        <p><b>4th RANK</b><br>
                        2011-2018</p>
                        <p><b>???? RANK</b><br>
                        2018-2021</p>
                    </div>
                    <div class="col">
                        <p><b>{{data.ps}}</b><br>
                        {{data.location}}</p>
                        <p><b>{{data.jhs}}</b><br>
                        {{data.location}}</p>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="flexl">
                    <i class="icon fas fa-lightbulb"></i>
                    <div class="title"><h2 class="zero">&nbsp; SKILLS</h2></div>
                </div><hr class="dashed">
                <div class="row">
                    <div class="row col" style="width: 50%">
                        <p class="zero"><b>PROFESSIONAL SKILLS</b></p>
                        <div class="col">
                            <p>Microsoft Windows<br>Windows<br>Mac OSX<br>
                            Data Handling<br>Record Keeping<br>Web Skills
                            </p>
                        </div>
                        <div class="col">
                            <p>&#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;</p>
                        </div>
                    </div>
                    <div class="row col" style="width: 50%">
                        <div class="col">
                            <p class="zero"><b>PROFESSIONAL SKILLS</b></p>
                            <div class="col"><p>Organisation<br>Communication<br>
                            Time Keeping<br>Team Player<br>Commitmet<br>Multitasking</p>
                        </div>
                        <div class="col">
                            <p>&#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;<br>
                            &#9899;&#9899;&#9899;&#9898;</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cv1',
    computed: {
        agenda() {
            return this.$store.state.listData
        }
    }
}
</script>

<style scoped>
.line {
    border-top: 18px solid white;
    border-left: none;
    border-bottom: none;
    border-right: none;
}
.block {
    background-color: lightgray;
    width: 375px;
    padding: 10px;
    margin-bottom: 10px;
}
.title {
    width: 344px;
}
.dashed {
    border-top: 1px dashed;
}
.icon {
    float: left;
    font-size: 24px;
    width: 30px;
}
.container {
    font-family: Arial;
    width: 700px;
    margin: auto;
    font-size: 13px;
    border: solid;
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
.left {
    float: left;
    padding: 30px;
    width: 185px;
    height: 720px;
    text-align: right;
    background-color: white;
}
.right {
    float: left;
    width: 425px;
    padding: 0px 30px 30px 0;
    height: 750px;
    background-color: white;
}
.flexr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    float: right;
}
.flexl {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    float: left;
}
.col {
    float: left;
}
.zero {
    margin: 0px;
}
.header {
    background-color: rgb(42, 42, 42);
    padding-top: 40px;
    width: 100%;
    height: 110px;
}
img { 
    width: 150px;
    height: 150px;
    margin-top: -80px;
    margin-right: 20px;
    border: solid white 10px;
    border-radius: 85px;
}
i {
    font-size: 32px;
}
h1 {
    color: white;
    margin-top: -20px;
    margin-left: 200px;
    text-transform: uppercase;
    width: 100px;
}
legend {
    color: white;
    margin-left: 50px;
    padding: 20px;
}
</style>