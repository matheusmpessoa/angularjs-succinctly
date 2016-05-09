var app = angular.module("myApp", []);

//Nomeou a diretiva
app.directive("myWidget", function () {

    //Executou a função
    var linkFunction = function (scope, element, attributes) {
        var paragraph = element.children()[0];
        $(paragraph).on("click", function () {
            $(this).css({
                "background-color": "red"
            });
        });
    };

    /* Diretiva retornou uma restrição
    Restrição pode ser usada em diversos elementos, necessitando uma adaptação
    Método da diretiva que espera uma função que pode ser utilizada na inicialização e injeção de dependencias */
    return {
        restrict: "E",
        link: linkFunction
    };
});
