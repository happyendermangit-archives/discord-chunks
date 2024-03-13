function(e, t, n) {
    var r = /\w*$/;
    e.exports = function(e) {
        var t = new e.constructor(e.source, r.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
}