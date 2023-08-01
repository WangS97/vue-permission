import {getUserData} from "@/libs/api";
import {resetUserInfo} from "@/libs/utils";

export default {
    async setUserInfo({commit, state}) {//存储用户信息
        const userRouters = await getUserData(state.uid)//获取后端传来的用户信息
        const userAuth = resetUserInfo(userRouters)//将用户权限信息转为树结构
         commit('saveAuth',userAuth)
         commit('changePermission',true)
    }
}