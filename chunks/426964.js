function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("442837"),
        o = n("231467"),
        l = n("741606"),
        u = n("703656"),
        d = n("314897"),
        _ = n("271383"),
        c = n("594174"),
        E = n("626135"),
        I = n("963202"),
        T = n("645896"),
        f = n("905362"),
        S = n("353093"),
        h = n("981631"),
        A = n("689938"),
        m = n("917013");

    function N(e) {
        e.stopPropagation()
    }

    function p(e) {
        var t;
        let {
            clan: p,
            isLoading: O,
            onClose: R,
            source: C
        } = e, g = (0, T.useClanInfo)(null !== (t = null == p ? void 0 : p.identityGuildId) && void 0 !== t ? t : null), L = null == p ? void 0 : p.tag, D = (0, I.useIsInUserClanExperiment)(), v = null == p ? void 0 : p.identityGuildId, M = (0, a.useStateFromStores)([d.default], () => d.default.getId()), y = (0, a.useStateFromStores)([_.default], () => null != v ? _.default.getMember(v, M) : null, [v, M]), P = (0, a.useStateFromStores)([c.default], () => c.default.getUser(M), [M]), U = (null == y ? void 0 : y.joinedAt) != null, b = (0, S.isGuildAdoptedUserClanIdentity)(v, null == P ? void 0 : P.clan), G = null != (0, l.default)(v);
        r.useEffect(() => {
            E.default.track(h.AnalyticEvents.CLAN_PROFILE_VIEWED, {
                guild_id: v,
                is_member: U,
                has_join_request: G,
                source: C
            })
        }, [v, U, G, C]);
        let w = r.useCallback(e => {
                null != v && (e.stopPropagation(), e.preventDefault(), null == R || R(), (0, f.openAdoptClanIdentityModal)(v))
            }, [v, R]),
            B = r.useCallback(e => {
                if (null != g) e.stopPropagation(), e.preventDefault(), null == R || R(), !G && (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        clan: g
                    })
                })
            }, [g, G, R]),
            k = r.useCallback(() => {
                null != v && (0, u.transitionTo)(h.Routes.GUILD_MEMBER_VERIFICATION(v))
            }, [v]),
            V = r.useCallback(() => {
                null != v && (0, u.transitionToGuild)(v)
            }, [v]),
            x = r.useMemo(() => {
                var e, t;
                let n = null !== (t = null == g ? void 0 : null === (e = g.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null,
                    i = {
                        color: null != n ? s.Button.Colors.CUSTOM : s.Button.Colors.BRAND,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        className: m.button
                    };
                return null != n && (i = {
                    ...i,
                    style: {
                        backgroundColor: n,
                        color: (0, S.getAccessibleTextColor)(n).hex()
                    }
                }), i
            }, [g]),
            F = r.useMemo(() => {
                switch (!0) {
                    case !D:
                        return null;
                    case !U && G:
                        return (0, i.jsx)(s.Button, {
                            onClick: k,
                            ...x,
                            children: A.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                        });
                    case !U:
                        return (0, i.jsx)(s.Button, {
                            onClick: B,
                            ...x,
                            children: A.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                        });
                    case U && !b:
                        return (0, i.jsx)(s.Button, {
                            onClick: w,
                            ...x,
                            children: A.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                        });
                    case U && b:
                        return (0, i.jsx)(s.Button, {
                            onClick: V,
                            ...x,
                            children: A.default.Messages.CLAN_USER_GO_TO_CLAN_CTA
                        });
                    default:
                        return null
                }
            }, [x, w, B, k, V, G, b, U, D]),
            H = r.useMemo(() => ({
                className: m.container,
                onClick: N
            }), []);
        return null == L || null == g || null == v || O ? (0, i.jsx)("div", {
            ...H,
            children: (0, i.jsx)(s.Spinner, {})
        }) : (0, i.jsxs)("div", {
            ...H,
            children: [(0, i.jsx)(o.ClanDiscoveryCardView, {
                clan: g,
                className: m.cardContainer,
                isMember: U,
                expanded: !0
            }), null != F && (0, i.jsx)("div", {
                className: m.buttonContainer,
                children: F
            })]
        })
    }
}