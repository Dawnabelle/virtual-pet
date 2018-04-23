class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.play = 10;
    this.health = 10;
    this.death;
  }

  setStats() {
    const hungerInterval = setInterval(() => {
      this.hunger--;
      if (this.didPetDie()) {
        clearInterval(hungerInterval);
      }
      if(this.hunger <= 0) {
        this.death = "hunger";
        return "hunger";
      }
    }, 4500);
    const sleepInterval = setInterval(() => {
      if (this.didPetDie()) {
        clearInterval(sleepInterval);
      }
      this.sleep--;
      if(this.sleep <= 0) {
        this.death = "sleep";
        return "sleep";
      }
    }, 9000);
    const playInterval = setInterval(() => {
      if (this.didPetDie()) {
        clearInterval(playInterval);
      }
      this.play--;
      if(this.play <= 0) {
        this.death = "play";
        return "play";
      }
    }, 1000);
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
