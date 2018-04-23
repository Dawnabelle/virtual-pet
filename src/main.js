import { Pet } from "./pet.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $(".petForm").submit(function(event) {
    event.preventDefault();
    let pet = new Pet($("#name").val());
    let message = pet.setStats();
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
        clearInterval(healthInterval);
        message = `${pet.name} has died of a poop infection! :'(`;
      }
    }, 7000);
    setInterval(function() {
      if(pet.didPetDie()) {
        $(".pet").text("dead image");
        $(".name").text(message);
        $(".buttons").hide();
        $(".stats").hide();
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
      }
    });
  });

});
