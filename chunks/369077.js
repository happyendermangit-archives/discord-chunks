function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileClanContainer: function() {
            return R
        },
        UserProfileClanRow: function() {
            return p
        },
        UserProfileClanSection: function() {
            return C
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060");
    n("502762");
    var u = n("659101"),
        d = n("594174"),
        _ = n("768581"),
        c = n("931240"),
        E = n("353093"),
        I = n("891728"),
        T = n("438365"),
        f = n("114487"),
        S = n("219039"),
        h = n("979264"),
        A = n("308083"),
        m = n("689938"),
        N = n("88725");

    function p(e) {
        let {
            className: t,
            userClanTag: n,
            userClanBadge: s,
            onTagClick: o,
            guildId: u,
            guildName: d,
            guildIcon: c,
            guildIconSize: I,
            memberCount: T
        } = e, m = r.useMemo(() => _.default.getGuildIconURL({
            id: u,
            icon: c,
            size: I,
            canAnimate: !0
        }), [u, c, I]), p = r.useRef(null), [O, R] = r.useState(!1);
        r.useEffect(() => {
            let e = p.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && R(e.offsetWidth < e.scrollWidth)
        }, []);
        let C = (0, E.getClanBadgeUrl)(u, s, A.ClanTagBadgeSize.SIZE_16);
        return (0, i.jsxs)("div", {
            className: a()(N.container, t),
            children: [(0, i.jsx)(f.ClanGuildIconSimple, {
                className: N.icon,
                guildName: d,
                guildIconURL: m,
                iconSize: I
            }), (0, i.jsxs)("div", {
                className: N.details,
                children: [(0, i.jsx)(l.Tooltip, {
                    text: d,
                    color: l.Tooltip.Colors.PRIMARY,
                    shouldShow: O,
                    children: e => (0, i.jsx)("span", {
                        ref: p,
                        ...e,
                        className: N.guildName,
                        children: d
                    })
                }), null != T && (0, i.jsx)(S.default, {
                    count: T
                })]
            }), (0, i.jsx)("div", {
                className: N.tagContainer,
                children: (0, i.jsx)(h.BaseClanTagChiplet, {
                    className: N.tag,
                    clanTag: n,
                    clanBadge: C,
                    onClick: o,
                    badgeSize: A.ClanTagBadgeSize.SIZE_16,
                    textColor: "interactive-normal",
                    textVariant: "text-sm/medium"
                })
            })]
        })
    }

    function O(e) {
        let {
            userClanTag: t,
            userClanBadge: s,
            guildId: a,
            guildName: u,
            guildIcon: _,
            clan: T
        } = e, f = (0, I.useCurrentUserAvailableClanIds)(), S = (0, o.useStateFromStores)([d.default], () => {
            var e;
            return (0, E.getUserClanData)(null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
        }), h = r.useMemo(() => {
            if (a !== S) {
                if (f.has(a)) return () => {
                    (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
                        ...e,
                        header: m.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
                        confirmText: m.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
                        confirmButtonColor: l.Button.Colors.BRAND,
                        cancelText: m.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
                        onConfirm: async () => {
                            await (0, c.adoptClanIdentity)(a, !0)
                        },
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: m.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
                                guildName: u
                            })
                        })
                    }))
                };
                if (null != T) return () => (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        clan: T
                    })
                })
            }
        }, [f, T, S, a, u]);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Heading, {
                className: N.header,
                variant: "eyebrow",
                children: m.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
            }), (0, i.jsx)(p, {
                className: N.profileContainer,
                userClanTag: t,
                userClanBadge: s,
                onTagClick: h,
                guildName: u,
                guildId: a,
                guildIcon: _,
                guildIconSize: 40,
                memberCount: null == T ? void 0 : T.memberCount
            })]
        })
    }

    function R(e) {
        let {
            userId: t,
            wrapChildren: n
        } = e, {
            userClanTag: r,
            userClanBadge: s,
            guildId: a,
            guildName: o,
            guildIcon: l,
            clan: u
        } = (0, T.useUserSelectedClan)({
            userId: t
        });
        if (null == r || null == a || null == o) return null;
        let d = (0, i.jsx)(O, {
            userClanTag: r,
            userClanBadge: s,
            guildId: a,
            guildName: o,
            guildIcon: l,
            clan: u
        });
        return null != n ? (0, i.jsx)(i.Fragment, {
            children: n(d)
        }) : d
    }

    function C(e) {
        let {
            userId: t
        } = e, n = r.useCallback(e => (0, i.jsx)(u.default, {
            children: e
        }), []);
        return (0, i.jsx)(R, {
            userId: t,
            wrapChildren: n
        })
    }
}