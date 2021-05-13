<template>
  <div class="justify-center flex q-layout-padding">
    <div class="q-pa-md" style="max-width: 400px; min-width:350px;">
      <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="newToDo"
          label="Your todo*"
          hint="Build Mobile App"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
      <div v-for="todo in todos" :key="todo" style="margin-top:5px;">
        <q-list bordered separator>
          <q-item
            @click="Done(todo)"
            clickable
            v-ripple
            :active="active"
            class="bg-light"
          >
            <q-item-section avatar>
              <q-icon
                :name="todo.done ? 'task' : 'add_task'"
                :class="{ icondone: todo.done }"
              />
            </q-item-section>
            <q-item-section :class="{ done: todo.done }">{{
              todo.name
            }}</q-item-section>
            <q-item-section side>
              <q-icon name="delete" color="red" @click="removeToDo(todo)"
            /></q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDo",
  data() {
    return {
      newToDo: null,
      todos: [],
    };
  },
  methods: {
    onSubmit() {
      this.todos.push({ name: this.newToDo, done: false });
      this.newToDo = "";
    },
    removeToDo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    Done(todo) {
      todo.done = !todo.done;
    },
  },
};
</script>
<style scoped>
.done {
  text-decoration: line-through;
  color: green;
}
.icondone {
  color: green;
}
</style>
