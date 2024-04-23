function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("442837"),
        o = n("741606"),
        l = n("703656"),
        u = n("601964"),
        d = n("314897"),
        _ = n("271383"),
        c = n("594174"),
        E = n("963202"),
        I = n("645896"),
        T = n("905362"),
        f = n("353093"),
        S = n("114487"),
        h = n("219039"),
        A = n("979264"),
        m = n("981631"),
        N = n("689938"),
        p = n("221840");

    function O(e) {
        var t;
        let {
            clan: O,
            isLoading: R,
            onClose: C,
            onMouseEnter: g,
            onMouseLeave: L
        } = e, D = (0, I.useClanInfo)(null !== (t = null == O ? void 0 : O.identityGuildId) && void 0 !== t ? t : null), v = null == O ? void 0 : O.tag, M = (0, E.useIsInUserClanExperiment)(), y = null == O ? void 0 : O.identityGuildId, P = (0, a.useStateFromStores)([d.default], () => d.default.getId()), U = (0, a.useStateFromStores)([_.default], () => null != y ? _.default.getMember(y, P) : null, [y, P]), b = (0, a.useStateFromStores)([c.default], () => c.default.getUser(P), [P]), G = (null == U ? void 0 : U.joinedAt) != null, w = (0, f.isGuildAdoptedUserClanIdentity)(y, null == b ? void 0 : b.clan), k = null != (0, o.default)(y), B = r.useCallback(e => {
            null != y && (e.stopPropagation(), e.preventDefault(), null == C || C(), (0, T.openAdoptClanIdentityModal)(y))
        }, [y, C]), F = r.useCallback(e => {
            if (null != D) e.stopPropagation(), e.preventDefault(), null == C || C(), !k && (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("60330"), n.e("27233")]).then(n.bind(n, "767593"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    clan: D
                })
            })
        }, [D, k, C]), V = r.useCallback(() => {
            null != y && (0, l.transitionTo)(m.Routes.GUILD_MEMBER_VERIFICATION(y))
        }, [y]);
        return null == v || null == D || null == y || R ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsxs)("div", {
            className: p.tooltipContainer,
            onMouseLeave: L,
            onMouseEnter: g,
            children: [(0, i.jsxs)("div", {
                className: p.tooltipHeader,
                children: [(0, i.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: N.default.Messages.CLAN_TAG_GUILD_PROFILE_MEMBERSHIP
                }), (0, i.jsx)(A.BaseClanTagChiplet, {
                    clanTag: v
                })]
            }), (0, i.jsxs)("div", {
                className: p.tooltipContent,
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsx)(S.default, {
                        guild: new u.default(D),
                        iconSize: 40
                    })
                }), (0, i.jsxs)("div", {
                    className: p.guildInfoContainer,
                    children: [(0, i.jsx)("div", {
                        className: p.guildName,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: D.name
                        })
                    }), (0, i.jsx)(h.default, {
                        count: D.memberCount
                    })]
                })]
            }), G && !w && M && (0, i.jsx)("div", {
                className: p.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: B,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: N.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                })
            }), !G && M && !k && (0, i.jsx)("div", {
                className: p.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: F,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: N.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                })
            }), !G && M && k && (0, i.jsx)("div", {
                className: p.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: V,
                    color: s.Button.Colors.PRIMARY,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: N.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                })
            })]
        })
    }
}