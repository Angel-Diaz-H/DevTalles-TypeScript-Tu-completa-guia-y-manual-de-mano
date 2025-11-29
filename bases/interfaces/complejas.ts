(() => {
    // Por lo regular las interfaces principales van arriba.
    // Se suele usar para peticiones HTTP o estructuras de datos complejas.
    interface Client {
        name: string;
        age?: number;
        address: Address;
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
        }
    };

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Miami',
            id: 126,
            zip: 'MI654',
        }
    }
})();