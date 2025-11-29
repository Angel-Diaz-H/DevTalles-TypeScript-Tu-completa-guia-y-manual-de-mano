(() => {
    // Cada vez se usa menos.
    // Se puede usar para singletons.
    // Los constructores privados son útiles cuando no quieres que una clase pueda ser instanciada desde fuera de la propia clase.
    // Por ejemplo, en el patrón Singleton, donde solo quieres una única instancia de una clase.
    // También se pueden usar para clases estáticas que solo contienen métodos y propiedades estáticas.

    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(public name: string) {

        }

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el único');
            }
            return Apocalipsis.instance;
        }
    }

    //* No se puede hacer esto:
    // const apocalipsis = new Apocalipsis('Soy apocalipsis... el único');
    // console.log(apocalipsis);

    /* const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    console.log(apocalipsis1, apocalipsis2, apocalipsis3); */
})();