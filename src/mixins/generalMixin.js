export default{
    methods:{

        getAllSearchResults() {
          this.$store.commit("setPageLoadingStatus", true);
          if(this.$router.currentRoute.path != '/'){
              this.$router.push({ name: 'Search' })
          }
          if(this.order){
            var url = `https://www.googleapis.com/youtube/v3/search?&q=${this.searchText}&maxResults=5&part=snippet&key=${this.apiKey}&type=${this.type}&order=${this.order}`;
          }
          else{
            var url = `https://www.googleapis.com/youtube/v3/search?&q=${this.searchText}&maxResults=5&part=snippet&key=${this.apiKey}&type=${this.type}`;
          }
            this.axios.get(url).then((res) => {
              console.log(res.data)

            this.$store.commit("setSearchResults", res.data);
            this.$store.commit("setPageLoadingStatus", false);

          }).catch(err=>console.log(err))
        },

    }
}