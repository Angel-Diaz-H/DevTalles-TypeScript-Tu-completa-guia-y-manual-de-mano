(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '--'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '--'}`;
        }
    };
    // let noName: any;
    // const name = fullName(noName, 'Stark');
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
export {};
//# sourceMappingURL=args-default.js.map