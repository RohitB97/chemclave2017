'use strict';

(function(){

class AdminportalComponent {
  constructor($scope) {
    $scope.show_options = false;
    
    $scope.display_options = function(){
    	if($scope.show_options==false)
    	$scope.show_options = true;

       else
       	$scope.show_options = false;
    };

    $scope.user_list = [
      {name:'User 1',accomodation_status:'Pending',accepted:false,mobile:9988776655},
      {name:'User 2',accomodation_status:'Approved',accepted:true,mobile:9988776655},
      {name:'User 3',accomodation_status:'Approved',accepted:true,mobile:9988776655},
      {name:'User 4',accomodation_status:'Pending',accepted:false,mobile:9988776655},
      {name:'User 5',accomodation_status:'Pending',accepted:false,mobile:9988776655},
      {name:'User 6',accomodation_status:'Approved',accepted:true,mobile:9988776655}
    ];

    $scope.option_click = function(option,id){
       
    }
  }
}

angular.module('chemclaveApp')
  .component('adminportal', {
    templateUrl: 'app/adminportal/adminportal.html',
    controller: AdminportalComponent
  });

})();
