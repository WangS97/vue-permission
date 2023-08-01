var express = require('express');
var router = express.Router();
var users = require('../data/user')
var routers = require('../data/routers')

/* GET user permission. */
router.post('/userData', async (req, res) => {
    const {uid} = await req.body//将前端传来的用户id解构出来
    console.log(uid)
    if (uid) {//如果用户id存在
        let userRouteInfo = []//创建一个空的权限数组用来接收权限
        const userInfo = users.filter(u => u.uid === uid)[0]//将相应id的用户筛选出来
        userInfo.auth.map(rid => {//遍历该用户的权限表和总的权限表对比,将该用户所对应的权限传给前端
            routers.map(r => {
                if (r.id === rid) {
                    userRouteInfo.push(r)
                }
            })
        })
        res.send({
            status:200,
            data:userRouteInfo
        })
    } else {
        res.send({
            status:300
        })
    }

});

module.exports = router;
