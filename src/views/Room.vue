<template>
  <div >
    You are in room {{ roomId }}
  </div>
</template>

<script>

export default {
  name: "room",
  components: {},
  data: function(){
    return {
      roomId: this.$route.params.roomId
    }
  }
};
</script>
