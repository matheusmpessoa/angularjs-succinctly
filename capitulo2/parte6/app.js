var app = angular.module("MyApp", []);

//Compartilhando a lógica entre controllers
app.factory("UserService", function () {
    var users = ["Peter", "Daniel", "Nina"];
    return {
        all: function () {
            return users;
        },
        first: function () {
            return users[0];
        }
    };
});

app.controller("MyCtrl", function ($scope, UserService) {
    $scope.users = UserService.all();
});

app.controller("AnotherCtrl", function ($scope, UserService) {
    $scope.firstUser = UserService.first();
});


/* O método factory cria um singleton UserService que retorna duas funções para retorno de todos os usuários e apenas o primeiro.
O controller pega o UserService injetado adicionando o para o controller junto de sua função como parametro.
*/
