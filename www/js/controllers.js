


angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) { })

.controller('My', function($scope) { })

.controller("ExampleController", function($scope, $ionicSlideBoxDelegate) {
$scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
}
})


.controller('TopCouponCtrl', function($scope,$ionicModal,$location,$ionicLoading,$timeout,$ionicPopover) {
       $scope.$on('$ionicView.afterEnter', function() {
                   if(appConfig.flag==0)
                    {
                     appConfig.flag=1;
                    console.log(appConfig.flag);
              
                      $scope.openPopover()
                    }
                    else{$scope.closePopover()}


                   console.log('Opened!')
              })
             console.log(appConfig.flag);
         

             $scope.something = function() {
              appConfig.color=1;
             };  

             $ionicPopover.fromTemplateUrl('templates/slider.html', {
            scope: $scope
            }).then(function(popover) {
              $scope.popover = popover;
            });  




             $scope.openPopover = function() {
             $scope.popover.show();
             };  

             $scope.closePopover = function() {
            $scope.popover.hide();
             };



        $scope.navigationcoupon=function(){
          $location.path('/app/coupons');

        };

             $scope.items = [
            {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
            {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
            {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
            {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
            {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
            {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
            {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
            {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'coupons',wimage: 'img/coupon-mark.png'}


            ];



            $scope.slides = [
            {title: 'Why log in??', desc: 'lorem ipsum dolor sit consectetur adispicing edit',image: 'img/1.jpg'},
            {title: 'Item 2', desc: 'This is item 2'},
            {title: 'Item 3', desc: 'This is item 3'},
            {title: 'Item 4', desc: 'This is item 4'},

            ];



})

.controller('SliderCtrl', function($scope) {  })
.controller('TopCouponAfterCtrl', function($scope) {



 })






.controller('CouponCtrl', function($scope,$location,$ionicModal,$ionicHistory,$ionicPopover) {
        $scope.navigation=function(){
          $location.path('/app/topcoupons');

        };

         
      

        $ionicModal.fromTemplateUrl('templates/couponcode.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });


        $scope.firstpopup=function(){
          $scope.modal.show()
        }


        $scope.firstpopuphide=function(){
        $scope.modal.hide()
        }

                    $scope.items = [
            {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'#/coupons',wimage: 'img/winner.png'},
            {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'#/coupons',wimage: 'img/winner.png'},
            {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'#/coupons',wimage: 'img/winner.png'},
            {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'#/coupons',wimage: 'img/winner.png'},
            {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'#/coupons',wimage: 'img/winner.png'},
            {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'#/coupons',wimage: 'img/winner.png'},
            {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'#/coupons',wimage: 'img/winner.png'},
            {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'#/coupons',wimage: 'img/winner.png'}


            ];


})



.controller('CouponCodeCtrl', function($scope) { })










  




  




  
 

