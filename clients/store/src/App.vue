<template>
  <n-config-provider :theme="darkTheme">
    <n-layout>
      <n-layout-header bordered>
        <n-text>
          <span style="font-size: 32px;">BBB Tickets</span>
        </n-text>
      </n-layout-header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </n-layout>
  </n-config-provider>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  NLayout,
  NConfigProvider,
  NLayoutHeader,
  NText,
  darkTheme
} from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: {
    NLayout,
    NLayoutHeader,
    NConfigProvider,
    NText
  },
  setup () {
    return {
      darkTheme
    }
  }
})
</script>
