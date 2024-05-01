function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        H: function() {
            return a
        },
        HeadingLevel: function() {
            return s
        },
        usePrivateHeadingLevel: function() {
            return l
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079");

    function s(e) {
        let {
            component: t,
            children: n,
            forceLevel: s
        } = e, a = r.useContext(o), [l, u] = r.useState(null != t), d = 1, _ = 1;
        null != s ? null != t ? (d = s, _ = s + 1) : _ = s : null != t ? (d = a.level, _ = a.level + 1) : _ = a.level + (l ? 1 : 0);
        let c = r.useCallback(() => (u(!0), d), [d]),
            E = r.useCallback(() => (u(!0), _), [_]);
        return (0, i.jsxs)(i.Fragment, {
            children: [null != t ? (0, i.jsx)(o.Provider, {
                value: {
                    level: d,
                    getLevelAndMarkUsed: c
                },
                children: t
            }) : null, (0, i.jsx)(o.Provider, {
                value: {
                    level: _,
                    getLevelAndMarkUsed: E
                },
                children: n
            })]
        })
    }

    function a(e) {
        let t = l(),
            n = "h".concat(Math.min(t, 6));
        return (0, i.jsx)(n, {
            ...t > 6 ? {
                "data-excessive-heading-level": t
            } : {},
            ...e
        })
    }
    let o = r.createContext({
        getLevelAndMarkUsed: () => 2,
        level: 2
    });

    function l() {
        let {
            getLevelAndMarkUsed: e
        } = r.useContext(o);
        return e()
    }
    o.displayName = "HeadingLevelContext"
}