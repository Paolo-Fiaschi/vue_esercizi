Vue.config.devtools = true;
var app = new Vue({
  el: "#app",
  data:{
    comment: null,
    comments: [],
    errors:  null
  },
  methods:{
    onSubmit(){
      if (this.comment) {
        let new_comment = this.comment;
        this.comments.push(new_comment);
        this.comment = null;
        if (this.errors) {
          this.errors = null;
        }
      }else{
        this.errors = 'Non può essere vuoto!';
      }
    }
  },
  computed:{
  }
})

