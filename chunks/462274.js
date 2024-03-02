function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useColorStore: function() {
            return f
        },
        maybeFetchColors: function() {
            return c
        },
        default: function() {
            return m
        },
        useAvatarColors: function() {
            return g
        }
    }), i("222007");
    var n = i("884691"),
        r = i("656280"),
        l = i.n(r),
        u = i("308503"),
        o = i("446674"),
        s = i("206230"),
        a = i("284679"),
        d = i("103603");
    let f = (0, u.default)(() => ({
        palette: {},
        fetching: {}
    }));
    async function c(e) {
        null == f.getState().palette[e] && await h(e)
    }
    async function h(e) {
        if (!f.getState().fetching[e]) {
            f.setState(t => ({
                fetching: {
                    ...t.fetching,
                    [e]: !0
                }
            }));
            try {
                let t = await (0, d.getPaletteForAvatar)(e),
                    i = (0, a.getComplimentaryPaletteForColor)(t[0]);
                f.setState(n => ({
                    fetching: {
                        ...n.fetching,
                        [e]: !1
                    },
                    palette: {
                        ...n.palette,
                        [e]: [...t.slice(0, 2), ...i]
                    }
                }))
            } catch (t) {
                f.setState(t => ({
                    fetching: {
                        ...t.fetching,
                        [e]: !1
                    }
                }))
            }
        }
    }

    function m(e, t) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            [n] = g(e, t, i);
        return n
    }

    function g(e, t) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = f(t => null == e ? void 0 : t.palette[e]),
            u = (0, o.useStateFromStores)([s.default], () => i && s.default.desaturateUserColors ? s.default.saturation : 1);
        n.useEffect(() => {
            null != e && null == r && h(e)
        }, [e, r]);
        let a = n.useMemo(() => null == r ? void 0 : r.map(e => {
            let [t, i, n] = e, {
                h: r,
                s: o,
                l: s
            } = l({
                r: t,
                g: i,
                b: n
            }).toHsl();
            return l({
                h: r,
                s: o * u,
                l: s
            }).toHexString()
        }), [r, u]);
        return null != a ? a : [t, t]
    }
}