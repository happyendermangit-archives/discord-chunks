function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsernameDecorationTypes: function() {
            return s
        },
        default: function() {
            return M
        }
    });
    var a, s, r = n("37983"),
        i = n("884691"),
        l = n("414456"),
        o = n.n(l),
        u = n("394846"),
        c = n("446674"),
        d = n("77078"),
        m = n("206230"),
        f = n("812204"),
        g = n("685665"),
        p = n("390236"),
        E = n("500858"),
        A = n("238956"),
        S = n("506885"),
        h = n("79798"),
        I = n("315102"),
        T = n("356296");

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
                userOverride: s,
                compact: l = !1,
                withMentionPrefix: h = !1,
                showPopout: M = !1,
                className: x,
                onClick: _,
                onContextMenu: N,
                onPopoutRequestClose: v,
                renderPopout: b,
                renderRemixTag: L = !1,
                decorations: R
            } = e,
            k = i.useContext(p.default),
            {
                AnalyticsLocationProvider: C
            } = (0, g.default)(f.default.USERNAME),
            {
                nick: j,
                colorString: w,
                colorRoleName: D
            } = n,
            F = null != a.messageReference && null != a.webhookId,
            P = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
            B = (0, A.useCanSeeRemixBadge)(),
            G = {
                className: T.username,
                style: "username" === P && null != w ? {
                    color: w
                } : void 0,
                onClick: _,
                onContextMenu: N,
                children: (h ? "@" : "") + j
            };
        t = null != b && null != M ? (0, r.jsx)(d.Popout, {
            preload: F ? void 0 : function() {
                let e = null != s ? s : a.author;
                return (0, S.default)(e.id, null != n.guildMemberAvatar && null != k ? (0, I.getGuildMemberAvatarURLSimple)({
                    guildId: k,
                    userId: e.id,
                    avatar: n.guildMemberAvatar,
                    size: 80
                }) : e.getAvatarURL(k, 80), {
                    guildId: k,
                    channelId: a.channel_id
                })
            },
            renderPopout: b,
            shouldShow: M,
            position: u.isMobile ? "window_center" : "right",
            onRequestClose: v,
            children: e => {
                let {
                    onClick: t,
                    ...n
                } = e;
                return (0, r.jsx)(d.Clickable, {
                    tag: "span",
                    ...n,
                    ...G,
                    className: o(G.className, T.clickable, x)
                })
            }
        }) : (0, r.jsx)(d.Clickable, {
            ...G,
            className: o(G.className, x)
        });
        let U = null != R ? R[0] : null,
            O = null != R ? R[1] : null;
        return (0, r.jsxs)(C, {
            children: [null != U && l ? (0, r.jsxs)(r.Fragment, {
                children: [" ", U, " "]
            }) : null, "dot" === P ? (0, r.jsx)(d.RoleDot, {
                color: w,
                name: D,
                className: T.roleDot
            }) : null, t, null != O ? (0, r.jsx)(r.Fragment, {
                children: O
            }) : null, null == U || l ? null : U, null != a && (0, E.default)(a) && B && L ? (0, r.jsx)(y, {}) : null]
        })
    }(a = s || (s = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES"
}