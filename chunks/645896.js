function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useClanInfo: function() {
            return d
        },
        useFetchClanInfo: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("652874"),
        s = n("143927"),
        a = n("881052"),
        o = n("931240");
    let l = {},
        u = (0, r.default)((e, t) => ({
            clans: {},
            fetching: !1,
            error: null,
            fetchClanInfo: async n => {
                if (function(e) {
                        var t;
                        let n = Date.now(),
                            i = null !== (t = l[e]) && void 0 !== t ? t : 0;
                        return n - i > 6e4
                    }(n)) {
                    l[n] = Date.now();
                    try {
                        let i = await (0, o.getClanInfo)(n),
                            r = t().clans;
                        e({
                            clans: {
                                ...r,
                                [n]: i
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

    function d(e) {
        return u(t => null != e ? t.clans[e] : null)
    }

    function _(e) {
        let [t, n] = i.useState(!1), [r, a] = u(e => [e.fetchClanInfo, e.fetching], s.default);
        return [t, i.useCallback(async () => {
            if (!a && null != e) try {
                n(!0), await r(e)
            } finally {
                n(!1)
            }
        }, [e, a, r])]
    }
}