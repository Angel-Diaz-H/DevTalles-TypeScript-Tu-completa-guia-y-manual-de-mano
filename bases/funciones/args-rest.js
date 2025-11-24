(() => {
    const fullName = (firstName, ...restoDeArgumentos) => {
        return `${firstName} ${restoDeArgumentos.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Zavala', 'Sánchez');
    console.log({ superman });
})();
export {};
//# sourceMappingURL=args-rest.js.map