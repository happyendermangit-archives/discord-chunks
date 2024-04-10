function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsernameDecorationTypes: function() {
            return i
        },
        default: function() {
            return M
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
        p = n("372900"),
        E = n("463396"),
        S = n("477734"),
        A = n("484459"),
        h = n("467679"),
        I = n("768581"),
        T = n("50182");

    function y(e) {
        let {
            compact: t
        } = e;
        return (0, r.jsx)(h.default, {
            className: t ? T.botTagCompact : T.botTagCozy,
            type: h.default.Types.REMIX,
            useRemSizes: !0
        })
    }

    function M(e) {
        let t, {
                author: n,
                message: a,
                userOverride: i,
                compact: l = !1,
                withMentionPrefix: h = !1,
                showPopout: M = !1,
                className: v,
                onClick: x,
                onContextMenu: _,
                onPopoutRequestClose: b,
                renderPopout: N,
                renderRemixTag: L = !1,
                decorations: R
            } = e,
            C = s.useContext(p.default),
            {
                analyticsLocations: k
            } = (0, g.default)(f.default.USERNAME),
            {
                nick: D,
                colorString: w,
                colorRoleName: j
            } = n,
            F = null != a.messageReference && null != a.webhookId,
            P = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
            B = (0, S.useCanSeeRemixBadge)(),
            G = {
                className: T.username,
                style: "username" === P && null != w ? {
                    color: w
                } : void 0,
                onClick: x,
                onContextMenu: _,
                children: (h ? "@" : "") + D
            };
        t = null != N && null != M ? (0, r.jsx)(d.Popout, {
            preload: F ? void 0 : function() {
                let e = null != i ? i : a.author;
                return (0, A.default)(e.id, null != n.guildMemberAvatar && null != C ? (0, I.getGuildMemberAvatarURLSimple)({
                    guildId: C,
                    userId: e.id,
                    avatar: n.guildMemberAvatar,
                    size: 80
                }) : e.getAvatarURL(C, 80), {
                    guildId: C,
                    channelId: a.channel_id
                })
            },
            renderPopout: N,
            shouldShow: M,
            position: u.isMobile ? "window_center" : "right",
            onRequestClose: b,
            children: e => {
                let {
                    onClick: t,
                    ...n
                } = e;
                return (0, r.jsx)(d.Clickable, {
                    tag: "span",
                    ...n,
                    ...G,
                    className: o()(G.className, T.clickable, v)
                })
            }
        }) : (0, r.jsx)(d.Clickable, {
            ...G,
            className: o()(G.className, v)
        });
        let U = null != R ? R[0] : null,
            O = null != R ? R[1] : null;
        return (0, r.jsxs)(g.AnalyticsLocationProvider, {
            value: k,
            children: [null != U && l ? (0, r.jsxs)(r.Fragment, {
                children: [" ", U, " "]
            }) : null, "dot" === P ? (0, r.jsx)(d.RoleDot, {
                color: w,
                name: j,
                className: T.roleDot
            }) : null, t, null != O ? (0, r.jsx)(r.Fragment, {
                children: O
            }) : null, null == U || l ? null : U, null != a && (0, E.default)(a) && B && L ? (0, r.jsx)(y, {}) : null]
        })
    }(a = i || (i = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES"
}