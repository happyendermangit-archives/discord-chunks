function(e, t, r) {
    var n = /\w*$/;
    e.exports = function(e) {
        var t = new e.constructor(e.source, n.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
}