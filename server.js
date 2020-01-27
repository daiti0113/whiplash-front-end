const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Middleware(前処理)
server.use(middlewares)
server.use((req, res, next) => {
    // テスト用のモックなので、HTTPメソッドは全てGETに変えて、正常終了したようにレスポンスを返す。
    if (req.method === 'POST' || req.method === 'PUT') {
        req.method = 'GET' // GETに偽装
    }
    req.url = req.url.replace(/\./g, "")
    console.log(req.url)
    next()
})

// Routes
server.use(jsonServer.rewriter({
    "/api/*": "/$1",
    "/posts\\?id=:id": "/posts/:id",
}))
server.use(router)

// 後処理
router.render = function (req, res) {
    // db.jsonの返却値に"type":"string"がある場合、"data"の内容を文字列として返却する
    if (res.locals.data.type && res.locals.data.type === 'string') {
        res.send(res.locals.data.name)
    } else {
        res.send(res.locals.data)
    }
}

// モックサーバ起動
server.listen(3000, () => {
    console.log('JSON Server is running')
})
