import Vue from 'vue';
import Vuex from 'vuex';
// 按需导入localStorage中的方法
import { addLocalGoods, deleteLocalGoods, getTotalCount, updateLocalGoods } from '../common/localStorage.js';
Vue.use(Vuex) //Vue.prototype.$store = xxx


const store = new Vuex.Store({
    // 要操作的数据
    state:{
        buyCount:0  //只把购物车商品的数量放在vuex中
    },
    getters:{   //为了给state中的数据提供一层包装 相当于计算属性也相当于过滤器
        getBuyCount(state){
            return state.buyCount === 0 ? getTotalCount() : state.buyCount
        }
    },
    mutations:{  //相当于 methods
        /**
         * state 就是上面的state，固定的
         * goods 载荷 参数 约定 goods = {goodsId:90,count:5}
         */
        addGoods(state,goods){  //最多只有两个参数
            state.buyCount = addLocalGoods(goods)
        },
        /**
         * state 就是上面的state，固定的
         * goods 载荷 参数 约定 goods = {goodsId:90,count:5}
         */
        updateGoods(state,goods){
            state.buyCount = updateLocalGoods(goods)
        },
        /**
         * 根据id删除商品
         * goodsId === 90
         */
        deleteGoods(state,goodsId){
            state.buyCount = deleteLocalGoods(goodsId)
        }
    }
})

export default store