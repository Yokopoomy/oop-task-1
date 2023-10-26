class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }

  set name(value) {
    if (!(typeof value === 'string')) {
      throw new Error('Имя персонажа должно быть "Тип - Строка"');
    }
    if (!(value.length >= 2 && value.length <= 10)) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

export class Bowerman extends Character {
  constructor(health, level, levelUp, damage) {
    super(health, level, levelUp, damage);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
