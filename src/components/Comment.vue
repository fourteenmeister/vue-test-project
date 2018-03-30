<template>
  <div class="commentWrapper">
    <img class="user" src="../assets/user-circle.png"/>
    <div class="text">{{ comment }}</div>
    <img class="remove" src="../assets/bin.png" @click="$emit('onRemove', index)"/>
  </div>
</template>

<script>

  export default {
    name: 'Comment',
    props: {
      comment: String,
      index: Number,
    },
  };

</script>

<style scoped>
  .commentWrapper {
    border: 1px solid #c2c2c2;
    display: flex;
    align-items: center;
    height: 36px;
    margin: 0 10px 4px 10px;
    padding: 0 5px;
  }

  .text {
    flex-grow: 1;
  }

  .user {
    margin-right: 10px;
  }

  .remove {
    margin-left: 10px;
    cursor: pointer;
    color: crimson;
  }

  .remove:hover {
    color: red;
  }
</style>
