(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log(`Constructor Avenger llamado!`);

        }
        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    };

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
            console.log(`Constructor Xmen llamado!`);
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        // No retorna nada.
        // Solo se recibe un argumento.
        set fullName(name: string){
            this.name = name;

            if(name.length < 3){
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    };

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen();
    // const nuevoAvenger = new Avenger('Hola', 'Mundo');

    // wolverine.fullName = 'An'
    // console.log(wolverine.fullName);
})();