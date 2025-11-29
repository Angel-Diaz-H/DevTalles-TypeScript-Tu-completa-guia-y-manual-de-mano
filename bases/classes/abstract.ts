(() => {
    /*
        Las clases abstractas son la base para otras clases, no se pueden instanciar directamente.
        Se definen con la palabra reservada abstract y pueden contener métodos abstractos que deben ser implementados en las clases derivadas.
    */

    abstract class Mutante {
        constructor(
            public nombre: string,
            public realName: string
        ) { };

    };

    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo salvado';
        }
    };

    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    };

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const villian: Villian = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(villian.conquistarMundo());

    const printName = (character: Mutante) => {
        console.log(character.realName);
    }

    printName(wolverine);
})();