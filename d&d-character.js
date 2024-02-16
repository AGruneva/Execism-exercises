export const abilityModifier = (num) => {
  if(num < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if(num > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((num - 10) / 2);
}

export class Character {
  constructor() {
    this.strength = Character.rollAbility(); 
    this.dexterity = Character.rollAbility();  
    this.constitution = Character.rollAbility(); 
    this.intelligence = Character.rollAbility(); 
    this.wisdom = Character.rollAbility(); 
    this.charisma = Character.rollAbility(); 
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }
  static rollAbility() {
    let arr = [];
    while (arr.length < 4) {
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    arr.sort().shift();
    return arr.reduce((sum, i) => sum + i, 0);
  }
}
