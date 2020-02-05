/*const addBtn = document.querySelector('.btn btn-primary shop-item-button');

// Hämtar produkter
const getProducts = () => {
    fetch('http://localhost:8000', {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
};

getProducts();


// Lägger till fotbollsskor
const cleats = { 'id': 1 };

const addCleats = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cleats),
    })
    .then((response) => response.json())
    .then((cleats) => {
        console.log('Tillagd:', cleats);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addCleats);

// Lägger till fotboll
const ball = { 'id': 3 };

const addBall = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ball),
    })
    .then((response) => response.json())
    .then((ball) => {
        console.log('Tillagd:', ball);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addBall);

// Lägger till målvaktshandskar
const goaliegloves = { 'id': 6 };

const addGoaliegloves = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goaliegloves),
    })
    .then((response) => response.json())
    .then((goaliegloves) => {
        console.log('Tillagd:', goaliegloves);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addGoaliegloves);

// Lägger till benskyddstejp 10pc
const tape10pc = { 'id': 9 };

const addTape10pc = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tape10pc),
    })
    .then((response) => response.json())
    .then((tape10pc) => {
        console.log('Tillagd:', tape10pc);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addTape10pc);

// Lägger till strumpor
const socks = { 'id': 4 };

const addSocks = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(socks),
    })
    .then((response) => response.json())
    .then((socks) => {
        console.log('Tillagd:', socks);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addSocks);

// Lägger till hockeyklubba
const hockeystick = { 'id': 10 };

const addHockeystick = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hockeystick),
    })
    .then((response) => response.json())
    .then((hockeystick) => {
        console.log('Tillagd:', hockeystick);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addHockeystick);

// Lägger till benskydd
const shinguards = { 'id': 2 };

const addShinguards = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shinguards),
    })
    .then((response) => response.json())
    .then((shinguards) => {
        console.log('Tillagd:', shinguards);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addShinguards);

// Lägger till skridskor
const skates = { 'id': 5 };

const addSkates = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(skates),
    })
    .then((response) => response.json())
    .then((skates) => {
        console.log('Tillagd:', skates);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addSkates);

// Lägger till hjälm
const helmet = { 'id': 7 };

const addHelmet = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(helmet),
    })
    .then((response) => response.json())
    .then((helmet) => {
        console.log('Tillagd:', helmet);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addHelmet);

// Lägger till axelskydd
const shoulderProtection = { 'id': 8 };

const addShoulderProtection = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoulderProtection),
    })
    .then((response) => response.json())
    .then((shoulderProtection) => {
        console.log('Tillagd:', shoulderProtection);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBtn.addEventListener('click', addShoulderProtection);*/

const addCleatsBtn = document.getElementById('cleats__btn');
const cleatsObj = document.querySelector('.cleats');
const addBallBtn = document.getElementById('ball__btn');
const addGoalieglovesBtn = document.getElementById('goaliegloves__btn');
const addTape10pcBtn = document.getElementById('tape10pc__btn');
const addSocksBtn = document.getElementById('socks__btn');
const addHockeystickBtn = document.getElementById('hockeystick__btn');
const addShinguardsBtn = document.getElementById('shinguards__btn');
const addSkatesBtn = document.getElementById('skates__btn');
const addHelmetBtn = document.getElementById('helmet__btn');
const addShoulderProtectionBtn = document.getElementById('shoulderProtection__btn');

const displayProducts = document.getElementById('product__output');

// Hämtar produkter
const getProducts = () => {
    fetch('http://localhost:8000', {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
};

getProducts();


// Lägger till fotbollsskor
const cleats = { 'id': 1 };

const addCleats = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cleats),
    })
    .then((response) => response.json())
    .then((cleats) => {
        console.log('Tillagd:', cleats);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addCleatsBtn.addEventListener('click', addCleats);

// Lägger till fotboll
const ball = { 'id': 3 };

const addBall = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ball),
    })
    .then((response) => response.json())
    .then((ball) => {
        console.log('Tillagd:', ball);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addBallBtn.addEventListener('click', addBall);

// Lägger till målvaktshandskar
const goaliegloves = { 'id': 6 };

const addGoaliegloves = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goaliegloves),
    })
    .then((response) => response.json())
    .then((goaliegloves) => {
        console.log('Tillagd:', goaliegloves);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addGoalieglovesBtn.addEventListener('click', addGoaliegloves);

// Lägger till benskyddstejp 10pc
const tape10pc = { 'id': 9 };

const addTape10pc = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tape10pc),
    })
    .then((response) => response.json())
    .then((tape10pc) => {
        console.log('Tillagd:', tape10pc);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addTape10pcBtn.addEventListener('click', addTape10pc);

// Lägger till strumpor
const socks = { 'id': 4 };

const addSocks = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(socks),
    })
    .then((response) => response.json())
    .then((socks) => {
        console.log('Tillagd:', socks);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addSocksBtn.addEventListener('click', addSocks);

// Lägger till hockeyklubba
const hockeystick = { 'id': 10 };

const addHockeystick = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hockeystick),
    })
    .then((response) => response.json())
    .then((hockeystick) => {
        console.log('Tillagd:', hockeystick);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addHockeystickBtn.addEventListener('click', addHockeystick);

// Lägger till benskydd
const shinguards = { 'id': 2 };

const addShinguards = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shinguards),
    })
    .then((response) => response.json())
    .then((shinguards) => {
        console.log('Tillagd:', shinguards);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addShinguardsBtn.addEventListener('click', addShinguards);

// Lägger till skridskor
const skates = { 'id': 5 };

const addSkates = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(skates),
    })
    .then((response) => response.json())
    .then((skates) => {
        console.log('Tillagd:', skates);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addSkatesBtn.addEventListener('click', addSkates);

// Lägger till hjälm
const helmet = { 'id': 7 };

const addHelmet = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(helmet),
    })
    .then((response) => response.json())
    .then((helmet) => {
        console.log('Tillagd:', helmet);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addHelmetBtn.addEventListener('click', addHelmet);

// Lägger till axelskydd
const shoulderProtection = { 'id': 8 };

const addShoulderProtection = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoulderProtection),
    })
    .then((response) => response.json())
    .then((shoulderProtection) => {
        console.log('Tillagd:', shoulderProtection);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
    });
};

addShoulderProtectionBtn.addEventListener('click', addShoulderProtection);