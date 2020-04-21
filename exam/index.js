
const Koa = require('koa')
const app = new Koa()

const kg = (num)=>{
    let nbsp = ""
    for( i=0; i<=num ; i++){
        nbsp += "&nbsp;"
    }
    return nbsp
}

const fn1 = async (ctx, next)=>{
    ctx.body = `<h1>请求：第一次</h1>`
    await next()
    ctx.body += `<h1>响应：第一次</h1>`
}

const fn2 = async (ctx, next)=>{
    ctx.body += `<h1>${kg(2)}请求：第二次</h1>`
    await next()
    ctx.body += `<h1>${kg(2)}响应：第二次</h1>`
}

const fn3 = async (ctx, next)=>{
    ctx.body += `<h1>${kg(4)}请求：第三次</h1>`
    await next()
    ctx.body += `<h1>${kg(4)}响应：第三次</h1>`
}

app.use(fn1)

app.use(fn2)

app.use(fn3)

app.use(async (ctx, next)=>{
    ctx.body += `<h1 style="color:red">${kg(6)}koa重要逻辑</h1>`
    await next()
})


app.listen(8989, ()=>{
    console.log('成功')
})