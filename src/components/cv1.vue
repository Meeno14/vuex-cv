<template>
    <div class="container row">
        <div class="left" v-for="data in agenda" :key="data">
            <h1>{{data.nama}}</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_xDbA_V7W8KUCIM7keam8WJhG_hd6DVwTg&usqp=CAU">
            <h2>Contact</h2><hr>
            <p><b>Address:</b><br>
            {{data.alamat}}</p>
            <p><b>Phone:</b><br>
            {{data.phone}}</p>
            <p><b>Email:</b><br>
            {{data.email}}</p><br>
            <h2>Languages</h2><hr>
            <p>English<br>
            Indonesia<br>
            Javanese</p><br>
            <h2>Hobies</h2><hr>
             <ul>
                <li>{{data.hobi[0]}}</li>
                <li>{{data.hobi[1]}}</li>
                <li>{{data.hobi[2]}}</li>
                <li>{{data.hobi[3]}}</li>
            </ul>
        </div>
        <div class="right" v-for="data in agenda" :key="data">
            <h2>Summary</h2><hr>
            <p>{{data.summary}}</p><br>
            <h2>Skill Highlight</h2><hr>
            <ul class="flex">   
                <div>
                    <li>Forgetful</li>
                    <li>Unreliable</li>
                    <li>Thinking logically</li><br>
                </div>
                <div>
                    <li>Not Creative</li>
                    <li>Always Give up</li>
                </div>
            </ul>
            <h2>Experience</h2><hr>
            <p class="gap"><b>Web Developer</b> - Soon</p>
            <ul>
                <li>{{data.experience[0]}}</li>
                <li>{{data.experience[1]}}</li>
                <li>{{data.experience[2]}}</li>
                <li>{{data.experience[3]}}</li>
                <li>{{data.experience[4]}}</li>
            </ul>
            <h2>Education</h2><hr>
            <p><b>SDN</b> Jatibarang 02, <b>SMPN</b> 23 Semarang</p>
            <h2>Certification</h2><hr>
            <p>Certified Meme Stealer</p>
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
.container {
    font-family: Arial;
    width: 700px;
    margin: auto;
    border: solid
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
.flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.gap {
    margin-bottom: -10px;
}
.left {
    float: left;
    background-color: lightgray;
    padding: 30px;
    width: 185px;
    height: 900px;
}
.right {
    float: left;
    width: 395px;
    padding: 30px;
    background-color: white;
    height: 900px;
}
img { 
    width: 140px;
    height: 150px;
}
</style>