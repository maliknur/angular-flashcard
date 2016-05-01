/**
 * Created by malik_nurmatov on 5/1/16.
 */

'use strict';
(function(){
    angular.module('animal')
        .controller('animalCtrl', animalController);
    animalController.$inject = ['animalFactory'];

    function animalController(animalFactory) {
        var vm = this;
        vm.title = 'Animal flashcards';
        vm.data = null;
        vm.images = [];
        vm.currImage = [];
        vm.changeSection1 = changeSection1;
        vm.changeSection2 = changeSection2;
        vm.changeSection3 = changeSection3;
        vm.random = randomize;
        vm.counter = 0;
        vm.result = false;
        animalFactory.getData().then(function(data) {
            vm.data = data.data;

            if(vm.data) {
                var temp1 =[],
                    temp2 =[],
                    temp3 =[];
                for(var i=0; i<vm.data.length; i=i+3) {
                    temp1.push(vm.data[i].src);
                    temp2.push(vm.data[i+1].src);
                    temp3.push(vm.data[i+2].src);
                }

                vm.images[0] = temp1;
                vm.images[1] = temp2;
                vm.images[2] = temp3;
            }
        });

        var count = 0;

        function changeSection1() {
            vm.counter++;
            audioFn();
            if(count < vm.images[0].length){
                vm.currImage[0] = vm.images[0][count++];
            } else {
                count = 0;
                vm.currImage[0] = vm.images[0][count++];
            }
        }

        function changeSection2() {
            vm.counter++;
            audioFn();
            if(count < vm.images[1].length) {
                vm.currImage[1] = vm.images[1][count++];
            } else {
                count = 0;
                vm.currImage[1] = vm.images[1][count++];
            }
        }

        function changeSection3() {
            vm.counter++;
            audioFn();
            if(count < vm.images[2].length){
                vm.currImage[2] = vm.images[2][count++];
            } else {
                count = 0;
                vm.currImage[2] = vm.images[2][count++];
            }
        }

        function audioFn() {
            var audio = document.getElementById('click');
            audio.play();
        }
        function randomize(images) {
            vm.result = '';
            vm.currImage[0] = images[0][randomNum()];
            vm.currImage[1] = images[1][randomNum()];
            vm.currImage[2] = images[2][randomNum()];
        }

        function randomNum() {
            return Math.floor(Math.random()*21);
        }

        if(vm.counter > 20) {
            vm.result = true;
        }

    }


})();