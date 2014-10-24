chrome.contextMenus.create {
  "title": "\"%s\"をALCで検索"
  "type": "normal"
  "contexts": ["selection"]
  "onclick": (info) ->
    keyword = encodeURIComponent info.selectionText
    url = "http://eow.alc.co.jp/search?q=#{keyword}&ref=sa"
    chrome.tabs.create {url: url}
}

