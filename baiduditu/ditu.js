/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:27:32
 * @version $Id$
 */
var map = new BMap.Map("container");          // 创建地图实例  
var point = new BMap.Point(120.094, 30.150);  // 创建点坐标  
map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
var map = new BMap.Map("map");    

var map = new BMap.Map("container");
var point = new BMap.Point(120.094, 30.150);
map.centerAndZoom(point, 15);
window.setTimeout(function() {
  map.panTo(new BMap.Point(120.094, 30.150));
}, 2000);
map.centerAndZoom(new BMap.Point(120.094, 30.150), 11);    
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 
map.centerAndZoom(new BMap.Point(120.094, 30.150), 11);
var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map

  }
});
local.searchNearby("酒店","西湖",1000);
//transit.search("杭州师范大学"，"宾馆");
var map = new BMap.Map("map");    
map.centerAndZoom(new BMap.Point(120.094, 30.150), 11);
var driving = new BMap.DrivingRoute(map, {
  renderOptions: {
    map: map,
    panel: "results",
    autoViewport: true
  }
});
driving.search("杭州师范大学西南门", "宾馆");