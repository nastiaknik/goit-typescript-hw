// 1. Define the interfaces ICharacter and ISpellCaster so that they match the requirements of the Wizard class.
// 2. The ICharacter interface should include properties name and level, as well as methods introduce and levelUp.
// 3. The ISpellCaster interface should include the method castSpell.
class Wizard {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        if (this.level < 1) {
            throw new Error("Level too low");
        }
    }
    introduce(phrase) {
        console.log(phrase + ", " + this.name);
    }
    castSpell() {
        console.log("Casting a spell, behold my power!");
    }
    levelUp() {
        this.level++;
        console.log(`Level up! New level is ${this.level}`);
    }
}
// testing the class
const wizard = new Wizard("Merlin", 15);
wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
export {};
