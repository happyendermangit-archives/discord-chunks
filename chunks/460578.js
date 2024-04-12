function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useClanInfo: function() {
            return _
        },
        useFetchClanInfo: function() {
            return c
        }
    }), n("47120");
    var i = n("470079"),
        r = n("652874"),
        s = n("143927"),
        a = n("881052"),
        o = n("601964"),
        l = n("931240");
    let u = {},
        d = (0, r.default)((e, t) => ({
            clans: {},
            fetching: !1,
            error: null,
            fetchClanInfo: async n => {
                if (function(e) {
                        var t;
                        let n = Date.now(),
                            i = null !== (t = u[e]) && void 0 !== t ? t : 0;
                        return n - i > 6e4
                    }(n)) {
                    u[n] = Date.now();
                    try {
                        let i = await (0, l.getClanInfo)(n),
                            r = t().clans;
                        e({
                            clans: {
                                ...r,
                                [n]: {
                                    guild: new o.default(i)
                                }
                            },
                            error: null
                        })
                    } catch (t) {
                        e({
                            error: new a.APIError(t)
                        })
                    }
                }
            }
        }));

    function _(e) {
        return d(t => null != e ? t.clans[e] : null)
    }

    function c(e) {
        let [t, n] = i.useState(!1), [r, a] = d(e => [e.fetchClanInfo, e.fetching], s.default);
        return [t, i.useCallback(async () => {
            if (!a && null != e) try {
                n(!0), await r(e)
            } finally {
                n(!1)
            }
        }, [e, a, r])]
    }
}