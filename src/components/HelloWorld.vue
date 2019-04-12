<template>
  <div>
    <b-jumbotron header="Welcome to spotify party"></b-jumbotron>
    <div class="d-flex justify-content-center mb-2">
      <b-input-group class="w-25">
        <b-form-input v-model="roomCode"/>
        <b-input-group-append>
          <b-button variant="primary" @click="joinRoom">Join room</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div>
      <button class="btn btn-link" @click="createRoom">Create room</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HelloWorld",
  props: {},
  data: function(){
    return {
      roomCode: null
    }
  },
  methods: {
    createRoom(){
      axios.post('/api/rooms').then((res) => {
        this.$router.push({name: 'room', params: {roomId: res.data.code}});
      });
    },
    joinRoom(){
      axios.get(`/api/rooms/${this.roomCode}`).then((res) => {
        if (res.data.code) this.$router.push({name: 'room', params: {roomId: this.roomCode}});
      })
    }
  }
};
</script>

<style scoped lang="scss">
</style>
