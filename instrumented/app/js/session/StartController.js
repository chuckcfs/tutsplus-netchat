
var __cov_YtzQvO$QGqR6VsVmxDKDAw = (Function('return this'))();
if (!__cov_YtzQvO$QGqR6VsVmxDKDAw.__coverage__) { __cov_YtzQvO$QGqR6VsVmxDKDAw.__coverage__ = {}; }
__cov_YtzQvO$QGqR6VsVmxDKDAw = __cov_YtzQvO$QGqR6VsVmxDKDAw.__coverage__;
if (!(__cov_YtzQvO$QGqR6VsVmxDKDAw['app/js/session/StartController.js'])) {
   __cov_YtzQvO$QGqR6VsVmxDKDAw['app/js/session/StartController.js'] = {"path":"app/js/session/StartController.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":29}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":71}}},"3":{"name":"(anonymous_3)","line":9,"loc":{"start":{"line":9,"column":30},"end":{"line":9,"column":41}}},"4":{"name":"(anonymous_4)","line":16,"loc":{"start":{"line":16,"column":37},"end":{"line":16,"column":49}}},"5":{"name":"(anonymous_5)","line":23,"loc":{"start":{"line":23,"column":38},"end":{"line":23,"column":50}}},"6":{"name":"(anonymous_6)","line":29,"loc":{"start":{"line":29,"column":42},"end":{"line":29,"column":63}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":37,"column":3}},"2":{"start":{"line":4,"column":4},"end":{"line":36,"column":6}},"3":{"start":{"line":5,"column":8},"end":{"line":5,"column":75}},"4":{"start":{"line":6,"column":8},"end":{"line":6,"column":57}},"5":{"start":{"line":7,"column":8},"end":{"line":7,"column":47}},"6":{"start":{"line":9,"column":8},"end":{"line":14,"column":10}},"7":{"start":{"line":10,"column":12},"end":{"line":13,"column":15}},"8":{"start":{"line":16,"column":8},"end":{"line":35,"column":11}},"9":{"start":{"line":17,"column":12},"end":{"line":17,"column":79}},"10":{"start":{"line":18,"column":12},"end":{"line":18,"column":58}},"11":{"start":{"line":20,"column":12},"end":{"line":32,"column":13}},"12":{"start":{"line":21,"column":16},"end":{"line":21,"column":33}},"13":{"start":{"line":23,"column":16},"end":{"line":27,"column":19}},"14":{"start":{"line":24,"column":20},"end":{"line":26,"column":23}},"15":{"start":{"line":29,"column":16},"end":{"line":31,"column":19}},"16":{"start":{"line":30,"column":20},"end":{"line":30,"column":73}},"17":{"start":{"line":34,"column":12},"end":{"line":34,"column":34}}},"branchMap":{"1":{"line":20,"type":"if","locations":[{"start":{"line":20,"column":12},"end":{"line":20,"column":12}},{"start":{"line":20,"column":12},"end":{"line":20,"column":12}}]}}};
}
__cov_YtzQvO$QGqR6VsVmxDKDAw = __cov_YtzQvO$QGqR6VsVmxDKDAw['app/js/session/StartController.js'];
__cov_YtzQvO$QGqR6VsVmxDKDAw.s['1']++;define(function(require){'use strict';__cov_YtzQvO$QGqR6VsVmxDKDAw.f['1']++;__cov_YtzQvO$QGqR6VsVmxDKDAw.s['2']++;return function($rootScope,$scope,$location,socket,Session){__cov_YtzQvO$QGqR6VsVmxDKDAw.f['2']++;__cov_YtzQvO$QGqR6VsVmxDKDAw.s['3']++;$('#app-sidebar').addClass('hidden').removeClass('col-md-3');__cov_YtzQvO$QGqR6VsVmxDKDAw.s['4']++;$('#main-container').removeClass('col-md-9');__cov_YtzQvO$QGqR6VsVmxDKDAw.s['5']++;$('#user-menu').addClass('hidden');__cov_YtzQvO$QGqR6VsVmxDKDAw.s['6']++;$scope.submit=function(){__cov_YtzQvO$QGqR6VsVmxDKDAw.f['3']++;__cov_YtzQvO$QGqR6VsVmxDKDAw.s['7']++;Session.login({email:$scope.email,pass:$scope.pass});};__cov_YtzQvO$QGqR6VsVmxDKDAw.s['8']++;$scope.$on('LOGIN_SUCCESS',function(){__cov_YtzQvO$QGqR6VsVmxDKDAw.f['4']++;__cov_YtzQvO$QGqR6VsVmxDKDAw.s['9']++;$('#app-sidebar').removeClass('hidden').addClass('col-md-3');__cov_YtzQvO$QGqR6VsVmxDKDAw.s['10']++;$('#main-container').addClass('col-md-9');__cov_YtzQvO$QGqR6VsVmxDKDAw.s['11']++;if(!socket.isConnected()){__cov_YtzQvO$QGqR6VsVmxDKDAw.b['1'][0]++;__cov_YtzQvO$QGqR6VsVmxDKDAw.s['12']++;socket.connect();__cov_YtzQvO$QGqR6VsVmxDKDAw.s['13']++;socket.on('connect',function(){__cov_YtzQvO$QGqR6VsVmxDKDAw.f['5']++;__cov_YtzQvO$QGqR6VsVmxDKDAw.s['14']++;socket.emit('join',{user:Session.getUserId()});});__cov_YtzQvO$QGqR6VsVmxDKDAw.s['15']++;socket.on('message:new',function(message){__cov_YtzQvO$QGqR6VsVmxDKDAw.f['6']++;__cov_YtzQvO$QGqR6VsVmxDKDAw.s['16']++;$rootScope.$broadcast('message:received',message);});}else{__cov_YtzQvO$QGqR6VsVmxDKDAw.b['1'][1]++;}__cov_YtzQvO$QGqR6VsVmxDKDAw.s['17']++;$location.path('/');});};});
