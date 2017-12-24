<template>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <label>日期</label>
                <input type="date" class="form-control" v-model="timeEntry.date" placeholder="Date" /> </div>
            <div class="col-sm-6">
                <label>时间</label>
                <input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="Hours" /> </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label>备注</label>
                <input type="text" class="form-control" v-model="timeEntry.comment" placeholder="Comment" /> </div>
        </div>
        <button class="btn btn-primary" @click="saveNewLog">保存</button>
        <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //模拟一个默认值 
            timeEntry: {
                user: {
                    name: '二哲',
                    email: 'kodo@forchange.cn',
                    image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
                }
            }
        }
    },
    methods: {
        // 添加新计划
        saveNewLog() {
            let timeEntry = this.timeEntry;

            console.log(timeEntry);
            // this.$dispatch('timeUpdate', timeEntry); 2.0取消了
            this.$emit('timeUpdate', timeEntry);
            // 下面不能这么写，这样将用户信息也清掉了，第二次之后会报错
            // this.timeEntry = {};
            // this.timeEntry.date = ''; 直接赋值也检查不到变化,需要用Vue.set 简单变通如下
            this.timeEntry = {
                user: {
                    name: '二哲',
                    email: 'kodo@forchange.cn',
                    image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
                }
            };

        }
    }
}
</script>