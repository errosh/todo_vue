<template>
  <q-scroll-area class="fit">
    <q-list>
      <template v-for="(menuItem, index) in menuList">
        <q-item
          :key="index"
          clickable
          :active="menuItem.label === 'Outbox'"
          v-ripple
          @click="gotoRoute(menuItem.label)"
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
        <q-separator :key="'sep' + index" v-if="menuItem.separator" />
      </template>
    </q-list>
  </q-scroll-area>
</template>
<script>
const menuList = [
  {
    icon: "add_task",
    label: "ToDo",
    separator: true,
  },
  {
    icon: "store",
    label: "Shop",
    separator: false,
  },
];
export default {
  name: "Menu",
  data() {
    return {
      drawer: false,
      menuList,
    };
  },
  methods: {
    gotoRoute(menu) {
      if (menu === "ToDo") {
        if (this.$router.currentRoute.path !== "/") this.$router.push("/");
      } else if (menu === "Shop") {
        if (this.$router.currentRoute.path !== "/shop")
          this.$router.push("/shop");
      }
    },
  },
};
</script>
