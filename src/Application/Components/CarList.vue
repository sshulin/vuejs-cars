<template lang="jade">
  .car-list
    car-item(v-for="car in carList", :car-data="car", @open-card="openCard", transition="fade")           
</template>

<script>

import carItem from './CarItem.vue';

export default {
  components: {
    carItem
  },
  props: {
    carList: {
    }
  },
  methods: {
    openCard(id) {
      this.$emit('open-card', id)
    }
  }
}
</script>
