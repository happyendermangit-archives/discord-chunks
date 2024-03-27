function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("47120");
    var i = n("470079"),
        r = n("392711"),
        s = n("442837"),
        a = n("208826"),
        o = n("40851"),
        l = n("607070"),
        u = n("585483"),
        d = n("981631");
    let _ = (0, r.debounce)(e => {
        setTimeout(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.focus()
        }, 0)
    }, 50);

    function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
            r = (0, s.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled),
            c = (0, a.default)(),
            [E, I] = i.useState(!1),
            T = (0, o.useWindowDispatch)();
        return i.useEffect(() => {
            if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

            function e() {
                c && (T.dispatch(d.ComponentActions.POPOUT_CLOSE), u.ComponentDispatch.dispatch(d.ComponentActions.CONTEXT_MENU_CLOSE))
            }
        }, [n, c, t, T]), i.useEffect(() => {
            var i, s, a;
            if (r || !E || !t) return;
            let o = c;

            function l(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null == n || "BUTTON" === n.tagName) && !o && _(e)
                }, 100)
            }
            return null === (i = e.current) || void 0 === i || i.addEventListener("focusout", l), (null === (s = n.document.activeElement) || void 0 === s ? void 0 : s.tagName) !== "IFRAME" && !o && (null === (a = e.current) || void 0 === a || a.focus()), () => {
                var t;
                null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", l), o = !0
            }
        }, [t, E, r, e, n, c]), I
    }
}