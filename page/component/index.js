Page({
  data: {
    imgUrls: [
      //'/image/b1.jpg',
      //'/image/b2.jpg',
      '/image/b3.jpg'
    ],
    // 最大字符数
    maxTextLen: 40,
    // 默认长度
    textLen: 0
  },
  getWords(e) {
    let page = this;
    // 设置最大字符串长度(为-1时,则不限制)
    let maxTextLen = page.data.maxTextLen;
    // 文本长度
    let textLen = e.detail.value.length;
    page.setData({
      maxTextLen: maxTextLen,
      textLen: textLen
    });
    if (textLen >= maxTextLen) {
      page.setData({
        color: "red"
      });
    } else {
      page.setData({
        color: "black"
      });
    }
  },
  
})

