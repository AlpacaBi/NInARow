# N字棋
一个棋类小游戏，用户可以通过设置N参数生成N字棋游戏（极客大学前端训练营作业） 

## Quick setup
我把库放到自己的cdn上了，直接```<script>```引用就好了

```html
<script src="https://alpaca.cdn.bcebos.com/js/NInARow.js" charset="utf-8"></script>
```

#### Demo
```html
<div id="app"></div>

<script src="https://alpaca.cdn.bcebos.com/js/NInARow.js" charset="utf-8"></script>
<script>
    // 生成棋盘对象
    const game = new NInARow("app")

    // 设置棋格数量
    game.setN(5)

    // 设置棋格大小
    game.setSize(100)

    // 渲染
    game.render()
</script>
```

## API

### Object

首先必须得new一个`NInARow`对象，如下

```javascript
const game = new NInARow('app');
```


### Methods

Example method use:

```javascript
game.setN(5); // 设置棋格数量(5x5)
game.setSize(100); // 设置棋格大小(每个棋格100px)
```

| Method                     | Parameters       | Description                                                                                                |
| -------------------------- | ---------------- | ---------------------- |
| `setN(num)`               | Number           | 设置棋格数量(num x num) |
| `setSize(num)`            | Number           | 设置棋格大小    |
| `render()`                | -             | 渲染棋盘       |

## Todo List
☑增加AI  

⬜增加获胜条件设置（例如可在5*5的棋盘里使用三子棋的规则）  

⬜不限于棋盘为正方形（例如可以设置5x8的棋盘）  



