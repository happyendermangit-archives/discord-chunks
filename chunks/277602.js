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
        A = n("221840");

    function m(e) {
        var t;
        let {
            clan: m,
            isLoading: N,
            onClose: p,
            onMouseEnter: O,
            onMouseLeave: R
        } = e, C = (0, I.useClanInfo)(null !== (t = null == m ? void 0 : m.identityGuildId) && void 0 !== t ? t : null), g = null == m ? void 0 : m.tag, L = (0, E.useIsInUserClanExperiment)(), D = null == m ? void 0 : m.identityGuildId, v = (0, a.useStateFromStores)([d.default], () => d.default.getId()), M = (0, a.useStateFromStores)([_.default], () => null != D ? _.default.getMember(D, v) : null, [D, v]), y = (0, a.useStateFromStores)([c.default], () => c.default.getUser(v), [v]), P = (null == M ? void 0 : M.joinedAt) != null, U = (0, f.isGuildAdoptedUserClanIdentity)(D, null == y ? void 0 : y.clan), b = null != (0, l.default)(D), G = r.useCallback(e => {
            null != D && (e.stopPropagation(), e.preventDefault(), null == p || p(), (0, T.openAdoptClanIdentityModal)(D))
        }, [D, p]), w = r.useCallback(e => {
            if (null != C) e.stopPropagation(), e.preventDefault(), null == p || p(), !b && (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    clan: C
                })
            })
        }, [C, b, p]), B = r.useCallback(() => {
            null != D && (0, u.transitionTo)(S.Routes.GUILD_MEMBER_VERIFICATION(D))
        }, [D]), k = r.useMemo(() => {
            var e, t;
            let n = null !== (t = null == C ? void 0 : null === (e = C.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null,
                i = {
                    color: null != n ? s.Button.Colors.CUSTOM : s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0
                };
            return null != n && (i = {
                ...i,
                style: {
                    backgroundColor: n,
                    color: (0, f.getAccessibleTextColor)(n).hex()
                }
            }), i
        }, [C]), V = r.useMemo(() => {
            switch (!0) {
                case !L:
                    return null;
                case !P && b:
                    return (0, i.jsx)(s.Button, {
                        onClick: B,
                        ...k,
                        children: h.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !P:
                    return (0, i.jsx)(s.Button, {
                        onClick: w,
                        ...k,
                        children: h.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case P && !U:
                    return (0, i.jsx)(s.Button, {
                        onClick: G,
                        ...k,
                        children: h.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                default:
                    return null
            }
        }, [k, G, w, B, b, U, P, L]);
        return null == g || null == C || null == D || N ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsxs)("div", {
            className: A.tooltipContainer,
            onMouseLeave: R,
            onMouseEnter: O,
            children: [(0, i.jsx)(o.ClanDiscoveryCardView, {
                clan: C,
                className: A.cardContainer
            }), null != V && (0, i.jsx)("div", {
                className: A.buttonContainer,
                children: V
            })]
        })
    }
}