
const R = require('ramda');
const Polynomes = [
    {degre2: 2, degre1: 1, degre0: 15 },
    {degre2: 14, degre1: 2, degre0: 3},
    {degre2: -4, degre1: 4, degre0: -1},
    {degre2: -8, degre1: 6, degre0: 0},
    {degre2: 4, degre1: 1, degre0: 9},
    {degre2: 6, degre1: -5, degre0: 4},
    {degre2: 5, degre1: -9, degre0: -3},
    {degre2: 4, degre1: -2, degre0: 3},
];

const square = (x) => x * x;
const squareRoot = (x) => Math.sqrt(x);

const getDiscriminant = R.pipe(
    R.converge(R.subtract, [R.pipe(R.prop('degre1'), square),R.pipe(R.converge(R.multiply,[R.prop('degre2'),R.prop('degre0')]), R.multiply(4))])
    //Discriminant=                      b²                 -                                      a       *        c         *       4
);

const getRoot1 = R.converge(R.divide, [R.pipe(R.converge(R.subtract, [R.pipe(R.prop('degre1'), R.multiply(-1)), R.pipe(getDiscriminant, squareRoot)])) , R.pipe(R.prop('degre2'), R.multiply(2)) ]);
// root1       =                                                                            -b                -         squareroot(Discriminant)       /                       2a

const getRoot2 = R.converge(R.divide, [R.pipe(R.converge(R.add, [R.pipe(R.prop('degre1'), R.multiply(-1)), R.pipe(getDiscriminant, squareRoot)])) , R.pipe(R.prop('degre2'), R.multiply(2)) ]);
// root2       =                                                                       -b                +         squareroot(Discriminant)       /                       2a

// Discriminant Positif:

const addRoots = R.pipe(
    R.converge(R.assoc('discriminant'),[getDiscriminant, R.identity]),
    R.converge(R.assoc('root1'), [getRoot1, R.identity]),
    R.converge(R.assoc('root2'), [getRoot2, R.identity])
)

// Discriminant Nul:

const addRoot = R.pipe(
    R.converge(R.assoc('discriminant'),[getDiscriminant, R.identity]),
    R.converge(R.assoc('root1'), [getRoot1, R.identity])
)
// Discriminant Négatif:

const getPartialRoot = R.pipe(R.converge(R.divide, [R.pipe(R.prop('degre1'), R.multiply(-1)), R.pipe(R.prop('degre2'), R.multiply(2))]), R.toString);

const getImRoot1 = R.pipe(
    R.converge(R.assoc('partial'), [getPartialRoot, R.identity]),
    R.converge(R.assoc('Im'), [R.converge(R.divide,[R.pipe(getDiscriminant, Math.abs, squareRoot, R.toString), R.pipe(R.prop('degre2'), R.multiply(2), Math.abs)]), R.identity]),
    R.props(['partial','Im']),
    R.insert(1,' - '),
    R.insert(3,'i'),
    R.join('')
);

const getImRoot2 = R.pipe(
    R.converge(R.assoc('partial'), [getPartialRoot, R.identity]),
    R.converge(R.assoc('Im'), [R.converge(R.divide,[R.pipe(getDiscriminant, Math.abs, squareRoot, R.toString), R.pipe(R.prop('degre2'), R.multiply(2), Math.abs)]), R.identity]),
    R.props(['partial','Im']),
    R.insert(1,' + '),
    R.insert(3,'i'),
    R.join('')
);

const addImRoots = R.pipe(
    R.converge(R.assoc('discriminant'),[getDiscriminant, R.identity]),
    R.converge(R.assoc('root1'), [getImRoot1, R.identity]),
    R.converge(R.assoc('root2'), [getImRoot2, R.identity])
)
// Traitement des polynomes :

const addRootsToPolynomes = R.map(R.cond([
    [polynome => getDiscriminant(polynome) > 0, addRoots],
    [polynome => getDiscriminant(polynome) < 0, addImRoots],
    [polynome => getDiscriminant(polynome) === 0, addRoot]
]));

console.log(addRootsToPolynomes(Polynomes));