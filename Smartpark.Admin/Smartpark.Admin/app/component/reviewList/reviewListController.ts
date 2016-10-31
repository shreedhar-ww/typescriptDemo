namespace app.components {

    interface IReviewListComponentController {
        reviews: Array<any>;
    }

    class ReviewListComponentController implements IReviewListComponentController {
        reviews = [];

        constructor(private $http) {

            console.log('constructor');
        }

        $onInit() {
            //this.fetchReviews().then(movies => {
            //    this.reviews = movies;
            //});

            console.log('On init method');
        }

        upRating(review) {
            //if (review.rating < 5) {
            //    review.rating += 1;
            //}
        }

        downRating(review) {
            //if (review.rating > 1) {
            //    review.rating -= 1;
            //}
        }

        fetchReviews() {
            // make this more flexible by getting data from outer scope by using component's bindings.
            return this.$http.get('/app/components/reviews.json')
                .then(response => response.data);
        }

    }


    class ReviewListComponent implements ng.IComponentOptions {
        templateUrl = '/app/component/reviewList/review-list.html';
        controllerAs = 'model';
        controller = ['$http', ReviewListComponentController];
    }

    angular.module('smartpark').component('reviewList', new ReviewListComponent());

}