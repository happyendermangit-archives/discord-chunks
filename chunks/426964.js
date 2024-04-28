function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
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
        A = n("534856");

    function m(e) {
        e.stopPropagation()
    }

    function N(e) {
        var t;
        let {
            clan: N,
            isLoading: p,
            onClose: O
        } = e, R = (0, I.useClanInfo)(null !== (t = null == N ? void 0 : N.identityGuildId) && void 0 !== t ? t : null), C = null == N ? void 0 : N.tag, g = (0, E.useIsInUserClanExperiment)(), L = null == N ? void 0 : N.identityGuildId, D = (0, a.useStateFromStores)([d.default], () => d.default.getId()), v = (0, a.useStateFromStores)([_.default], () => null != L ? _.default.getMember(L, D) : null, [L, D]), M = (0, a.useStateFromStores)([c.default], () => c.default.getUser(D), [D]), y = (null == v ? void 0 : v.joinedAt) != null, P = (0, f.isGuildAdoptedUserClanIdentity)(L, null == M ? void 0 : M.clan), U = null != (0, l.default)(L), b = r.useCallback(e => {
            null != L && (e.stopPropagation(), e.preventDefault(), null == O || O(), (0, T.openAdoptClanIdentityModal)(L))
        }, [L, O]), G = r.useCallback(e => {
            if (null != R) e.stopPropagation(), e.preventDefault(), null == O || O(), !U && (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    clan: R
                })
            })
        }, [R, U, O]), w = r.useCallback(() => {
            null != L && (0, u.transitionTo)(S.Routes.GUILD_MEMBER_VERIFICATION(L))
        }, [L]), B = r.useMemo(() => {
            var e, t;
            let n = null !== (t = null == R ? void 0 : null === (e = R.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null,
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
        }, [R]), k = r.useMemo(() => {
            switch (!0) {
                case !g:
                    return null;
                case !y && U:
                    return (0, i.jsx)(s.Button, {
                        onClick: w,
                        ...B,
                        children: h.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !y:
                    return (0, i.jsx)(s.Button, {
                        onClick: G,
                        ...B,
                        children: h.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case y && !P:
                    return (0, i.jsx)(s.Button, {
                        onClick: b,
                        ...B,
                        children: h.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                default:
                    return null
            }
        }, [B, b, G, w, U, P, y, g]), V = r.useMemo(() => ({
            className: A.container,
            onClick: m
        }), []);
        return null == C || null == R || null == L || p ? (0, i.jsx)("div", {
            ...V,
            children: (0, i.jsx)(s.Spinner, {})
        }) : (0, i.jsxs)("div", {
            ...V,
            children: [(0, i.jsx)(o.ClanDiscoveryCardView, {
                clan: R,
                className: A.cardContainer
            }), null != k && (0, i.jsx)("div", {
                className: A.buttonContainer,
                children: k
            })]
        })
    }
}