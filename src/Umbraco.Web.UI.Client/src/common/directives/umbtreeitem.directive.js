angular.module("umbraco.directives")
.directive('umbTreeItem', function($compile, $http, $templateCache, $interpolate, $log, $location, treeService) {
  return {
    restrict: 'E',
    replace: true,

    scope: {
      section: '@',
      cachekey: '@',
      node:'='
    },

    template: '<li><div ng-style="setTreePadding(node)">' +
        '<ins ng-hide="node.hasChildren" style="background:none;width:18px;"></ins>' +        
        '<ins ng-show="node.hasChildren" ng-class="{\'icon-caret-right\': !node.expanded, \'icon-caret-down\': node.expanded}" ng-click="load(node)"></ins>' +
       '<i class="{{node | umbTreeIconClass:\'icon umb-tree-icon sprTree\'}}" style="{{node | umbTreeIconStyle}}"></i>' +
       '<a ng-click="select(this, node, $event)" >{{node.name}}</a>' +
       '<i class="umb-options" ng-click="options(this, node, $event)"><i></i><i></i><i></i></i>' +
       '</div>'+
       '</li>',

    link: function (scope, element, attrs) {
      
        scope.options = function(e, n, ev){ 
          scope.$emit("treeOptionsClick", {element: e, node: n, event: ev});
        };

        /**
         * @ngdoc function
         * @name select
         * @methodOf umbraco.directives.umbTreeItem
         * @function
         *
         * @description
         * Handles the click event of a tree node

         * @param n {object} The tree node object associated with the click
         */
        scope.select = function(e,n,ev){

            //here we need to check for some legacy tree code
            if (n.jsClickCallback && n.jsClickCallback != "") {
                //this is a legacy tree node!                
                var js;
                if (n.jsClickCallback.startsWith("javascript:")) {
                    js = n.jsClickCallback.substr("javascript:".length);
                }
                else {
                    js = n.jsClickCallback;
                }
                try {
                    var func = eval(js);
                    //this is normally not necessary since the eval above should execute the method and will return nothing.
                    if (func != null && (typeof func === "function")) {
                        func.call();
                    }
                }
                catch(e) {
                    $log.error("Error evaluating js callback from legacy tree node: " + e);
                }
            }
            else {
                //not legacy, lets just set the route value
                $location.path(n.view);
            }

            scope.$emit("treeNodeSelect", { element: e, node: n, event: ev });
        };

        scope.load = function (node) {
          if (node.expanded){
            node.expanded = false;
            node.children = [];
          }else {

            treeService.getChildren( { node: node, section: scope.section } )
                .then(function (data) {
                    node.children = data;
                    node.expanded = true;
                }, function (reason) {
                    alert(reason);
                    return;
                });
            }   
        };

        scope.setTreePadding = function(node) {
          return { 'padding-left': (node.level * 20) + "px" };
        };

        var template = '<ul ng-class="{collapsed: !node.expanded}"><umb-tree-item ng-repeat="child in node.children" node="child" section="{{section}}"></umb-tree-item></ul>';
        var newElement = angular.element(template);
        $compile(newElement)(scope);
        element.append(newElement);
    }
  };
});