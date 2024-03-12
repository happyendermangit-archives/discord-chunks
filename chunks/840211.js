function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("685665"),
        d = n("730859"),
        c = n("296262"),
        f = n("271938"),
        p = n("476263"),
        m = n("387111"),
        h = n("337487"),
        x = n("228424"),
        E = n("602872"),
        y = n("401642"),
        g = n("590456"),
        S = n("782340"),
        C = n("45907");
    let I = l.memo(function(e) {
            let {
                user: t,
                onClose: n,
                analyticsLocation: a,
                maxGuilds: r = 2
            } = e, u = (0, E.useMutualGuilds)(t), d = l.useMemo(() => {
                var e;
                return null !== (e = null == u ? void 0 : u.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [u]), f = l.useMemo(() => S.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                count: d.length
            }), [d]), m = l.useCallback(() => {
                (0, y.openUserProfileModal)({
                    userId: t.id,
                    section: g.UserProfileSections.MUTUAL_GUILDS,
                    analyticsLocation: a
                }), null == n || n()
            }, [a, n, t.id]);
            return null == d || 0 === d.length ? null : (0, i.jsxs)(o.Clickable, {
                onClick: m,
                className: s(C.avatarAndTextContainer, C.serverContainer),
                children: [(0, i.jsx)("div", {
                    className: C.avatars,
                    children: (0, i.jsx)(c.default, {
                        maxGuilds: r,
                        guilds: d,
                        size: p.default.Sizes.SMOL,
                        hideOverflowCount: !0
                    })
                }), (0, i.jsx)(o.Text, {
                    className: C.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: f
                })]
            })
        }),
        T = l.memo(function(e) {
            let {
                user: t,
                hasFetchedFriends: n,
                mutualFriends: a,
                onClose: r,
                analyticsLocation: u,
                maxFriends: c = 2
            } = e, f = l.useMemo(() => {
                var e;
                return null !== (e = null == a ? void 0 : a.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [a]), p = l.useCallback(() => {
                (0, y.openUserProfileModal)({
                    userId: t.id,
                    section: g.UserProfileSections.MUTUAL_FRIENDS,
                    analyticsLocation: u
                }), null == r || r()
            }, [u, r, t.id]), h = l.useMemo(() => {
                if (0 === f.length) return null;
                let [e, t, ...n] = f;
                return 1 === f.length ? S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_ONE.format({
                    usernameOne: m.default.getName(null, null, e)
                }) : 2 === f.length ? S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TWO.format({
                    usernameOne: m.default.getName(null, null, e),
                    usernameTwo: m.default.getName(null, null, t)
                }) : f.length > 2 ? S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY.format({
                    usernameOne: m.default.getName(null, null, e),
                    usernameTwo: m.default.getName(null, null, t),
                    count: n.length
                }) : void 0
            }, [f]);
            return n ? 0 === f.length ? null : (0, i.jsxs)(o.Clickable, {
                onClick: p,
                className: s(C.avatarAndTextContainer, C.friendsContainer),
                children: [(0, i.jsx)("div", {
                    className: C.avatars,
                    children: (0, i.jsx)(d.default, {
                        maxUsers: c,
                        users: f,
                        size: o.AvatarSizes.SIZE_16,
                        hideOverflowCount: !0
                    })
                }), (0, i.jsx)(o.Text, {
                    className: C.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: h
                })]
            }) : (0, i.jsx)("div", {
                className: C.skeleton
            })
        }),
        _ = l.memo(function(e) {
            let {
                user: t,
                mutualFriends: n,
                mutualGuilds: a,
                hasFetchedFriends: r,
                onClose: u,
                analyticsLocation: f,
                maxIcons: m = 3
            } = e, h = l.useMemo(() => {
                var e;
                return null !== (e = null == n ? void 0 : n.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [n]), x = l.useMemo(() => {
                var e;
                return null !== (e = null == a ? void 0 : a.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [a]), E = l.useMemo(() => S.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
                count: h.length
            }), [h]), I = l.useCallback(e => () => {
                (0, y.openUserProfileModal)({
                    userId: t.id,
                    section: e,
                    analyticsLocation: f
                }), null == u || u()
            }, [f, u, t.id]), T = l.useMemo(() => S.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                count: x.length
            }), [x]), _ = h.length > 0, v = x.length > 0;
            return r ? (0, i.jsxs)("div", {
                className: C.itemContainer,
                children: [_ && (0, i.jsxs)(o.Clickable, {
                    onClick: I(g.UserProfileSections.MUTUAL_FRIENDS),
                    className: s(C.avatarAndTextContainer, C.friendsContainer),
                    children: [(0, i.jsx)("div", {
                        className: C.avatars,
                        children: (0, i.jsx)(d.default, {
                            maxUsers: m,
                            users: h,
                            size: o.AvatarSizes.SIZE_16,
                            hideOverflowCount: !0
                        })
                    }), (0, i.jsx)(o.Text, {
                        className: C.itemizedListText,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: E
                    })]
                }), _ && v && (0, i.jsx)("div", {
                    "aria-hidden": "true",
                    className: C.dotSpacer
                }), v && (0, i.jsxs)(o.Clickable, {
                    onClick: I(g.UserProfileSections.MUTUAL_GUILDS),
                    className: s(C.avatarAndTextContainer, C.serverContainer),
                    children: [!_ && (0, i.jsx)("div", {
                        className: C.avatars,
                        children: (0, i.jsx)(c.default, {
                            maxGuilds: m,
                            guilds: x,
                            size: p.default.Sizes.SMOL,
                            hideOverflowCount: !0
                        })
                    }), (0, i.jsx)(o.Text, {
                        className: C.itemizedListText,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: T
                    })]
                })]
            }) : (0, i.jsx)("div", {
                className: C.skeleton
            })
        });
    var v = l.memo(function(e) {
        var t, n;
        let {
            user: l,
            onClose: a,
            className: o,
            sourceAnaylticsLocations: d
        } = e, {
            analyticsLocations: c
        } = (0, u.default)(), p = null !== (n = null !== (t = null == d ? void 0 : d[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, m = (0, r.useStateFromStores)([f.default], () => f.default.getId()), y = l.id === m, g = l.bot || y, {
            compact: S,
            enabled: v
        } = (0, h.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: p,
            disable: g
        }), N = (0, E.useMutualGuilds)(l), [A, O] = (0, x.useMutualFriends)(l);
        if (!v || g) return null;
        let R = (null == O || 0 === O.length) && 0 === N.length;
        return A && R ? null : (0, i.jsxs)("div", {
            className: s(C.mainContainer, o),
            children: [S && (0, i.jsx)(_, {
                user: l,
                mutualFriends: O,
                hasFetchedFriends: A,
                mutualGuilds: N,
                onClose: a
            }), !S && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(T, {
                    user: l,
                    mutualFriends: O,
                    hasFetchedFriends: A,
                    onClose: a
                }), (0, i.jsx)(I, {
                    user: l,
                    mutualGuilds: N,
                    onClose: a
                })]
            })]
        })
    })
}