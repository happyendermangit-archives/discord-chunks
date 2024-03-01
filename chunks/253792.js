function(e, t, r) {
    var n = r("766665"),
        i = r("561662"),
        o = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, r) {
        var a = e[t];
        (!(o.call(e, t) && i(a, r)) || void 0 === r && !(t in e)) && n(e, t, r)
    }
}