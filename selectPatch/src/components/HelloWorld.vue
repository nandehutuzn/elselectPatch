<template>
    <div class="hello">
        <el-form ref="loginForm" :model="userInfo" label-width="100px" :rules="rules"
            style="margin-top:10px;margin-right:35px; padding-top: 50px;font-weight:bold;width:425px;"> 
            <el-form-item label="用户名" prop="userName">
                <el-select v-blur-set-value ref="select" v-model="userInfo.userName" filterable 
                    allow-create placeholder="请输入用户名" clearable style="width:100%;">
                    <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input type="password" v-model="userInfo.passWord" clearable></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" style="width:425px; margin-right:0px" @click="login">登录</el-button>
        <p>{{loginMessage}}</p>
    </div>
</template>

<script>
import blurSetValue from '../directives/blurSetValue.js'

export default {
  name: 'HelloWorld',
  directives:{blurSetValue},
  data () {
      let checkName = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        let checkPassword = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
    return {
      userInfo:{
          userName: '',
          passWord: '',
      },
      options:['admin', 'test1', 'test2'],
      loginMessage: '',
      rules:{
        userName: [{validator: checkName, trigger: 'blur'}],
        passWord: [{validator: checkPassword, trigger: 'blur'}],
      }
    }
  },
  methods:{
      login(){
          this.$refs['loginForm'].validate(async (valid) => {
                if(valid) { // 输入项验证成功
                    let msg = '登录信息: '
                    for(let key in this.userInfo){
                        msg += `${key}->${this.userInfo[key]} `
                    }
                    this.loginMessage = msg
                } else {
                    return false;
                }
            });
      }
  },
}
</script>
<style scoped>
.hello{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

