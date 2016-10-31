var app;
(function (app) {
    var components;
    (function (components) {
        var ReviewListComponentController = (function () {
            function ReviewListComponentController($http) {
                this.$http = $http;
                this.reviews = [];
                console.log('constructor');
            }
            ReviewListComponentController.prototype.$onInit = function () {
                //this.fetchReviews().then(movies => {
                //    this.reviews = movies;
                //});
                console.log('On init method');
            };
            ReviewListComponentController.prototype.upRating = function (review) {
                //if (review.rating < 5) {
                //    review.rating += 1;
                //}
            };
            ReviewListComponentController.prototype.downRating = function (review) {
                //if (review.rating > 1) {
                //    review.rating -= 1;
                //}
            };
            ReviewListComponentController.prototype.fetchReviews = function () {
                // make this more flexible by getting data from outer scope by using component's bindings.
                return this.$http.get('/app/components/reviews.json')
                    .then(function (response) { return response.data; });
            };
            return ReviewListComponentController;
        }());
        var ReviewListComponent = (function () {
            function ReviewListComponent() {
                this.templateUrl = '/app/component/reviewList/review-list.html';
                this.controllerAs = 'model';
                this.controller = ['$http', ReviewListComponentController];
            }
            return ReviewListComponent;
        }());
        angular.module('smartpark').component('reviewList', new ReviewListComponent());
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
