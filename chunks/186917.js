function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079"),
        r = n("580747"),
        a = n("607789");
    t.default = (e, t) => {
        let n = (0, r.default)("profile_effect_debug_controls"),
            {
                id: s,
                preset: o,
                increment: l,
                decrement: u
            } = (0, a.default)(e);
        return i.useEffect(() => {
            if (!n) return;
            let e = e => {
                "ArrowUp" === e.key && (l(), e.preventDefault()), "ArrowDown" === e.key && (u(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
            };
            return window.addEventListener("keydown", e), () => {
                window.removeEventListener("keydown", e)
            }
        }, []), {
            id: null != s ? s : null,
            preset: o
        }
    }
}