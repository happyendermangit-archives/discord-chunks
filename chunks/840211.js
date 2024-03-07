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
                onClose: n,
                analyticsLocation: a,
                maxFriends: r = 2
            } = e, [u, c] = (0, E.useMutualFriends)(t), f = i.useMemo(() => {
                var e;
                return null !== (e = null == c ? void 0 : c.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [c]), m = i.useCallback(() => {
                (0, S.openUserProfileModal)({
                    userId: t.id,
                    section: C.UserProfileSections.MUTUAL_FRIENDS,
                    analyticsLocation: a
                }), null == n || n()
            }, [a, n, t.id]), h = i.useMemo(() => {
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
            return u ? 0 === f.length ? null : (0, l.jsxs)(o.Clickable, {
                onClick: m,
                className: s(v.avatarAndTextContainer, v.friendsContainer),
                children: [(0, l.jsx)("div", {
                    className: v.avatars,
                    children: (0, l.jsx)(d.default, {
                        maxUsers: r,
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
                onClose: n,
                analyticsLocation: a,
                maxIcons: r = 3
            } = e, u = (0, g.useMutualGuilds)(t), [f, p] = (0, E.useMutualFriends)(t), h = i.useMemo(() => {
                var e;
                return null !== (e = null == p ? void 0 : p.map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [p]), I = i.useMemo(() => {
                var e;
                return null !== (e = null == u ? void 0 : u.map(e => {
                    let {
                        guild: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [u]), _ = i.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
                count: h.length
            }), [h]), N = i.useCallback(e => () => {
                (0, S.openUserProfileModal)({
                    userId: t.id,
                    section: e,
                    analyticsLocation: a
                }), null == n || n()
            }, [a, n, t.id]), A = i.useMemo(() => T.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                count: I.length
            }), [I]), x = h.length > 0, y = I.length > 0;
            return f ? (0, l.jsxs)("div", {
                className: v.itemContainer,
                children: [x && (0, l.jsxs)(o.Clickable, {
                    onClick: N(C.UserProfileSections.MUTUAL_FRIENDS),
                    className: s(v.avatarAndTextContainer, v.friendsContainer),
                    children: [(0, l.jsx)("div", {
                        className: v.avatars,
                        children: (0, l.jsx)(d.default, {
                            maxUsers: r,
                            users: h,
                            size: o.AvatarSizes.SIZE_16,
                            hideOverflowCount: !0
                        })
                    }), (0, l.jsx)(o.Text, {
                        className: v.itemizedListText,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: _
                    })]
                }), x && y && (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: v.dotSpacer
                }), y && (0, l.jsxs)(o.Clickable, {
                    onClick: N(C.UserProfileSections.MUTUAL_GUILDS),
                    className: s(v.avatarAndTextContainer, v.serverContainer),
                    children: [!x && (0, l.jsx)("div", {
                        className: v.avatars,
                        children: (0, l.jsx)(c.default, {
                            maxGuilds: r,
                            guilds: I,
                            size: m.default.Sizes.SMOL,
                            hideOverflowCount: !0
                        })
                    }), (0, l.jsx)(o.Text, {
                        className: v.itemizedListText,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: A
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
        } = (0, u.default)(), m = null !== (n = null !== (t = null == d ? void 0 : d[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, p = (0, r.useStateFromStores)([f.default], () => f.default.getId()), E = i.id === p, g = i.bot || E, {
            compact: S,
            enabled: C
        } = (0, h.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: m,
            disable: g
        });
        return !C || g ? null : (0, l.jsxs)("div", {
            className: s(v.mainContainer, o),
            children: [S && (0, l.jsx)(N, {
                user: i,
                onClose: a
            }), !S && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(_, {
                    user: i,
                    onClose: a
                }), (0, l.jsx)(I, {
                    user: i,
                    onClose: a
                })]
            })]
        })
    })
}