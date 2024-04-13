function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsernameDecorationTypes: function() {
            return i
        },
        default: function() {
            return v
        }
    });
    var a, i, r = n("735250"),
        s = n("470079"),
        l = n("803997"),
        o = n.n(l),
        u = n("873546"),
        c = n("442837"),
        d = n("481060"),
        m = n("607070"),
        f = n("100527"),
        g = n("906732"),
        p = n("979264"),
        E = n("372900"),
        S = n("463396"),
        A = n("477734"),
        h = n("484459"),
        I = n("467679"),
        T = n("768581"),
        y = n("50182");

    function M(e) {
        let {
            compact: t
        } = e;
        return (0, r.jsx)(I.default, {
            className: t ? y.botTagCompact : y.botTagCozy,
            type: I.default.Types.REMIX,
            useRemSizes: !0
        })
    }

    function v(e) {
        let t, {
                author: n,
                message: a,
                userOverride: i,
                compact: l = !1,
                withMentionPrefix: I = !1,
                showPopout: v = !1,
                className: x,
                onClick: _,
                onContextMenu: b,
                onPopoutRequestClose: N,
                renderPopout: L,
                renderRemixTag: R = !1,
                decorations: C
            } = e,
            k = s.useContext(E.default),
            {
                analyticsLocations: D
            } = (0, g.default)(f.default.USERNAME),
            {
                nick: j,
                colorString: w,
                colorRoleName: F
            } = n,
            P = null != a.messageReference && null != a.webhookId,
            B = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
            G = (0, A.useCanSeeRemixBadge)(),
            U = {
                className: y.username,
                style: "username" === B && null != w ? {
                    color: w
                } : void 0,
                onClick: _,
                onContextMenu: b,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [(I ? "@" : "") + j, (0, r.jsx)(p.default, {
                        clan: n.clan,
                        userId: a.author.id,
                        className: y.clanTagChiplet
                    })]
                })
            };
        t = null != L && null != v ? (0, r.jsx)(d.Popout, {
            preload: P ? void 0 : function() {
                let e = null != i ? i : a.author;
                return (0, h.default)(e.id, null != n.guildMemberAvatar && null != k ? (0, T.getGuildMemberAvatarURLSimple)({
                    guildId: k,
                    userId: e.id,
                    avatar: n.guildMemberAvatar,
                    size: 80
                }) : e.getAvatarURL(k, 80), {
                    guildId: k,
                    channelId: a.channel_id
                })
            },
            renderPopout: L,
            shouldShow: v,
            position: u.isMobile ? "window_center" : "right",
            onRequestClose: N,
            children: e => {
                let {
                    onClick: t,
                    ...n
                } = e;
                return (0, r.jsx)(d.Clickable, {
                    tag: "span",
                    ...n,
                    ...U,
                    className: o()(U.className, y.clickable, x)
                })
            }
        }) : (0, r.jsx)(d.Clickable, {
            ...U,
            className: o()(U.className, x)
        });
        let O = null != C ? C[0] : null,
            H = null != C ? C[1] : null;
        return (0, r.jsxs)(g.AnalyticsLocationProvider, {
            value: D,
            children: [null != O && l ? (0, r.jsxs)(r.Fragment, {
                children: [" ", O, " "]
            }) : null, "dot" === B ? (0, r.jsx)(d.RoleDot, {
                color: w,
                name: F,
                className: y.roleDot
            }) : null, t, null != H ? (0, r.jsx)(r.Fragment, {
                children: H
            }) : null, null == O || l ? null : O, null != a && (0, S.default)(a) && G && R ? (0, r.jsx)(M, {}) : null]
        })
    }(a = i || (i = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES"
}