import { shallowMount } from "@vue/test-utils";
import VideoDetails from "@/views/VideoDetails.vue";


 const item =   {
    "kind": "youtube#searchResult",
    "etag": "ExitAC2wu896-2MuiZzEQ92YxL8",
    "id": {
        "kind": "youtube#video",
        "videoId": "Ommz8QGztak"
    },
    "snippet": {
        "publishedAt": "2020-01-16T14:00:02Z",
        "channelId": "UCZTLU39XbfN04FBXVc0vD1g",
        "title": "ABC Song + More Nursery Rhymes &amp; Kids Songs - CoComelon",
        "description":"ومن الذين لا يحبون جيرانهم؟ اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة مثل سبونج بوب سكوير بانتس وهنري البطل و ثاندرمان ومنزل لاود، ...",
        "thumbnails": {
        "default": {
            "url": "https://i.ytimg.com/vi/71h8MZshGSs/default.jpg",
            "width": 120,
            "height": 90
        },
        "medium": {
            "url": "https://i.ytimg.com/vi/71h8MZshGSs/mqdefault.jpg",
            "width": 320,
            "height": 180
        },
        "high": {
            "url": "https://i.ytimg.com/vi/71h8MZshGSs/hqdefault.jpg",
            "width": 480,
            "height": 360
        }
        },
        "channelTitle": "Nickelodeon Arabia",
        "liveBroadcastContent": "none",
        "publishTime": "2020-01-16T14:00:02Z"
    }
    };
const wrapper = shallowMount(VideoDetails, {
    propsData: { item },
});

describe("check if component is vue instance", () => {
  it("renders props.msg when passed", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("renders the right video title", () => {
    expect(wrapper.find('#video-card h2').text()).toContain(item.snippet.title)
  });
  it("renders the right video thumbnail", () => {
    expect(wrapper.find('#video-card .card__media img').attributes('src')).toContain(item.snippet.thumbnails.high.url)
  });
  it("renders the right channel title", () => {
    expect(wrapper.find('#video-card .card__content .channel-title').text()).toContain(item.snippet.channelTitle)
  });
  it("renders the right video desc", () => {
    expect(wrapper.find('#video-card p').text()).toContain(item.snippet.description)
  });
});
