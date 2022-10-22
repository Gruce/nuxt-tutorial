<template>
    <div class="container">
      <div class="task">
        <!-- title -->
        <div class="title">
          <h1> To Do List</h1>
        </div>
        <!-- form -->
        <div class="form">
          <input
            type="text"
            placeholder="New Task"
            v-model="newTask"
            @keyup.enter="addTask"
          />
          <button @click="addTask">Add</button>
        </div>
        <!-- task lists -->
        <div class="taskItems">
          <ul>
            <task-item
              v-bind:task="task"
              v-for="(task, index) in tasks"
              :key="task.id"
              @remove="removeTask(index)"
              @complete="completeTask(task)"
            ></task-item>
          </ul>
        </div>
        
      
        
        <!-- pending task -->
        <div class="pendingTasks">
          <span>Pending Tasks: {{ incomplete }}</span>
        </div>
      </div>
    </div>
  </template>

  <style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font: 15px/1.4 "Poppins", sans-serif;
    background: #3876a8;
    color: #333;
  }
  
  #app {
    padding: 60px 0;
  }
  
  .container {
    max-width: 480px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  input[type="text"] {
    width: 100%;
    height: 50px;
    font: 15px/1.4 "Poppins", sans-serif;
    padding: 15px;
    background: #f3f3f3;
    color: #333;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: border 0.3s linear;
  }
  
  input[type="text"]:focus {
    outline: none;
    border: 1px solid #3876a8;
  }
  
  button {
    cursor: pointer;
    font: 15px/1.4 "Poppins", sans-serif;
  }
  
  button:focus {
    outline: none;
  }
  
  h1 {
    font-size: 22px;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  /* 
  task 
  ----
  */
  .task {
    background: #fff;
    border-radius: 25px;
    padding: 30px;
    box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.1);
  }
  
  .title {
    color: #3876a8;
    text-align: center;
    margin: 0 0 20px;
  }
  
  .form {
    position: relative;
    margin: 0 0 30px;
  }
  
  .form button {
    background: none;
    border: none;
    color: #3876a8;
    font-size: 18px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  
  
  .pendingTasks {
    padding: 0 6px;
  }
  
  /* 
  task items
  ----------
  */
  .taskItems {
    padding: 0 10px;
  }
  
  .taskItems li {
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px;
  }
  
  .taskItems button {
    background: none;
    border: none;
  }
  
  .taskItems button:hover {
    color: red;
  }
  
  .taskItems .toggle i {
    margin: 0 10px 0 0;
    font-size: 14px;
  }
  
  .taskItems .toggle.toggle-completed {
    text-decoration:line-through;
  }</style>
  
  
  <script>
  import TaskItem from "./Task-item";
  
  export default {
    name: "Task",
    props: ['tasks'],
    components: {
      TaskItem,
    },
    data() {
      return {
        newTask: "",
      };
    },
    computed: {
      incomplete() {
        return this.tasks.filter(this.inProgress).length;
      },
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.push({
            title: this.newTask,
            completed: false,
          });
          this.newTask = "";
        }
      },
      inProgress(task) {
        return !this.isCompleted(task);
      },
      isCompleted(task) {
        return task.completed;
      },
      
      completeTask(task) {
        task.completed = !task.completed;
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
    },
  };
  </script>
  