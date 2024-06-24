"use strict";
const components_card_data = require("../../components/card_data.js");
const common_vendor = require("../../common/vendor.js");
const card = () => "../../components/card.js";
const _sfc_main = {
  components: {
    card
  },
  data() {
    return {
      searchQuery: "",
      selectedOption: "按公司",
      options: ["按公司", "按岗位", "按专业", "按学校"],
      showDropdown: false,
      activeTab: "jobs",
      dropdowns: {
        location: false,
        position: false,
        industry: false
      },
      filters: {
        location: null,
        position: null,
        industry: null
      },
      activeNav: "info",
      // Set the active navigation item
      company_list: components_card_data.company_list,
      university_list: components_card_data.university_list
    };
  },
  methods: {
    searchToggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showDropdown = false;
    },
    onSearch() {
      console.log("Search query:", this.searchQuery, "Selected option:", this.selectedOption);
    },
    selectTab(tab) {
      this.activeTab = tab;
    },
    toggleDropdown(type) {
      this.dropdowns[type] = !this.dropdowns[type];
      for (let key in this.dropdowns) {
        if (key !== type) {
          this.dropdowns[key] = false;
        }
      }
    },
    filterBy(type, value) {
      this.filters[type] = value;
      this.dropdowns[type] = false;
    },
    navigate(page) {
      this.activeNav = page;
      console.log("Navigating to:", page);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_card = common_vendor.resolveComponent("card");
  (_easycom_uni_icons2 + _component_card)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.selectedOption),
    b: common_vendor.p({
      type: "up"
    }),
    c: common_vendor.o((...args) => $options.searchToggleDropdown && $options.searchToggleDropdown(...args)),
    d: $data.showDropdown
  }, $data.showDropdown ? {
    e: common_vendor.f($data.options, (option, index, i0) => {
      return {
        a: common_vendor.t(option),
        b: option === $data.selectedOption ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.selectOption(option), index)
      };
    })
  } : {}, {
    f: $data.searchQuery,
    g: common_vendor.o(($event) => $data.searchQuery = $event.detail.value),
    h: common_vendor.p({
      type: "search",
      color: "#ffffff",
      size: "25"
    }),
    i: common_vendor.o((...args) => $options.onSearch && $options.onSearch(...args)),
    j: $data.activeTab === "jobs" ? 1 : "",
    k: common_vendor.o(($event) => $options.selectTab("jobs")),
    l: $data.activeTab === "study" ? 1 : "",
    m: common_vendor.o(($event) => $options.selectTab("study")),
    n: $data.dropdowns.location ? 1 : "",
    o: common_vendor.p({
      type: "down"
    }),
    p: $data.dropdowns.location
  }, $data.dropdowns.location ? {
    q: common_vendor.o(($event) => $options.filterBy("location", "all")),
    r: common_vendor.o(($event) => $options.filterBy("location", "internship"))
  } : {}, {
    s: common_vendor.o(($event) => $options.toggleDropdown("location")),
    t: $data.dropdowns.position ? 1 : "",
    v: common_vendor.p({
      type: "down"
    }),
    w: common_vendor.o(($event) => $options.toggleDropdown("position")),
    x: $data.dropdowns.industry ? 1 : "",
    y: common_vendor.p({
      type: "down"
    }),
    z: common_vendor.o(($event) => $options.toggleDropdown("industry")),
    A: $data.activeTab === "jobs"
  }, $data.activeTab === "jobs" ? {
    B: common_vendor.f($data.company_list, (item, index, i0) => {
      return {
        a: index,
        b: "6c338c78-5-" + i0,
        c: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views
        })
      };
    })
  } : {}, {
    C: $data.activeTab === "study"
  }, $data.activeTab === "study" ? {
    D: common_vendor.f($data.university_list, (item, index, i0) => {
      return {
        a: index,
        b: "6c338c78-6-" + i0,
        c: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views
        })
      };
    })
  } : {}, {
    E: common_vendor.p({
      type: "home",
      size: "25"
    }),
    F: common_vendor.o(($event) => $options.navigate("home")),
    G: common_vendor.p({
      type: "help",
      size: "25",
      [","]: true,
      color: "#4285f4"
    }),
    H: common_vendor.o(($event) => $options.navigate("info")),
    I: $data.activeNav === "info" ? 1 : "",
    J: common_vendor.p({
      type: "person",
      size: "25"
    }),
    K: common_vendor.o(($event) => $options.navigate("profile"))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yil224/Documents/HBuilderProjects/SeeUMiniProgram/pages/mianjing/mianjing.vue"]]);
wx.createPage(MiniProgramPage);
