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
            showNoMutuals: I = !1,
            underlineTextOnHover: f = !1,
            showTooltips: h = !0
        } = e, {
            analyticsLocations: A
        } = (0, _.default)(), {
            guildId: R,
            channelId: C,
            messageId: g,
            roleId: L
        } = (0, S.useUserProfileAnalyticsContext)(), v = s.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(e => {
                let {
                    user: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [n]), D = s.useMemo(() => {
            var e;
            return null !== (e = null == i ? void 0 : i.map(e => {
                let {
                    guild: t
                } = e;
                return t
            })) && void 0 !== e ? e : []
        }, [i]), M = s.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
            count: v.length
        }), [v]), y = s.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
            count: D.length
        }), [D]), P = s.useRef(null), [U, b] = s.useState(!1), [G, w] = s.useState(!1), B = s.useCallback(() => {
            if (null != P.current) {
                var e;
                w((null === (e = P.current) || void 0 === e ? void 0 : e.clientHeight) > 19), b(!0)
            }
        }, []), k = s.useCallback(e => () => {
            (0, m.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: A,
                guildId: R,
                channelId: C,
                messageId: g,
                roleId: L,
                section: e,
                analyticsLocation: o
            }), null == r || r()
        }, [o, A, r, t.id, R, C, g, L]);
        s.useEffect(() => {
            B()
        }, [B, M]);
        let V = v.length > 0,
            x = D.length > 0;
        return (0, a.jsxs)("div", {
            className: l()(O.compactItemContainer, !U && O.hideElement),
            ref: P,
            children: [V && (() => {
                let e = (0, a.jsxs)(d.Clickable, {
                    onClick: k(N.UserProfileSections.MUTUAL_FRIENDS),
                    className: l()(O.avatarAndTextContainer, O.__invalid_friendsContainer),
                    children: [(0, a.jsx)("div", {
                        className: O.__invalid_avatars,
                        children: (0, a.jsx)(c.default, {
                            maxUsers: u,
                            users: v,
                            size: d.AvatarSizes.SIZE_16,
                            hideOverflowCount: !0,
                            disableUsernameTooltip: !0
                        })
                    }), (0, a.jsx)(d.Text, {
                        className: l()(O.itemizedListText, f && O.underlineOnHover),
                        variant: "text-sm/normal",
                        color: "interactive-normal",
                        children: M
                    })]
                });
                return h ? (0, a.jsx)(d.TooltipContainer, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                    children: e
                }) : e
            })(), I && !V && (0, a.jsx)(d.Text, {
                variant: "text-xs/normal",
                children: p.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS
            }), (V && x || I) && (0, a.jsx)("div", {
                "aria-hidden": "true",
                className: O.dotSpacer
            }), x && (() => {
                let e = (0, a.jsxs)(d.Clickable, {
                    onClick: k(N.UserProfileSections.MUTUAL_GUILDS),
                    className: l()(O.avatarAndTextContainer, O.serverContainer),
                    children: [!G && (0, a.jsx)("div", {
                        className: O.__invalid_avatars,
                        children: (0, a.jsx)(E.default, {
                            maxGuilds: u,
                            guilds: D,
                            size: T.default.Sizes.SMOL,
                            hideOverflowCount: !0,
                            disableGuildNameTooltip: !0
                        })
                    }), (0, a.jsx)(d.Text, {
                        className: l()(O.itemizedListText, f && O.underlineOnHover),
                        variant: "text-sm/normal",
                        color: "interactive-normal",
                        children: y
                    })]
                });
                return h ? (0, a.jsx)(d.TooltipContainer, {
                    text: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                    children: e
                }) : e
            })(), I && !x && (0, a.jsx)(d.Text, {
                variant: "text-xs/normal",
                children: p.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
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