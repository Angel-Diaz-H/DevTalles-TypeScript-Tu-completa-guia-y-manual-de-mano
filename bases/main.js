"use strict";
(() => {
    class Mutante {
        constructor(nombre, realName) {
            this.nombre = nombre;
            this.realName = realName;
        }
        ;
    }
    ;
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    ;
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    ;
    const wolverine = new Xmen('Wolverine', 'Logan');
    const villian = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log(`Constructor Avenger llamado!`);
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    ;
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log(`Constructor Xmen llamado!`);
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
            if (name.length < 3) {
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    ;
})();
//# sourceMappingURL=main.js.map