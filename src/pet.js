class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.play = 10;
    this.health = 10;
    this.death;
    this.eating;
    this.sleeping;
    this.playing;
    this.normal;
    this.pooping;
  }

  setStats() {
    const hungerInterval = setInterval(() => {
      this.hunger--;
      if (this.didPetDie()) {
        clearInterval(hungerInterval);
      }
      if(this.hunger <= 0) {
        this.death = `${this.name} has died of hunger! :'(`;
      }
    }, 4500);
    const sleepInterval = setInterval(() => {
      if (this.didPetDie()) {
        clearInterval(sleepInterval);
      }
      this.sleep--;
      if(this.sleep <= 0) {
        this.death = `${this.name} has died of sleep deprivation :'(`;
      }
    }, 9000);
    const playInterval = setInterval(() => {
      if (this.didPetDie()) {
        clearInterval(playInterval);
      }
      this.play--;
      if(this.play <= 0) {
        this.death = `${this.name} has died of boredom :'(`;
      }
    }, 3000);
  }

  addStats(stat) {
    if (stat === "hunger") {
      this.hunger = 10;
    }else if (stat === "sleep") {
      this.sleep = 10;
    }else if (stat === "play") {
      this.play = 10;
    }else if (stat === "health") {
      this.health = 10;
    }
  }

  didPetDie() {
    if (this.hunger <= 0 || this.sleep <= 0 || this.play <= 0 || this.health <= 0) {
      return true;
    } else {
      return false;
    }
  }

}
export { Pet };
