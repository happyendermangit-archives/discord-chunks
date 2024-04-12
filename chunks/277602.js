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
            onMouseLeave: m
        } = e, N = (0, I.useClanInfo)(null !== (t = null == n ? void 0 : n.identityGuildId) && void 0 !== t ? t : null), O = null == n ? void 0 : n.tag, p = (0, d.useIsInUserClanExperiment)(), R = null == n ? void 0 : n.identityGuildId, C = (0, a.useStateFromStores)([o.default], () => o.default.getId()), g = (0, a.useStateFromStores)([l.default], () => null != R ? l.default.getMember(R, C) : null, [R, C]), L = (0, a.useStateFromStores)([u.default], () => u.default.getUser(C), [C]), D = (null == g ? void 0 : g.joinedAt) != null, v = (0, c.isGuildAdoptedUserClanIdentity)(R, null == L ? void 0 : L.clan), M = r.useCallback(e => {
            null != R && (e.stopPropagation(), e.preventDefault(), null == h || h(), (0, _.openAdoptClanIdentityModal)(R))
        }, [R, h]);
        return null == O || (null == N ? void 0 : N.guild) == null || null == R || A ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsxs)("div", {
            className: S.tooltipContainer,
            onMouseLeave: m,
            children: [(0, i.jsxs)("div", {
                className: S.tooltipHeader,
                children: [(0, i.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: f.default.Messages.CLAN_TAG_GUILD_PROFILE_MEMBERSHIP
                }), (0, i.jsx)(T.BaseClanTagChiplet, {
                    clanTag: O
                })]
            }), (0, i.jsxs)("div", {
                className: S.tooltipContent,
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsx)(E.default, {
                        guild: N.guild,
                        iconSize: 32,
                        backupSize: "MEDIUM"
                    })
                }), (0, i.jsxs)("div", {
                    className: S.guildInfoContainer,
                    children: [(0, i.jsx)("div", {
                        className: S.guildName,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: N.guild.name
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
            }), D && !v && p && (0, i.jsx)("div", {
                className: S.tooltipFooter,
                children: (0, i.jsx)(s.Button, {
                    onClick: M,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.SMALL,
                    fullWidth: !0,
                    children: f.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                })
            })]
        })
    }
}