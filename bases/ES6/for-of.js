(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armor suit'
    };
    const captainAmerica = {
        name: 'Captain America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
export {};
//# sourceMappingURL=for-of.js.map