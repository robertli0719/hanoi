# 汉诺塔
### 向十年前教我递归函数的老师致敬
### 今天有雅兴写了一个JS版的汉诺塔演示程序，不到1K大。
### 可以直接复制粘贴如下代码到浏览器的console中运行查看结果：

```javascript
function f(t,e,n,i,o){X.fillStyle=t,X.fillRect(e,n,i,o)}function D(t,e){f("#0F0",t-3,20,6,200);for(var n=0;n<d[e].length;n++){var i=30*d[e][n],o=20,c=t-i/2,a=(10-n)*o,r=X.createLinearGradient(c,a,c+i,a+o);r.addColorStop(0,"#F00"),r.addColorStop(1,"#FFF"),f(r,c,a,i,o)}}function s(){f("#000",0,0,1e3,500),D(150,"a"),D(450,"b"),D(750,"c")}function m(t,e){ai.push(function(){d[e].push(d[t].pop()),s()})}function M(t,e,n,i){return 1==t?void m(e,i):(M(t-1,e,i,n),m(e,i),void M(t-1,n,e,i))}function r(){ai.length&&(ai.shift()(),setTimeout(r,1e3))}document.write('<canvas id="c" width="900" height="240"></canvas>');var X=document.getElementById("c").getContext("2d"),d={a:[9,8,7,6,5,4,3,2,1],b:[],c:[]},ai=[];M(9,"a","b","c"),s(),setTimeout(r,1e3);
```