const Koa = require('koa')
const app = new Koa()

const path = require('path')

const static = require('koa-static') //中间件 处理静态资源
app.use(static(path.join(process.cwd(),'./public/')))

const router = require('koa-router')() //处理路由
app.use(router.routes())
app.use(router.allowedMethods())

const query = require('./DB/index')
// app.use(async (ctx,next)=>{
//     if(ctx.path === '/userlist'){

//     }else if (ctx.path === '/add'){

// }
// })
//成员列表
router.get('/userlist',async (ctx) => {
    let data = await query()
    ctx.body= {
        code:1,
        data
    }
})
router.get('/detail',async (ctx) => {
    ctx.body= '详情'
})

app.listen(3000,()=>{
    console.log('服务开启成功')
})