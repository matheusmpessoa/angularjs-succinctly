var app = angular.module("MyApp", []);

/* Diretiva 'basket' gerencia um array no qual é adicionado maças e laranjas */
app.directive("basket", function () {
    return {
        restrict: "E",
        controller: function ($scope, $element, $attrs) {
            $scope.content = [];
            this.addApple = function () {
                $scope.content.push("apple");
            };
            this.addOrange = function () {
                $scope.content.push("orange");
            };
        },
        link: function (scope, element) {
            element.bind("mouseenter", function () {
                alert(scope.content);
                console.log(scope.content);
            });
        }
    };
});

/* Maças */
app.directive("apple", function () {
    return {
        require: "basket",
        link: function (scope, element, attrs, basketCtrl) {
            basketCtrl.addApple();
        }
    };
});

/* Laranjas */
app.directive("orange", function () {
    return {
        require: "basket",
        link: function (scope, element, attrs, basketCtrl) {
            basketCtrl.addOrange();
        }
    };
});
