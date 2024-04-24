function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileClanContainer: function() {
            return O
        },
        UserProfileClanRow: function() {
            return N
        },
        UserProfileClanSection: function() {
            return R
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
        A = n("689938"),
        m = n("88725");

    function N(e) {
        let {
            className: t,
            userClanTag: n,
            onTagClick: s,
            guildId: o,
            guildName: u,
            guildIcon: d,
            guildIconSize: c,
            memberCount: E
        } = e, I = r.useMemo(() => _.default.getGuildIconURL({
            id: o,
            icon: d,
            size: c,
            canAnimate: !0
        }), [o, d, c]), T = r.useRef(null), [A, N] = r.useState(!1);
        return r.useEffect(() => {
            let e = T.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && N(e.offsetWidth < e.scrollWidth)
        }, []), (0, i.jsxs)("div", {
            className: a()(m.container, t),
            children: [(0, i.jsx)(f.ClanGuildIconSimple, {
                className: m.icon,
                guildName: u,
                guildIconURL: I,
                iconSize: c
            }), (0, i.jsxs)("div", {
                className: m.details,
                children: [(0, i.jsx)(l.Tooltip, {
                    text: u,
                    color: l.Tooltip.Colors.PRIMARY,
                    shouldShow: A,
                    children: e => (0, i.jsx)("span", {
                        ref: T,
                        ...e,
                        className: m.guildName,
                        children: u
                    })
                }), null != E && (0, i.jsx)(S.default, {
                    count: E
                })]
            }), (0, i.jsx)("div", {
                className: m.tagContainer,
                children: (0, i.jsx)(h.BaseClanTagChiplet, {
                    className: m.tag,
                    clanTag: n,
                    onClick: s,
                    badgeSize: h.ClanTagBadgeSize.SIZE_16,
                    textColor: "interactive-normal",
                    textVariant: "text-sm/medium"
                })
            })]
        })
    }

    function p(e) {
        let {
            userClanTag: t,
            guildId: s,
            guildName: a,
            guildIcon: u,
            clan: _
        } = e, T = (0, I.useCurrentUserAvailableClanIds)(), f = (0, o.useStateFromStores)([d.default], () => {
            var e;
            return (0, E.getGuildIdFromUserClan)(null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan)
        }), S = r.useMemo(() => {
            if (s !== f) {
                if (T.has(s)) return () => {
                    (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
                        ...e,
                        header: A.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
                        confirmText: A.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
                        confirmButtonColor: l.Button.Colors.BRAND,
                        cancelText: A.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
                        onConfirm: async () => {
                            await (0, c.adoptClanIdentity)(s, !0)
                        },
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: A.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
                                guildName: a
                            })
                        })
                    }))
                };
                if (null != _) return () => (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        clan: _
                    })
                })
            }
        }, [T, _, f, s, a]);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Heading, {
                className: m.header,
                variant: "eyebrow",
                children: A.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
            }), (0, i.jsx)(N, {
                className: m.profileContainer,
                userClanTag: t,
                onTagClick: S,
                guildName: a,
                guildId: s,
                guildIcon: u,
                guildIconSize: 40,
                memberCount: null == _ ? void 0 : _.memberCount
            })]
        })
    }

    function O(e) {
        let {
            userId: t,
            wrapChildren: n
        } = e, {
            userClanTag: r,
            guildId: s,
            guildName: a,
            guildIcon: o,
            clan: l
        } = (0, T.useUserSelectedClan)({
            userId: t
        });
        if (null == r || null == s || null == a) return null;
        let u = (0, i.jsx)(p, {
            userClanTag: r,
            guildId: s,
            guildName: a,
            guildIcon: o,
            clan: l
        });
        return null != n ? (0, i.jsx)(i.Fragment, {
            children: n(u)
        }) : u
    }

    function R(e) {
        let {
            userId: t
        } = e, n = r.useCallback(e => (0, i.jsx)(u.default, {
            children: e
        }), []);
        return (0, i.jsx)(O, {
            userId: t,
            wrapChildren: n
        })
    }
}