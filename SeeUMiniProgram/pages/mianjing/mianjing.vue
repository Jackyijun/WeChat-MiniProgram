<template>
  <view class="container">
    <view class="search-bar">
      <view class="dropdown" @tap="toggleDropdown">
        <text>{{ selectedOption }}</text>
		<uni-icons type="up" class="arrow-up"/>
      </view>
      <view v-if="showDropdown" class="dropdown-menu">
        <view v-for="(option, index) in options" :key="index" class="dropdown-item" @tap="selectOption(option)">
          <text :class="{'selected': option === selectedOption}">{{ option }}</text>
        </view>
      </view>
      <input class="search-input" type="text" placeholder="搜索面经资料" v-model="searchQuery" />
      <button class	="search-button" @tap="onSearch">
        <uni-icons type="search" color="#ffffff" size="25"/>
      </button>
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
    };
  },
  methods: {
    toggleDropdown() {
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
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  padding-top: 20px; /* Space from the top of the screen */
  height: 100vh;
  background-color: #f5f5f5;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 90%;
  height: 40px;
  background-color: #e0e0e0; /* Set to grey */
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  position: relative;
}

.dropdown {
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.arrow-up {
  margin-left: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100px;
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

</style>
