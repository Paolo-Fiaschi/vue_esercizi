Vue.config.devtools = true;
// comment list coimponent
Vue.component("comment-list", {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  data: function(){
    return {
      new_comment: null,
      comment_author: null,
      error: null
    }
  },
  methods: {
    submitComment(){
      if (this.new_comment && this.comment_author) {
        this.$emit('submit-comment',{username:this.comment_author, content: this.new_comment})
        this.new_comment = null;
        this.comment_author = null;
        if (this.error) {
          this.error = null;
        }
      }else{
        this.error = "Assicurati di compilare tutti i campi!"
      }
    }
  },
  template: `
    <div class="mt-2">
      <div class="container">
        <single-comment
          v-for="(comment, index) in comments"
          :comment="comment"
          :key="index"
        ></single-comment>
        <hr>
        <h3>{{error}}</h3>
        <form @submit.prevent="submitComment">
          <div class="form-group">
            <label for="commentAuthor">Il tuo username</label>
            <input 
              type="text"
              class="form-control"
              id="commentAuthor"
              v-model="comment_author"
              >
          </div>
          <div class="form-group">
            <label for="commentText">Aggiungi commento</label>
            <textarea 
              class="form-control"
              id="commentText"
              rows="3"
              cols="40"
              v-model="new_comment"
              >
            </textarea>
          </div>
          <button type="submit" class="btn btn-sm btn-primary">Aggiungi commento</button>
        </form>   
        <br>     
      </div>
    </div>
  `
})
// single comment component
Vue.component("single-comment", {
  props: {
    comment: {
      type: Object,
      required: true,
    }
  },
  template: `
    <div class="comment mb-2">
      <div class="card">
        <div class="card-header">
          <p>Pubblicato da: {{comment.username}}</p>
          </div>
          <div class="card-body">
            <p>{{comment.content}}</p>
          </div>
      </div>
    </div>
  `
})
var app = new Vue({
  el: "#app",
  data:{
    comments: [
      {username: 'batman', content: 'primo commento'},
      {username: 'superman', content: 'secondo commento'},
      {username: 'robin', content: 'terzo commento'},
      {username: 'catwoman', content: 'quarto commento'},
    ],
  },
  methods:{
    addNewComment(new_comment) {
      this.comments.push(new_comment);
    }
  },
  computed:{
  }
})

