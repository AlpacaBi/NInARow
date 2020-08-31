//N子棋
class NInARow {
    constructor(dom) {
        this.dom = dom
    }

    // 设置棋格数量
    set N(num) {
        this.num = num
    }

    // 设置棋格大小
    set cellSize(size) {
        this.size = size
    }

    // 设置AI开关状态
    set AI(bool) {
        this.AISwitch = bool
    }

    // 获取棋子图像
    get flagIcon(){
        return this.flagMap.get(this.flag)
    }

    // 下棋
    move(x, y) {
        let part = document.getElementById(`gobang${x}${y}`)
        part.innerText = this.flagIcon
        this.pattren[y][x] = this.flag
        
        if(this.check(this.pattren)){
            alert(`${this.flagIcon} is winner`)
            return
        }

        this.flag = 3 - this.flag

        if(this.AISwitch) this.AIMove(this.pattren)

    }

    AIMove(pattern){
        let choice = this.bestChoice(pattern, this.flag)
        console.log(choice)
        if(choice.point){
            let [x, y] = choice.point
            let part = document.getElementById(`gobang${x}${y}`)
            part.innerText = this.flagIcon
            this.pattren[y][x] = this.flag
        }
        if(this.check(this.pattren)){
            alert(`${this.flagIcon} is winner`)
        }

        this.flag = 3 - this.flag

    }

    // 检查是否获胜
    check(pattren) {
        let ret
        // 判断行
        for(let i = 0; i<this.num; i++){
            if(this.isAllEqual(pattren[i])) return true
        }
        // 判断列
        for(let i = 0; i<this.num; i++){
            ret = []
            for(let j = 0; j<this.num; j++){
                ret.push(pattren[j][i])
            }
            if(this.isAllEqual(ret)) return true
        }
        // 判断正斜
        ret = []
        for(let i = 0; i<this.num; i++){
            ret.push(pattren[i][i])
        }
        if(this.isAllEqual(ret)) return true
        // 判断反斜
        ret = []
        for(let i = 0; i<this.num; i++){
            ret.push(pattren[i][this.num-i-1])
        }
        if(this.isAllEqual(ret)) return true
        // 上面4个都没return true，最后只能false了
        return false
    }

    // 辅助函数，判断数组里面的元素是否一样
    isAllEqual(array) {
        return new Set(array).size == 1 && array.reduce((total, item)=> total+item, 0) != 0
    }

    willWin(pattren, flag) {
        for(let i = 0; i < this.num; i++){
            for(let j = 0; j < this.num; j++){
                if(pattren[i][j]){
                    continue
                }
                let tmp = this.clone(pattren)
                tmp[i][j] = flag
                if(this.check(tmp)){
                    return [j, i]
                }
            }
        }
        return null
    }

    clone(obj) {
        return JSON.parse(JSON.stringify(obj))
    }

    bestChoice(pattren, flag){
        
        let p = null
        if(p = this.willWin(pattren, flag)){
            return {
                point: p,
                result: 1
            }
        }
    
        let result = -1
        let point = null
        outer: for(let i = 0; i < this.num; i++){
            for(let j = 0; j < this.num; j++){
                if(pattren[i][j]){
                    continue
                }
                let tmp = this.clone(pattren)
                tmp[i][j] = flag;
                let r = this.bestChoice(tmp, 3-flag).result
                this.count++
                console.log(this.count)

                if(-r >= result){
                    result = -r
                    point = [j, i]
                }

            }

        }

        return {
            point: point,
            result: point ? result:0
        }
    }

    // 渲染棋盘并开始游戏！！！
    start() {

        // 游戏欢迎语！！！
        console.log("%c ", "background: url(https://alpaca.cdn.bcebos.com/blackpeople.gif) no-repeat center;padding-left:640px;padding-bottom: 242px;")
        console.log('%c棺材一抬,世间白来','font-size:20px;color:white;background:black')
        console.log('%c脚一滑,人一叫,孟婆端汤阎王笑','font-size:20px;color:white;background:black')
        console.log('%c眼一闭,布一盖,亲戚朋友等上菜','font-size:20px;color:white;background:black')
        console.log('%c棺一抬,土一埋,一人一句古德拜','font-size:20px;color:white;background:black')

        // 使用Map结构来储存⭕和❌就不用频繁if了
        this.flagMap = new Map()
        this.flagMap.set(1,"⭕")
        this.flagMap.set(2,"❌")

        // 代表当前的棋子（1=>⭕  2=>❌）
        this.flag = 1

        // 棋盘数据结构初始化
        this.pattren = []

        let num = this.num  || 3
        let size = this.size || 100

        // 下面就没啥好说的了，根据传过来的数据进行棋盘的渲染,顺便给每个棋格绑定点击事件
        let dom = document.getElementById(this.dom)

        for(let j = 0; j < num; j++){
            this.pattren.push([])
        }

        for(let i = 0; i < num; i++){
            var row = document.createElement("div")
            dom.appendChild(row)
            this.pattren.forEach(item => item.push(0))
            
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