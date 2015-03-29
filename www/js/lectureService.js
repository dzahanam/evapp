angular.module('evapp.services').factory('Lectures', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var lectures = [{
        id: 0,
        name: 'Future of Hybrid mobile apps',
        shortDescription: 'What you want to know about future of mobile apps',
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta",
        keywords: [
            {key: "Mobile"},
            {key: "IT"},
            {key: "Apps"},
            {key: "Hybrid"},
            {key: "Busines"}
        ],
        icon: "ion-home"
    },{
        id: 1,
        name: 'Future of Hybrid mobile apps',
        shortDescription: 'What you want to know about future of mobile apps',
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta",
        keywords: [
            {key: "Mobile"},
            {key: "IT"},
            {key: "Apps"},
            {key: "Hybrid"},
            {key: "Busines"}
        ],
        icon: "ion-heart"
    },{
        id: 2,
        name: 'Future of Hybrid mobile apps',
        shortDescription: 'What you want to know about future of mobile apps',
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta",
        keywords: [
            {key: "Mobile"},
            {key: "IT"},
            {key: "Apps"},
            {key: "Hybrid"},
            {key: "Busines"}
        ],
        icon: "ion-star"
    }];

    return {
        all: function() {
            return lectures;
        },
        get: function(lectureId) {
            for (var i = 0; i < lectures.length; i++) {
                if (lectures[i].id === parseInt(lectureId)) {
                    return lectures[i];
                }
            }
            return null;
        }
    };
});