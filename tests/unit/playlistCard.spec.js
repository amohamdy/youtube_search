import { shallowMount } from "@vue/test-utils";
import PlayListCard from "@/components/playlist/PlayListCard.vue";


const item=
{
    "kind":"youtube#searchResult",
    "etag":"MK0NNuBPSUaCtgHhQlIkAQm_vlw",
    "id":{
        "kind":"youtube#playlist",
        "playlistId":"PLnnQAfTNm-__geI9zQ5gC4aZNUMVIHKNo"
    },
    "snippet":
    {
        "publishedAt":"2019-09-24T20:15:12Z",
        "channelId":"UCC8P_rTq3_m42FbNAJ0KtkQ",
        "title":"Sponge bob.exe",
        "description":"",
        "thumbnails":{
            "default":{
                "url":"https://i.ytimg.com/vi/50P2bwq4NN0/default.jpg",
                "width":120,
                "height":90
            },
            "medium":{
                "url":"https://i.ytimg.com/vi/50P2bwq4NN0/mqdefault.jpg",
                "width":320,"height":180
            },
            "high":{
                "url":"https://i.ytimg.com/vi/50P2bwq4NN0/hqdefault.jpg",
                "width":480,
                "height":360
            }
        },
        "channelTitle":"Nancy Chacchi",
        "liveBroadcastContent":"none",
        "publishTime":"2019-09-24T20:15:12Z"
    }
}
const wrapper = shallowMount(PlayListCard, {
    propsData: { item },
});

describe("check if component is vue instance", () => {
  it("renders props.msg when passed", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("renders the right playlist title", () => {
    expect(wrapper.find('#playlist-card h2').text()).toContain(item.snippet.title)
  });
  it("renders the right playlist thumbnail", () => {
    expect(wrapper.find('#playlist-card .card__media img').attributes('src')).toContain(item.snippet.thumbnails.high.url)
  });
  it("renders the right channel title", () => {
    expect(wrapper.find('#playlist-card .card__content .channel-title').text()).toContain(item.snippet.channelTitle)
  });

  it("renders the right playlist desc", () => {
    expect(wrapper.find('#playlist-card p').text()).toContain(item.snippet.description)
  });
  it("renders the right playlist count", () => {
    expect(wrapper.find('#playlist-card .overlay h4').text()).toContain(item.contentDetails?item.contentDetails.itemCount:'0')
  });
});
