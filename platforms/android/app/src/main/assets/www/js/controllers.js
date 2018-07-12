angular.module('app.controllers', [])
  
.controller('agendaCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    
    var _contatos = [
        {nome: 'Paulo Rogerio', telefone:'2761-0956', favoritos: false},
        {nome: 'Agatha', telefone:'3356-0933', favoritos: false},
        {nome: 'Fernanda', telefone:'2561-5400', favoritos: true},
        ];

    
       $scope.contatos = _contatos;
   
}])
   
.controller('pageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    
}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
 