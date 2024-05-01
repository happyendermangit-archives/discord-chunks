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
        } = e, g = (0, T.useClanInfo)(null !== (t = null == p ? void 0 : p.identityGuildId) && void 0 !== t ? t : null), L = null == p ? void 0 : p.tag, v = (0, I.useIsInUserClanExperiment)(), D = null == p ? void 0 : p.identityGuildId, M = (0, a.useStateFromStores)([d.default], () => d.default.getId()), y = (0, a.useStateFromStores)([_.default], () => null != D ? _.default.getMember(D, M) : null, [D, M]), P = (0, a.useStateFromStores)([c.default], () => c.default.getUser(M), [M]), U = (null == y ? void 0 : y.joinedAt) != null, b = (0, S.isGuildAdoptedUserClanIdentity)(D, null == P ? void 0 : P.clan), G = null != (0, l.default)(D);
        r.useEffect(() => {
            E.default.track(h.AnalyticEvents.CLAN_PROFILE_VIEWED, {
                guild_id: D,
                is_member: U,
                has_join_request: G,
                source: C
            })
        }, [D, U, G, C]);
        let w = r.useCallback(e => {
                null != D && (e.stopPropagation(), e.preventDefault(), null == R || R(), (0, f.openAdoptClanIdentityModal)(D))
            }, [D, R]),
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
                null != D && (0, u.transitionTo)(h.Routes.GUILD_MEMBER_VERIFICATION(D))
            }, [D]),
            V = r.useCallback(() => {
                null != D && (0, u.transitionToGuild)(D)
            }, [D]),
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
                    case !v:
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
            }, [x, w, B, k, V, G, b, U, v]),
            H = r.useMemo(() => ({
                className: m.container,
                onClick: N
            }), []);
        return null == L || null == g || null == D || O ? (0, i.jsx)("div", {
            ...H,
            children: (0, i.jsx)(s.Spinner, {})
        }) : (0, i.jsxs)("div", {
            ...H,
            children: [(0, i.jsx)(o.ClanDiscoveryCardView, {
                clan: g,
                className: m.cardContainer,
                isMember: U
            }), null != F && (0, i.jsx)("div", {
                className: m.buttonContainer,
                children: F
            })]
        })
    }
}