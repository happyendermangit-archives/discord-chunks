function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
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
        E = n("963202"),
        I = n("645896"),
        T = n("905362"),
        f = n("353093"),
        S = n("981631"),
        h = n("689938"),
        A = n("810200");

    function m(e) {
        var t;
        let {
            clan: m,
            isLoading: N,
            onClose: p
        } = e, O = (0, I.useClanInfo)(null !== (t = null == m ? void 0 : m.identityGuildId) && void 0 !== t ? t : null), R = null == m ? void 0 : m.tag, C = (0, E.useIsInUserClanExperiment)(), g = null == m ? void 0 : m.identityGuildId, L = (0, a.useStateFromStores)([d.default], () => d.default.getId()), D = (0, a.useStateFromStores)([_.default], () => null != g ? _.default.getMember(g, L) : null, [g, L]), v = (0, a.useStateFromStores)([c.default], () => c.default.getUser(L), [L]), M = (null == D ? void 0 : D.joinedAt) != null, y = (0, f.isGuildAdoptedUserClanIdentity)(g, null == v ? void 0 : v.clan), P = null != (0, l.default)(g), U = r.useCallback(e => {
            null != g && (e.stopPropagation(), e.preventDefault(), null == p || p(), (0, T.openAdoptClanIdentityModal)(g))
        }, [g, p]), b = r.useCallback(e => {
            if (null != O) e.stopPropagation(), e.preventDefault(), null == p || p(), !P && (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    clan: O
                })
            })
        }, [O, P, p]), G = r.useCallback(() => {
            null != g && (0, u.transitionTo)(S.Routes.GUILD_MEMBER_VERIFICATION(g))
        }, [g]), w = r.useMemo(() => {
            var e, t;
            let n = null !== (t = null == O ? void 0 : null === (e = O.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null,
                i = {
                    color: null != n ? s.Button.Colors.CUSTOM : s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    className: A.button
                };
            return null != n && (i = {
                ...i,
                style: {
                    backgroundColor: n,
                    color: (0, f.getAccessibleTextColor)(n).hex()
                }
            }), i
        }, [O]), B = r.useMemo(() => {
            switch (!0) {
                case !C:
                    return null;
                case !M && P:
                    return (0, i.jsx)(s.Button, {
                        onClick: G,
                        ...w,
                        children: h.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !M:
                    return (0, i.jsx)(s.Button, {
                        onClick: b,
                        ...w,
                        children: h.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case M && !y:
                    return (0, i.jsx)(s.Button, {
                        onClick: U,
                        ...w,
                        children: h.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                default:
                    return null
            }
        }, [w, U, b, G, P, y, M, C]);
        return null == R || null == O || null == g || N ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsxs)("div", {
            className: A.container,
            children: [(0, i.jsx)(o.ClanDiscoveryCardView, {
                clan: O,
                className: A.cardContainer
            }), null != B && (0, i.jsx)("div", {
                className: A.buttonContainer,
                children: B
            })]
        })
    }
}