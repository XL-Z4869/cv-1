let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
#div1 {
    border: 1px solid red;
    width: 200px;
    height:200px;
}
/*接下来把div变成一个八卦
首先把div变成一个圆
*/
#div1 {
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,5);
    border:none;
}
/*八卦是阴阳形成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个半球*/
#div1::before {
    width: 100px;
    height: 100px;
   
    top:0;
    left: 50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom:0;
    left: 50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
// string = string.replace(/\n/g, "<br>");
let string2 = '';
// console.log(string.length);
let n = 0;

// setInterval(() => {
//     n = n + 1;
//     demo.innerHTML = n;
// }, 1000);
let step = () => {
    setTimeout(() => {
        // console.log(n);
        // demo.innerHTML = string.substring(0, n);
        //如果是回车，就换行
        //如果不是回车，就照搬
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        // demo.innerHTML = string2;

        if (n < string.length - 1) {
            //n不是最后一个，就继续
            n += 1;
            step();
        }
    }, 10);
};
step();