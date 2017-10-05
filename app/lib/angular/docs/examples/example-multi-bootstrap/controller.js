var app = angular.module('multi-bootstrap', [])

.controller('BrokenTable', function($scope) {
    $scope.headings = ['One', 'Two', 'Three'];
    $scope.fillings = [[1, 2, 3], ['A', 'B', 'C'], [7, 8, 9]];
});