(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Hulk';

    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Dr. Strange',
        age: 55,
        powers: ['Magia'],
    };
    console.log(typeof myCustomVariable);
})();
