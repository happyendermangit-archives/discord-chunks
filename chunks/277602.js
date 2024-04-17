function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("442837"),
        o = n("601964"),
        l = n("314897"),
        u = n("271383"),
        d = n("594174"),
        _ = n("963202"),
        c = n("645896"),
        E = n("905362"),
        I = n("353093"),
        T = n("114487"),
        f = n("979264"),
        S = n("689938"),
        h = n("221840");

    function A(e) {
        var t;
        let {
            clan: A,
            isLoading: m,
            onClose: N,
            onMouseEnter: p,
            onMouseLeave: O
        } = e, R = (0, c.useClanInfo)(null !== (t = null == A ? void 0 : A.identityGuildId) && void 0 !== t ? t : null), C = null == A ? void 0 : A.tag, g = (0, _.useIsInUserClanExperiment)(), L = null == A ? void 0 : A.identityGuildId, D = (0, a.useStateFromStores)([l.default], () => l.default.getId()), v = (0, a.useStateFromStores)([u.default], () => null != L ? u.default.getMember(L, D) : null, [L, D]), M = (0, a.useStateFromStores)([d.default], () => d.default.getUser(D), [D]), y = (null == v ? void 0 : v.joinedAt) != null, P = (0, I.isGuildAdoptedUserClanIdentity)(L, null == M ? void 0 : M.clan), U = r.useCallback(e => {
            null != L && (e.stopPropagation(), e.preventDefault(), null == N || N(), (0, E.openAdoptClanIdentityModal)(L))
        }, [L, N]), b = r.useCallback(e => {
            null != R && (e.stopPropagation(), e.preventDefault(), null == N || N(), (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("60330"), n.e("27233")]).then(n.bind(n, "767593"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    clan: R
                })
            }))
        }, [R, N]);
        return null == C || null == R || null == L || m ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsxs)("div", {
            className: h.tooltipContainer,
            onMouseLeave: O,
            onMouseEnter: p,
            children: [(0, i.jsxs)("div", {
                className: h.tooltipHeader,
                children: [(0, i.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: S.default.Messages.CLAN_TAG_GUILD_PROFILE_MEMBERSHIP
                }), (0, i.jsx)(f.BaseClanTagChiplet, {
                    clanTag: C
                })]
            }), (0, i.jsxs)("div", {
                className: h.tooltipContent,
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsx)(T.default, {
                        guild: new o.default(R),
                        iconSize: 40
                    })
                }), (0, i.jsxs)("div", {
                    className: h.guildInfoContainer,
                    children: [(0, i.jsx)("div", {
                        className: h.guildName,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: R.name
                        })
                    }), (0, i.jsxs)("div", {
                        className: h.guildMemberCount,
                        children: [(0, i.jsx)("div", {
                            className: h.dot
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: S.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
                                count: R.memberCount
                            })
                        })]
                    })]
                })]
            }), y && !P && g && (0, i.jsx)("div", {
                className: h.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: U,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: S.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                })
            }), !y && g && (0, i.jsx)("div", {
                className: h.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: b,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: S.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                })
            })]
        })
    }
}