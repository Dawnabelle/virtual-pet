import { Pet } from "./pet.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $(".petForm").submit(function(event) {
    event.preventDefault();
    let pet = new Pet($("#name").val());
    pet.setStats();
    setInterval(console.log(type), 11000)
    $(".start").hide();
    $(".display").show();
    $(".name").text(pet.name);
    setInterval(function() {
      $("#hunger").text(pet.hunger);
      $("#sleep").text(pet.sleep);
      $("#play").text(pet.play);
      $("#health").text(pet.health);
    }, 200);
    const healthInterval = setInterval(function() {
      $(".poop").append("poop image");
      pet.health -= 3;
      if(pet.health <= 0) {
        pet.death = "health";
      }
      if (pet.didPetDie()) {
        clearInterval(healthInterval);
      }
    }, 7000);
    setInterval(function() {
      if(pet.didPetDie()) {
        $(".pet").text("dead image");
        $(".buttons").hide();
        $(".stats").hide();
        $(".poop").hide();
        if(pet.death === "hunger") {
          $(".name").text( `${pet.name} has died of hunger! :'(`);
        }else if (pet.death === "sleep") {
          $(".name").text( `${pet.name} has died of sleep deprivation :'(`);
        }else if (pet.death === "play") {
          $(".name").text( `${pet.name} has died of boredom :'(`);
        }else if (pet.death === "health") {
          $(".name").text( `${pet.name} has died of a poop infection :'(`);
        }else {
          console.log("You shouldn't see this");
        }
      }
    }, 10);

    $(".care").click(function() {
      let stat = $(this).val();
      pet.addStats(stat);
      if (stat === "hunger") {
        $(".pet").text("eating gif");
      }else if (stat === "sleep") {
        $(".pet").text("sleeping gif");
      }else if (stat === "play") {
        $(".pet").text("playing gif");
      }else if (stat === "health") {
        $(".poop").text("");
      }else {
        console.log("You shouldn't see this");
      }
    });
  });

});
