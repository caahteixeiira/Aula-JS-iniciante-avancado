function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math. random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject ('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei no promise');
            return;
        }, tempo);
    });
}

esperaAi('Fase 1', rand(0, 3));