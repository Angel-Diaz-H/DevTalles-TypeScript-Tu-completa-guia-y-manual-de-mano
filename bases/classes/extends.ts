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

        // Se puede usar public, private, protected.
        // Por defecto es public.
        // private: Solo se puede usar dentro de la clase.
        // protected: Se puede usar dentro de la clase y en las clases que hereden de esta.
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

        getFullNameDesdeXmen() {
            console.log(super.getFullName());

        }
    };

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();

    const nuevoAvenger = new Avenger('Hola', 'Mundo');
})();