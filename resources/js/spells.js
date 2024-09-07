// Here we go again...

class Spell {
  constructor(name, casting_time, mp, sanity, components, description) {
    this.name = name;
    this.casting_time = casting_time;
    this.mp = mp;
    this.sanity = sanity;
    this.components = components;
    this.description = description;
  }

  get list_stats() {
    return [name, casting_time, mp, sanity, components];
  }

}
