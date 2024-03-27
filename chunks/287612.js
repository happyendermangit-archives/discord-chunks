function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("232567"),
        d = n("79712"),
        _ = n("478758"),
        c = n("594174"),
        E = n("621853"),
        I = n("659101"),
        T = n("689938"),
        f = n("735619");
    t.default = r.memo(function(e) {
        var t, n;
        let {
            user: s,
            lastSection: S
        } = e, h = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()), A = (0, o.useStateFromStores)([E.default], () => E.default.getMutualFriends(s.id));
        r.useEffect(() => {
            null == A && (0, u.fetchMutualFriends)(s.id)
        }, [A, s.id]);
        let m = r.useMemo(() => {
                var e;
                return null !== (e = null == A ? void 0 : A.slice(0, 3).map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [A]),
            N = (0, o.useStateFromStores)([E.default], () => E.default.getMutualGuilds(s.id)),
            [O, p] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.isFetchingFriends(s.id), E.default.isFetchingProfile(s.id)]);
        return s.id === (null == h ? void 0 : h.id) || (null == A ? void 0 : A.length) === 0 && (null == N ? void 0 : N.length) === 0 ? null : O || p ? (0, i.jsx)("div", {
            className: a()(f.spinnerContainer),
            children: (0, i.jsx)(l.Spinner, {
                className: f.spinner
            })
        }) : (0, i.jsxs)(I.default, {
            className: f.container,
            lastSection: S,
            children: [(0, i.jsx)(_.default, {
                partySize: {
                    knownSize: m.length,
                    totalSize: Math.min(m.length, 3)
                },
                maxAvatarsShown: 3,
                members: m
            }), (0, i.jsx)(l.Text, {
                className: (null == A ? void 0 : A.length) === 0 ? void 0 : f.mutualFriendsText,
                variant: "text-xs/normal",
                children: T.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                    count: "".concat(null !== (t = null == A ? void 0 : A.length) && void 0 !== t ? t : 0)
                })
            }), (0, i.jsx)(d.default, {
                height: 4,
                width: 4,
                "aria-hidden": "true",
                className: f.dotSpacer
            }), (0, i.jsx)(l.Text, {
                variant: "text-xs/normal",
                children: T.default.Messages.MUTUAL_GUILDS_COUNT.format({
                    count: "".concat(null !== (n = null == N ? void 0 : N.length) && void 0 !== n ? n : 0)
                })
            })]
        })
    })
}