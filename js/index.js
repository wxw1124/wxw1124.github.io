
const json = [
    { id: 1, name: "张洪铭", href: "" },
    { id: 2, name: "庄子君", href: "" },
    { id: 3, name: "黄佳佳", href: "" },
    { id: 4, name: "黄赫铭", href: "" },
    { id: 5, name: "刘浩彬", href: "" },
    { id: 6, name: "刘思航", href: "" },
    { id: 7, name: "王泽漫", href: "" },
    { id: 8, name: "陈坤",  href: "" },
    { id: 9, name: "刘思博", href: "" },
    { id: 10, name: "李婷婷", href: "" },
    { id: 11, name: "罗伟超", href: "" },
    { id: 12, name: "杨梓蕾", href: "" },
    { id: 13, name: "林裕烨", href: "" },
    { id: 14, name: "周雪媚", href: "" },
    { id: 15, name: "林雅婷", href: "" },
    { id: 16, name: "郭浩杨", href: "" },
    { id: 17, name: "崔竣凯", href: "" },
    { id: 18, name: "熊情瑜", href: "" },
    { id: 19, name: "李寒星", href: "" },
    { id: 20, name: "黄慧贤", href: "" },
    { id: 21, name: "黄文境", href: "" },
    { id: 22, name: "廖文涛", href: "" },
    { id: 23, name: "邱培楠", href: "" },
    { id: 24, name: "梁家宝", href: "" },
    { id: 25, name: "曾亮懿", href: "" },
    { id: 26, name: "童梓朋", href: "" },
    { id: 27, name: "陈耿豪", href: "" },
    { id: 28, name: "陈冠宇", href: "" },
    { id: 29, name: "黄增雄", href: "" },
    { id: 30, name: "杨彩玉", href: "" },
    { id: 31, name: "李晔",  href: "" },
    { id: 32, name: "范杰豪", href: "" },
    { id: 33, name: "卢淑玲", href: "" },
    { id: 34, name: "吴羿瑾", href: "" },
    { id: 35, name: "连志威", href: "" },
    { id: 36, name: "黄家铭", href: "" },
    { id: 37, name: "胡美玲", href: "" },
    { id: 38, name: "朱声宁", href: "https://zhuzhunb88.github.io" },
    { id: 39, name: "敖琪涛", href: "" },
    { id: 40, name: "温炫威", href: "" },
    { id: 41, name: "靳长辉", href: "" },
    { id: 42, name: "陈锐锋", href: "" },
]

let str = ''
for (let i = 0; i < json.length; i++) {
    let href = ''
    if (json[i].href == "") {
            href = "javascript:;"
    } else {
        href = json[i].href
    }


    str = str + `<div class="seat">
                    <a href="${href}">
                        ${json[i].name}
                    </a>
                 </div>`
}
document.querySelector('.jiaoshi').innerHTML = str;
