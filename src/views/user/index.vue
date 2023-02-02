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
          <el-checkbox v-model="form.skill" label="1">搓大火球</el-checkbox
          ><el-checkbox v-model="form.skill" label="2">闪电</el-checkbox
          ><el-checkbox v-model="form.skill" label="3">冰锥</el-checkbox
          ><el-checkbox v-model="form.skill" label="4">言出法随</el-checkbox>
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
export default {
  name: "user-view",
  computed: {
    skills() {
      return this.form.skill
        .map((item) => {
          if (item === "1") {
            return "搓大火球";
          }
          if (item === "2") {
            return "闪电";
          }
          return "";
        })
        .join("、");
    },
  },
  data() {
    return {
      userInfo: {},
      input: "",
      form: {
        name: "kylee",
        gender: "2",
        role: "2",
        skill: ["1", "2"],
      },
      options: [
        {
          value: "1",
          label: "管理员",
        },
        {
          value: "2",
          label: "访客",
        },
      ],
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
