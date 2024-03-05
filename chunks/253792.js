function(e, t, r) {
    var n = r("766665"),
        u = r("561662"),
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, r) {
        var o = e[t];
        (!(a.call(e, t) && u(o, r)) || void 0 === r && !(t in e)) && n(e, t, r)
    }
}