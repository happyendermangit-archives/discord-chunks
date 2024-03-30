function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("794597"),
        i = n("825560");
    t.default = function(e, t) {
        var n = (0, o.default)("profile_effect_debug_controls"),
            a = (0, i.default)(e),
            u = a.id,
            s = a.preset,
            l = a.increment,
            c = a.decrement;
        return r.useEffect(function() {
            if (n) {
                var e = function(e) {
                    "ArrowUp" === e.key && (l(), e.preventDefault()), "ArrowDown" === e.key && (c(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
                };
                return window.addEventListener("keydown", e),
                    function() {
                        window.removeEventListener("keydown", e)
                    }
            }
        }, []), {
            id: null != u ? u : null,
            preset: s
        }
    }
}