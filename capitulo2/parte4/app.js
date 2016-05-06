function MyCtrl($scope) {
    $scope.name = "";
    $scope.$watch("name", function (newValue, oldValue) {
        if ($scope.name.length > 0) {
            //Ira realizar o print na tela junto da mensagem assim que o usuário digitar seu nome
            $scope.greeting = "Greetings " + $scope.name + "!!!";
        }
    });
}
