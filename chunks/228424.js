function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualFriends: function() {
            return m
        }
    }), n("222007");
    var l, i, a = n("884691"),
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
            [l, i] = a.useState(n.current ? 2 : 0),
            m = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
            p = e.id === m,
            h = e.bot || p,
            {
                enabled: E
            } = (0, c.useProfileMutualsExperiment)({
                disable: h
            }),
            g = a.useCallback(async (e, t) => {
                !(t > 0) && (i(1), await (0, o.fetchMutualFriends)(e), i(2))
            }, []);
        a.useEffect(() => {
            null == t && !h && E && g(e.id, l)
        }, [h, E, l, g, t, e.bot, e.id]);
        let S = l > 1,
            C = (0, r.useStateFromStoresArray)([d.default], () => (0, s.sortBy)(t, e => {
                var t, n;
                let {
                    user: l
                } = e;
                return -(null !== (n = null === (t = d.default.getUserAffinity(l.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0)
            }));
        return [S, C]
    }(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED"
}