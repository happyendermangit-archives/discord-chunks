function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
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
        y = n("228424"),
        g = n("602872"),
        S = n("401642"),
        C = n("590456"),
        I = n("782340"),
        T = n("45907");
    let _ = s.memo(function(e) {
        let {
            user: t,
            onClose: n,
            analyticsLocation: i,
            maxGuilds: l = 2
        } = e, r = (0, g.useMutualGuilds)(t), u = s.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.map(e => {
                let {
                    guild: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [r]), c = s.useMemo(() => I.default.Messages.USER_PROFILE_MUTUAL_GUILDS_COUNT.format({
            count: u.length
        }), [u]), f = s.useCallback(() => {
            (0, S.openUserProfileModal)({
                userId: t.id,
                section: C.UserProfileSections.MUTUAL_GUILDS,
                analyticsLocation: i
            }), null == n || n()
        }, [i, n, t.id]);
        return null == u || 0 === u.length ? null : (0, a.jsx)(d.Tooltip, {
            text: I.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
            children: e => (0, a.jsxs)(d.Clickable, {
                ...e,
                onClick: f,
                className: o(T.avatarAndTextContainer, T.serverContainer),
                children: [(0, a.jsx)("div", {
                    className: T.avatars,
                    children: (0, a.jsx)(p.default, {
                        maxGuilds: l,
                        guilds: u,
                        size: h.default.Sizes.SMOL,
                        hideOverflowCount: !0
                    })
                }), (0, a.jsx)(d.Text, {
                    className: T.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: c
                })]
            })
        })
    });
    (l = i || (i = {}))[l.NOT_CHECKED = 0] = "NOT_CHECKED", l[l.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", l[l.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", l[l.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
    let v = s.memo(function(e) {
            let {
                user: t,
                hasFetchedFriends: n,
                mutualFriends: i,
                onClose: l,
                analyticsLocation: r,
                maxFriends: u = 2
            } = e, c = s.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), p = s.useRef(null), [m, h] = s.useState(!1), [E, y] = s.useState(0), g = s.useCallback(() => {
                if (null != p.current) {
                    let e = p.current.clientHeight > 19;
                    y(t => {
                        switch (t) {
                            case 0:
                                return e ? 2 : 1;
                            case 1:
                                return h(!e), e ? 2 : 1;
                            case 2:
                                return h(!e), e ? 3 : 2;
                            case 3:
                                return h(!0), 3
                        }
                    })
                }
            }, []), _ = s.useCallback(() => {
                (0, S.openUserProfileModal)({
                    userId: t.id,
                    section: C.UserProfileSections.MUTUAL_FRIENDS,
                    analyticsLocation: r
                }), null == l || l()
            }, [r, l, t.id]), v = s.useMemo(() => {
                if (0 === c.length) return null;
                let [e, t, ...n] = c;
                return 1 === c.length ? I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_ONE.format({
                    usernameOne: x.default.getName(null, null, e)
                }) : 2 === c.length ? I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TWO.format({
                    usernameOne: x.default.getName(null, null, e),
                    usernameTwo: x.default.getName(null, null, t)
                }) : c.length > 2 ? I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY.format({
                    usernameOne: x.default.getName(null, null, e),
                    usernameTwo: x.default.getName(null, null, t),
                    count: n.length
                }) : void 0
            }, [c]);
            s.useEffect(() => {
                g()
            }, [g, v, E]);
            let N = s.useMemo(() => {
                if (c.length > 0 && E > 1) {
                    let [e, ...t] = c;
                    return c.length > 1 && 2 === E ? I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY_SHORT.format({
                        usernameOne: x.default.getName(null, null, e),
                        count: t.length
                    }) : I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_COUNT.format({
                        count: c.length
                    })
                }
                return v
            }, [c, E, v]);
            return n ? 0 === c.length ? null : (0, a.jsx)("div", {
                className: o(!m && T.hideElement),
                ref: p,
                children: (0, a.jsx)(d.Tooltip, {
                    text: I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, a.jsxs)(d.Clickable, {
                        ...e,
                        onClick: _,
                        className: o(T.avatarAndTextContainer, T.friendsContainer),
                        children: [(0, a.jsx)("div", {
                            className: T.avatars,
                            children: (0, a.jsx)(f.default, {
                                maxUsers: u,
                                users: c,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0
                            })
                        }), (0, a.jsx)(d.Text, {
                            className: T.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: N
                        })]
                    })
                })
            }) : (0, a.jsx)("div", {
                className: T.skeleton
            })
        }),
        N = s.memo(function(e) {
            let {
                user: t,
                mutualFriends: n,
                mutualGuilds: i,
                hasFetchedFriends: l,
                onClose: r,
                analyticsLocation: u,
                maxIcons: c = 3
            } = e, m = s.useMemo(() => {
                var e;
                return null !== (e = null == n ? void 0 : n.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [n]), x = s.useMemo(() => {
                var e;
                return null !== (e = null == i ? void 0 : i.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [i]), E = s.useMemo(() => I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
                count: m.length
            }), [m]), y = s.useMemo(() => I.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
                count: x.length
            }), [x]), g = s.useRef(null), [_, v] = s.useState(!1), [N, A] = s.useState(!1), O = s.useCallback(() => {
                if (null != g.current) {
                    var e;
                    let t = (null === (e = g.current) || void 0 === e ? void 0 : e.clientHeight) > 19;
                    A(t), v(!0)
                }
            }, []), M = s.useCallback(e => () => {
                (0, S.openUserProfileModal)({
                    userId: t.id,
                    section: e,
                    analyticsLocation: u
                }), null == r || r()
            }, [u, r, t.id]);
            s.useEffect(() => {
                O()
            }, [O, E]);
            let R = m.length > 0,
                k = x.length > 0;
            return l ? (0, a.jsxs)("div", {
                className: o(T.compactItemContainer, !_ && T.hideElement),
                ref: g,
                children: [R && (0, a.jsx)(d.Tooltip, {
                    text: I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e => (0, a.jsxs)(d.Clickable, {
                        ...e,
                        onClick: M(C.UserProfileSections.MUTUAL_FRIENDS),
                        className: o(T.avatarAndTextContainer, T.friendsContainer),
                        children: [(0, a.jsx)("div", {
                            className: T.avatars,
                            children: (0, a.jsx)(f.default, {
                                maxUsers: c,
                                users: m,
                                size: d.AvatarSizes.SIZE_16,
                                hideOverflowCount: !0
                            })
                        }), (0, a.jsx)(d.Text, {
                            className: T.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: E
                        })]
                    })
                }), R && k && (0, a.jsx)("div", {
                    "aria-hidden": "true",
                    className: T.dotSpacer
                }), k && (0, a.jsx)(d.Tooltip, {
                    text: I.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                    children: e => (0, a.jsxs)(d.Clickable, {
                        ...e,
                        onClick: M(C.UserProfileSections.MUTUAL_GUILDS),
                        className: o(T.avatarAndTextContainer, T.serverContainer),
                        children: [!N && (0, a.jsx)("div", {
                            className: T.avatars,
                            children: (0, a.jsx)(p.default, {
                                maxGuilds: c,
                                guilds: x,
                                size: h.default.Sizes.SMOL,
                                hideOverflowCount: !0
                            })
                        }), (0, a.jsx)(d.Text, {
                            className: T.itemizedListText,
                            variant: "text-sm/normal",
                            color: "interactive-normal",
                            children: y
                        })]
                    })
                })]
            }) : (0, a.jsx)("div", {
                className: T.skeleton
            })
        });
    var A = s.memo(function(e) {
        var t, n;
        let {
            user: i,
            onClose: l,
            className: s,
            sourceAnaylticsLocations: r
        } = e, {
            analyticsLocations: f
        } = (0, c.default)(), p = null !== (n = null !== (t = null == r ? void 0 : r[0]) && void 0 !== t ? t : null == f ? void 0 : f[0]) && void 0 !== n ? n : null, h = (0, u.useStateFromStores)([m.default], () => m.default.getId()), x = i.id === h, S = i.bot || x, {
            compact: C,
            enabled: A
        } = (0, E.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: p,
            disable: S
        }), O = (0, g.useMutualGuilds)(i), [M, R] = (0, y.useMutualFriends)(i);
        if (!A || S) return null;
        let k = (null == R || 0 === R.length) && 0 === O.length;
        return M && k ? null : (0, a.jsxs)("div", {
            className: o(T.mainContainer, s),
            children: [(0, a.jsx)(d.Heading, {
                variant: "eyebrow",
                className: T.title,
                children: I.default.Messages.USER_PROFILE_MUTUALS_TITLE
            }), C && (0, a.jsx)(N, {
                user: i,
                mutualFriends: R,
                hasFetchedFriends: M,
                mutualGuilds: O,
                onClose: l
            }), !C && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(v, {
                    user: i,
                    mutualFriends: R,
                    hasFetchedFriends: M,
                    onClose: l
                }), (0, a.jsx)(_, {
                    user: i,
                    mutualGuilds: O,
                    onClose: l
                })]
            })]
        })
    })
}