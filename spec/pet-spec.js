import { Pet } from './../src/pet.js';

describe ("Pet", function() {
  let pet = new Pet("Rufus");

  beforeEach(function() {
    jasmine.clock().install();
    pet.setStats();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it ("should create pet with name and hunger, sleep and play stats", function() {
    expect(pet.name).toEqual("Rufus");
    expect(pet.hunger).toEqual(10);
    expect(pet.play).toEqual(10);
    expect(pet.sleep).toEqual(10);
    expect(pet.health).toEqual(10);
  });

  it ("should deplete stats over time", function() {
    jasmine.clock().tick(90001);
    expect(pet.hunger).toEqual(8);
    expect(pet.play).toEqual(7);
    expect(pet.sleep).toEqual(9);
    expect(pet.health).toEqual(10);
  });

  it ("should add to stats", function() {
    pet.addStats("hunger");
    expect(pet.hunger).toEqual(10);
  });

  it ("should display end game message if any stats falls below zero", function() {
    pet.hunger = 0;
    let message = pet.didPetDie();
    expect(message).toEqual("Rufus has died! :'(");
  });

});
