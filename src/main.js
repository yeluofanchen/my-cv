let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*你好, 我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color:red;
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
      string2 += "&nbsp";
    } else {
      // 如果不是回车, 就照搬过来
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      // 如果 n 不是最后的一个, 就继续
      n += 1;
      step();
    }
  }, 100);
};

step(); // 1=>2
