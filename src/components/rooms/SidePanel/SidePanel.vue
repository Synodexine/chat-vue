<template>
  <div class="container">
    <div class="header">
      <TabButton v-for="tab in userComponents" :key="tab.id" @on-click="onTabButtonClick(tab)" :class="{buttonPressed: currentComponent == tab.component}">
        {{ tab.component.data().shortName }}</TabButton>
    </div>
    <div class="content">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import AccountTab from './Tabs/AccountTab'
import AdminTab from './Tabs/AdminTab'
import SettingsTab from './Tabs/SettingsTab'
import TabButton from './Tabs/Elements/TabButton'

export default {
  name: 'SidePanel',
  components: {
    AccountTab,
    AdminTab,
    SettingsTab,
    TabButton
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  data(){
    return {
      userComponents: [],
      currentComponent: null,
    }
  },
  methods: {
    onTabButtonClick(e) {
      this.currentComponent = e.component
    }
  },
  async mounted() {
    await this.$store.dispatch('GET_USER_INFO')
    let userTabs = [
      {name: 'Settings', component: SettingsTab},
      {name: 'Account', component: AccountTab},
    ]
    let avaliableTabs = [
      {name: 'Admin', component: AdminTab},
    ]
    let user = this.$store.getters.user
    
    for (let tab of avaliableTabs){
      if (tab.component.data().permissionLevel <= user.info.permission_level.level_id)
        userTabs.push(tab)
    }
    this.userComponents = userTabs
    this.currentComponent = userTabs[0].component
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
  width:100%;
  height: 100%;
  background-color: gray;
}

.content{
  width: 100%;
  height: 100%;
}

.header{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>

<style>
.title{
  width: 100%;
  font-size: 25px;
  border-color: white;
  border-width: 2px;
  border-style: solid;
}
</style>