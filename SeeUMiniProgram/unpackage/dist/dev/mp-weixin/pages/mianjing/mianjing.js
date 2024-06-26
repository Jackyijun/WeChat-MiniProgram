"use strict";
const common_vendor = require("../../common/vendor.js");
const components_card_data = require("../../components/card_data.js");
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
    },
    openPdf(file) {
      console.log(file);
      console.log(encodeURIComponent(file.path));
      common_vendor.index.navigateTo({
        url: `/pages/pdf-viewer/pdf-viewer?filePath=${encodeURIComponent(file.path)}`
      });
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
      type: $data.showDropdown ? "up" : "down"
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
    n: common_vendor.p({
      type: $data.dropdowns.location ? "up" : "down"
    }),
    o: common_vendor.o(($event) => $options.toggleDropdown("location")),
    p: common_vendor.p({
      type: $data.dropdowns.position ? "up" : "down"
    }),
    q: $data.dropdowns.position
  }, $data.dropdowns.position ? {
    r: common_vendor.o(($event) => $options.filterBy("position", "fulltime")),
    s: $data.filters.position === "fulltime" ? 1 : "",
    t: common_vendor.o(($event) => $options.filterBy("position", "internship")),
    v: $data.filters.position === "internship" ? 1 : ""
  } : {}, {
    w: common_vendor.o(($event) => $options.toggleDropdown("position")),
    x: common_vendor.p({
      type: $data.dropdowns.industry ? "up" : "down"
    }),
    y: common_vendor.o(($event) => $options.toggleDropdown("industry")),
    z: $data.activeTab === "jobs"
  }, $data.activeTab === "jobs" ? {
    A: common_vendor.f($data.company_list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.openPdf(item.file), index),
        c: "6c338c78-5-" + i0,
        d: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views,
          file: item.file
        })
      };
    })
  } : {}, {
    B: $data.activeTab === "study"
  }, $data.activeTab === "study" ? {
    C: common_vendor.f($data.university_list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.openPdf, index),
        c: "6c338c78-6-" + i0,
        d: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views,
          file: item.file
        })
      };
    })
  } : {}, {
    D: common_vendor.p({
      type: "home",
      size: "25"
    }),
    E: common_vendor.o(($event) => $options.navigate("home")),
    F: common_vendor.p({
      type: "help",
      size: "25",
      [","]: true,
      color: "#4285f4"
    }),
    G: common_vendor.o(($event) => $options.navigate("info")),
    H: $data.activeNav === "info" ? 1 : "",
    I: common_vendor.p({
      type: "person",
      size: "25"
    }),
    J: common_vendor.o(($event) => $options.navigate("profile"))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yil224/Documents/HBuilderProjects/SeeUMiniProgram/pages/mianjing/mianjing.vue"]]);
wx.createPage(MiniProgramPage);
