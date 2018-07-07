<template>
    
<div id="app">
        


<!--<router-link to="/previewcard">About</router-link>-->

<router-view></router-view>

</div>
</template>

<script>
// import home from '@/components/home'
//import axios from 'axios'
    
//import PreviewCardTop from '@/components/PreviewCard/PreviewCardTop'
export default {

  name: 'App',
  data () {
    return {
      searcResults: [],
      searchValue: '',
      apiUrl: "https://api.themoviedb.org/3/movie/popular?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&page=1"
    }
  },
  methods: {

    getSearch () {
        axios.get(this.apiUrl).then(res => console.log(res))
//      let options = {
//        params: {
//            query: this.searchValue
//        }
//      }
//      axios.get(this.apiUrl, options).then(function(response) {
//
//        //  console.log(window.location.href)
//        this.searcResults = response.data.results
//        window.location.href = '#/search'
//        //this.searchValue = ''
//
//      },
//         console.log
//      )
    }
  }
}

</script>

<style>

</style>
