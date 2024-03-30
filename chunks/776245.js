function(e, t, n) {
    "use strict";
    var r = n("926515"),
        i = n("24033"),
        a = n("995739");
    e.exports = function(e, t, n) {
        var o, s;
        i(e);
        try {
            if (!(o = a(e, "return"))) {
                if ("throw" === t) throw n;
                return n
            }
            o = r(o, e)
        } catch (e) {
            s = !0, o = e
        }
        if ("throw" === t) throw n;
        if (s) throw o;
        return i(o), n
    }
}