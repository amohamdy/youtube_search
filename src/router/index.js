import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import VideoDetails from "../views/VideoDetails.vue";
import ChannelDetails from "../views/ChannelDetails.vue";
import PlayListDetails from "../views/PlayListDetails.vue";



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

  },
  {
    path: "/playlist/:id",
    name: "PlayListDetails",
    component: PlayListDetails,
    props:true,

  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
