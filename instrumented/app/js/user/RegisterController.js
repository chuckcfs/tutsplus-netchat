
var __cov_TiXCjdyjF9f23l6swI9qDw = (Function('return this'))();
if (!__cov_TiXCjdyjF9f23l6swI9qDw.__coverage__) { __cov_TiXCjdyjF9f23l6swI9qDw.__coverage__ = {}; }
__cov_TiXCjdyjF9f23l6swI9qDw = __cov_TiXCjdyjF9f23l6swI9qDw.__coverage__;
if (!(__cov_TiXCjdyjF9f23l6swI9qDw['app/js/user/RegisterController.js'])) {
   __cov_TiXCjdyjF9f23l6swI9qDw['app/js/user/RegisterController.js'] = {"path":"app/js/user/RegisterController.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":29}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":48}}},"3":{"name":"(anonymous_3)","line":5,"loc":{"start":{"line":5,"column":26},"end":{"line":5,"column":38}}},"4":{"name":"(anonymous_4)","line":9,"loc":{"start":{"line":9,"column":36},"end":{"line":9,"column":57}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":13,"column":3}},"2":{"start":{"line":4,"column":4},"end":{"line":12,"column":6}},"3":{"start":{"line":5,"column":8},"end":{"line":7,"column":10}},"4":{"start":{"line":6,"column":12},"end":{"line":6,"column":39}},"5":{"start":{"line":9,"column":8},"end":{"line":11,"column":11}},"6":{"start":{"line":10,"column":12},"end":{"line":10,"column":39}}},"branchMap":{}};
}
__cov_TiXCjdyjF9f23l6swI9qDw = __cov_TiXCjdyjF9f23l6swI9qDw['app/js/user/RegisterController.js'];
__cov_TiXCjdyjF9f23l6swI9qDw.s['1']++;define(function(require){'use strict';__cov_TiXCjdyjF9f23l6swI9qDw.f['1']++;__cov_TiXCjdyjF9f23l6swI9qDw.s['2']++;return function($scope,$location,User){__cov_TiXCjdyjF9f23l6swI9qDw.f['2']++;__cov_TiXCjdyjF9f23l6swI9qDw.s['3']++;$scope.register=function(){__cov_TiXCjdyjF9f23l6swI9qDw.f['3']++;__cov_TiXCjdyjF9f23l6swI9qDw.s['4']++;User.create($scope.user);};__cov_TiXCjdyjF9f23l6swI9qDw.s['5']++;$scope.$on('USER_CREATED',function(e,data){__cov_TiXCjdyjF9f23l6swI9qDw.f['4']++;__cov_TiXCjdyjF9f23l6swI9qDw.s['6']++;$location.path('/login');});};});
