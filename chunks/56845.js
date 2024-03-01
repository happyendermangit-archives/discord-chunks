function(t, e, s) {
    s("70102"), t.exports = function(t, e) {
        if (r("noDeprecation")) return t;
        var s = !1;
        return function() {
            if (!s) {
                if (r("throwDeprecation")) throw Error(e);
                r("traceDeprecation") ? console.trace(e) : console.warn(e);
                s = !0
            }
            return t.apply(this, arguments)
        }
    };

    function r(t) {
        try {
            if (!s.g.localStorage) return !1
        } catch (t) {
            return !1
        }
        var e = s.g.localStorage[t];
        return null != e && "true" === String(e).toLowerCase()
    }
}