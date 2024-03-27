function(e, t, n) {
    var r = n("814033"),
        i = n("957578").Buffer;
    e.exports = function(e, t) {
        return i.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray())
    }
}