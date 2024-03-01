function(e, t, r) {
    var n = r("954873");
    e.exports = function(e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
}