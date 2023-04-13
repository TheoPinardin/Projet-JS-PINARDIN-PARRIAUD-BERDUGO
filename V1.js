//const R = require('ramda');
//const {on} = require("ramda");
//let moy;
import * as R from 'ramda';
const candidates = [
    {id: 'a', value: 1, weight: 1},
    {id: 'b', value: 2, weight: 1},
    {id: 'c', value: 3, weight: 1},
    {id: 'd', value: 4, weight: 1},
    {id: 'e', value: 5, weight: 1},
    {id: 'f', value: 6, weight: 1},
    {id: 'g', value: 7, weight: 1},
    {id: 'h', value: 8, weight: 1},
    {id: 'i', value: 9, weight: 1},
    {id: 'j', value: 10, weight: 1},
    {id: 'k', value: 11, weight: 1},
    {id: 'l', value: 12, weight: 1},
    {id: 'm', value: 13, weight: 1},
    {id: 'n', value: 14, weight: 1},
    {id: 'o', value: 15, weight: 1},
    {id: 'p', value: 16, weight: 1}
];

const consolePrettyList = R.tap(
    R.pipe(R.pluck('id'), R.join(', '), console.log)
);

const consolePopulation = R.map(consolePrettyList);

const randomSort = () => Math.random() - 0.5;

const initGen = R.pipe(R.flip(R.repeat)(5), R.map(R.sort(randomSort)));

const cloneGen = R.clone;

const getOneAtRandom = () =>
    candidates[Math.floor((Math.random() * 100) % candidates.length)];

const firstMuteByPerson = R.map(
    R.when(() => Math.random() - 0.5 > 0, getOneAtRandom)
);
const firstMuteForPop = R.map(firstMuteByPerson);

const getRandomPeople = (pop) => Math.floor((Math.random() * 100) % pop.length);

const secondMuteForPop = (p) => {
    return R.map(
        R.addIndex(R.map)((v, idxGene) =>
            R.when(
                () => Math.random() - 0.5 > 0,
                () => p[getRandomPeople(p)][idxGene]
            )(v)
        )
    )(p);
};

const diff = (a, b) => a.id === b.id;
const fixPop = R.map(
    R.pipe(
        R.uniq,
        R.converge(R.concat, [R.identity, R.differenceWith(diff, candidates)])
    )
);

const scoreOne = R.pipe(
    R.slice(0, 5), R.pluck('value'), R.sum
);

const scorePop = R.pipe(R.map(scoreOne), R.sum);

const sortPop = R.pipe(R.sortBy(scoreOne), R.reverse);

const mergeWithParents = (parents) => (children) => {
    const parentsSort = sortPop(parents);
    const childrenSort = sortPop(children);

    return [...parentsSort.slice(0, 3), ...childrenSort.slice(0, 2)];
};

const logIter = (p) => {
    console.log('###################');
    consolePopulation(p);
    console.log(scorePop(p));
    console.log(R.map(scoreOne, p));
    return p;
};

const pop0 = initGen(candidates);

const iter = (x) =>
    R.pipe(
        cloneGen,
        firstMuteForPop,
        secondMuteForPop,
        fixPop,
        mergeWithParents(x),
        logIter
    )(x);

R.pipe(
    iter,
    iter,
    iter
)(pop0);