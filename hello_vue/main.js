Vue.config.devtools = true;

Vue.component("comment", {
  props: {
    comment: {
      type: Object,
      required: true,
    }
  },
  template: `
    <div class="comment">
      <div class="card-body">
        <p>{{comment.username}}</p>
        <p>{{comment.content}}</p>
        <hr>
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
  },
  computed:{
  }
})

