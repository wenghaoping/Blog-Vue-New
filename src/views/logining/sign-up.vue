<style lang="less" type="text/less">
    .logining {
      max-width: 300px;
      padding: 35px 35px 15px 35px;
    }
</style>

<template>
    <div class='logining relative position_auto'>
      <el-form :model="form" ref="form" status-icon :rules="rules">
        <h3>注册入口</h3>
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
            <el-form-item label="密码" prop="pass_word">
              <el-input type="password" v-model="form.pass_word" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="确认密码" prop="check_pass">
              <el-input type="password" v-model="form.check_pass" auto-complete="off" placeholder="请确认密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item label="手机号" prop="phone_number" :rules="PhoneRule">
              <el-input v-model="form.phone_number" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" round class="position_center_auto relative" @click="submit('form')">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
</template>

<script>
  import { checkPhoneNumberForElement } from 'assets/js/utils/validata';
  import Api from 'api';

  export default {
      name: 'index',
      data () {
          let validatePass = (rule, value, callback) => {
              if (value === '') {
                  callback(new Error('请输入密码'));
              } else {
                  if (this.form.checkPass !== '') {
                      this.$refs.form.validateField('check_pass');
                  }
                  callback();
              }
          };
          let validatePass2 = (rule, value, callback) => {
              if (value === '') {
                  callback(new Error('请再次输入密码'));
              } else if (value !== this.form.pass_word) {
                  callback(new Error('两次输入密码不一致!'));
              } else {
                  callback();
              }
          };
          return {
              form: {
                  user_name: '',
                  pass_word: '',
                  phone_number: '',
                  check_pass: ''
              },
              rules: {
                  user_name: [
                      { required: true, message: '请输入用户名', trigger: 'blur' },
                      {
                          min: 1, max: 40, message: '最大40个字符', trigger: 'blur'
                      }
                  ],
                  pass_word: [
                      { required: true, message: '请输入密码', trigger: 'blur' },
                      { validator: validatePass, trigger: 'blur' }
                  ],
                  check_pass: [
                      { required: true, message: '请再次输入密码', trigger: 'blur' },
                      { validator: validatePass2, trigger: 'blur' }
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
                      this.signup();
                  } else {
                      console.log('error submit!!');
                      return false;
                  }
              });
          },
          signup () {
              Api.login.signup(this.form).then(res => {
                  console.log(res);
              });
          }
      },
      mounted () {}
  };
</script>

