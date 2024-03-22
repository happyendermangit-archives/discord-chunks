function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        ConfettiCannonContext: function() {
            return d
        },
        ConfettiCannonContextProvider: function() {
            return c
        }
    });
    var i = s("37983"),
        r = s("884691"),
        a = s("516555"),
        l = s("65597"),
        o = s("206230"),
        n = s("49111");
    let u = {
            confettiCanvas: null,
            cannon: null,
            createConfetti: () => void 0,
            createConfettiAt: () => void 0,
            createMultipleConfetti: () => [],
            createMultipleConfettiAt: () => [],
            addClickListener: () => n.NOOP,
            removeClickListener: n.NOOP
        },
        d = r.createContext(u);

    function c(e) {
        let {
            children: t,
            confettiCanvas: s,
            spriteCanvas: n,
            baseConfig: c,
            addClickListener: E,
            removeClickListener: _
        } = e, T = (0, a.useConfettiCannon)(s, n), I = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = r.useMemo(() => I ? u : {
            confettiCanvas: s,
            cannon: T,
            createConfetti: (e, t) => T.createConfetti({
                ...c,
                ...e
            }, t),
            createConfettiAt: (e, t, s, i) => T.createConfetti({
                ...c,
                position: {
                    type: "static",
                    value: {
                        x: e,
                        y: t
                    }
                },
                ...s
            }, i),
            createMultipleConfetti: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                return T.createMultipleConfetti({
                    ...c,
                    ...e
                }, t, s)
            },
            createMultipleConfettiAt: function(e, t, s) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                return T.createMultipleConfetti({
                    ...c,
                    position: {
                        type: "static",
                        value: {
                            x: e,
                            y: t
                        }
                    },
                    ...s
                }, i, r)
            },
            addClickListener: E,
            removeClickListener: _
        }, [E, c, T, s, I, _]);
        return (0, i.jsx)(d.Provider, {
            value: N,
            children: t
        })
    }
}