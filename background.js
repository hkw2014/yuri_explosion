(function() {
  chrome.contextMenus.create({
    "title": "\"%s\"をALCで検索",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
      var keyword, url;
      keyword = encodeURIComponent(info.selectionText);
      url = "http://eow.alc.co.jp/search?q=" + keyword + "&ref=sa";
      return chrome.tabs.create({
        url: url
      });
    }
  });

}).call(this);
