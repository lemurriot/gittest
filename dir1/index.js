console.log('ello world');

var warrior = 'Ninja';

const screamWarrior = () => {
    let warrior2 = 'Samurai';
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);
        }
    }
};

const newWarrior = screamWarrior();

newWarrior.shootWarrior();
