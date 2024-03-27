function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualFriends: function() {
            return E
        }
    }), n("47120");
    var i, r, s = n("470079"),
        a = n("392711"),
        o = n("442837"),
        l = n("232567"),
        u = n("314897"),
        d = n("800599"),
        _ = n("342656"),
        c = n("621853");

    function E(e) {
        let t = (0, o.useStateFromStores)([c.default], () => c.default.getMutualFriends(e.id)),
            n = s.useRef(null != t),
            [i, r] = s.useState(n.current ? 2 : 0),
            E = s.useRef(new AbortController),
            I = (0, o.useStateFromStores)([u.default], () => u.default.getId()),
            T = e.id === I,
            f = e.bot || T,
            {
                enabled: S
            } = (0, _.useProfileMutualsExperiment)({
                disable: f
            }),
            h = s.useCallback(async (e, t) => {
                if (!(t > 0)) {
                    r(1);
                    try {
                        await (0, l.fetchMutualFriends)(e, E.current.signal)
                    } catch (e) {}
                    r(2)
                }
            }, []);
        return s.useEffect(() => {
            null == t && !f && S && h(e.id, i)
        }, [f, S, i, h, t, e.bot, e.id]), s.useEffect(() => () => {
            var e;
            null === (e = E.current) || void 0 === e || e.abort()
        }, []), [i > 1, (0, o.useStateFromStoresArray)([d.default], () => (0, a.sortBy)(t, e => {
            var t, n;
            let {
                user: i
            } = e;
            return -(null !== (n = null === (t = d.default.getUserAffinity(i.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0)
        }))]
    }(r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED"
}