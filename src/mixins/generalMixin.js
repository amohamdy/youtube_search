export default{
    methods:{
        checkWindowSize(){
            if(this.windowWidth > 768){
              this.smScreen = false;
            }else{
              this.smScreen=true
            }
          },
    }
}