function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079"),
        r = n("580747"),
        s = n("607789");
    t.default = (e, t) => {
        let n = (0, r.default)("profile_effect_debug_controls"),
            {
                id: a,
                preset: o,
                increment: l,
                decrement: u
            } = (0, s.default)(e);
        return i.useEffect(() => {
            if (!n) return;
            let e = e => {
                "ArrowUp" === e.key && (l(), e.preventDefault()), "ArrowDown" === e.key && (u(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
            };
            return window.addEventListener("keydown", e), () => {
                window.removeEventListener("keydown", e)
            }
        }, []), {
            id: null != a ? a : null,
            preset: o
        }
    }
}