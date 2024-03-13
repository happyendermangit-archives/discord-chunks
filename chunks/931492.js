function(e, t, n) {
    var r = n("85762"),
        i = n("921563"),
        o = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n) {
        var s = e[t];
        (!(o.call(e, t) && i(s, n)) || void 0 === n && !(t in e)) && r(e, t, n)
    }
}