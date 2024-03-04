function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDialog: function() {
            return a
        }
    });
    var r = n("240849"),
        i = n("447259"),
        o = n("884691"),
        s = n("195711");

    function a(e, t) {
        let {
            role: n = "dialog"
        } = e, a = (0, r.useSlotId)();
        a = e["aria-label"] ? void 0 : a;
        let c = (0, o.useRef)(!1);
        return (0, o.useEffect)(() => {
            if (t.current && !t.current.contains(document.activeElement)) {
                (0, i.focusSafely)(t.current);
                let e = setTimeout(() => {
                    document.activeElement === t.current && (c.current = !0, t.current && (t.current.blur(), (0, i.focusSafely)(t.current)), c.current = !1)
                }, 500);
                return () => {
                    clearTimeout(e)
                }
            }
        }, [t]), (0, s.useOverlayFocusContain)(), {
            dialogProps: {
                ...(0, r.filterDOMProps)(e, {
                    labelable: !0
                }),
                role: n,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || a,
                onBlur: e => {
                    c.current && e.stopPropagation()
                }
            },
            titleProps: {
                id: a
            }
        }
    }
}