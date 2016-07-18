<style lang="sass">
  @import "../../styles/includes.scss";

  body {
    font-family: "PTSans";
  }
  
  .simple-link {
    @include ui-link;
  }

  input[type=text] {
    @include ui-input;
  }

  .fade-transition, .list-page, .detail-page, .car-detail {
    transition: .2s;
  }
  .fade-enter, .fade-leave, .stagger-enter, .stagger-leave {
    opacity: 0;
  }
</style>

<template lang="jade">
  div
    .detail-page(v-if="view == 'detail'")
      nav-back(@go-back="changeView")
      car-detail(:carData="oneCar")
    .list-page(v-if="view == 'list'")
      filter(@submit-form="updateCars", @push-to-query="changeQuery", :queryData="query", :result="metadata")
      car-list(:carList="cars", @open-card="updateDetail")
      pagination(@go-next="setNextPage", @go-prev="setPrevPage", :pageData="query")
</template>
  
<script>

import Filter from './Filter.vue';
import CarList from './CarList.vue';
import CarDetail from './CarDetail.vue';
import NavBack from './NavBack.vue';
import Pagination from './Pagination.vue';

export default {
  components: {
    Filter,
    CarList,
    NavBack,
    CarDetail,
    Pagination
  },
  data(){
    return {
      query: {
        limit: 12,
        offset: 0,
      },
      metadata: {},
      page: 0,
      pageQuant: 0,
      cars: {},
      oneCar: {},
      view: 'list'
    }
  },
  methods: {
    updateCars(params) {
      this.cars = {};
      let url = 'http://auto.ngs.ru/api/v1/offers/';
      this.$http.get(url, {params: params})
        .then((response) => {
          this.cars = response.data.offers;
          this.metadata = response.data.metadata.resultset;
        })
    },
    updateDetail(id) {
      let url = "http://auto.ngs.ru/api/v1/offers/"+id;
      this.$http.get(url)
        .then((response) => {
          this.oneCar = response.data.offers[0];
          this.changeView('detail');
        })
    },

    changeQuery(newQuery) {
      this.query = newQuery;
    },
    changeView(newView) {
      this.view = newView;
    },

    getPages(count,limit) {
      this.pageQuant = ' ' + count + limit;
    },
    changePage(pagenum) {
      this.offset = this.limit * pagenum;
    },
    setNextPage(limit){
      this.query.offset = this.query.offset + this.query.limit;
      console.log(this.query.offset);
      this.updateCars(this.query);
    },
    setPrevPage(){
      if(this.query.offset+1>this.query.limit){
        this.query.offset = this.query.offset - this.query.limit;
      }else if(this.query.offset > 0){
        this.query.offset = 0;
      }
        console.log(this.query.offset);
        this.updateCars(this.query);
    }

  },
  created(){
    this.updateCars(this.query);
  },
  ready(){
  }
}
</script>
