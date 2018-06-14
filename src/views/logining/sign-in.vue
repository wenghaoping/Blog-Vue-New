<style lang="less" type="text/less">
    .logining {
      max-width: 300px;
      padding: 35px 35px 15px 35px;
    }
</style>

<template>
    <div class='logining relative position_auto'>
      <el-form :model="form" ref="form" status-icon :rules="rules">
        <h3>登陆入口</h3>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item
              label="用户名"
              prop="user_name">
              <el-input v-model="form.user_name" placeholder="用户名，登陆用，别忘记"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" round class="position_center_auto relative" @click="submit('form')">提交</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round class="position_center_auto relative" @click="$router.push({name: 'sign-up'})">注册</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
</template>

<script>
  import { checkPhoneNumberForElement } from 'assets/js/utils/validata';

  export default {
      name: 'index',
      data () {
          let validatePass = (rule, value, callback) => {
              if (value === '') {
                  callback(new Error('请输入密码'));
              } else {
                  if (this.form.checkPass !== '') {
                      this.$refs.form.validateField('checkPass');
                  }
                  callback();
              }
          };
          return {
              form: {
                  user_name: '',
                  password: '',
                  phone_number: ''
              },
              rules: {
                  user_name: [
                      { required: true, message: '请输入用户名', trigger: 'blur' },
                      {
                          min: 1, max: 40, message: '最大40个字符', trigger: 'blur'
                      }
                  ],
                  password: [
                      { required: true, message: '请输入密码', trigger: 'blur' },
                      { validator: validatePass, trigger: 'blur' }
                  ]
              },
              PhoneRule: { validator: checkPhoneNumberForElement, trigger: 'blur' } // 电话规则
          };
      },
      components: {},
      methods: {
          submit (formName) {
              this.$refs[formName].validate((valid) => {
                  if (valid) {
                      alert('submit!');
                  } else {
                      console.log('error submit!!');
                      return false;
                  }
              });
          }
      }
  };
</script>

