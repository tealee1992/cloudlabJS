<template>
    <div class="jumbotron">
        <div v-if="container.status === 'none'" class="form-horizontal">
            <div class="form-group">
                <div class="col-sm-12">
                    <button class="btn btn-primary  glyphicon glyphicon-off" @click="runContainer"></button>
                </div>
                <p class="desc">
                    <strong>
                        Deploy a new experiment environment for yourself.
                    </strong>
                </p>                
            </div>
        </div>

        <div v-else-if="container.status === 'created'" class="form-horizontal">
            <div class="form-group">
                <div class="col-sm-12">
                    <button class="btn btn-primary glyphicon glyphicon-remove" @click="rmContainer"></button>
                </div>
                <p class="desc">
                    <strong>
                        Destroy this environment if you no longer uses it.
                    </strong>
                </p>                  
            </div>
            <div class="form-group">
                <div class="col-sm-12">
                    <button class="btn btn-primary glyphicon glyphicon-floppy-save" @click="saveContainer"></button>
                </div>
                <p class="desc">
                    <strong>
                        Save this environment if you want to use it later.
                    </strong>
                </p>                
            </div>
            <p class="p" v-if="labUrl">
                <span>去实验</span>
                <a class="glyphicon glyphicon-share-alt" target="_blank" v-bind:href="labUrl"></a>

            </p>
        </div> 
        <div v-else-if="container.status === 'saved'" class="form-horizontal">
            <div class="form-group">
                <div class="col-sm-12">
                    <button class="btn btn-primary  glyphicon glyphicon-floppy-open" @click="restoreContainer"></button>
                </div>
                <p class="desc">
                    <strong>
                        Restore your environment.
                    </strong>
                </p>                
            </div>
        </div>
    </div>       
</template>
<script>
import { Create }  from '../../lib/vueHelper'
import { Init_student }  from '../../lib/vueHelper'
import { Save }  from '../../lib/vueHelper'
import { Delete }  from '../../lib/vueHelper'
import { Reload }  from '../../lib/vueHelper'
import store from '@/vuex/store'
import Promise from 'promise-polyfill'
import "regenerator-runtime/runtime"
    export default {
        data() {
            return {
                labUrl: "http://www.baidu.com",
                container: {
                    status: 'none',
                }
            }
        },
        created: function() {
            
            async function initialize () {
                try{
                    const authUser = JSON.parse(window.localStorage.getItem('User'))
                    let data = {
                        'userid': authUser.data.username,
                    }                    
                    await Init_student(this,data)
                }catch(err) {
                    console.log(err)
                }
            }
            initialize().then(()=>{
                console.log("before:"+this.container.status)
                this.labUrl=store.state.labUrl
                this.container.status=store.state.conStatus
                console.log("after:"+this.container.status)
            })
        },        
        methods: {
            async runContainer() {
                    try{
                        const authUser = JSON.parse(window.localStorage.getItem('User'))
                        let data = {
                            'userid': authUser.data.username,
                        }
                        console.log(data.userid)
                        await Create(this,data)
                        console.log("student:"+store.state.labUrl)

                        this.labUrl=store.state.labUrl
                        //要在数据行为结束后改变状态
                        this.container.status='created';                        
                    }catch(err) {
                        console.log("await错误")
                        console.log(err)
                    }
            },
            async saveContainer() {
                    try{
                        const authUser = JSON.parse(window.localStorage.getItem('User'))
                        let data = {
                            'userid': authUser.data.username,
                        }
                        console.log(data.userid)
                        await Save(this,data)
                        
                        //要在数据行为结束后改变状态
                        this.container.status='saved';                       
                    }catch(err) {
                        console.log("await错误")
                        console.log(err)
                    }              
            },
            async rmContainer() {
                    try{
                        const authUser = JSON.parse(window.localStorage.getItem('User'))
                        let data = {
                            'userid': authUser.data.username,
                        }
                        console.log(data.userid)
                        await Delete(this,data)
                        
                        //要在数据行为结束后改变状态
                        this.container.status='none';                       
                    }catch(err) {
                        console.log("await错误")
                        console.log(err)
                    }                
            },
            async restoreContainer() {
                    try{
                        const authUser = JSON.parse(window.localStorage.getItem('User'))
                        let data = {
                            'userid': authUser.data.username,
                        }
                        console.log(data.userid)
                        await Reload(this,data)
                        
                        //要在数据行为结束后改变状态
                        this.container.status='created';                       
                    }catch(err) {
                        console.log("await错误")
                        console.log(err)
                    }                
            },
        }
    }
</script>
<style type="text/css">
    .desc {
        margin-left: 15px;
        margin-top: 50px;
    }
</style>