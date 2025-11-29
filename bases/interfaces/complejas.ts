(() => {
    // Por lo regular las interfaces principales van arriba.
    // Se suele usar para peticiones HTTP o estructuras de datos complejas.
    interface Client {
        name: string;
        age?: number;
        address: Address;

        // Lo ideal es crear clases para métodos complejos.
        // Las interfaces no crean instancias.
        getFullAddress(id: string): string;
    };

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Angel',
        // age: 25,
        address: {
            id: 125,
            zip: 'KY432',
            city: 'Ottawa'
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    };

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Miami',
            id: 126,
            zip: 'MI654',
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    }
})();