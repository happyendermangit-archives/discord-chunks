function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("470079"),
        r = n("40851"),
        a = n("981631");
    let s = ["Shift", "Alt", "Meta", "Control"];

    function o(e, t) {
        let [n, o] = i.useState(0), l = (0, r.useWindowDispatch)();
        i.useEffect(() => {
            let e = () => o(e => e + 1),
                t = () => o(e => Math.max(0, e - 1));
            return l.subscribe(a.ComponentActions.POPOUT_SHOW, e), l.subscribe(a.ComponentActions.POPOUT_HIDE, t), () => {
                l.unsubscribe(a.ComponentActions.POPOUT_SHOW, e), l.unsubscribe(a.ComponentActions.POPOUT_HIDE, t)
            }
        }, [l]);
        let [u, d] = i.useState(!1);
        return i.useLayoutEffect(() => {
            let i = e => {
                    if ((!t || n > 0) && u) {
                        d(!1);
                        return
                    }!(!u && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || s.indexOf(e.key) >= 0)) && d(e => !e)
                },
                r = u ? "keyup" : "mousemove";
            return t && e.addEventListener(r, i), () => null == e ? void 0 : e.removeEventListener(r, i)
        }, [e, u, n, t]), t && 0 === n && u
    }
}