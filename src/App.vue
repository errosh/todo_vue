<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/todologo.png" />
          </q-avatar>
          To Do App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" elevated>
      <!-- drawer content -->
      <Menu />
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer elevated class="bg-blue-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/todologo.png" />
          </q-avatar>
          To Do App
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      left: false,
    };
  },
};
</script>
