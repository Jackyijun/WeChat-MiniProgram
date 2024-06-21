"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchQuery: "",
      activeTab: "job"
    };
  },
  methods: {
    search() {
      console.log("Searching for:", this.searchQuery);
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.activeTab === "job" ? "active" : ""),
    b: common_vendor.o(($event) => $options.setActiveTab("job")),
    c: common_vendor.n($data.activeTab === "study" ? "active" : ""),
    d: common_vendor.o(($event) => $options.setActiveTab("study"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d5d513fa"], ["__file", "/Users/yil224/Documents/HBuilderProjects/SeeUMiniProgram/pages/mianjing/mianjing.vue"]]);
wx.createPage(MiniProgramPage);
