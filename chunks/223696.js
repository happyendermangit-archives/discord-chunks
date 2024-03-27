function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("327037"),
        d = n("120027"),
        c = n("402318"),
        f = n("697218"),
        m = n("713135"),
        p = n("782340"),
        h = n("633115"),
        x = l.memo(function(e) {
            var t, n;
            let {
                user: a,
                isLastSection: x
            } = e, E = (0, r.useStateFromStores)([f.default], () => f.default.getCurrentUser()), y = (0, r.useStateFromStores)([m.default], () => m.default.getMutualFriends(a.id));
            l.useEffect(() => {
                null == y && (0, u.fetchMutualFriends)(a.id)
            }, [y, a.id]);
            let g = l.useMemo(() => {
                    var e;
                    return null !== (e = null == y ? void 0 : y.slice(0, 3).map(e => {
                        let {
                            user: t
                        } = e;
                        return t
                    })) && void 0 !== e ? e : []
                }, [y]),
                S = (0, r.useStateFromStores)([m.default], () => m.default.getMutualGuilds(a.id)),
                [C, T] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.isFetchingFriends(a.id), m.default.isFetchingProfile(a.id)]);
            return a.id === (null == E ? void 0 : E.id) || (null == y ? void 0 : y.length) === 0 && (null == S ? void 0 : S.length) === 0 ? null : C || T ? (0, i.jsx)("div", {
                className: s(h.spinnerContainer),
                children: (0, i.jsx)(o.Spinner, {
                    className: h.spinner
                })
            }) : (0, i.jsxs)("div", {
                className: s(h.container, x ? h.bottomPadding : null),
                children: [(0, i.jsx)(c.default, {
                    partySize: {
                        knownSize: g.length,
                        totalSize: Math.min(g.length, 3)
                    },
                    maxAvatarsShown: 3,
                    members: g
                }), (0, i.jsx)(o.Text, {
                    className: (null == y ? void 0 : y.length) === 0 ? void 0 : h.mutualFriendsText,
                    variant: "text-xs/normal",
                    children: p.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                        count: "".concat(null !== (t = null == y ? void 0 : y.length) && void 0 !== t ? t : 0)
                    })
                }), (0, i.jsx)(d.default, {
                    height: 4,
                    width: 4,
                    "aria-hidden": "true",
                    className: h.dotSpacer
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: p.default.Messages.MUTUAL_GUILDS_COUNT.format({
                        count: "".concat(null !== (n = null == S ? void 0 : S.length) && void 0 !== n ? n : 0)
                    })
                })]
            })
        })
}