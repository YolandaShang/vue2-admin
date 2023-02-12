<template>
  <div class="data">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { defineComponent } from "vue";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  // 引入GridComponent是因为grid: {...}, xAxis: {...},yAxis: {...},series: [{...}]封装在这里
]);

export default defineComponent({
  name: "data-view",
  components: { VChart },
  // 对象的动态属性
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "bar",
            data: [],
          },
          {
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/data").then((res) => {
      console.log(res.data);
      this.option.series = [
        {
          type: "bar",
          data: res.data[0],
        },
        {
          type: "bar",
          data: res.data[1],
        },
      ];
    });
  },
});
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 600px;
}
</style>
