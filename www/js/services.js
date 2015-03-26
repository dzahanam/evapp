var evappServices = angular.module('evapp.services', [])

evappServices.factory('Speakers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var speakers = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return speakers;
    },
    get: function(speakerId) {
      for (var i = 0; i < speakers.length; i++) {
        if (speakers[i].id === parseInt(speakerId)) {
          return speakers[i];
        }
      }
      return null;
    }
  };
});
evappServices.factory('Lectures', function() {
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