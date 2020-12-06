Vue.config.devtools = true;
// task list component
Vue.component("task-list", {
  props: {
    tasks:{
      type: Array,
      required: true
    }
  },
  data: function(){
    return{
      new_task: null,
      error: null,
    }
  },
  methods: {
    submitTask(){
      if (this.new_task) {
        this.$emit('submit-task', this.new_task)
        this.new_task = null;
        this.error = null;
      }else{
        this.error = "Inserisci un task!"
      }
    }
  },
  template:`
    <div class="mt-3">
      <div class="container">
        <span class="">Task rimanenti: {{tasks.length}}</span>
        <form 
        class="form-group"
        @submit.prevent="submitTask"
        >
          <input type="text"
            placeholder="Aggiungi un nuovo task"
            class="form-control"
            v-model="new_task"
          >
        </form>
        <h3>{{error}}</h3>
        <task
          v-for="(task, index) in tasks"
          :task = "task"
          :key="index"
          @delete-task="tasks.splice(index,1)"
        >
        </task>
      </div>
    </div>
  `
})
// task component
Vue.component("task", {
  props: {
    task:{
      type: String,
      required: true
    },
    index:{
      type: Number
    }
  },
  methods: {
    deleteTask(){
      this.$emit('delete-task')
    }
  },
  template:`
    <div class="alert alert-success">
      <div> {{task}}
        <button 
          type="button" 
          class="close" 
          aria-label="Close"
          @click="deleteTask"
          >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>      
  `
})
var app = new Vue({
  el: "#app",
  data:{
    tasks:[] 
  },
  methods:{
    addNewTask(new_task){
      this.tasks.push(new_task);
    }
  },
  computed:{

  }
})

