import angular from 'angular';

const helloWorld = {
    restrict: 'E',
    template: `
        <h1>Helllo World from Angular!</h1>
    `
}

export default angular
    .module('helloWorld', [])
    .directive('helloWorld', () => helloWorld).name;
