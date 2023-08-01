function resetUserInfo(data) {//将用户信息表转为树结构
    let parent = data.filter(p => p.pid === 0),
        children = data.filter(c => c.pid !== 0)
    dataToTree(parent, children)

    function dataToTree(parent, children) {
        parent.map(p => {
            children.map((c, i) => {
                if (c.pid === p.id) {
                    let _c = JSON.parse(JSON.stringify(children))
                    _c.splice(i, 1)
                    dataToTree([c], _c)//当前c为对象，使用[]转换为数组
                    if (p.children) {
                        p.children.push(c)
                    } else {
                        p.children = [c]
                    }
                }
            })
        })
    }

    return parent
}

function generatorRoutes(userRouters) {//重构用户权限路由
    let newRouters=userRouters.map(r=>{
        let routes={
            path:r.path,
            name:r.name,
            component:()=>import(`@/views/${r.name}`)
        }
        if(r.children){
            routes.children=generatorRoutes(r.children)
        }
        return routes
    })
    return newRouters
}

export {resetUserInfo, generatorRoutes}