function(e, t, n) {
    var r = n("839309"),
        i = n("912065").Buffer;
    e.exports = function(e, t) {
        return i.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray())
    }
}