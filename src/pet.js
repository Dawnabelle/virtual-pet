class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.play = 10;
    this.health = 10;
  }

  setStats() {
    const hungerInterval = setInterval(() => {
      this.hunger--;
      if(this.didPetDie()) {
        clearInterval(hungerInterval);
        return `${this.name} has died of hunger! :'(`;
      }
    }, 4500);
    const sleepInterval = setInterval(() => {
      this.sleep--;
      if(this.didPetDie()) {
        clearInterval(sleepInterval);
        return `${this.name} has died of sleep deprivation! :'(`;
      }
    }, 9000);
    const playInterval = setInterval(() => {
      this.play--;
      if(this.didPetDie()) {
        clearInterval(playInterval);
        return `${this.name} has died of boredom! :'(`;
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
