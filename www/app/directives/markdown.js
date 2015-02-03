(function() {
    'use strict';

    angular.module('eliteApp').directive('markdown', [markdown]);

    function markdown() {
        // Usage:
        // <div data-markdown="{{vm.content}}"></div>

        var converter = new Showdown.converter();

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('markdown link');
            attrs.$observe('markdown', function (value) {
                console.log('markdown observe');
                var markup = converter.makeHtml(value);
                element.html(markup);
            });
        }
    }
})();