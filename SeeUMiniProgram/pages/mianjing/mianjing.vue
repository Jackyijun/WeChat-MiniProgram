<template>
  <view class="container">
    <view class="search-bar">
      <view class="search-dropdown" @tap="searchToggleDropdown">
        <text>{{ selectedOption }}</text>
        <uni-icons type="up" class="arrow-up"/>
      </view>
      <view v-if="showDropdown" class="dropdown-menu">
        <view v-for="(option, index) in options" :key="index" class="dropdown-item" @tap="selectOption(option)">
          <text :class="{'selected': option === selectedOption}">{{ option }}</text>
        </view>
      </view>
      <input class="search-input" type="text" placeholder="搜索面经资料" v-model="searchQuery" />
      <button class="search-button" @tap="onSearch">
        <uni-icons type="search" color="#ffffff" size="25"/>
      </button>
    </view>
    <view class="tabs">
      <view class="tab" :class="{ active: activeTab === 'jobs' }" @tap="selectTab('jobs')">求职</view>
      <view class="tab" :class="{ active: activeTab === 'study' }" @tap="selectTab('study')">申研</view>
    </view>
    <view v-if="activeTab === 'jobs'" class="filters">
      <view class="filter" @tap="toggleDropdown('location')">
        求职地域
        <uni-icons :class="{ open: dropdowns.location }" type="down" class="arrow-down"/>
        <view v-if="dropdowns.location" class="dropdown">
          <view @tap="filterBy('location', 'all')">全职</view>
          <view @tap="filterBy('location', 'internship')">实习</view>
        </view>
      </view>
      <view class="filter" @tap="toggleDropdown('position')">
        岗位类别
        <uni-icons :class="{ open: dropdowns.position }" type="down" class="arrow-down"/>
        <!-- Add dropdown content here -->
      </view>
      <view class="filter" @tap="toggleDropdown('industry')">
        所属行业
        <uni-icons :class="{ open: dropdowns.industry }" type="down" class="arrow-down"/>
        <!-- Add dropdown content here -->
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedOption: '按公司',
      options: ['按公司', '按岗位', '按专业', '按学校'],
      showDropdown: false,
      activeTab: 'jobs',
      dropdowns: {
        location: false,
        position: false,
        industry: false,
      },
      filters: {
        location: null,
        position: null,
        industry: null,
      },
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
      // Handle search logic here
      console.log('Search query:', this.searchQuery, 'Selected option:', this.selectedOption);
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
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
  background-color: #f5f5f5;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 90%;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 5px;
  position: relative;
  margin-bottom: 5px;
}

.search-dropdown {
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.arrow-up {
  margin-left: 5px;
}

.arrow-down {
  margin-left: -7px;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  left: 0;
  width: 80px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.selected {
  color: #4285f4;
}

.search-input {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  border: none;
  outline: none;
}

.search-button {
  width: 40px;
  height: 40px;
  background-color: #4285f4;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
}

.tabs {
  display: flex;
  justify-content: space-around;
  /* border-bottom: 1px solid #ddd; */
  width: 80%;
}

.tab {
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
}

.tab.active {
  border-bottom: 5px solid #4285f4;
}

.filters {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  width: 90%;
  border-top: 1px solid #ddd;
}

.filter {
  position: relative;
  cursor: pointer;
}

.filter text {
  margin-left: 5px;
}

.filter text.open {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  /* left: 0; */
  background: #fff;
  /* border: 1px solid #ddd; */
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 100%;
}

.dropdown view {
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown view:hover {
  background: #f0f0f0;
}
</style>
