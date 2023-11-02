// Creates an object containing components needed to randomly generate an accusation.
const clueComponents = {
    _suspects: ['Mrs. White', 'Mrs. Peacock', 'Professor Plum', 'Colonel Mustard', 'Miss Scarlett', 'Reverend Green'],
    _rooms: ['ball room', 'billiard room', 'conservatory', 'dining room', 'hall', 'kitchen', 'lounge', 'library', 'study'],
    _weapons: ['knife', 'revolver', 'rope', 'wrench', 'candlestick', 'lead pipe'],
    randomizer: function(property) {
        return property[Math.floor(Math.random() * property.length)];
    },
    makeAccusation: function() {
        console.log(`${this.randomizer(this._suspects)} in the ${this.randomizer(this._rooms)} with a ${this.randomizer(this._weapons)}.`);
    }
};

// Prints a randomly generated accusation to the console.
clueComponents.makeAccusation();