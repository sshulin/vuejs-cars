<style lang="sass">



</style>

<template lang="jade">
  .filter(transition="fade")
    form.filter__form(@submit.prevent="submitForm")
      .filter__col
        .filter__input-group._text
          .filter__group-head Цена
          .filter__group-body
            label.filter__text-label
              от:
            input.filter__text-input._small(v-model="filterParams.minPrice" placeholder="500 тыс. руб.")
            label.filter__text-label
              до:
            input.filter__text-input._small(v-model="filterParams.maxPrice" placeholder="1000 тыс. руб.")
        .filter__input-group._text
          .filter__group-head Год выпуска
          .filter__group-body
            label.filter__text-label
              от:
            input.filter__text-input._small(v-model="filterParams.minYear" placeholder="1990")
            label.filter__label._text
              до:
            input.filter__text-input._small(v-model="filterParams.maxYear" placeholder="2015")
      .filter__col
        .filter__input-group._radio
          .filter__group-head КПП
          .filter__group-body
            input.filter__radio-input(type="radio", v-model="filterParams.transmission" name="transmission" id="radio_trans_all" value="")
            label.filter__radio-label(for="radio_trans_all")
              Все
            input.filter__radio-input(type="radio", v-model="filterParams.transmission", name="transmission", id="radio_trans_mech", value="131")
            label.filter__radio-label(for="radio_trans_mech")
              Механика
            input.filter__radio-input(type="radio", v-model="filterParams.transmission", name="transmission", id="radio_trans_auto", value="130")
            label.filter__radio-label(for="radio_trans_auto")
              Автомат
            input.filter__radio-input(type="radio", v-model="filterParams.transmission", name="transmission", id="radio_trans_variator", value="132")
            label.filter__radio-label(for="radio_trans_variator")
              Вариатор
        .filter__input-group._radio
          .filter__group-head Руль
          .filter__group-body
            input.filter__radio-input(type="radio", v-model="filterParams.wheel" name="wheel" id="radio_wheel_all" value="")
            label.filter__radio-label(for="radio_wheel_all")
              Все
            input.filter__radio-input(type="radio", v-model="filterParams.wheel", name="wheel", id="radio_wheel_left", value="128")
            label.filter__radio-label(for="radio_wheel_left")
              Левый руль
            input.filter__radio-input(type="radio", v-model="filterParams.wheel", name="wheel", id="radio_wheel_right", value="129")
            label.filter__radio-label(for="radio_wheel_right")
              Правый руль
      .filter__col
        .filter__input-group._radio
          .filter__group-head Фото
          .filter__group-body
            input.filter__radio-input(type="radio", v-model="filterParams.hasPhoto", name="photo", id="radio_photo_false", value="")
            label.filter__radio-label(for="radio_photo_false")
              Все
            input.filter__radio-input(type="radio", v-model="filterParams.hasPhoto", name="photo", id="radio_photo_true", value="true")
            label.filter__radio-label(for="radio_photo_true")
              Есть фото
        .filter__input-group._submit
          button.filter__submit
            Фильтр
    .filter__result По запросу найдено {{ result.count }}
</template>

<script>

export default {
  data() {
    return {
      filterParams: {
        hasPhoto: '',
        minPrice: '',
        maxPrice: '',
        minYear: '',
        maxYear: '',
        transmission: '',
        wheel: ''
      }
    }
  },
  props: {
    queryData: {
      required: true
    },
    result: {
      required: true
    }
  },
  methods: {
    submitForm() {
      let params = {};
      
      params.price = {
      };
      params.year = {

      };
      params.limit = this.queryData.limit;
      params.offset = 0;

      if(this.filterParams.minPrice > 0){
        params.price.min = this.filterParams.minPrice * 1000;
      }
      if(this.filterParams.maxPrice > 0){
        params.price.max = this.filterParams.maxPrice * 1000;
      }
      if(this.filterParams.minYear > 0){
        params.year.min = this.filterParams.minYear;
      }
      if(this.filterParams.maxYear > 0){
        params.year.max = this.filterParams.maxYear;
      }
      if(this.filterParams.hasPhoto){
        params.with_photo = 1;
      }
      if(this.filterParams.wheel){
        params.wheel = this.filterParams.wheel;
      }
      if(this.filterParams.transmission){
        params.transmission = this.filterParams.transmission;
      }
      this.$emit('push-to-query', params);
      this.$emit('submit-form', params);
    }
  },
  ready(){
    this.getPages(pageData.count, pageData.limit);
  }
}
</script>
