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
            return g
        },
        useAvatarColors: function() {
            return v
        }
    }), i("222007");
    var l = i("884691"),
        r = i("656280"),
        n = i.n(r),
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
                f.setState(l => ({
                    fetching: {
                        ...l.fetching,
                        [e]: !1
                    },
                    palette: {
                        ...l.palette,
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

    function g(e, t) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            [l] = v(e, t, i);
        return l
    }

    function v(e, t) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = f(t => null == e ? void 0 : t.palette[e]),
            u = (0, o.useStateFromStores)([s.default], () => i && s.default.desaturateUserColors ? s.default.saturation : 1);
        l.useEffect(() => {
            null != e && null == r && h(e)
        }, [e, r]);
        let a = l.useMemo(() => null == r ? void 0 : r.map(e => {
            let [t, i, l] = e, {
                h: r,
                s: o,
                l: s
            } = n({
                r: t,
                g: i,
                b: l
            }).toHsl();
            return n({
                h: r,
                s: o * u,
                l: s
            }).toHexString()
        }), [r, u]);
        return null != a ? a : [t, t]
    }
}