function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RedesignIconContextProvider: function() {
            return l
        },
        replaceIcon: function() {
            return d
        },
        useRedesignIconContext: function() {
            return u
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("679136"),
        s = n("580747");
    let o = r.createContext({
        enabled: !1,
        highlight: !1
    });

    function l(e) {
        let {
            children: t,
            overwriteValue: n
        } = e, {
            enabled: l
        } = a.default.useExperiment({
            location: "web redesign icon context"
        }), u = (0, s.default)("highlight_redesigned_icons"), d = r.useMemo(() => ({
            enabled: l,
            highlight: u
        }), [l, u]);
        return (0, i.jsx)(o.Provider, {
            value: null != n ? n : d,
            children: t
        })
    }

    function u() {
        return r.useContext(o)
    }

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                size: 24
            };
        return function(a) {
            let {
                enabled: s,
                highlight: o
            } = u();
            if (!s) return (0, i.jsx)(e, {
                ...a
            });
            {
                var l, d;
                let e = {
                    ...a
                };
                for (let [t, i] of Object.entries(n = {
                        foreground: "colorClass",
                        color: "color",
                        ...null != n ? n : {}
                    })) {
                    let n = a[t];
                    if (null == n && "color" === t && (n = o ? "yellow" : "currentColor"), "remove" === i) {
                        delete e[t];
                        continue
                    }
                    e[i] = n
                }
                return null !== (l = e.width) && void 0 !== l || (e.width = r.size), null !== (d = e.height) && void 0 !== d || (e.height = r.size), (0, i.jsx)(t, {
                    ...e
                })
            }
        }
    }
}