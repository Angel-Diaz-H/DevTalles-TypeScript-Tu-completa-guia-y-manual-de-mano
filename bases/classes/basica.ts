(() => {
    class Avenger {
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) { }


        public bio() {
            return `${this.name} (${this.team})`;
        }
    }


    // const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
    // console.log(antman);
    
    // console.log(Avenger.getAvgAge());

    // // Aunque es privado, se puede acceder dentro de la clase en ES6.
    // // En ESNext no se puede.
    // // console.log(antman.bio());

})();