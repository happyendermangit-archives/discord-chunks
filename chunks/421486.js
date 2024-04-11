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
        T = n("346656");
    n("5192");
    var f = n("342656"),
        S = n("785717"),
        h = n("706327"),
        A = n("285470"),
        m = n("171368"),
        N = n("228168"),
        O = n("689938"),
        p = n("403513");
    (r = i || (i = {}))[r.NOT_CHECKED = 0] = "NOT_CHECKED", r[r.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", r[r.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", r[r.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
    let R = a.memo(function(e) {
        let {
            user: t,
            mutualFriends: n,
            mutualGuilds: i,
            onClose: r,
            analyticsLocation: o,
            maxIcons: u = 3
        } = e, {
            analyticsLocations: I
        } = (0, _.default)(), {
            guildId: f,
            channelId: h,
            messageId: A,
            roleId: R
        } = (0, S.useUserProfileAnalyticsContext)(), C = a.useMemo(() => {
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
        }, [i]), L = a.useMemo(() => O.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
            count: C.length
        }), [C]), D = a.useMemo(() => O.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
            count: g.length
        }), [g]), v = a.useRef(null), [M, y] = a.useState(!1), [P, U] = a.useState(!1), b = a.useCallback(() => {
            if (null != v.current) {
                var e;
                U((null === (e = v.current) || void 0 === e ? void 0 : e.clientHeight) > 19), y(!0)
            }
        }, []), G = a.useCallback(e => () => {
            (0, m.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: I,
                guildId: f,
                channelId: h,
                messageId: A,
                roleId: R,
                section: e,
                analyticsLocation: o
            }), null == r || r()
        }, [o, I, r, t.id, f, h, A, R]);
        a.useEffect(() => {
            b()
        }, [b, L]);
        let w = C.length > 0,
            k = g.length > 0;
        return (0, s.jsxs)("div", {
            className: l()(p.compactItemContainer, !M && p.hideElement),
            ref: v,
            children: [w && (0, s.jsx)(d.Tooltip, {
                text: O.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
                children: e => (0, s.jsxs)(d.Clickable, {
                    ...e,
                    onClick: G(N.UserProfileSections.MUTUAL_FRIENDS),
                    className: l()(p.avatarAndTextContainer, p.__invalid_friendsContainer),
                    children: [(0, s.jsx)("div", {
                        className: p.__invalid_avatars,
                        children: (0, s.jsx)(c.default, {
                            maxUsers: u,
                            users: C,
                            size: d.AvatarSizes.SIZE_16,
                            hideOverflowCount: !0,
                            disableUsernameTooltip: !0
                        })
                    }), (0, s.jsx)(d.Text, {
                        className: p.itemizedListText,
                        variant: "text-sm/normal",
                        color: "interactive-normal",
                        children: L
                    })]
                })
            }), w && k && (0, s.jsx)("div", {
                "aria-hidden": "true",
                className: p.dotSpacer
            }), k && (0, s.jsx)(d.Tooltip, {
                text: O.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
                children: e => (0, s.jsxs)(d.Clickable, {
                    ...e,
                    onClick: G(N.UserProfileSections.MUTUAL_GUILDS),
                    className: l()(p.avatarAndTextContainer, p.serverContainer),
                    children: [!P && (0, s.jsx)("div", {
                        className: p.__invalid_avatars,
                        children: (0, s.jsx)(E.default, {
                            maxGuilds: u,
                            guilds: g,
                            size: T.default.Sizes.SMOL,
                            hideOverflowCount: !0,
                            disableGuildNameTooltip: !0
                        })
                    }), (0, s.jsx)(d.Text, {
                        className: p.itemizedListText,
                        variant: "text-sm/normal",
                        color: "interactive-normal",
                        children: D
                    })]
                })
            })]
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
        } = (0, _.default)(), E = null !== (n = null !== (t = null == o ? void 0 : o[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, T = (0, u.useStateFromStores)([I.default], () => I.default.getId()), S = i.id === T, m = i.bot || S, {
            enabled: N
        } = (0, f.useProfileMutualsExperiment)({
            autoTrackExposure: !1,
            location: E,
            disable: m
        }), C = (0, A.useMutualGuilds)(i), g = (0, h.useMutualFriends)(i);
        return !N || m || (null == g || 0 === g.length) && 0 === C.length ? null : (0, s.jsxs)("div", {
            className: l()(p.mainContainer, a),
            children: [(0, s.jsx)(d.Heading, {
                variant: "eyebrow",
                className: p.__invalid_title,
                children: O.default.Messages.USER_PROFILE_MUTUALS_TITLE
            }), (0, s.jsx)(R, {
                user: i,
                mutualFriends: g,
                mutualGuilds: C,
                onClose: r
            })]
        })
    })
}