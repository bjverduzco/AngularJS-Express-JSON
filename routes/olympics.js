var router = require('express').Router();

var archery = [{name: 'Mackenzie Brown', origin: 'Flint, Texas', sport: 'Archery'}, {name: 'Brady Elison', origin: 'Globe, Ariz', sport: 'Archery'}, {name: 'Zach Garrett', origin: 'Wellington, Mo.', sport: 'Archery'}, {name: 'Jake Kaminski', origin: 'Gainesville, Fla.', sport: 'Archery'}];
var badminton = [{name: 'Phillip Chew', origin:'Orange, Calif.', sport: 'Badminton'}, {name: 'Eva Lee', origin:'Diamond Bar, Calif.', sport: 'Badminton'}, {name: 'Paula Lynn Obanana', origin:'West Covina, Calif.', sport: 'Badminton'}, {name: 'Sattawat Pongnairat', origin:'Orange, Calif.', sport: 'Badminton'}, {name: 'Howard Shu', origin:'Anaheim, Calif.', sport: 'Badminton'}, {name: 'Jamie Subandhi', origin:'Westminster, Calif.', sport: 'Badminton'}, {name: 'Iris Wang', origin: 'Arcadia, Calif.', sport: 'Badminton'}];
var canoeKayak = [{name: 'Casey Eichfeld', origin: 'Drums, Pa.', sport: 'Canoe/Kayak'}, {name: 'Maggie Hogan', origin: 'Huntington Beach, Calif.', sport: 'Canoe/Kayak'}, {name: 'Devin McEwan', origin: 'Salisbury, Conn.', sport: 'Canoe/Kayak'}, {name: 'Ashley Nee', origin: 'Darnestown, Md.', sport: 'Canoe/Kayak'}, {name: 'Michal Smolen', origin: 'Gastonia, N.C.', sport: 'Canoe/Kayak'}];
var judo = [{name: 'Colton Brown', origin: 'Piscataway, N.J.', sport: 'Judo'}, {name: 'Angelica Delgado', origin: 'Miami, Fla.', sport: 'Judo'}, {name: 'Nick Delpopolo', origin: 'Davie, Fla.', sport: 'Judo'}, {name: 'Kayla Harrison', origin: 'Middletown, Ohio', sport: 'Judo'}, {name: 'Marti Malloy', origin: 'Oak Harbor, Wash.', sport: 'Judo'}, {name: 'Travis Stevens', origin: 'Tacoma, Wash.', sport: 'Judo'}];
var tableTennis = [{name: 'Yijun Feng', origin: 'Atlanta, Ga.', sport: 'Table Tennis'}, {name: 'Kanak Jha', origin: 'Milpitas, Calif.', sport: 'Table Tennis'}, {name: 'Timothy Wang', origin: 'Houston, Texas', sport: 'Table Tennis'}, {name: 'Jennifer Wu', origin: 'Fort Lee, N.J.', sport: 'Table Tennis'}, {name: 'Lily Zhang', origin: 'Palo Alto, Calif.', sport: 'Table Tennis'}, {name: 'Jiaqi Zheng', origin: 'Fremont, Calif.', sport: 'Table Tennis'}];
var randAthletes = [];

router.get('/', function(request, response){
  response.send('Please go to /all /archery /badminton /canoeKayak /judo or /tableTennis to see the full list of the athletes competing in those events, or go back to the index.html in order to get a random person from each event.');
});

router.get('/all', function(request, response){
  var total = archery.concat(badminton.concat(canoeKayak.concat(judo.concat(tableTennis))));
  response.send(total);
});

router.get('/archery', function(request, response){
  // for(var i = 0; i < archery.length; i++){
  //   response.send('The names are: ' + archery[i].name + '\nThe origin cities are: ' + archery[i].origin);
  // }
  response.send(archery);
});

router.get('/badminton', function(request, response){
  response.send(badminton);
  // response.send('The names are: ' + badminton.name + '\nThe origin cities are: ' + badminton.origin);
});

router.get('/canoeKayak', function(request, response){
  response.send(canoeKayak);
  // response.send('The names are: ' + judo.name + '\nThe origin cities are: ' + judo.origin);
});

router.get('/judo', function(request, response){
  response.send(judo);
  // response.send('The names are: ' + judo.name + '\nThe origin cities are: ' + judo.origin);
});

router.get('/tableTennis', function(request, response){
  response.send(tableTennis);
  // response.send('The names are: ' + tableTennis.name + '\nThe origin cities are: ' + tableTennis.origin);
});

router.get('/randomAthletes', function(request, response){
  var min = 0;
  var maxArchery = archery.length;
  var maxBadminton = badminton.length;
  var maxCanoeKayak = canoeKayak.length;
  var maxJudo = judo.length;
  var maxTableTennis = tableTennis.length;
  var randArchery = getRandomInt(min, maxArchery);
  var randBadminton = getRandomInt(min, maxBadminton);
  var randCanoeKayak = getRandomInt(min, maxCanoeKayak);
  var randJudo = getRandomInt(min, maxJudo);
  var randTableTennis = getRandomInt(min, maxTableTennis);
  randAthletes = [];

  randAthletes.push(archery[randArchery]);
  randAthletes.push(badminton[randBadminton]);
  randAthletes.push(canoeKayak[randCanoeKayak]);
  randAthletes.push(judo[randJudo]);
  randAthletes.push(tableTennis[randTableTennis]);
  console.log(randAthletes);

  if(randAthletes.length === 5){
    response.send(randAthletes);
  } else{
    console.log(randAthletes);
    response.sendStatus(500);
  }

});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = router;
