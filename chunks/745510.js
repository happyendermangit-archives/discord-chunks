function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfettiCannonContext: function() {
            return d
        },
        ConfettiCannonContextProvider: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("236471"),
        s = n("399606"),
        o = n("607070"),
        l = n("981631");
    let u = {
            confettiCanvas: null,
            cannon: null,
            createConfetti: () => void 0,
            createConfettiAt: () => void 0,
            createMultipleConfetti: () => [],
            createMultipleConfettiAt: () => [],
            addClickListener: () => l.NOOP,
            removeClickListener: l.NOOP
        },
        d = r.createContext(u);

    function _(e) {
        let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: l,
            baseConfig: _,
            addClickListener: c,
            removeClickListener: E
        } = e, I = (0, a.useConfettiCannon)(n, l), T = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), f = r.useMemo(() => T ? u : {
            confettiCanvas: n,
            cannon: I,
            createConfetti: (e, t) => I.createConfetti({
                ..._,
                ...e
            }, t),
            createConfettiAt: (e, t, n, i) => I.createConfetti({
                ..._,
                position: {
                    type: "static",
                    value: {
                        x: e,
                        y: t
                    }
                },
                ...n
            }, i),
            createMultipleConfetti: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return I.createMultipleConfetti({
                    ..._,
                    ...e
                }, t, n)
            },
            createMultipleConfettiAt: function(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                return I.createMultipleConfetti({
                    ..._,
                    position: {
                        type: "static",
                        value: {
                            x: e,
                            y: t
                        }
                    },
                    ...n
                }, i, r)
            },
            addClickListener: c,
            removeClickListener: E
        }, [c, _, I, n, T, E]);
        return (0, i.jsx)(d.Provider, {
            value: f,
            children: t
        })
    }
}