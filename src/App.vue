<template>
  <MenuComponent/>
  <div style="width: 50%; margin: auto">
    <router-view></router-view>
  </div>
  
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>

</style>
