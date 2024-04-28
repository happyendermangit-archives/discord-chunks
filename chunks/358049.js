function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDialog: function() {
            return s
        }
    });
    var r = n("182823"),
        i = n("706682"),
        a = n("470079"),
        o = n("795250");

    function s(e, t) {
        let {
            role: n = "dialog"
        } = e, s = (0, r.useSlotId)();
        s = e["aria-label"] ? void 0 : s;
        let u = (0, a.useRef)(!1);
        return (0, a.useEffect)(() => {
            if (t.current && !t.current.contains(document.activeElement)) {
                (0, i.focusSafely)(t.current);
                let e = setTimeout(() => {
                    document.activeElement === t.current && (u.current = !0, t.current && (t.current.blur(), (0, i.focusSafely)(t.current)), u.current = !1)
                }, 500);
                return () => {
                    clearTimeout(e)
                }
            }
        }, [t]), (0, o.useOverlayFocusContain)(), {
            dialogProps: {
                ...(0, r.filterDOMProps)(e, {
                    labelable: !0
                }),
                role: n,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || s,
                onBlur: e => {
                    u.current && e.stopPropagation()
                }
            },
            titleProps: {
                id: s
            }
        }
    }
}