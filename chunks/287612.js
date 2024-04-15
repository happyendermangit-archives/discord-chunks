function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("232567"),
        d = n("79712"),
        _ = n("478758"),
        c = n("594174"),
        E = n("621853"),
        I = n("689938"),
        T = n("735619");
    t.default = r.memo(function(e) {
        let {
            user: t
        } = e, n = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()), s = (0, o.useStateFromStores)([E.default], () => E.default.getMutualFriends(t.id));
        r.useEffect(() => {
            null == s && (0, u.fetchMutualFriends)(t.id)
        }, [s, t.id]);
        let f = r.useMemo(() => {
                var e;
                return null !== (e = null == s ? void 0 : s.slice(0, 3).map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [s]),
            S = (0, o.useStateFromStores)([E.default], () => E.default.getMutualGuilds(t.id)),
            [A, h] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.isFetchingFriends(t.id), E.default.isFetchingProfile(t.id)]);
        if (t.id === (null == n ? void 0 : n.id) || (null == s ? void 0 : s.length) === 0 && (null == S ? void 0 : S.length) === 0) return null;
        if (A || h) return (0, i.jsx)("div", {
            className: a()(T.spinnerContainer),
            children: (0, i.jsx)(l.Spinner, {
                className: T.spinner
            })
        });
        let m = null != s && s.length > 0 ? I.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                count: s.length
            }) : I.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS,
            N = null != S && S.length > 0 ? I.default.Messages.MUTUAL_GUILDS_COUNT.format({
                count: S.length
            }) : I.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS;
        return (0, i.jsxs)("div", {
            className: T.container,
            children: [(0, i.jsx)(_.default, {
                partySize: {
                    knownSize: f.length,
                    totalSize: Math.min(f.length, 3)
                },
                maxAvatarsShown: 3,
                members: f
            }), (0, i.jsx)(l.Text, {
                className: (null == s ? void 0 : s.length) === 0 ? void 0 : T.mutualFriendsText,
                variant: "text-xs/normal",
                children: m
            }), (0, i.jsx)(d.default, {
                height: 4,
                width: 4,
                "aria-hidden": "true",
                className: T.dotSpacer
            }), (0, i.jsx)(l.Text, {
                variant: "text-xs/normal",
                children: N
            })]
        })
    })
}