# N字棋
一个棋类小游戏，用户可以通过设置N参数生成N字棋游戏（极客大学前端训练营作业） 

## Quick setup
我把库放到自己的cdn上了，直接```<script>```引用就好了  
（我不会告诉你打开控制台有彩蛋👨🏿‍✈️👨🏿‍✈️👨🏿‍✈️👨🏿‍✈️👨🏿‍✈️👨🏿‍✈️👨🏿‍✈️）

```html
<script src="https://cdn.alpaca.run/js/NInARow.js" charset="utf-8"></script>
```

#### Demo
在线地址：  
[`https://cdn.alpaca.run/js/ninarow.html`](https://cdn.alpaca.run/js/ninarow.html)

```html
<html>
    <header>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </header>

    <body>

        <h3>N子棋demo</h1>
        <div>ps:当N>=4的时候，不建议开启AI功能，因为ai算法没优化好棋格数量大会递归到奔溃</div><br/>
        <div id="app"></div>
        
        <script src="https://cdn.alpaca.run/js/NInARow.js" charset="utf-8"></script>
        <script>
            // 生成棋盘对象
            const game = new NInARow("app")
            // 设置棋格数量
            game.N = 5
            // 设置棋格大小
            game.cellSize = 150
            // 设置AI
            game.AI = false
            // 渲染棋盘并开始游戏！！！
            game.start()
        </script>

    </body>
</html>

```

## API

### Object

首先必须得new一个`NInARow`对象，如下

```javascript
const game = new NInARow('app');
```

### Getters and Setters

Example setters:

```javascript
game.N = 5; // 设置棋格数量（5*5）
game.cellSize = 150; // // 设置棋格大小
```



| Property             | Getter | Setter | Description  |
| -------------------- | ------ | ------ | ------------ |
| `N`            | -      | ✓      | 设置棋格数量  |
| `cellSize`            | -      | ✓      | 设置棋格大小 |
| `AI`            | -      | ✓      | 设置AI开关状态  |


### Methods

Example method use:

```javascript
game.start(); // 渲染棋盘并开始游戏！！！
```

| Method                     | Parameters       | Description                                                                                                |
| -------------------------- | ---------------- | ---------------------- |
| `start()`                | -             | 渲染棋盘并开始游戏！！！       |

## Todo List  

☑棋盘的绘制和下棋基本逻辑

☑增加胜利检测 

☑增加AI  

⬜优化AI算法（棋格数量多的时候不至于递归到奔溃） 

⬜增加获胜条件设置（例如可在5*5的棋盘里使用三子棋的规则）  

⬜不限于棋盘为正方形（例如可以设置5x8的棋盘）  



