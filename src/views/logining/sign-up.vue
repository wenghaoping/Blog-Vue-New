<style lang="less" type="text/less">
    .logining {
      max-width: 300px;
      padding: 35px 35px 15px 35px;
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 130px;
        height: 130px;
        line-height: 130px;
        text-align: center;
      }
      .avatar {
        width: 130px;
        height: 130px;
        display: block;
      }
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
        <!--<el-row :span="24">-->
          <!--<el-col :span="24">-->
            <!--<el-form-item label="头像" prop="avator">-->
              <!--<cardUpload ref="upload" :uploadCardAddress="uploadLogoAddress"-->
                          <!--:uploadDate="uploadDate" :cardplanList="form.avator"-->
                          <!--@delete="planRemoveLogo" @success="HeadPlanuploadsuccessLogo"-->
                          <!--:width="150"-->
                          <!--:size="1048576">-->
              <!--</cardUpload>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <el-row :span="24">
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" round class="position_center_auto relative" @click="submit('form')">注册</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
</template>

<script>
  import { checkPhoneNumberForElement } from 'assets/js/utils/validata';
  import { error, success } from 'assets/js/utils/notification';
  import cardUpload from 'components/base/cardUpload.vue';
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
              action: `${process.env.BASE_API}/signup`,
              form: {
                  user_name: '',
                  pass_word: '',
                  phone_number: '',
                  check_pass: '',
                  avator: [
                      // {
                      //     image_id: '',
                      //     url: ''
                      // }
                  ]
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
              PhoneRule: { validator: checkPhoneNumberForElement, trigger: 'blur' }, // 电话规则
              uploadLogoAddress: `${process.env.BASE_API}/signup` // 上传地址
          };
      },
      components: {
          cardUpload
      },
      computed: {
          uploadDate () {
              return this.form;
          }
      },
      methods: {
          submit (formName) {
              this.$refs[formName].validate((valid) => {
                  if (valid) {
                      this.signup();
                  } else {
                      return false;
                  }
              });
          },
          signup () {
              Api.login.signup(this.form).then(res => {
                  console.log(res); // eslint-disable-line
                  if (res.data.code === 200) {
                      let obj = {
                          user_name: this.form.user_name,
                          user_id: res.data.user_id
                      };
                      this.$store.dispatch('setLoginData', obj);
                      localStorage.setItem('users', JSON.stringify(obj));
                      //JSON.parse(localData);
                      success(res.data.message);
                  } else {
                      error(res.data.message);
                  }
              });
              // this.$refs.upload.submit();
          }
          // HeadPlanuploadsuccessLogo (response) {
          //     success('上传成功');
          // },
          // // 删除活动配图
          // planRemoveLogo (file, index) {
          //     console.log(file, index);
          // }
      },
      mounted () {}
  };
</script>

