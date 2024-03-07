function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("685665"),
        d = n("730859"),
        c = n("296262"),
        f = n("271938"),
        m = n("476263"),
        p = n("387111"),
        h = n("337487"),
        E = n("228424"),
        g = n("602872"),
        S = n("401642"),
        C = n("590456"),
        T = n("782340"),
        v = n("45907");
    let I = i.memo(function(e) {
            let {
                user: t,
                onClose: n,
                analyticsLocation: a,
                maxGuilds: r = 2
            } = e, u = (0, g.useMutualGuilds)(t), d = i.useMemo(() => {
                var e;
                return null !== (e = null == u ? void 0 : u.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [u]), f = i.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                count: d.length
            }), [d]), p = i.useCallback(() => {
                (0, S.openUserProfileModal)({
                    userId: t.id,
                    section: C.UserProfileSections.MUTUAL_GUILDS,
                    analyticsLocation: a
                }), null == n || n()
            }, [a, n, t.id]);
            return null == d || 0 === d.length ? null : (0, l.jsxs)(o.Clickable, {
                onClick: p,
                className: s(v.avatarAndTextContainer, v.serverContainer),
                children: [(0, l.jsx)("div", {
                    className: v.avatars,
                    children: (0, l.jsx)(c.default, {
                        maxGuilds: r,
                        guilds: d,
                        size: m.default.Sizes.SMOL,
                        hideOverflowCount: !0
                    })
                }), (0, l.jsx)(o.Text, {
                    className: v.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: f
                })]
            })
        }),
        _ = i.memo(function(e) {
            let {
                user: t,
                hasFetchedFriends: n,
                mutualFriends: a,
                onClose: r,
                analyticsLocation: u,
                maxFriends: c = 2
            } = e, f = i.useMemo(() => {
                var e;
                return null !== (e = null == a ? void 0 : a.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [a]), m = i.useCallback(() => {
                (0, S.openUserProfileModal)({
                    userId: t.id,
                    section: C.UserProfileSections.MUTUAL_FRIENDS,
                    analyticsLocation: u
                }), null == r || r()
            }, [u, r, t.id]), h = i.useMemo(() => {
                if (0 === f.length) return null;
                let [e, t, ...n] = f;
                return 1 === f.length ? T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_ONE.format({
                    usernameOne: p.default.getName(null, null, e)
                }) : 2 === f.length ? T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TWO.format({
                    usernameOne: p.default.getName(null, null, e),
                    usernameTwo: p.default.getName(null, null, t)
                }) : f.length > 2 ? T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_MANY.format({
                    usernameOne: p.default.getName(null, null, e),
                    usernameTwo: p.default.getName(null, null, t),
                    count: n.length
                }) : void 0
            }, [f]);
            return n ? 0 === f.length ? null : (0, l.jsxs)(o.Clickable, {
                onClick: m,
                className: s(v.avatarAndTextContainer, v.friendsContainer),
                children: [(0, l.jsx)("div", {
                    className: v.avatars,
                    children: (0, l.jsx)(d.default, {
                        maxUsers: c,
                        users: f,
                        size: o.AvatarSizes.SIZE_16,
                        hideOverflowCount: !0
                    })
                }), (0, l.jsx)(o.Text, {
                    className: v.itemizedListText,
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: h
                })]
            }) : (0, l.jsx)("div", {
                className: v.skeleton
            })
        }),
        N = i.memo(function(e) {
            let {
                user: t,
                mutualFriends: n,
                mutualGuilds: a,
                hasFetchedFriends: r,
                onClose: u,
                analyticsLocation: f,
                maxIcons: p = 3
            } = e, h = i.useMemo(() => {
                var e;
                return null !== (e = null == n ? void 0 : n.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [n]), E = i.useMemo(() => {
                var e;
                return null !== (e = null == a ? void 0 : a.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [a]), g = i.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
                count: h.length
            }), [h]), I = i.useCallback(e => () => {
                (0, S.openUserProfileModal)({
                    userId: t.id,
                    section: e,
                    analyticsLocation: f
                }), null == u || u()
            }, [f, u, t.id]), _ = i.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                count: E.length
            }), [E]), N = h.length > 0, A = E.length > 0;
            return r ? (0, l.jsxs)("div", {
                className: v.itemContainer,
                children: [N && (0, l.jsxs)(o.Clickable, {
                    onClick: I(C.UserProfileSections.MUTUAL_FRIENDS),
                    className: s(v.avatarAndTextContainer, v.friendsContainer),
                    children: [(0, l.jsx)("div", {
                        className: v.avatars,
                        children: (0, l.jsx)(d.default, {
                            maxUsers: p,
                            users: h,
                            size: o.AvatarSizes.SIZE_16,
                            hideOverflowCount: !0
                        })
                    }), (0, l.jsx)(o.Text, {
                        className: v.itemizedListText,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: g
                    })]
                }), N && A && (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: v.dotSpacer
                }), A && (0, l.jsxs)(o.Clickable, {
                    onClick: I(C.UserProfileSections.MUTUAL_GUILDS),
                    className: s(v.avatarAndTextContainer, v.serverContainer),
                    children: [!N && (0, l.jsx)("div", {
                        className: v.avatars,
                        children: (0, l.jsx)(c.default, {
                            maxGuilds: p,
                            guilds: E,
                            size: m.default.Sizes.SMOL,
                            hideOverflowCount: !0
                        })
                    }), (0, l.jsx)(o.Text, {
                        className: v.itemizedListText,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: _
                    })]
                })]
            }) : (0, l.jsx)("div", {
                className: v.skeleton
            })
        });
    var A = i.memo(function(e) {
        var t, n;
        let {
            user: i,
            onClose: a,
            className: o,
            sourceAnaylticsLocations: d
        } = e, {
            analyticsLocations: c
        } = (0, u.default)(), m = null !== (n = null !== (t = null == d ? void 0 : d[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, p = (0, r.useStateFromStores)([f.default], () => f.default.getId()), S = i.id === p, C = i.bot || S, {
            compact: T,
            enabled: A
        } = (0, h.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: m,
            disable: C
        }), x = (0, g.useMutualGuilds)(i), [y, O] = (0, E.useMutualFriends)(i);
        if (!A || C) return null;
        let R = (null == O || 0 === O.length) && 0 === x.length;
        return y && R ? null : (0, l.jsxs)("div", {
            className: s(v.mainContainer, o),
            children: [T && (0, l.jsx)(N, {
                user: i,
                mutualFriends: O,
                hasFetchedFriends: y,
                mutualGuilds: x,
                onClose: a
            }), !T && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(_, {
                    user: i,
                    mutualFriends: O,
                    hasFetchedFriends: y,
                    onClose: a
                }), (0, l.jsx)(I, {
                    user: i,
                    mutualGuilds: x,
                    onClose: a
                })]
            })]
        })
    })
}