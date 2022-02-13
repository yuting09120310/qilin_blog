let data = [
    {
        time:"2022.02.03",
        title:"達摩不倒翁",
        img:"./img/達母.jpg",
        content:"達摩不倒翁基本是作為一種擺設和祈願的東西，在日本非常的受歡迎，人們總會用達摩不倒翁來許願、祈福，不僅如此達摩不倒翁還象徵著人可以不怕挫折；會搖晃，但是推不倒的精神呦。",
    },
    {
        time:"2022.02.07",
        title:"萬獸之王",
        img:"./img/精.png",
        content:"第一次嘗試用電繪板畫圖，老實說還真的蠻不習慣的，也讓我深深的了解到~ 繪圖! 不光只靠滑鼠，本身手繪的功力也須提升才行~以下是我去年12月份用電繪板所繪製出來的老虎，當然還有很多進步的空間，希望未來能夠更加進步，繼續創作更多作品給大家。"
    },
    {
        time:"2022.02.07",
        title:"瞌睡蟲",
        img:"./img/怪獸.jpg",
        content:"它是一隻保有一顆純真的心，又懷抱著夢想的怪獸!藉由這張圖來勉勵自己，小時候 你! 可以保有天真、保有理想，但長大後才知道原來現實與理想並不能畫上等號，往往自己想出來的與真正去完成的，固然會有所差異，所以凡事做一件事情的時候一定要以積極、樂觀的態度去面對，重點是要持之以恆並且盡力地去克服它，若只有三分鐘熱度，遲早會被自己的傭懶給打敗~"
    },
    {
        time:"2022.02.07",
        title:"2022虎年賀圖-虎財神迎新年",
        img:"./img/2022虎年賀圖.jpg",
        content:"有老虎幻化成財神爺來向大家拜個好年。"
    },
    {
        time:"2022.02.07",
        title:"2022環球深海社團賀圖-招財虎來寶",
        img:"./img/深海發光魚社團2022賀圖.jpg",
        content:"設計虎年Q版吉祥物，手中還拿著金元寶，整體也意味著希望大家在新的一年都能夠財運滾滾，賺大錢。"
    },
    {
        time:"2022.02.07",
        title:"個人形象LOGO",
        img:"./img/名片LOGO.jpg",
        content:"隱隱約約地記得這好像是大一電繪課時畫的~當時老師請我們製作屬於自己的名片，上面要有代表自己形象的logo!哈哈!其實現在看起來，我也不知道當時的我在畫甚麼?唯一知道的是這好像是用我的英文名字所演化出來的logo!"
    },
    
]


const wrapper = Vue.createApp({
    data(){
        let data2=[],
        link = ""
        return{
            data2:data,
            link
        }
    },
    methods: {
        link_handlr(item){
            let img_link = item.img.split('.');
            // console.log(img_link)
            let img_link2 = img_link[1] + "." + img_link[2]
            console.log(img_link2)
            let new_link = "https://wsxc147023527.github.io/blog" +  img_link2
            document.location.href=new_link;
        }
    },
})

wrapper.mount('#wrapper');