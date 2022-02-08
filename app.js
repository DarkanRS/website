var createError = require('http-errors');
var express = require('express');
var path = require('path');
express.static.mime.types['wasm'] = 'application/wasm'

var app = express();
const webPort = 5555;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/* GET home page. */
app.get('/', function(req, res, next) {
  console.log(req.socket.remoteAddress)
  res.render('home', { title: 'Express' });
});

app.post('/posty', (request, response) => {
  console.log(request.body)
})

app.get('/create-account', function(req, res, next) {
  res.render("create-account", {})
});

app.get('/download', function(req, res, next) {
  res.render("download", {})
});

app.get('/features', function(req, res, next) {
  res.render("features", {})
});

app.get('/guides', function(req, res, next) {
  res.render("guides", {})
});

app.get('/highscores', function(req, res, next) {
  res.render("highscores", {})
});

app.get('/highscores-player', function(req, res, next) {
  res.render("highscores-player", {})
});

app.get('/tools', function(req, res, next) {
  res.render("tools", {})
});

app.get('/ge-tracker', function(req, res, next) {
  res.render("ge-tracker", {})
});

app.get('/skill-calculator', function(req, res, next) {
  res.render("skill-calculator", {})
});

  app.get('/skill-calculator-attack', function(req, res, next) {
    res.render("skill-calculator-attack", {})
  });

  app.get('/skill-calculator-strength', function(req, res, next) {
    res.render("skill-calculator-strength", {})
  });

  app.get('/skill-calculator-defense', function(req, res, next) {
    res.render("skill-calculator-defense", {})
  });

  app.get('/skill-calculator-ranged', function(req, res, next) {
    res.render("skill-calculator-ranged", {})
  });

  app.get('/skill-calculator-magic', function(req, res, next) {
    res.render("skill-calculator-magic", {})
  });

  app.get('/skill-calculator-prayer', function(req, res, next) {
    res.render("skill-calculator-prayer", {})
  });

  app.get('/skill-calculator-summoning', function(req, res, next) {
    res.render("skill-calculator-summoning", {})
  });

  app.get('/skill-calculator-runecrafting', function(req, res, next) {
    res.render("skill-calculator-runecrafting", {})
  });

  app.get('/skill-calculator-construction', function(req, res, next) {
    res.render("skill-calculator-construction", {})
  });

  app.get('/skill-calculator-dungeoneering', function(req, res, next) {
    res.render("skill-calculator-dungeoneering", {})
  });

  app.get('/skill-calculator-agility', function(req, res, next) {
    res.render("skill-calculator-agility", {})
  });

  app.get('/skill-calculator-herblore', function(req, res, next) {
    res.render("skill-calculator-herblore", {})
  });

  app.get('/skill-calculator-theiving', function(req, res, next) {
    res.render("skill-calculator-theiving", {})
  });

  app.get('/skill-calculator-crafting', function(req, res, next) {
    res.render("skill-calculator-crafting", {})
  });

  app.get('/skill-calculator-fletching', function(req, res, next) {
    res.render("skill-calculator-fletching", {})
  });

  app.get('/skill-calculator-slayer', function(req, res, next) {
    res.render("skill-calculator-slayer", {})
  });
  
  app.get('/skill-calculator-hunter', function(req, res, next) {
    res.render("skill-calculator-hunter", {})
  });

  app.get('/skill-calculator-mining', function(req, res, next) {
    res.render("skill-calculator-mining", {})
  });

  app.get('/skill-calculator-smithing', function(req, res, next) {
    res.render("skill-calculator-smithing", {})
  });

  app.get('/skill-calculator-fishing', function(req, res, next) {
    res.render("skill-calculator-fishing", {})
  });

  app.get('/skill-calculator-cooking', function(req, res, next) {
    res.render("skill-calculator-cooking", {})
  });

  app.get('/skill-calculator-firemaking', function(req, res, next) {
    res.render("skill-calculator-firemaking", {})
  });

  app.get('/skill-calculator-woodcutting', function(req, res, next) {
    res.render("skill-calculator-woodcutting", {})
  });

  app.get('/skill-calculator-farming', function(req, res, next) {
    res.render("skill-calculator-farming", {})
  });

app.get('/bug-reporter', function(req, res, next) {
  res.render("bug-reporter", {})
});

app.get('/world-map', function(req, res, next) {
  res.render("world-map", {})
});

app.get('/api', function(req, res, next) {
  res.render("api", {})
});

app.get('/terms', function(req, res, next) {
  res.render("terms", {})
});

app.get('/privacy-policy', function(req, res, next) {
  res.render("privacy-policy", {})
});

app.listen(webPort, "0.0.0.0", ()=> console.log("Successful on port " + webPort))




module.exports = app;
