function(e, t, n) {
    var r = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = e.length,
            n = new e.constructor(t);
        return t && "string" == typeof e[0] && r.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }
}