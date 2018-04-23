import { Pet } from "./pet.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $(".petForm").submit(function(event) {
    event.preventDefault();
    let pet = new Pet($("#name").val());
    let type = $(".type").val();
    if(type === "dog") {
      pet.normal = `<img src="https://media.giphy.com/media/kv7qRYdst2N4MCXNjb/giphy.gif" alt="Dog">`;
      pet.eating = `<img src="https://media.giphy.com/media/1fmA4DHweg8tkdPVnz/giphy.gif" alt="Dog eating">`;
      pet.sleeping = `<img src="https://media.giphy.com/media/KZPE3S76ADn1X3g9bm/giphy.gif" alt="Dog sleeping">`;
      pet.playing = `<img src="https://media.giphy.com/media/YVeIuf27xMLvdfJgpo/giphy.gif" alt="Dog playing">`;
    }else if (type === "cat") {
      pet.normal = `<img src="https://media.giphy.com/media/7JJT5EWjhqUnK/giphy.gif" alt="Cat">`;
      pet.eating = `<img src="https://media.giphy.com/media/4NWT0Ry3dtTLW/giphy.gif" alt="Cat eating">`;
      pet.sleeping = `<img src="https://media.giphy.com/media/lKQlwPamON5NS/giphy.gif" alt="Cat sleeping">`;
      pet.playing = `<img src="https://media.giphy.com/media/wIUQQ07BHzDry/giphy.gif" alt="Cat playing">`;
    }else if (type === "bird") {
      pet.normal = `<img src="https://media.giphy.com/media/WnA4xjnTiESc0/giphy.gif" alt="Bird">`;
      pet.eating = `<img src="https://media.giphy.com/media/3oKIPoICEr7MFzYJUc/giphy.gif" alt="Bird eating">`;
      pet.sleeping = `<img src="https://media.giphy.com/media/l41K6f3ZIlbRsqj0A/giphy.gif" alt="Bird sleeping">`;
      pet.playing = `<img src="https://media.giphy.com/media/KOfp5sCYol4S4/giphy.gif" alt="Bird playing">`;
    }else if (type === "monkey") {
      pet.normal = `<img src="https://media.giphy.com/media/3ov9k3qQvH46bcbG3m/giphy.gif" alt="Monkey">`;
      pet.eating = `<img src="https://media.giphy.com/media/kAbScLfs0oYJG/giphy.gif" alt="Monkey eating">`;
      pet.sleeping = `<img src="https://media.giphy.com/media/QdrwuhqbeHV3W/giphy.gif" alt="Monkey sleeping">`;
      pet.playing = `<img src="https://media.giphy.com/media/s56HRsKc3rAxq/giphy.gif" alt="Monkey playing">`;
    }
    pet.setStats();
    $(".start").hide();
    $(".display").show();
    $(".name").text(pet.name);
    $(".pet").append(pet.normal);
    setInterval(function() {
      $("#hunger").text(pet.hunger);
      $("#sleep").text(pet.sleep);
      $("#play").text(pet.play);
      $("#health").text(pet.health);
    }, 200);
    const healthInterval = setInterval(function() {
      $(".poop").append(`<img class="plop" src="https://media.giphy.com/media/U1xSGuzmIyKzu/giphy.gif" alt="Dog sleeping">`);
      pet.health -= 3;
      if(pet.health <= 0) {
        pet.death = `${pet.name} has died of a poop infection :'(`;
      }
      if (pet.didPetDie()) {
        clearInterval(healthInterval);
      }
    }, 7000);
    setInterval(function() {
      if(pet.didPetDie()) {
        $(".pet").text("");
        $(".pet").append(`<img src="https://media.giphy.com/media/ItYY9IJtX8J9e/giphy.gif" alt="Grim Reaper">`);
        $(".buttons").hide();
        $(".stats").hide();
        $(".poop").hide();
        $(".name").text(pet.death);
      }
    }, 10);

    $(".care").click(function() {
      let stat = $(this).val();
      pet.addStats(stat);
      if (stat === "hunger") {
        $(".pet").text("");
        $(".pet").append(pet.eating);
      }else if (stat === "sleep") {
        $(".pet").text("");
        $(".pet").append(pet.sleeping);
      }else if (stat === "play") {
        $(".pet").text("");
        $(".pet").append(pet.playing);
      }else if (stat === "health") {
        $(".poop").text("");
      }else {
        console.log("You shouldn't see this");
      }
    });
  });

});
