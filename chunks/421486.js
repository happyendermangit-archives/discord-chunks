function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("803997"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("906732"),
        c = n("318374"),
        E = n("522289"),
        I = n("314897"),
        T = n("346656"),
        f = n("5192"),
        S = n("342656"),
        h = n("785717"),
        A = n("706327"),
        m = n("285470"),
        N = n("171368"),
        O = n("228168"),
        p = n("689938"),
        R = n("403513");
    let C = a.memo(function(e) {
        let {
            user: t,
            onClose: n,
            analyticsLocation: i,
            maxGuilds: r = 2
        } = e, o = (0, m.useMutualGuilds)(t), {
            analyticsLocations: u
        } = (0, _.default)(), {
            guildId: c,
            channelId: I,
            messageId: f,
            roleId: S
        } = (0, h.useUserProfileAnalyticsContext)(), A = a.useMemo(() => {
            var e;
            return null !== (e = null == o ? void 0 : o.map(e => {
                let {
                    guild: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [o]), C = a.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_COUNT.format({
            count: A.length
        }), [A]), g = a.useCallback(() => {
            (0, N.openUserProfileModal)({
                userId: t.id,
                guildId: null != c ? c : void 0,
                channelId: null != I ? I : void 0,
                messageId: null != f ? f : void 0,
                roleId: null != S ? S : void 0,
                section: O.UserProfileSections.MUTUAL_GUILDS,
                sourceAnalyticsLocations: u,
                analyticsLocation: i
            }), null == n || n()
        }, [i, u, n, t.id, c, I, f, S]);
        return null == A || 0 === A.length ? null : (0, s.jsx)(d.Tooltip, {
            text: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
            children: e => (0, s.jsxs)(d.Clickable, {
                ...e,
                onClick: g,
                className: l()(R.avatarAndTextContainer, R.serverContainer),
                children: [(0, s.jsx)("div", {
                    className: R.__invalid_avatars,
                    children: (0, s.jsx)(E.default, {
                        maxGuilds: r,
                        guilds: A,
                        size: T.default.Sizes.SMOL,
                        hideOverflowCount: !0,
                        disableGuildNameTooltip: !0
                    })
                }), (0, s.jsx)(d.Text, {
                    className: R.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: C
                })]
            })
        })
    });
    (r = i || (i = {}))[r.NOT_CHECKED = 0] = "NOT_CHECKED", r[r.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", r[r.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", r[r.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
    let g = a.memo(function(e) {
            let {
                user: t,
                hasFetchedFriends: n,
                mutualFriends: i,
                onClose: r,
                analyticsLocation: o,
                maxFriends: u = 2
            } = e, {
                analyticsLocations: E
            } = (0, _.default)(), {
                guildId: I,
                channelId: T,
                messageId: S,
                roleId: A
            } = (0, h.useUserProfileAnalyticsContext)(), m = a.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), C = a.useRef(null), [g, L] = a.useState(!1), [D, v] = a.useState(0), M = a.useCallback(() => {
                if (null != C.current) {
                    let e = C.current.clientHeight > 19;
                    v(t => {
                        switch (t) {
                            case 0:
                                return e ? 2 : 1;
                            case 1:
                                return L(!e), e ? 2 : 1;
                            case 2:
                                return L(!e), e ? 3 : 2;
                            case 3:
                                return L(!0), 3
                        }
                    })
                }
            }, []), y = a.useCallback(() => {
                (0, N.openUserProfileModal)({
                    userId: t.id,
                    guildId: null != I ? I : void 0,
                    channelId: null != T ? T : void 0,
                    messageId: null != S ? S : void 0,
                    roleId: null != A ? A : void 0,
                    section: O.UserProfileSections.MUTUAL_FRIENDS,
                    sourceAnalyticsLocations: E,
                    analyticsLocation: o
                }), null == r || r()
            }, [o, E, r, t.id, I, T, S, A]), P = a.useMemo(() => {
                if (0 === m.length) return null;
                let [e, t, ...n] = m;
                return 1 === m.length ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_ONE.format({
                    usernameOne: f.default.getName(null, null, e)
                }) : 2 === m.length ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TWO.format({
                    usernameOne: f.default.getName(null, null, e),
                    usernameTwo: f.default.getName(null, null, t)
                }) : m.length > 2 ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY.format({
                    usernameOne: f.default.getName(null, null, e),
                    usernameTwo: f.default.getName(null, null, t),
                    count: n.length
                }) : void 0
            }, [m]);
            a.useEffect(() => {
                M()
            }, [M, P, D]);
            let U = a.useMemo(() => {
                if (m.length > 0 && D > 1) {
                    let [e, ...t] = m;
                    return m.length > 1 && 2 === D ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY_SHORT.format({
                        usernameOne: f.default.getName(null, null, e),
                        count: t.length
                    }) : p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_COUNT.format({
                        count: m.length
                    })
                }
                return P
            }, [m, D, P]);
            return n ? 0 === m.length ? null : (0, s.jsx)("div", {
                className: l()(!g && R.hideElement),
                ref: C,
                children: (0, s.jsx)(d.Tooltip, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        onClick: y,
                        className: l()(R.avatarAndTextContainer, R.__invalid_friendsContainer),
                        children: [(0, s.jsx)("div", {
                            className: R.__invalid_avatars,
                            children: (0, s.jsx)(c.default, {
                                maxUsers: u,
                                users: m,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0,
                                disableUsernameTooltip: !0
                            })
                        }), (0, s.jsx)(d.Text, {
                            className: R.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: U
                        })]
                    })
                })
            }) : (0, s.jsx)("div", {
                className: R.skeleton
            })
        }),
        L = a.memo(function(e) {
            let {
                user: t,
                mutualFriends: n,
                mutualGuilds: i,
                hasFetchedFriends: r,
                onClose: o,
                analyticsLocation: u,
                maxIcons: I = 3
            } = e, {
                analyticsLocations: f
            } = (0, _.default)(), {
                guildId: S,
                channelId: A,
                messageId: m,
                roleId: C
            } = (0, h.useUserProfileAnalyticsContext)(), g = a.useMemo(() => {
                var e;
                return null !== (e = null == n ? void 0 : n.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [n]), L = a.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), D = a.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
                count: g.length
            }), [g]), v = a.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
                count: L.length
            }), [L]), M = a.useRef(null), [y, P] = a.useState(!1), [U, b] = a.useState(!1), G = a.useCallback(() => {
                if (null != M.current) {
                    var e;
                    b((null === (e = M.current) || void 0 === e ? void 0 : e.clientHeight) > 19), P(!0)
                }
            }, []), w = a.useCallback(e => () => {
                (0, N.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: f,
                    guildId: null != S ? S : void 0,
                    channelId: null != A ? A : void 0,
                    messageId: null != m ? m : void 0,
                    roleId: null != C ? C : void 0,
                    section: e,
                    analyticsLocation: u
                }), null == o || o()
            }, [u, f, o, t.id, S, A, m, C]);
            a.useEffect(() => {
                G()
            }, [G, D]);
            let k = g.length > 0,
                B = L.length > 0;
            return r ? (0, s.jsxs)("div", {
                className: l()(R.compactItemContainer, !y && R.hideElement),
                ref: M,
                children: [k && (0, s.jsx)(d.Tooltip, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        onClick: w(O.UserProfileSections.MUTUAL_FRIENDS),
                        className: l()(R.avatarAndTextContainer, R.__invalid_friendsContainer),
                        children: [(0, s.jsx)("div", {
                            className: R.__invalid_avatars,
                            children: (0, s.jsx)(c.default, {
                                maxUsers: I,
                                users: g,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0,
                                disableUsernameTooltip: !0
                            })
                        }), (0, s.jsx)(d.Text, {
                            className: R.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: D
                        })]
                    })
                }), k && B && (0, s.jsx)("div", {
                    "aria-hidden": "true",
                    className: R.dotSpacer
                }), B && (0, s.jsx)(d.Tooltip, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        onClick: w(O.UserProfileSections.MUTUAL_GUILDS),
                        className: l()(R.avatarAndTextContainer, R.serverContainer),
                        children: [!U && (0, s.jsx)("div", {
                            className: R.__invalid_avatars,
                            children: (0, s.jsx)(E.default, {
                                maxGuilds: I,
                                guilds: L,
                                size: T.default.Sizes.SMOL,
                                hideOverflowCount: !0,
                                disableGuildNameTooltip: !0
                            })
                        }), (0, s.jsx)(d.Text, {
                            className: R.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: v
                        })]
                    })
                })]
            }) : (0, s.jsx)("div", {
                className: R.skeleton
            })
        });
    t.default = a.memo(function(e) {
        var t, n;
        let {
            user: i,
            onClose: r,
            className: a,
            sourceAnaylticsLocations: o
        } = e, {
            analyticsLocations: c
        } = (0, _.default)(), E = null !== (n = null !== (t = null == o ? void 0 : o[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, T = (0, u.useStateFromStores)([I.default], () => I.default.getId()), f = i.id === T, h = i.bot || f, {
            compact: N,
            enabled: O
        } = (0, S.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: E,
            disable: h
        }), D = (0, m.useMutualGuilds)(i), [v, M] = (0, A.useMutualFriends)(i);
        if (!O || h) return null;
        let y = (null == M || 0 === M.length) && 0 === D.length;
        return v && y ? null : (0, s.jsxs)("div", {
            className: l()(R.mainContainer, a),
            children: [(0, s.jsx)(d.Heading, {
                variant: "eyebrow",
                className: R.__invalid_title,
                children: p.default.Messages.USER_PROFILE_MUTUALS_TITLE
            }), N && (0, s.jsx)(L, {
                user: i,
                mutualFriends: M,
                hasFetchedFriends: v,
                mutualGuilds: D,
                onClose: r
            }), !N && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(g, {
                    user: i,
                    mutualFriends: M,
                    hasFetchedFriends: v,
                    onClose: r
                }), (0, s.jsx)(C, {
                    user: i,
                    mutualGuilds: D,
                    onClose: r
                })]
            })]
        })
    })
}