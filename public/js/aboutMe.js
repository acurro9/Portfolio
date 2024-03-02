//Widget google maps
(() => {
  var setting = {
    query: "Calle Ana Benítez, 15, Las Palmas de Gran Canaria, España",
    width: 800,
    height: 400,
    satellite: false,
    zoom: 16,
    placeId: "ChIJa0hXg7mVQAwRuSYnHABVhm4",
    cid: "0x6e8655001c2726b9",
    coords: [28.0976547, -15.4393596],
    lang: "es",
    queryString: "Calle Ana Benítez, 15, Las Palmas de Gran Canaria, España",
    centerCoord: [28.0976547, -15.4393596],
    id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
    embed_id: "1038885",
  };
  var d = document;
  var s = d.createElement("script");
  s.src = "https://1map.com/js/script-for-user.js?embed_id=1038885";
  s.async = true;
  s.onload = function (e) {
    window.OneMap.initMap(setting);
  };
  var to = d.getElementsByTagName("script")[0];
  to.parentNode.insertBefore(s, to);
})();
