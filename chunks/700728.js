function(t, e, n) {
    var r = n("733892"),
        i = n("102423"),
        a = n("164400"),
        o = n("844781"),
        s = n("92801"),
        u = n("849513"),
        c = n("828091");
    t.exports = function(t, e) {
        return o(t) && s(e) ? u(c(t), e) : function(n) {
            var o = i(n, t);
            return void 0 === o && o === e ? a(n, t) : r(e, o, 3)
        }
    }
}