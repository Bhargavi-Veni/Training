var app = angular.module("MyApp", ['ui.bootstrap']);

// var EditPersonDialogModel = function () {
//     this.visible = false;
// };
// EditPersonDialogModel.prototype.open = function (student) {
//     this.student = student;
//     this.visible = true;
// };
// EditPersonDialogModel.prototype.close = function () {
//     this.visible = false;
// };

app.controller("MyCtrl", function ($scope, $http, $modal) {
    $scope.getStudent = function () {
        $http.get('http://localhost:3400/api/user/')
            .then((response) => {
                console.log(response.data);
                $scope.students = response.data;
            })
    },


        $scope.insertStudent = function () {
            const data = { "name": $scope.name, "gender": $scope.gender };
            $http.post('http://localhost:3400/api/user/', data)
                .then((response) => {
                    console.log(response);
                    alert("Student is inserted");
                })

        },

        $scope.deleteStudent = function (id) {
            // const id = $scope.deleteId;
            $http.delete('http://localhost:3400/api/user/' + id)
                .then((response) => {
                    console.log(response);
                    alert("Student record is deleted");
                }
                )
        },

        // $scope.getStudentById = function (id) {
        //     $http.get('http://localhost:3400/user/' + id)
        //         .then((response) => {
        //             console.log(response.data);
        //             $scope.students = response.data;
        //         })
        // },

        $scope.openEditModal = function (student) {
            console.log(student);
            $scope.student = student;
            //var modalInstance = 
            $modal.open({
                templateUrl: 'edit.html',
                backdrop: true,
                windowClass: 'modal',

                controller: function ($scope, $modalInstance) {
                    $scope.student = student;
                    $scope.updateStudent = function (student) {
                        const data = { "name": student.name, "gender": student.gender };
                        $http.put('http://localhost:3400/api/user/' + student.id, data)
                            .then((response) => {
                                console.log(response);
                                alert("Student record is updated!!");
                            })
                    }
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                resolve: {
                    user: function () {
                        return $scope.student;
                    }
                }
            });
            // FIrst open modal popup
            // pass the student information to popup (prefill name and gender)
            // on clik of edit  call updateStudent by id function

        },

        $scope.clearName = function() {
            $scope.name = null;
        },
        $scope.clearGender = function() {
            $scope.gender = null;
        },

        function updateStudentviaPut(student) {
            const data = { "name": student.name, "gender": student.gender };
            $http.put('http://localhost:3400/api/user/' + student.id, data)
                .then((response) => {
                    console.log(response);
                    alert("Student is updated!!");
                })
        }

});

// app.directive('editPersonDialog', [function () {
//     return {
//         restrict: 'E',
//         scope: {
//             model: '=',
//         },
//         link: function (scope, element, attributes) {
//             scope.$watch('model.visible', function (newValue) {
//                 var modalElement = element.find('.modal');
//                 modalElement.modal(newValue ? 'show' : 'hide');
//             });

//             element.on('shown.bs.modal', function () {
//                 scope.$apply(function () {
//                     scope.model.visible = true;
//                 });
//             });

//             element.on('hidden.bs.modal', function () {
//                 scope.$apply(function () {
//                     scope.model.visible = false;
//                 });
//             });

//         },
//         templateUrl: 'edit.html',
//     };
// }]);
