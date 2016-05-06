var app = angular.module("MyApp", []);

//Definição do controller
app.controller("MyCtrl", function ($scope) {
    //Valores iniciado com o scope
    $scope.name = "Peter";
    $scope.user = {
        name: "Parker"
    };
});

app.controller("MyNestedCtrl", function ($scope) {

});
