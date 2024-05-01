function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Dialog: function() {
            return d
        },
        DialogContext: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("597442"),
        s = n("84735"),
        o = n("337033"),
        l = n("812663");
    let u = r.createContext(void 0),
        d = r.forwardRef(function(e, t) {
            let {
                children: n,
                impressionType: d,
                impression: _,
                disableTrack: c,
                returnRef: E,
                ...I
            } = e, T = r.useRef(null);
            return (0, a.useFocusLock)(T, {
                returnRef: E
            }), r.useContext(l.default)({
                type: d,
                name: null == _ ? void 0 : _.impressionName,
                properties: null == _ ? void 0 : _.impressionProperties
            }, {
                disableTrack: c
            }), r.useImperativeHandle(t, () => T.current), (0, i.jsx)(u.Provider, {
                value: !0,
                children: (0, i.jsx)("div", {
                    ...I,
                    ref: T,
                    role: "dialog",
                    tabIndex: -1,
                    "aria-modal": !0,
                    children: (0, i.jsx)(o.HeadingLevel, {
                        forceLevel: 1,
                        children: (0, i.jsx)(s.FocusRingScope, {
                            containerRef: T,
                            children: n
                        })
                    })
                })
            })
        })
}