# N字棋
一个棋类小游戏，用户可以通过设置N参数生成N字棋游戏（极客大学前端训练营作业） 

## Quick setup
```html
<div id="app"></div>

<script src="NInARow.js" charset="utf-8"></script>
<script>
    // 生成棋盘对象
    let game = new NInARow("app")

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
const player = new NInARow('app');
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


