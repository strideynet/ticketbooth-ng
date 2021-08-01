<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2> Server Data </h2>
    <p>version: {{version}}</p>
    <p>hostname: {{hostName}}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /sr
import { ServerInfoRequest } from '@/api/admin/v1/admin_pb'
import { AdminClient } from '@/api/admin/v1/AdminServiceClientPb'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      hostName: 'Loading..',
      version: 'Loading..'
    }
  },
  async mounted () {
    const client = new AdminClient('http://localhost:8090')
    const req = new ServerInfoRequest()
    const res = await client.serverInfo(req, null)

    this.hostName = res.getHostName()
    this.version = res.getVersion()
  }
})
</script>
