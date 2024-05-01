function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        H: function() {
            return s
        },
        HeadingLevel: function() {
            return a
        },
        usePrivateHeadingLevel: function() {
            return l
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079");

    function a(e) {
        let {
            component: t,
            children: n,
            forceLevel: a
        } = e, s = r.useContext(o), [l, u] = r.useState(null != t), d = 1, _ = 1;
        null != a ? null != t ? (d = a, _ = a + 1) : _ = a : null != t ? (d = s.level, _ = s.level + 1) : _ = s.level + (l ? 1 : 0);
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

    function s(e) {
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