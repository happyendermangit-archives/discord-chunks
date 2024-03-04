function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RedesignIconContextProvider: function() {
            return l
        },
        useRedesignIconContext: function() {
            return u
        },
        replaceIcon: function() {
            return d
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("619550"),
        a = n("890503");
    let o = s.createContext({
        enabled: !1,
        highlight: !1
    });

    function l(e) {
        let {
            children: t,
            overwriteValue: n
        } = e, {
            enabled: l
        } = r.default.useExperiment({
            location: "web redesign icon context"
        }), u = (0, a.default)("highlight_redesigned_icons"), d = s.useMemo(() => ({
            enabled: l,
            highlight: u
        }), [l, u]);
        return (0, i.jsx)(o.Provider, {
            value: null != n ? n : d,
            children: t
        })
    }

    function u() {
        return s.useContext(o)
    }

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                size: 24
            };
        return function(r) {
            let {
                enabled: a,
                highlight: o
            } = u();
            if (!a) return (0, i.jsx)(e, {
                ...r
            });
            {
                var l, d;
                let e = {
                    ...r
                };
                for (let [t, i] of Object.entries(n = {
                        foreground: "colorClass",
                        color: "color",
                        ...null != n ? n : {}
                    })) {
                    let n = r[t];
                    if (null == n && "color" === t && (n = o ? "yellow" : "currentColor"), "remove" === i) {
                        delete e[t];
                        continue
                    }
                    e[i] = n
                }
                return null !== (l = e.width) && void 0 !== l || (e.width = s.size), null !== (d = e.height) && void 0 !== d || (e.height = s.size), (0, i.jsx)(t, {
                    ...e
                })
            }
        }
    }
}