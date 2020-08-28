 //N子棋
 class NInARow {
    constructor(dom) {
         this.dom = dom
    }

    // 设置棋格数量
    setN(num) {
         this.num = num
    }

    // 设置棋格大小
    setSize(size) {
         this.size = size
    }

    // 下棋
    move(x, y) {
         var part = document.getElementById(`gobang${x}${y}`)
         part.innerText = this.flagMap.get(this.flag)
         this.parrten[y][x] = this.flag
         
         if(this.check()){
              alert(`${this.flagMap.get(this.flag)} is winner`)
         }

         this.flag = 3 - this.flag
    }

    // 检查是否获胜
    check() {
         let ret
         // 判断行
         for(let i = 0; i<this.num; i++){
              if(this.isAllEqual(this.parrten[i])) return true
         }
         // 判断列
         for(let i = 0; i<this.num; i++){
              ret = []
              for(let j = 0; j<this.num; j++){
                   ret.push(this.parrten[j][i])
              }
              if(this.isAllEqual(ret)) return true
         }
         // 判断正斜
         ret = []
         for(let i = 0; i<this.num; i++){
              ret.push(this.parrten[i][i])
         }
         if(this.isAllEqual(ret)) return true
         // 判断反斜
         ret = []
         for(let i = 0; i<this.num; i++){
              ret.push(this.parrten[i][this.num-i-1])
         }
         if(this.isAllEqual(ret)) return true
         // 上面4个都没return true，最后只能false了
         return false
    }

    // 辅助函数，判断数组里面的元素是否一样
    isAllEqual(array) {
         return new Set(array).size == 1 && array.reduce((total, item)=> total+item, 0) != 0
    }

    // 初始化数据并渲染
    render() {

         // 使用Map结构来储存⭕和❌就不用频繁if了
         this.flagMap = new Map()
         this.flagMap.set(1,"⭕")
         this.flagMap.set(2,"❌")

         // 代表当前的棋子（1=>⭕  2=>❌）
         this.flag = 1

         // 棋盘数据结构初始化
         this.parrten = []

         let num = this.num  || 3
         let size = this.size || 100

         // 下面就没啥好说的了，根据传过来的数据进行棋盘的渲染,顺便给每个棋格绑定点击事件
         let dom = document.getElementById(this.dom)

         for(let j = 0; j < num; j++){
              this.parrten.push([])
         }

         for(let i = 0; i < num; i++){
              var row = document.createElement("div")
              dom.appendChild(row)
              this.parrten.forEach(item => item.push(0))
              
              for(let j = 0; j < num; j++){
                   var column = document.createElement("div")

                   // 给每个棋格加一个独一无二的id
                   column.setAttribute('id',`gobang${j}${i}`);
                   // 增加点击事情，并且只能点一次
                   column.addEventListener("click", () => this.move(j,i), {once: true})

                   // 设置棋格样式
                   column.style.display = "inline-block"
                   column.style.height = `${size}px`
                   column.style.width = `${size}px`
                   column.style.lineHeight = `${size}px`
                   column.style.fontSize = `${size * 0.6}px`
                   column.style.textAlign = "center"
                   column.style.border = "1px solid black"
                   column.style.verticalAlign = "middle"

                   row.appendChild(column)
              }
         }
    }

}