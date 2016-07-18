<template lang="jade">
  .nav
    .nav__wrap
      button.nav__backlink(@click.prevent="goBack")
        Назад к списку
</template>

<script>

export default {
  methods: {
    goBack(){
      this.$emit('go-back', 'list')
    }
  }
}
</script>
