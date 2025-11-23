(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerzaHeroes;
    (function (fuerzaHeroes) {
        fuerzaHeroes[fuerzaHeroes["aquaman"] = 0] = "aquaman";
        fuerzaHeroes[fuerzaHeroes["batman"] = 1] = "batman";
        fuerzaHeroes[fuerzaHeroes["flash"] = 5] = "flash";
        fuerzaHeroes[fuerzaHeroes["superman"] = 100] = "superman";
    })(fuerzaHeroes || (fuerzaHeroes = {}));
    const fuerzaFlash = fuerzaHeroes.flash;
    const fuerzaSuperman = fuerzaHeroes.superman;
    const fuerzaBatman = fuerzaHeroes.batman;
    const fuerzaAcuaman = fuerzaHeroes.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
export {};
//# sourceMappingURL=app.js.map