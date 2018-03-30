<template>
  <div class="wrapper">
    <div class="commentsWrapper">
      <template v-for="(comment, index, key) in comments">
        <Comment v-if="!comment.removed" :comment="comment.text" :index="index" :key="key" @onRemove="remove"/>
      </template>
    </div>
    <div class="newComment">
      <textarea v-model="comment" placeholder="enter new comment"/>
    </div>
    <button @click="addComment">Add comment</button>
  </div>
</template>

<script>

  import Vue from 'vue';
  import Comment from '@/components/Comment';
  import websocket from '@/plugins/websocket';
  import { mapMutations } from 'vuex';
  import store from '../store';

  Vue.use(websocket, 'ws://echo.websocket.org', store);

  export default {
    name: 'Comments',
    methods: {
      addComment() {
        const comment = this.comment.trim();
        if (comment) {
          this.ADD_COMMENT(comment);
        }
        this.comment = '';
      },
      remove(index) {
        if (this.$socket.readyState !== this.$socket.OPEN) {
          console.error('connection not established');
          return;
        }
        const requestIndex = this.$store.state.requests.length;
        const request = {
          date: new Date(),
          index,
          success: false,
        };
        this.ADD_REQUEST(request);
        this.$socket.send(requestIndex);
      },
      ...mapMutations([
        'SOCKET_ONOPEN',
        'SOCKET_ONCLOSE',
        'SOCKET_ONERROR',
        'SOCKET_ONMESSAGE',
        'ADD_COMMENT',
        'ADD_REQUEST',
      ]),
    },
    components: {
      Comment,
    },
    data: function () {
      return {
        comment: '',
        comments: this.$store.state.comments,
      };
    },
  };
</script>

<style scoped>
  .wrapper, .commentsWrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  .commentsWrapper {
    margin-top: 10px;
  }

  .newComment {
    margin: 10px;
  }

  textarea {
    border: 2px solid #c2c2c2;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
  }
  textarea:focus::placeholder {
    opacity: 0;
  }
</style>
