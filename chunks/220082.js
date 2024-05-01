function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        },
        maybeFetchColors: function() {
            return c
        },
        useAvatarColors: function() {
            return T
        },
        useColorStore: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("979590"),
        a = n.n(r),
        s = n("652874"),
        o = n("442837"),
        l = n("607070"),
        u = n("302221"),
        d = n("956664");
    let _ = (0, s.default)(() => ({
        palette: {},
        fetching: {}
    }));
    async function c(e) {
        null == _.getState().palette[e] && await E(e)
    }
    async function E(e) {
        if (!_.getState().fetching[e]) {
            _.setState(t => ({
                fetching: {
                    ...t.fetching,
                    [e]: !0
                }
            }));
            try {
                let t = await (0, d.getPaletteForAvatar)(e),
                    n = (0, u.getComplimentaryPaletteForColor)(t[0]);
                _.setState(i => ({
                    fetching: {
                        ...i.fetching,
                        [e]: !1
                    },
                    palette: {
                        ...i.palette,
                        [e]: [...t.slice(0, 2), ...n]
                    }
                }))
            } catch (t) {
                _.setState(t => ({
                    fetching: {
                        ...t.fetching,
                        [e]: !1
                    }
                }))
            }
        }
    }

    function I(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            [i] = T(e, t, n);
        return i
    }

    function T(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = _(t => null == e ? void 0 : t.palette[e]),
            s = (0, o.useStateFromStores)([l.default], () => n && l.default.desaturateUserColors ? l.default.saturation : 1);
        i.useEffect(() => {
            null != e && null == r && E(e)
        }, [e, r]);
        let u = i.useMemo(() => null == r ? void 0 : r.map(e => {
            let [t, n, i] = e, {
                h: r,
                s: o,
                l
            } = a()({
                r: t,
                g: n,
                b: i
            }).toHsl();
            return a()({
                h: r,
                s: o * s,
                l
            }).toHexString()
        }), [r, s]);
        return null != u ? u : [t, t]
    }
}