<template lang="jade">
  .car-item(v-on:click="openCard(carData.id)")
    .car-item__thumbnail
      img.car-item__image(v-if="carData.photos && carData.photos.length", :src="carData.photos[0].url")
      img.car-item__image(v-else, src="http://olx.su/templates/ultimate/images/no-photobig.gif")
    .car-item__props
      .car-item__title
        span.car-item__mark(v-if="carData.mark.value") {{ carData.mark.value.title }} 
        span.car-item__model(v-if="carData.model.value") {{ carData.model.value.title }}
      .car-item__prop._city(v-if="carData.city.value")
        span.car-item__label
          Город: 
        span.car-item__prop-val
          {{ carData.city.value.title }}
      .car-item__prop._transmission(v-if="carData.transmission")
        span.car-item__label
          КПП: 
        span.car-item__prop-val
          {{ carData.transmission.value.title }}
      .car-item__prop._wheel(v-if="carData.wheel.value")
        span.car-item__label
          Руль:
        span.car-item__prop-val
          {{ carData.wheel.value.title }}
      .car-item__prop._year(v-if="carData.year.value")
        span.car-item__label
          Год выпуска: 
        span.car-item__prop-val
          {{ carData.year.value }}
      .car-item__prop._price(v-if="carData.price")
        span.car-item__label
          Цена: 
        span.car-item__prop-val._price
          {{ carData.price.rur/1000 }} тыс. руб.          
</template>

<script>

export default {
  props: {
    carData: {
      required: true
    }
  },
  methods: {
    openCard(id){
      this.$emit('open-card', id);
    }
  }
}
</script>
