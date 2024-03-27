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
            analyticsLocations: u,
            guildId: _,
            channelId: c,
            messageId: I,
            roleId: f
        } = (0, h.useUserProfileAnalyticsContext)(), S = a.useMemo(() => {
            var e;
            return null !== (e = null == o ? void 0 : o.map(e => {
                let {
                    guild: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [o]), A = a.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_COUNT.format({
            count: S.length
        }), [S]), C = a.useCallback(() => {
            (0, N.openUserProfileModal)({
                userId: t.id,
                guildId: null != _ ? _ : void 0,
                channelId: null != c ? c : void 0,
                messageId: null != I ? I : void 0,
                roleId: null != f ? f : void 0,
                section: O.UserProfileSections.MUTUAL_GUILDS,
                sourceAnalyticsLocations: u,
                analyticsLocation: i
            }), null == n || n()
        }, [i, u, n, t.id, _, c, I, f]);
        return null == S || 0 === S.length ? null : (0, s.jsx)(d.Tooltip, {
            text: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
            children: e => (0, s.jsxs)(d.Clickable, {
                ...e,
                onClick: C,
                className: l()(R.avatarAndTextContainer, R.serverContainer),
                children: [(0, s.jsx)("div", {
                    className: R.__invalid_avatars,
                    children: (0, s.jsx)(E.default, {
                        maxGuilds: r,
                        guilds: S,
                        size: T.default.Sizes.SMOL,
                        hideOverflowCount: !0,
                        disableGuildNameTooltip: !0
                    })
                }), (0, s.jsx)(d.Text, {
                    className: R.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: A
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
                analyticsLocations: _,
                guildId: E,
                channelId: I,
                messageId: T,
                roleId: S
            } = (0, h.useUserProfileAnalyticsContext)(), A = a.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), m = a.useRef(null), [C, g] = a.useState(!1), [L, D] = a.useState(0), v = a.useCallback(() => {
                if (null != m.current) {
                    let e = m.current.clientHeight > 19;
                    D(t => {
                        switch (t) {
                            case 0:
                                return e ? 2 : 1;
                            case 1:
                                return g(!e), e ? 2 : 1;
                            case 2:
                                return g(!e), e ? 3 : 2;
                            case 3:
                                return g(!0), 3
                        }
                    })
                }
            }, []), M = a.useCallback(() => {
                (0, N.openUserProfileModal)({
                    userId: t.id,
                    guildId: null != E ? E : void 0,
                    channelId: null != I ? I : void 0,
                    messageId: null != T ? T : void 0,
                    roleId: null != S ? S : void 0,
                    section: O.UserProfileSections.MUTUAL_FRIENDS,
                    sourceAnalyticsLocations: _,
                    analyticsLocation: o
                }), null == r || r()
            }, [o, _, r, t.id, E, I, T, S]), y = a.useMemo(() => {
                if (0 === A.length) return null;
                let [e, t, ...n] = A;
                return 1 === A.length ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_ONE.format({
                    usernameOne: f.default.getName(null, null, e)
                }) : 2 === A.length ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TWO.format({
                    usernameOne: f.default.getName(null, null, e),
                    usernameTwo: f.default.getName(null, null, t)
                }) : A.length > 2 ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY.format({
                    usernameOne: f.default.getName(null, null, e),
                    usernameTwo: f.default.getName(null, null, t),
                    count: n.length
                }) : void 0
            }, [A]);
            a.useEffect(() => {
                v()
            }, [v, y, L]);
            let P = a.useMemo(() => {
                if (A.length > 0 && L > 1) {
                    let [e, ...t] = A;
                    return A.length > 1 && 2 === L ? p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY_SHORT.format({
                        usernameOne: f.default.getName(null, null, e),
                        count: t.length
                    }) : p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_COUNT.format({
                        count: A.length
                    })
                }
                return y
            }, [A, L, y]);
            return n ? 0 === A.length ? null : (0, s.jsx)("div", {
                className: l()(!C && R.hideElement),
                ref: m,
                children: (0, s.jsx)(d.Tooltip, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        onClick: M,
                        className: l()(R.avatarAndTextContainer, R.__invalid_friendsContainer),
                        children: [(0, s.jsx)("div", {
                            className: R.__invalid_avatars,
                            children: (0, s.jsx)(c.default, {
                                maxUsers: u,
                                users: A,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0,
                                disableUsernameTooltip: !0
                            })
                        }), (0, s.jsx)(d.Text, {
                            className: R.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: P
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
                maxIcons: _ = 3
            } = e, {
                analyticsLocations: I,
                guildId: f,
                channelId: S,
                messageId: A,
                roleId: m
            } = (0, h.useUserProfileAnalyticsContext)(), C = a.useMemo(() => {
                var e;
                return null !== (e = null == n ? void 0 : n.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [n]), g = a.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), L = a.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
                count: C.length
            }), [C]), D = a.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
                count: g.length
            }), [g]), v = a.useRef(null), [M, y] = a.useState(!1), [P, U] = a.useState(!1), b = a.useCallback(() => {
                if (null != v.current) {
                    var e;
                    U((null === (e = v.current) || void 0 === e ? void 0 : e.clientHeight) > 19), y(!0)
                }
            }, []), G = a.useCallback(e => () => {
                (0, N.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: I,
                    guildId: null != f ? f : void 0,
                    channelId: null != S ? S : void 0,
                    messageId: null != A ? A : void 0,
                    roleId: null != m ? m : void 0,
                    section: e,
                    analyticsLocation: u
                }), null == o || o()
            }, [u, I, o, t.id, f, S, A, m]);
            a.useEffect(() => {
                b()
            }, [b, L]);
            let w = C.length > 0,
                k = g.length > 0;
            return r ? (0, s.jsxs)("div", {
                className: l()(R.compactItemContainer, !M && R.hideElement),
                ref: v,
                children: [w && (0, s.jsx)(d.Tooltip, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        onClick: G(O.UserProfileSections.MUTUAL_FRIENDS),
                        className: l()(R.avatarAndTextContainer, R.__invalid_friendsContainer),
                        children: [(0, s.jsx)("div", {
                            className: R.__invalid_avatars,
                            children: (0, s.jsx)(c.default, {
                                maxUsers: _,
                                users: C,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0,
                                disableUsernameTooltip: !0
                            })
                        }), (0, s.jsx)(d.Text, {
                            className: R.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: L
                        })]
                    })
                }), w && k && (0, s.jsx)("div", {
                    "aria-hidden": "true",
                    className: R.dotSpacer
                }), k && (0, s.jsx)(d.Tooltip, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        onClick: G(O.UserProfileSections.MUTUAL_GUILDS),
                        className: l()(R.avatarAndTextContainer, R.serverContainer),
                        children: [!P && (0, s.jsx)("div", {
                            className: R.__invalid_avatars,
                            children: (0, s.jsx)(E.default, {
                                maxGuilds: _,
                                guilds: g,
                                size: T.default.Sizes.SMOL,
                                hideOverflowCount: !0,
                                disableGuildNameTooltip: !0
                            })
                        }), (0, s.jsx)(d.Text, {
                            className: R.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: D
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