import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        listData: [{
            nama: "Helmi Abdillah",
            alamat: "Semarang, Kec Mijen, Kel Mijen.",
            phone: "+62 0856-4156-9741",
            email: "helmi.abdil@gmail.com",
            hobi: ["Watch Animes", "Play Games", "Scrolling Memes", "Litsening to Music"],
            summary: "A normal useless student that have a busy life. Growing up with computer since 4 years old, and now i\"m using it to play video games and do work. Starting to learn basic programming since 5th grade then start properly learn program with c++ at 8th grade.(but then i dorpped out)",
            experience: ["Professional loner/ introvert","Experienced with photo and video editing","Half month learning C++","1,5 years of learning arduino uno","Already work as internet engineer"],
            birthday: "14 December 2005",
            web: "http://localhost/",
            work: "Yea i work there. started at the early pandemic, because i have nothing to do and just playing video games for the whole days, i was just trying real work enviroment, but my father wanted me to work more and play less.",
            ps: "PRIMARY SCHOOL JATIBARANG 02",
            jhs: "JUNIOR HIGH SCHOOL 23 SEMARANG",
            location: "Semarang Indonesia"
        }]
    },
    mutations: {

    },
    actions: {

    }
})