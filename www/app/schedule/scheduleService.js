angular.module('evapp.services').factory('Lectures', function(Speakers) {
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
        speaker: Speakers.get(1),
        date: new Date('2015', '11' ,'13', '10','45'),
        icon: "ion-home"
    },{
        id: 1,
        name: 'Ionic - best hybrid framework',
        shortDescription: 'What you want to know about future of mobile apps',
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta",
        keywords: [
            {key: "Mobile"},
            {key: "IT"},
            {key: "Apps"},
            {key: "Hybrid"},
            {key: "Busines"}
        ],
         speaker: Speakers.get(2),
         date: new Date('2015-03-25T12:00:00'),
        icon: "ion-heart"
    },{
        id: 2,
        name: 'Cocos2d-x - games',
        shortDescription: 'What you want to know about future of mobile apps',
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta",
        keywords: [
            {key: "Mobile"},
            {key: "IT"},
            {key: "Apps"},
            {key: "Hybrid"},
            {key: "Busines"}
        ],
        speaker: Speakers.get(3),
         date: new Date('2015', '11' ,'13', '10','45'),
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