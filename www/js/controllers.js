angular.module('app.controllers', [])
  
.controller('agendaCtrl', [ '$scope',  '$stateParams','$ionicModal','agendaApi', 
function  ($scope, $stateParams, $ionicModal, $agendaApi) {
    
    
    var contatos =[];
    $scope.permitirExcluir = false;
    
     $scope.habilitarExclusao = function (){
       $scope.permitirExcluir =! $scope.permitirExcluir
     }

       function obterObeterContatos(){
         contatos = $agendaApi.getContatos();
         $scope.contatos = contatos;

         return contatos;
       }

       obterObeterContatos();


        $scope.abrirTelaContato = function(){
            $scope.contato = {nome: '', telefone: '', favorito: false};
            $scope.openModal();
 }

        $scope.cancelarContato = function () {
          $scope.closeModal();

        }      

        $scope.salvarContato = function(contato){
          $agendaApi.addContato(contato);

          obterObeterContatos();

          $scope.closeModal();
        }

        $scope.excluirContato = function (contato){
          $agendaApi.deleteContato(contato);
          obterObeterContatos();
        }

       // modal inicia 
       $ionicModal.fromTemplateUrl('contato.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
     

   
}])
   
.controller('pageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    
}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
 