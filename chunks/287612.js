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
        I = n("689938"),
        T = n("735619");
    t.default = r.memo(function(e) {
        var t, n;
        let {
            user: s
        } = e, f = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()), S = (0, o.useStateFromStores)([E.default], () => E.default.getMutualFriends(s.id));
        r.useEffect(() => {
            null == S && (0, u.fetchMutualFriends)(s.id)
        }, [S, s.id]);
        let h = r.useMemo(() => {
                var e;
                return null !== (e = null == S ? void 0 : S.slice(0, 3).map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [S]),
            A = (0, o.useStateFromStores)([E.default], () => E.default.getMutualGuilds(s.id)),
            [m, N] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.isFetchingFriends(s.id), E.default.isFetchingProfile(s.id)]);
        return s.id === (null == f ? void 0 : f.id) || (null == S ? void 0 : S.length) === 0 && (null == A ? void 0 : A.length) === 0 ? null : m || N ? (0, i.jsx)("div", {
            className: a()(T.spinnerContainer),
            children: (0, i.jsx)(l.Spinner, {
                className: T.spinner
            })
        }) : (0, i.jsxs)("div", {
            className: T.container,
            children: [(0, i.jsx)(_.default, {
                partySize: {
                    knownSize: h.length,
                    totalSize: Math.min(h.length, 3)
                },
                maxAvatarsShown: 3,
                members: h
            }), (0, i.jsx)(l.Text, {
                className: (null == S ? void 0 : S.length) === 0 ? void 0 : T.mutualFriendsText,
                variant: "text-xs/normal",
                children: I.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                    count: "".concat(null !== (t = null == S ? void 0 : S.length) && void 0 !== t ? t : 0)
                })
            }), (0, i.jsx)(d.default, {
                height: 4,
                width: 4,
                "aria-hidden": "true",
                className: T.dotSpacer
            }), (0, i.jsx)(l.Text, {
                variant: "text-xs/normal",
                children: I.default.Messages.MUTUAL_GUILDS_COUNT.format({
                    count: "".concat(null !== (n = null == A ? void 0 : A.length) && void 0 !== n ? n : 0)
                })
            })]
        })
    })
}