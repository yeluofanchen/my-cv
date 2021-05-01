let html = document.querySelector("#html");
let style = document.querySelector("#style");
let div = document.querySelector("#div1");
let string = `/* 你好, 我叫阿骏
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个 div
 **/
#div1{
    height: 200px;
    width: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先, 把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
} 
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
/* 先是上面黑色的小球 */
#div1::before{
  width: 100px;
  height: 100px;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  background: #000;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
}
/* 接着是下方白色的小球 */
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 0, 0, 1) 100%
    );
}
`;
let string2 = "";
// console.log(string.length);
let n = 0;

let step = () => {
  setTimeout(() => {
    // console.log(n);
    // string[n] === "\n" ? (string2 += "<br>") : (string2 += string[n]);
    // string2 += string[n] === "\n" ? "<br>" : string[n];
    // 加括号易读版本
    // string2 += (string[n] === "\n" ? "<br>" : string[n])
    if (string[n] === "\n") {
      // 如果是回车, 就不照搬到 string2 里面,
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp"; // 在实际的代码中, 就是加入了4个&nbsp
    } else {
      // 如果不是回车, 就照搬过来
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 如果 n 不是最后的一个, 就继续
      n += 1;
      step();
    }
  }, 0);
};

step(); // 1=>2
