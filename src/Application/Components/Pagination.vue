<template lang="jade">
  .pagination
    .pagination__col._prev
      button.pagination__btn._prev(@click.prevent="goPrev()", v-if="pageData.offset>0").
        Назад
    .pagination__col._next
      button.pagination__btn._next(@click.prevent="goNext()").
        Вперед
</template>

<script>

export default {
  props: {
    pageData: {
      required: true
    }
  },
  methods: {
    goPrev() {
      this.$emit('go-prev');
    },
    goNext() {
      this.$emit('go-next');
    }
  },
}
</script>
