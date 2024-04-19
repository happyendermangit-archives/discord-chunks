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
        o = n("601964"),
        l = n("314897"),
        u = n("271383"),
        d = n("594174"),
        _ = n("963202"),
        c = n("645896"),
        E = n("905362"),
        I = n("353093"),
        T = n("114487"),
        f = n("219039"),
        S = n("979264"),
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
        } = e, C = (0, c.useClanInfo)(null !== (t = null == m ? void 0 : m.identityGuildId) && void 0 !== t ? t : null), g = null == m ? void 0 : m.tag, L = (0, _.useIsInUserClanExperiment)(), D = null == m ? void 0 : m.identityGuildId, v = (0, a.useStateFromStores)([l.default], () => l.default.getId()), M = (0, a.useStateFromStores)([u.default], () => null != D ? u.default.getMember(D, v) : null, [D, v]), y = (0, a.useStateFromStores)([d.default], () => d.default.getUser(v), [v]), P = (null == M ? void 0 : M.joinedAt) != null, U = (0, I.isGuildAdoptedUserClanIdentity)(D, null == y ? void 0 : y.clan), b = r.useCallback(e => {
            null != D && (e.stopPropagation(), e.preventDefault(), null == p || p(), (0, E.openAdoptClanIdentityModal)(D))
        }, [D, p]), G = r.useCallback(e => {
            null != C && (e.stopPropagation(), e.preventDefault(), null == p || p(), (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("60330"), n.e("27233")]).then(n.bind(n, "767593"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    clan: C
                })
            }))
        }, [C, p]);
        return null == g || null == C || null == D || N ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsxs)("div", {
            className: A.tooltipContainer,
            onMouseLeave: R,
            onMouseEnter: O,
            children: [(0, i.jsxs)("div", {
                className: A.tooltipHeader,
                children: [(0, i.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: h.default.Messages.CLAN_TAG_GUILD_PROFILE_MEMBERSHIP
                }), (0, i.jsx)(S.BaseClanTagChiplet, {
                    clanTag: g
                })]
            }), (0, i.jsxs)("div", {
                className: A.tooltipContent,
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsx)(T.default, {
                        guild: new o.default(C),
                        iconSize: 40
                    })
                }), (0, i.jsxs)("div", {
                    className: A.guildInfoContainer,
                    children: [(0, i.jsx)("div", {
                        className: A.guildName,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: C.name
                        })
                    }), (0, i.jsx)(f.default, {
                        count: C.memberCount
                    })]
                })]
            }), P && !U && L && (0, i.jsx)("div", {
                className: A.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: b,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: h.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                })
            }), !P && L && (0, i.jsx)("div", {
                className: A.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: G,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: h.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                })
            })]
        })
    }
}