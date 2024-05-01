function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SmallMutualFriendsAndGuilds: function() {
            return R
        }
    }), n("47120");
    var i, r, a = n("735250"),
        s = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("906732"),
        c = n("318374"),
        E = n("522289"),
        I = n("314897"),
        T = n("346656");
    n("5192");
    var f = n("342656"),
        S = n("785717"),
        h = n("706327"),
        A = n("285470"),
        m = n("171368"),
        N = n("228168"),
        p = n("689938"),
        O = n("946150");
    (r = i || (i = {}))[r.NOT_CHECKED = 0] = "NOT_CHECKED", r[r.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", r[r.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", r[r.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
    let R = s.memo(function(e) {
        let {
            user: t,
            mutualFriends: n,
            mutualGuilds: i,
            onClose: r,
            analyticsLocation: o,
            maxIcons: u = 3,
            showNoMutuals: I = !1
        } = e, {
            analyticsLocations: f
        } = (0, _.default)(), {
            guildId: h,
            channelId: A,
            messageId: R,
            roleId: C
        } = (0, S.useUserProfileAnalyticsContext)(), g = s.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(e => {
                let {
                    user: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [n]), L = s.useMemo(() => {
            var e;
            return null !== (e = null == i ? void 0 : i.map(e => {
                let {
                    guild: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [i]), v = s.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
            count: g.length
        }), [g]), D = s.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
            count: L.length
        }), [L]), M = s.useRef(null), [y, P] = s.useState(!1), [U, b] = s.useState(!1), G = s.useCallback(() => {
            if (null != M.current) {
                var e;
                b((null === (e = M.current) || void 0 === e ? void 0 : e.clientHeight) > 19), P(!0)
            }
        }, []), w = s.useCallback(e => () => {
            (0, m.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: f,
                guildId: h,
                channelId: A,
                messageId: R,
                roleId: C,
                section: e,
                analyticsLocation: o
            }), null == r || r()
        }, [o, f, r, t.id, h, A, R, C]);
        s.useEffect(() => {
            G()
        }, [G, v]);
        let B = g.length > 0,
            k = L.length > 0;
        return (0, a.jsxs)("div", {
            className: l()(O.compactItemContainer, !y && O.hideElement),
            ref: M,
            children: [B && (0, a.jsx)(d.Tooltip, {
                text: p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                children: e => (0, a.jsxs)(d.Clickable, {
                    ...e,
                    onClick: w(N.UserProfileSections.MUTUAL_FRIENDS),
                    className: l()(O.avatarAndTextContainer, O.__invalid_friendsContainer),
                    children: [(0, a.jsx)("div", {
                        className: O.__invalid_avatars,
                        children: (0, a.jsx)(c.default, {
                            maxUsers: u,
                            users: g,
                            size: d.AvatarSizes.SIZE_16,
                            hideOverflowCount: !0,
                            disableUsernameTooltip: !0
                        })
                    }), (0, a.jsx)(d.Text, {
                        className: O.itemizedListText,
                        variant: "text-sm/normal",
                        color: "interactive-normal",
                        children: v
                    })]
                })
            }), I && !B && (0, a.jsx)(d.Text, {
                variant: "text-xs/normal",
                children: p.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS
            }), (B && k || I) && (0, a.jsx)("div", {
                "aria-hidden": "true",
                className: O.dotSpacer
            }), k && (0, a.jsx)(d.Tooltip, {
                text: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                children: e => (0, a.jsxs)(d.Clickable, {
                    ...e,
                    onClick: w(N.UserProfileSections.MUTUAL_GUILDS),
                    className: l()(O.avatarAndTextContainer, O.serverContainer),
                    children: [!U && (0, a.jsx)("div", {
                        className: O.__invalid_avatars,
                        children: (0, a.jsx)(E.default, {
                            maxGuilds: u,
                            guilds: L,
                            size: T.default.Sizes.SMOL,
                            hideOverflowCount: !0,
                            disableGuildNameTooltip: !0
                        })
                    }), (0, a.jsx)(d.Text, {
                        className: O.itemizedListText,
                        variant: "text-sm/normal",
                        color: "interactive-normal",
                        children: D
                    })]
                })
            }), I && !k && (0, a.jsx)(d.Text, {
                variant: "text-xs/normal",
                children: p.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS
            })]
        })
    });
    t.default = s.memo(function(e) {
        var t, n;
        let {
            user: i,
            onClose: r,
            className: s,
            sourceAnaylticsLocations: o
        } = e, {
            analyticsLocations: c
        } = (0, _.default)(), E = null !== (n = null !== (t = null == o ? void 0 : o[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, T = (0, u.useStateFromStores)([I.default], () => I.default.getId()), S = i.id === T, m = i.bot || S, {
            enabled: N
        } = (0, f.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: E,
            disable: m
        }), C = (0, A.useMutualGuilds)(i), g = (0, h.useMutualFriends)(i);
        return !N || m || (null == g || 0 === g.length) && 0 === C.length ? null : (0, a.jsxs)("div", {
            className: l()(O.mainContainer, s),
            children: [(0, a.jsx)(d.Heading, {
                variant: "eyebrow",
                className: O.__invalid_title,
                children: p.default.Messages.USER_PROFILE_MUTUALS_TITLE
            }), (0, a.jsx)(R, {
                user: i,
                mutualFriends: g,
                mutualGuilds: C,
                onClose: r
            })]
        })
    })
}