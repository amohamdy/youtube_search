import { shallowMount } from "@vue/test-utils";
import ChannelCard from "@/components/channel/ChannelCard.vue";

const item={
    "kind":"youtube#searchResult",
    "etag":"QwGKdCMRLwC3SQOE6a7-GAkCNdI",
    "id":{
        "kind":"youtube#channel",
        "channelId":"UCGdv-wCZDpNB-N-f-FZ3sBQ"
    },
    "snippet":
    {
        "publishedAt":"2020-02-24T23:13:38Z",
        "channelId":"UCGdv-wCZDpNB-N-f-FZ3sBQ",
        "title":"spongpop",
        "description":"Iowa Iowa Iowa Iowa Iowa Iowa.",
        "thumbnails":
        {
            "default":{
                "url":"https://yt3.ggpht.com/ytc/AAUvwnhEX6v6DFDjP2z0xxoiXqg5fip6EdhT8BCVP9nh6g=s88-c-k-c0xffffffff-no-rj-mo"
            },
            "medium":{
                "url":"https://yt3.ggpht.com/ytc/AAUvwnhEX6v6DFDjP2z0xxoiXqg5fip6EdhT8BCVP9nh6g=s240-c-k-c0xffffffff-no-rj-mo"
            },
            "high":{
                "url":"https://yt3.ggpht.com/ytc/AAUvwnhEX6v6DFDjP2z0xxoiXqg5fip6EdhT8BCVP9nh6g=s800-c-k-c0xffffffff-no-rj-mo"
            }
        },
        "channelTitle":"spongpop",
        "liveBroadcastContent":"none",
        "publishTime":"2020-02-24T23:13:38Z"
    }
}
const wrapper = shallowMount(ChannelCard, {
    propsData: { item },
});


describe("check if component is vue instance", () => {
  it("renders props.msg when passed", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("renders the right channel title", () => {
    expect(wrapper.find('#channel-card h2').text()).toContain(item.snippet.channelTitle)
  });
  it("renders the right channel thumbnail", () => {
    expect(wrapper.find('#channel-card .card__media img').attributes('src')).toContain(item.snippet.thumbnails.high.url)
  });
  it("renders the right channel published time", () => {
    expect(wrapper.find('#channel-card .meta--published').text()).toContain(item.snippet.publishedAt)
  });
  it("renders the right channel description", () => {
    expect(wrapper.find('#channel-card p').text()).toContain(item.snippet.description)
  });

});
