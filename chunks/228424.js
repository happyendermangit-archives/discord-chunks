function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualFriends: function() {
            return m
        }
    }), n("222007");
    var i, l, a = n("884691"),
        s = n("917351"),
        r = n("446674"),
        o = n("327037"),
        u = n("271938"),
        d = n("843823"),
        c = n("337487"),
        f = n("713135");

    function m(e) {
        let t = (0, r.useStateFromStores)([f.default], () => f.default.getMutualFriends(e.id)),
            n = a.useRef(null != t),
            [i, l] = a.useState(n.current ? 2 : 0),
            m = a.useRef(new AbortController),
            p = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
            h = e.id === p,
            x = e.bot || h,
            {
                enabled: E
            } = (0, c.useProfileMutualsExperiment)({
                disable: x
            }),
            y = a.useCallback(async (e, t) => {
                if (!(t > 0)) {
                    l(1);
                    try {
                        await (0, o.fetchMutualFriends)(e, m.current.signal)
                    } catch (e) {}
                    l(2)
                }
            }, []);
        a.useEffect(() => {
            null == t && !x && E && y(e.id, i)
        }, [x, E, i, y, t, e.bot, e.id]), a.useEffect(() => () => {
            var e;
            null === (e = m.current) || void 0 === e || e.abort()
        }, []);
        let g = i > 1,
            S = (0, r.useStateFromStoresArray)([d.default], () => (0, s.sortBy)(t, e => {
                var t, n;
                let {
                    user: i
                } = e;
                return -(null !== (n = null === (t = d.default.getUserAffinity(i.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0)
            }));
        return [g, S]
    }(l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED"
}