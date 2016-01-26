import angular from 'angular';

import helloWorld from './hello-world';

angular.module('app', [
    helloWorld
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app'])
});
