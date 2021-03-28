<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Todays Todo Status</h4>
            <!-- <div class="row">
              <div class="col-5">
                <span class="card-title pull-right">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm btn-rounded btn-fw"
                  >
                    Add New <i class="fas fa-plus"></i>
                  </button>
                </span>
              </div>
              <div class="col-6">
                <span class="card-title text-center">Todays Status</span>
              </div>
            </div> -->
            <hr />
            <div class="row">
              <div class="col-6">
                <div
                  v-for="(todo, index) in pending_todos"
                  :key="index"
                  class="todo-area"
                >
                  <div class="top">
                    <div class="btn-area">
                      <button title="Click to done" class="done-btn" @click="changeTodoStatus(todo.id)">
                        <i class="mdi mdi-checkbox-marked-circle-outline" />
                      </button>
                      <button @click="deleteTodo(todo.id)" class="del-btn" title="Click to delete">
                        <i class="mdi mdi-close-circle-outline"></i>
                      </button>
                    </div>
                    <i>{{ todo.todo_created }}</i>
                  </div>
                  {{ todo.title }}
                </div>
              </div>
              <div class="col-6">
                <div
                  v-for="(todo, index) in completed_todos"
                  :key="index"
                  class="todo-area completed-todo"
                >
                  <div class="top">
                    <button title="Click to undone" @click="changeTodoStatus(todo.id)">
                      <i class="mdi mdi-checkbox-marked-circle-outline"></i>
                    </button>
                    <i>{{ todo.completed_date_time }}</i>
                  </div>
                  {{ todo.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import Api from "../../apis/Api";

export default {
  data() {
    return {
      done_form: {
        id: this,
        status: "",
      },
      pending_todos: [],
      completed_todos: [],
    };
  },
  mounted() {
    this.getPendingTodos();
  },
  methods: {
    getPendingTodos() {
      const loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: "bars",
      });

      Api.get("pending-todos")
        .then((res) => {
          this.pending_todos = res.data.pending_todos;
          this.completed_todos = res.data.completed_todos;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          loader.hide();
        });
    },
    addNote() {
      let { text, title, color } = this.note;
      this.notes.push({
        text,
        date: new Date(Date.now()).toLocaleString(),
      });
      this.note.text = "";
    },
    deleteTodo(id) {
      this.$snotify.clear();
      this.$snotify.confirm(
        "Are you sure to delete this?",
        {
          closeOnClick: false,
          pauseOnHover: true,
          buttons: [
            {
              text: "Yes",
              action: toast => {
                this.$snotify.remove(toast.id);
                Api.delete('/todos/'+id)
                  .then(response => {
                    this.getPendingTodos();
                    this.$snotify.success('Successfully deleted', 'Success');
                  })
                  .catch(e => {
                      this.$snotify.error('Not deleted', 'error');
                  })
              },
              bold: true
            },
            {
              text: "No",
              action: toast => {
                  this.$snotify.remove(toast.id);
              },
              bold: true
            }
          ]
        }
      );
    },
    changeTodoStatus(id) {
      this.$snotify.clear();
      this.$snotify.confirm(
        "Are you sure to done this?",
        {
          closeOnClick: false,
          pauseOnHover: true,
          buttons: [
            {
              text: "Yes",
              action: toast => {
                this.$snotify.remove(toast.id);
                Api.get("/change-todo-status?id=" + id)
                  .then(response => {
                    this.getPendingTodos();
                    this.$snotify.success("Successfully done", "Success");
                  })
                  .catch(e => {
                      this.$snotify.error('Not deleted', 'error');
                  })
              },
              bold: true
            },
            {
              text: "No",
              action: toast => {
                  this.$snotify.remove(toast.id);
              },
              bold: true
            }
          ]
        }
      )
    }
  }
};
</script>

<style>
.todo-area {
  border: 1px solid #1d1d1f;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 13px;
  font-style: italic;
  font-style: italic;
}
i {
  font-size: 12px;
  clear: both;
  font-style: italic;
  display: block;
}
h2 {
  margin: 10px;
}
button {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.button {
  display: block;
  box-sizing: content-box;
  width: 200px;
  padding: 8px;
  margin: 0 10px 20px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  clear: both;
}
.button:hover {
  background-color: black;
  color: white;
  border-color: black;
}
.top {
  text-align: right;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 0em;
}
.done-btn {
  position: relative;
  padding-right: 8px;
}
.mdi-checkbox-marked-circle-outline:before {
  font-size: 22px;
  color: green;
}
.mdi-close-circle-outline {
  font-size: 22px;
  color: red;
}
.completed-todo {
  background: #a5d1a5;
}
</style>