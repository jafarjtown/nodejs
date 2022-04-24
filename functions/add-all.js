

function _(args) {
    let result = 0
    args = args.flat(args.length)
    for (const n of args) {
        result += n
    }
    return result
}

module.exports = _