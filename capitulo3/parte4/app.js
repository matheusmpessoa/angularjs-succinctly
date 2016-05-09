var app = angular.module("MyApp", []);

app.directive("myWidget", function () {
    return {
        restrict: "E",
        transclude: true,
        template: "<div ng-transclude><h3>Heading vindo do app.js</h3></div>"
    };
});