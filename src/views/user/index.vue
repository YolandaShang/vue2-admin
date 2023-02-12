<template>
  <div class="user">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户姓名">
        <div v-if="!isEdited">{{ form.name }}</div>
        <el-input v-else v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="用户性别">
        <div v-if="!isEdited">{{ genderTextMap[form.gender] }}</div>
        <template v-else
          ><el-radio v-model="form.gender" label="1">男</el-radio>
          <el-radio v-model="form.gender" label="2">女</el-radio></template
        >
      </el-form-item>
      <el-form-item label="用户角色">
        <div v-if="!isEdited">{{ roleTextMap[form.role] }}</div>
        <el-select v-else v-model="form.role" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职业技能">
        <div v-if="!isEdited">{{ skills }}</div>
        <!-- <div v-else-if="1"></div> -->
        <template v-else>
          <el-checkbox
            v-for="item in skillOptions"
            :key="item.value"
            v-model="form.skill"
            :label="item.value"
            >{{ item.label }}</el-checkbox
          >
        </template>
      </el-form-item>
      <el-form-item>
        <el-button v-if="!isEdited" @click="changeEditState" type="primary"
          >编辑</el-button
        >
        <el-button v-else @click="changeReturnState" type="primary"
          >返回</el-button
        >
        <el-button>提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { SkillList, RoleList } from "./config";
export default {
  name: "user-view",
  computed: {
    skills() {
      return (this.form.skill || [])
        .map((id) => {
          const target = this.skillOptions.find((item) => item.value === id);
          return target.label;
        })
        .join("、");
    },
  },
  data() {
    return {
      userInfo: {},
      input: "",
      form: {},
      options: RoleList,
      skillOptions: SkillList,
      isEdited: false,
      genderTextMap: {
        1: "男",
        2: "女",
      },
      roleTextMap: {
        1: "管理员",
        2: "访客",
      },
    };
  },
  methods: {
    goBackHome() {
      this.$router.push({ path: "/" });
    },
    changeEditState() {
      this.isEdited = true;
    },
    changeReturnState() {
      this.isEdited = false;
    },
  },
  beforeMount() {
    this.axios
      .get("http://localhost:3000/user")
      .then((response) => {
        console.log(response.data);
        this.form = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  mounted() {
    console.log(this.$route, 1, this.$router);
  },
};
</script>
<style lang="scss">
.user {
  .el-form-item__content {
    text-align: left;
  }
}
</style>

<style lang="scss" scoped>
.user {
  height: 100%;
  margin: 60px;
  background-color: beige;
  padding: 30px;
  border-radius: 12px;
}
</style>
