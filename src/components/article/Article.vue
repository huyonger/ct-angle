<template>
  <div id="article">
    <div class="container">
      <div id="wrapper" class="typo typo-selection">
        <h1>编程范式</h1>
        <h2>1.三大编程范式</h2>
        <blockquote>
          <ul>
            <li>面向过程编程范式</li>
            <li>面向对象编程范式</li>
            <li>函数式编程</li>

          </ul>
          <p>&nbsp;</p>
          <ul>
            <li>命令式编程</li>
            <li>声明式编程</li>
            <li>函数式编程</li>

          </ul>
        </blockquote>
        <p>&nbsp;</p>
        <h2>1.面向过程编程范式</h2>
        <blockquote><p>面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了</p>
        </blockquote>
        <h2>2.面向对象编程方式</h2>
        <blockquote><p>面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。</p>
        </blockquote>
        <h2>3.函数式编程</h2>
        <blockquote>
          <ul>
            <li>函数是一等公民</li>
            <li>只有纯的，没有副作用的函数，才是合格函数。</li>

          </ul>
        </blockquote>
        <h3>3.1纯函数</h3>
        <blockquote><p>对于相同的输入，永远会得到相同的结果，并且没有任何副作用，也不依赖外部环境。</p>
          <p>下面：slice就是纯函数 splice不是纯函数</p>
          <pre><code class='language-javascript' lang='javascript'>var arr = [1,2,3,4,5];

// Array.slice是纯函数，因为它没有副作用，对于固定的输入，输出总是固定的
// 可以，这很函数式
xs.slice(0,3);
//=&gt; [1,2,3]
xs.slice(0,3);
//=&gt; [1,2,3]

// Array.splice是不纯的，它有副作用，对于固定的输入，输出不是固定的
// 这不函数式
xs.splice(0,3);
//=&gt; [1,2,3]
xs.splice(0,3);
//=&gt; [4,5]
xs.splice(0,3);
//=&gt; []
</code></pre>
        </blockquote>
        <h3>3.2柯里化</h3>
        <blockquote><p>传递给函数一部分参数调用它，让它返回一个函数去处理剩下的参数。</p>
          <pre><code class='language-javascript' lang='javascript'>//比较容易读懂的ES5写法
var add = function(x){
 return function(y){
     return x + y
 }
}

//ES6写法，也是比较正统的函数式写法
var add = x =&gt; (y =&gt; x + y);

//试试看
var add2 = add(2);
var add200 = add(200);

add2(2); // =&gt;4
add200(50); // =&gt;250
</code></pre>
        </blockquote>
        <h3>3.3组合函数</h3>
        <blockquote><p>能够把任意数量的纯函数结合在一起。</p>
          <blockquote><pre><code class='language-javascript' lang='javascript'>//两个函数的组合
var compose = function(f, g) {
 return function(x) {
     return f(g(x));
 };
};

//或者
var compose = (f, g) =&gt; (x =&gt; f(g(x)));

var add1 = x =&gt; x + 1;
var mul5 = x =&gt; x * 5;

compose(mul5, add1)(2);
// =&gt;15

var first = arr =&gt; arr[0];
var reverse = arr =&gt; arr.reverse();

var last = compose(first, reverse);

last([1,2,3,4,5]);
// =&gt;5
</code></pre>
          </blockquote>
        </blockquote>
        <h3>3.4 point free</h3>
        <blockquote>
          <ul>
            <li><p>首先将对象自带的方法转成纯函数。</p>
              <blockquote><pre><code class='language-javascript' lang='javascript'>var map = (f, arr) =&gt; arr.map(f);

var toUpperCase = word =&gt; word.toUpperCase();
</code></pre>
              </blockquote>
            </li>
            <li><p>通过柯里化和函数组合，将纯虚函数结合起来。</p>
              <pre><code class='language-javascript' lang='javascript'>var toUpperCase = word =&gt; word.toUpperCase();
var split = x =&gt; (str =&gt; str.split(x));

var f = compose(split(&#39; &#39;), toUpperCase);

f(&quot;abcd efgh&quot;);
// =&gt;[&quot;ABCD&quot;, &quot;EFGH&quot;]
</code></pre>
            </li>

          </ul>
        </blockquote>
        <h2>4.命令式编程</h2>
        <blockquote><p>我们通过编写一条又一条指令去让计算机执行一些动作，这其中一般都会涉及到很多繁杂的细节。</p>
          <pre><code class='language-javascript' lang='javascript'>//命令式
var CEOs = [];
for(var i = 0; i &lt; companies.length; i++){
 CEOs.push(companies[i].CEO)
}
</code></pre>
          <p>&nbsp;</p>
        </blockquote>
        <h2>5.声明式编程</h2>
        <blockquote><p>我们通过写表达式的方式来声明我们想干什么，而不是通过一步一步的指示。</p>
          <pre><code class='language-javascript' lang='javascript'>
//声明式
var CEOs = companies.map(c =&gt; c.CEO);
</code></pre>
        </blockquote>
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article"
  }
</script>

<style scoped>
  @import "../../assets/css/typo.css";
  @import "../../assets/css/common.css";
</style>
