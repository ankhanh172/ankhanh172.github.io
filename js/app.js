var app = angular.module("myapp",["ngRouter"])

app.config(function($routerProvider){
   $routerProvider
      .when("/abc",{
         templateUrl:"abc.html"
      }) 
   });