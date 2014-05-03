 function ListCtrl($scope) {
  $scope.computers = [
    {"name": "15.6'' [Home] Ноутбук DNS (0164783) (HD)",
     "price": 20490,
      "img": "1.jpg"},
    {"name": "17.3'' [Gamer] Ноутбук DNS (0801153) (HD+)",
     "price": 33990,
     "img": "2.jpg"},
    {"name": "Компьютер DNS Prestige XL [0800795]",
     "price": 59990,
    "img": "3.jpg"},
    {"name": "ПО Microsoft ' Windows 8.1 ' Русская версия DVD (ВОХ) [WN7-00937]",
     "price": 6090,
    "img": "4.jpg"},
{"name": "15.6'' [Home] Ноутбук DNS (0164783) (HD)",
     "price": 20490,
      "img": "1.jpg"},
    {"name": "17.3'' [Gamer] Ноутбук DNS (0801153) (HD+)",
     "price": 33990,
     "img": "2.jpg"},
    {"name": "Компьютер DNS Prestige XL [0800795]",
     "price": 59990,
    "img": "3.jpg"},
    {"name": "ПО Microsoft ' Windows 8.1 ' Русская версия DVD (ВОХ) [WN7-00937]",
     "price": 6090,
    "img": "4.jpg"},
    {"name": "15.6'' [Home] Ноутбук DNS (0164783) (HD)",
     "price": 20490,
      "img": "1.jpg"},
   {"name": "17.3'' [Gamer] Ноутбук DNS (0801153) (HD+)",
     "price": 33990,
     "img": "2.jpg"},
    {"name": "Компьютер DNS Prestige XL [0800795]",
     "price": 59990,
    "img": "3.jpg"},
    {"name": "ПО Microsoft ' Windows 8.1 ' Русская версия DVD (ВОХ) [WN7-00937]",
     "price": 6090,
    "img": "4.jpg"}
  ];
  $scope.baskets = [];  
  $scope.addComp = function(computer){
      $scope.baskets.push(angular.copy(computer));
       $scope.price+=computer.price;
   }
   $scope.removeComp = function(computer){
       var index = $scope.baskets.indexOf(computer);
       $scope.baskets.splice(index,1)
       $scope.price-=computer.price;
   }
     $scope.price = 0;
}