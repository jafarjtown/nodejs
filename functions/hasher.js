const cipher = require('simple-cipher-js')

const addAll = require('./add-all')
const Alpha = [
    "A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
]
const Nums = [0,1,2,3,4,5,6,7,8,9]

function hash(string) {
    let str = string.split(' ').join('')
    let key = 'PKjit_';
    let keyn = []
    let algo = 'jit_';
    let algoAl = []
    let result = '';
    for (let i = 0; i < 10; i++) {
        let rn = Math.floor(Math.random() * Nums.length)
        let ra = Math.floor(Math.random() * Alpha.length)
        key += rn.toString() + Alpha[ra]
        if (i >= 8) {
            keyn.push(rn)
            algoAl.push(Alpha.indexOf(Alpha[ra]))
        }
    }
    let k = addAll(algoAl.concat(keyn))
    let encript = cipher.caesar.encrypt(str, keyn[1])
    console.log(algoAl)
    algo += encript + '_'
    for (const n of algoAl) {
        let ra = Math.floor(Math.random() * Alpha.length)
        algo += n.toString() + '_' + Alpha[ra]
    }
    for (const n of keyn) {
        let ra = Math.floor(Math.random() * Alpha.length)
        algo += n.toString() + '_' + Alpha[ra]
    }
    algo += '_' + k.toString()
    return result + key + '.' + algo
}

function unhash(string) {
    let [pkjit, jit] = string.split('.')
    let [pk, ji] = pkjit.split('_')
    let [jt, encripted, a1, a2, a3, a4, a5, a6] = jit.split('_')
    let sum = parseInt(a1) + parseInt(a2.slice(1,)) + parseInt(a3.slice(1,)) + parseInt(a4.slice(1,))
    let [d1, al1, d2, al2] = ji.slice(ji.length - 4, ji.length).split('')
    // let [d1, al1, d2, al2] = ji.slice(ji.length - 4, ji.length).split('')
    if (sum !== parseInt(a6) & parseInt(d1) === parseInt(a3.slice(1,)) & parseInt(d2) === parseInt(a4.slice(1,))) return false
    let password = cipher.caesar.decrypt(encripted, parseInt(a4.slice(1,)))
    return password
}


module.exports = {'hash': hash, 'unhash': unhash}