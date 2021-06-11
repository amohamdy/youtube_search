import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import VideoDetails from "../views/VideoDetails.vue";
import ChannelDetails from "../views/ChannelDetails.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },

  {
    path: "/video/:id",
    name: "VideoDetails",
    component: VideoDetails,
    props:true,
  },
  {
    path: "/channel/:id",
    name: "ChannelDetails",
    component: ChannelDetails,
    props:true,

  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
