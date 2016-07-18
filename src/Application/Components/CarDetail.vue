<template lang="jade">
  .car-detail( transition="fade")
    .car-detail__content
      .car-detail__bg-wrap 
        .car-detail__title
          span.car-detail__mark(v-if="carData.mark.value") {{ carData.mark.value.title }} 
          span.car-detail__model(v-if="carData.model.value") {{ carData.model.value.title }}
        .car-detail__price(v-if="carData.price").
          Цена: {{ carData.price.rur / 1000}} тыс. руб.
        .car-detail__props
          .car-detail__one-prop._city(v-if="carData.city.value")
            span.car-detail__prop-label
              Город: 
            span.car-detail__prop-val
              {{ carData.city.value.title }}
          .car-detail__one-prop._year(v-if="carData.year && carData.year.value ")
            span.car-detail__prop-label
              Год выпуска: 
            span.car-detail__prop-val
              {{ carData.year.value }} г.
          .car-detail__one-prop._transmission(v-if="carData.transmission")
            span.car-detail__prop-label
              КПП: 
            span.car-detail__prop-val
              {{ carData.transmission.value.title }}
          .car-detail__one-prop._wheel(v-if="carData.wheel.value")
            span.car-detail__prop-label
              Руль: 
            span.car-detail__prop-val
              {{ carData.wheel.value.title }}
        .car-detail__inners
          span.car-detail__inner-label(v-if="carData.equipments")
            Комплектация:
          ul.car-detail__inner-list
            li.car-detail__inner-item(v-for="inner in carData.equipments" v-if="inner && inner.value && inner.title ")
              {{ inner.title }}
        .car-detail__descript(v-if="carData.description.value")
          .car-detail__descript-label
            Описание
          .car-detail__descript-val
            {{ carData.description.value }}
    .car-detail__all-photos(transition="fade")
      .car-detail__photo-wrap._main(v-if="carData.photos")
        img.car-detail__photo-self._main(:src="mainPhoto")
      .car-detail__more-photos
        .car-detail__photo-wrap._more(v-for="(photo, index) in carData.photos")
          img.car-detail__photo-self._more(:src="photo.url", @click="changePhoto(index)")
</template>

<script>

export default {
  props: {
    carData: {
    },
  },
  data(){
    return {
      mainPhoto: this.carData.photos[0].url
    }
  },
  methods: {
    changePhoto(id){
      this.mainPhoto = this.carData.photos[id].url;
    }
  }
}
</script>
