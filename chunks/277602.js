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
        o = n("314897"),
        l = n("271383"),
        u = n("594174"),
        d = n("963202"),
        _ = n("905362"),
        c = n("353093"),
        E = n("114487"),
        I = n("460578"),
        T = n("979264"),
        f = n("689938"),
        S = n("221840");

    function A(e) {
        var t;
        let {
            clan: n,
            isLoading: A,
            onAdoptTag: h,
            onMouseEnter: m,
            onMouseLeave: N
        } = e, O = (0, I.useClanInfo)(null !== (t = null == n ? void 0 : n.identityGuildId) && void 0 !== t ? t : null), p = null == n ? void 0 : n.tag, R = (0, d.useIsInUserClanExperiment)(), C = null == n ? void 0 : n.identityGuildId, g = (0, a.useStateFromStores)([o.default], () => o.default.getId()), L = (0, a.useStateFromStores)([l.default], () => null != C ? l.default.getMember(C, g) : null, [C, g]), D = (0, a.useStateFromStores)([u.default], () => u.default.getUser(g), [g]), v = (null == L ? void 0 : L.joinedAt) != null, M = (0, c.isGuildAdoptedUserClanIdentity)(C, null == D ? void 0 : D.clan), y = r.useCallback(e => {
            null != C && (e.stopPropagation(), e.preventDefault(), null == h || h(), (0, _.openAdoptClanIdentityModal)(C))
        }, [C, h]);
        return null == p || (null == O ? void 0 : O.guild) == null || null == C || A ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsxs)("div", {
            className: S.tooltipContainer,
            onMouseLeave: N,
            onMouseEnter: m,
            children: [(0, i.jsxs)("div", {
                className: S.tooltipHeader,
                children: [(0, i.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: f.default.Messages.CLAN_TAG_GUILD_PROFILE_MEMBERSHIP
                }), (0, i.jsx)(T.BaseClanTagChiplet, {
                    clanTag: p
                })]
            }), (0, i.jsxs)("div", {
                className: S.tooltipContent,
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsx)(E.default, {
                        guild: O.guild,
                        iconSize: 40
                    })
                }), (0, i.jsxs)("div", {
                    className: S.guildInfoContainer,
                    children: [(0, i.jsx)("div", {
                        className: S.guildName,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: O.guild.name
                        })
                    }), (0, i.jsxs)("div", {
                        className: S.guildMemberCount,
                        children: [(0, i.jsx)("div", {
                            className: S.dot
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: "2 Members"
                        })]
                    })]
                })]
            }), v && !M && R && (0, i.jsx)("div", {
                className: S.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: y,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: f.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                })
            })]
        })
    }
}