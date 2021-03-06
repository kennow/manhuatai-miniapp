const filter = require('../../utils/filter');

Component({
  data: {
    bannerSwiperHeight: '448rpx',
    bannerList: [],
  },
  properties: {
    bannerData: {
      type: Object,
      value: {},
      observer: function(newVal) {
        if (newVal && newVal.comic_info) {
          this._setBannerList(newVal);
        }
      }
    },
    showLabel: {
      type: Boolean,
      value: false,
    }
  },
  methods: {
    // 将properties中的数据映射到data中，并过滤成需要的格式
    _setBannerList: function(bannerData) {
      this.setData({
        bannerList: filter.filterDataList(bannerData),
      });
    }
  },
});
