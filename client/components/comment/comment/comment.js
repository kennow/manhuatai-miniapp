Component({
  properties: {
    isDetail: {
      type: Boolean,
      value: false,
    },
    ssidType: {
      type: Number,
      value: 1, // 默认ssidType是帖子类型 1 => 帖子类型 0 => 漫画类型
    },
    title: {
      type: String,
      value: '',
    },
    commentList: {
      type: Array,
      valeu: [],
    },
  },
});
