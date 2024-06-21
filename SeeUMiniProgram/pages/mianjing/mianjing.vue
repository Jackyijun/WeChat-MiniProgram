<template>
  <view class="container">
    <!-- <view class="search-bar">
          <uni-input v-model="searchQuery" placeholder="search mianjing resource" class="search-input" />
          <view class="search-icon" @click="search">
            <image src="/static/logo.png" mode="widthFix" class="icon-image" />
			<!-- <uni-icons type="search" size="20" color='blue'></uni-icons> -->
			<!-- <uni-icons fontFamily="CustomFont" :size="26">{{'\uebc6'}}</uni-icons> -->
         <!-- </view>
    </view> --> -->
<!-- 	<uni-section title="自定义样式" subTitle="使用 bgColor 属性自定义背景色" type="line">
				<uni-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" @confirm="search" /> -->
	<!-- </uni-section> -->
    <view class="tabs">
      <view :class="['tab', activeTab === 'job' ? 'active' : '']" @click="setActiveTab('job')">求职</view>
      <view :class="['tab', activeTab === 'study' ? 'active' : '']" @click="setActiveTab('study')">申研</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      activeTab: 'job'
    };
  },
  methods: {
    search() {
      // Implement search functionality here
      console.log('Searching for:', this.searchQuery);
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.search-bar {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 5px;
}
uni-input {
  flex: 1;
  background-color: transparent;
  border: none;
  padding: 10px;
}
.search-icon {
  padding: 10px;
  cursor: pointer;
}
.icon-image {
  width: 20px;
  height: 20px;
}
.tabs {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.tab {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.tab.active {
  border-bottom: 2px solid blue;
  font-weight: bold;
}
</style>
