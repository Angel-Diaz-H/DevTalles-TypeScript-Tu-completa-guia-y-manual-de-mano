"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
})();
(() => {
    ;
    const client = {
        name: 'Angel',
        address: {
            id: 125,
            zip: 'KY432',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Miami',
            id: 126,
            zip: 'MI654',
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map