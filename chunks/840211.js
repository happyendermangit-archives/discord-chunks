function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("222007");
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("446674"),
        d = n("77078"),
        c = n("685665"),
        f = n("730859"),
        p = n("296262"),
        m = n("271938"),
        h = n("476263"),
        x = n("387111"),
        E = n("337487"),
        y = n("756507"),
        g = n("228424"),
        S = n("602872"),
        C = n("401642"),
        _ = n("590456"),
        T = n("782340"),
        I = n("45907");
    let v = s.memo(function(e) {
        let {
            user: t,
            onClose: n,
            analyticsLocation: i,
            maxGuilds: l = 2
        } = e, r = (0, S.useMutualGuilds)(t), {
            analyticsLocations: u,
            guildId: c,
            channelId: f,
            messageId: m,
            roleId: x
        } = (0, y.useUserProfileAnalyticsContext)(), E = s.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.map(e => {
                let {
                    guild: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [r]), g = s.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_GUILDS_COUNT.format({
            count: E.length
        }), [E]), v = s.useCallback(() => {
            (0, C.openUserProfileModal)({
                userId: t.id,
                guildId: null != c ? c : void 0,
                channelId: null != f ? f : void 0,
                messageId: null != m ? m : void 0,
                roleId: null != x ? x : void 0,
                section: _.UserProfileSections.MUTUAL_GUILDS,
                sourceAnalyticsLocations: u,
                analyticsLocation: i
            }), null == n || n()
        }, [i, u, n, t.id, c, f, m, x]);
        return null == E || 0 === E.length ? null : (0, a.jsx)(d.Tooltip, {
            text: T.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
            children: e => (0, a.jsxs)(d.Clickable, {
                ...e,
                onClick: v,
                className: o(I.avatarAndTextContainer, I.serverContainer),
                children: [(0, a.jsx)("div", {
                    className: I.avatars,
                    children: (0, a.jsx)(p.default, {
                        maxGuilds: l,
                        guilds: E,
                        size: h.default.Sizes.SMOL,
                        hideOverflowCount: !0,
                        disableGuildNameTooltip: !0
                    })
                }), (0, a.jsx)(d.Text, {
                    className: I.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: g
                })]
            })
        })
    });
    (l = i || (i = {}))[l.NOT_CHECKED = 0] = "NOT_CHECKED", l[l.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", l[l.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", l[l.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
    let N = s.memo(function(e) {
            let {
                user: t,
                hasFetchedFriends: n,
                mutualFriends: i,
                onClose: l,
                analyticsLocation: r,
                maxFriends: u = 2
            } = e, {
                analyticsLocations: c,
                guildId: p,
                channelId: m,
                messageId: h,
                roleId: E
            } = (0, y.useUserProfileAnalyticsContext)(), g = s.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), S = s.useRef(null), [v, N] = s.useState(!1), [A, R] = s.useState(0), O = s.useCallback(() => {
                if (null != S.current) {
                    let e = S.current.clientHeight > 19;
                    R(t => {
                        switch (t) {
                            case 0:
                                return e ? 2 : 1;
                            case 1:
                                return N(!e), e ? 2 : 1;
                            case 2:
                                return N(!e), e ? 3 : 2;
                            case 3:
                                return N(!0), 3
                        }
                    })
                }
            }, []), M = s.useCallback(() => {
                (0, C.openUserProfileModal)({
                    userId: t.id,
                    guildId: null != p ? p : void 0,
                    channelId: null != m ? m : void 0,
                    messageId: null != h ? h : void 0,
                    roleId: null != E ? E : void 0,
                    section: _.UserProfileSections.MUTUAL_FRIENDS,
                    sourceAnalyticsLocations: c,
                    analyticsLocation: r
                }), null == l || l()
            }, [r, c, l, t.id, p, m, h, E]), k = s.useMemo(() => {
                if (0 === g.length) return null;
                let [e, t, ...n] = g;
                return 1 === g.length ? T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_ONE.format({
                    usernameOne: x.default.getName(null, null, e)
                }) : 2 === g.length ? T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TWO.format({
                    usernameOne: x.default.getName(null, null, e),
                    usernameTwo: x.default.getName(null, null, t)
                }) : g.length > 2 ? T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY.format({
                    usernameOne: x.default.getName(null, null, e),
                    usernameTwo: x.default.getName(null, null, t),
                    count: n.length
                }) : void 0
            }, [g]);
            s.useEffect(() => {
                O()
            }, [O, k, A]);
            let L = s.useMemo(() => {
                if (g.length > 0 && A > 1) {
                    let [e, ...t] = g;
                    return g.length > 1 && 2 === A ? T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY_SHORT.format({
                        usernameOne: x.default.getName(null, null, e),
                        count: t.length
                    }) : T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_COUNT.format({
                        count: g.length
                    })
                }
                return k
            }, [g, A, k]);
            return n ? 0 === g.length ? null : (0, a.jsx)("div", {
                className: o(!v && I.hideElement),
                ref: S,
                children: (0, a.jsx)(d.Tooltip, {
                    text: T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, a.jsxs)(d.Clickable, {
                        ...e,
                        onClick: M,
                        className: o(I.avatarAndTextContainer, I.friendsContainer),
                        children: [(0, a.jsx)("div", {
                            className: I.avatars,
                            children: (0, a.jsx)(f.default, {
                                maxUsers: u,
                                users: g,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0,
                                disableUsernameTooltip: !0
                            })
                        }), (0, a.jsx)(d.Text, {
                            className: I.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: L
                        })]
                    })
                })
            }) : (0, a.jsx)("div", {
                className: I.skeleton
            })
        }),
        A = s.memo(function(e) {
            let {
                user: t,
                mutualFriends: n,
                mutualGuilds: i,
                hasFetchedFriends: l,
                onClose: r,
                analyticsLocation: u,
                maxIcons: c = 3
            } = e, {
                analyticsLocations: m,
                guildId: x,
                channelId: E,
                messageId: g,
                roleId: S
            } = (0, y.useUserProfileAnalyticsContext)(), v = s.useMemo(() => {
                var e;
                return null !== (e = null == n ? void 0 : n.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [n]), N = s.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), A = s.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
                count: v.length
            }), [v]), R = s.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
                count: N.length
            }), [N]), O = s.useRef(null), [M, k] = s.useState(!1), [L, P] = s.useState(!1), b = s.useCallback(() => {
                if (null != O.current) {
                    var e;
                    let t = (null === (e = O.current) || void 0 === e ? void 0 : e.clientHeight) > 19;
                    P(t), k(!0)
                }
            }, []), j = s.useCallback(e => () => {
                (0, C.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: m,
                    guildId: null != x ? x : void 0,
                    channelId: null != E ? E : void 0,
                    messageId: null != g ? g : void 0,
                    roleId: null != S ? S : void 0,
                    section: e,
                    analyticsLocation: u
                }), null == r || r()
            }, [u, m, r, t.id, x, E, g, S]);
            s.useEffect(() => {
                b()
            }, [b, A]);
            let U = v.length > 0,
                D = N.length > 0;
            return l ? (0, a.jsxs)("div", {
                className: o(I.compactItemContainer, !M && I.hideElement),
                ref: O,
                children: [U && (0, a.jsx)(d.Tooltip, {
                    text: T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, a.jsxs)(d.Clickable, {
                        ...e,
                        onClick: j(_.UserProfileSections.MUTUAL_FRIENDS),
                        className: o(I.avatarAndTextContainer, I.friendsContainer),
                        children: [(0, a.jsx)("div", {
                            className: I.avatars,
                            children: (0, a.jsx)(f.default, {
                                maxUsers: c,
                                users: v,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0,
                                disableUsernameTooltip: !0
                            })
                        }), (0, a.jsx)(d.Text, {
                            className: I.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: A
                        })]
                    })
                }), U && D && (0, a.jsx)("div", {
                    "aria-hidden": "true",
                    className: I.dotSpacer
                }), D && (0, a.jsx)(d.Tooltip, {
                    text: T.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                    children: e => (0, a.jsxs)(d.Clickable, {
                        ...e,
                        onClick: j(_.UserProfileSections.MUTUAL_GUILDS),
                        className: o(I.avatarAndTextContainer, I.serverContainer),
                        children: [!L && (0, a.jsx)("div", {
                            className: I.avatars,
                            children: (0, a.jsx)(p.default, {
                                maxGuilds: c,
                                guilds: N,
                                size: h.default.Sizes.SMOL,
                                hideOverflowCount: !0,
                                disableGuildNameTooltip: !0
                            })
                        }), (0, a.jsx)(d.Text, {
                            className: I.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: R
                        })]
                    })
                })]
            }) : (0, a.jsx)("div", {
                className: I.skeleton
            })
        });
    var R = s.memo(function(e) {
        var t, n;
        let {
            user: i,
            onClose: l,
            className: s,
            sourceAnaylticsLocations: r
        } = e, {
            analyticsLocations: f
        } = (0, c.default)(), p = null !== (n = null !== (t = null == r ? void 0 : r[0]) && void 0 !== t ? t : null == f ? void 0 : f[0]) && void 0 !== n ? n : null, h = (0, u.useStateFromStores)([m.default], () => m.default.getId()), x = i.id === h, y = i.bot || x, {
            compact: C,
            enabled: _
        } = (0, E.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: p,
            disable: y
        }), R = (0, S.useMutualGuilds)(i), [O, M] = (0, g.useMutualFriends)(i);
        if (!_ || y) return null;
        let k = (null == M || 0 === M.length) && 0 === R.length;
        return O && k ? null : (0, a.jsxs)("div", {
            className: o(I.mainContainer, s),
            children: [(0, a.jsx)(d.Heading, {
                variant: "eyebrow",
                className: I.title,
                children: T.default.Messages.USER_PROFILE_MUTUALS_TITLE
            }), C && (0, a.jsx)(A, {
                user: i,
                mutualFriends: M,
                hasFetchedFriends: O,
                mutualGuilds: R,
                onClose: l
            }), !C && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(N, {
                    user: i,
                    mutualFriends: M,
                    hasFetchedFriends: O,
                    onClose: l
                }), (0, a.jsx)(v, {
                    user: i,
                    mutualGuilds: R,
                    onClose: l
                })]
            })]
        })
    })
}