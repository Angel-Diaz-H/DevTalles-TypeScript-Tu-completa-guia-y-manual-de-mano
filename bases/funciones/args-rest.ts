(() => {
    const fullName = (firstName: string, ...restoDeArgumentos: string[]) => {
        return `${firstName} ${restoDeArgumentos.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'Zavala', 'Sánchez');
    console.log({ superman })
})()