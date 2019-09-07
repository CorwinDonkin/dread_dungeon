const isBrowser = () => typeof window !== "undefined"

class World {
  constructor() {
    this.name = "The Elf with No Wealth"
  }

  setName(name) {
    this.name = name
    console.log("Name: ", name)
  }
}

let world = new World();

export const resetWorld = () => world = new World();

export const getWorld = () => world;

export const setName = (name) => world.setName(name);