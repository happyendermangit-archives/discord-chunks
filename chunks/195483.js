function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsernameDecorationTypes: function() {
            return i
        },
        default: function() {
            return T
        }
    });
    var a, i, r = n("37983"),
        s = n("884691"),
        l = n("414456"),
        o = n.n(l),
        u = n("394846"),
        c = n("446674"),
        d = n("77078"),
        m = n("206230"),
        f = n("390236"),
        g = n("500858"),
        p = n("238956"),
        E = n("506885"),
        A = n("79798"),
        h = n("315102"),
        S = n("356296");

    function I(e) {
        let {
            compact: t
        } = e;
        return (0, r.jsx)(A.default, {
            className: t ? S.botTagCompact : S.botTagCozy,
            type: A.default.Types.REMIX,
            useRemSizes: !0
        })
    }

    function T(e) {
        let t, {
                author: n,
                message: a,
                userOverride: i,
                compact: l = !1,
                withMentionPrefix: A = !1,
                showPopout: T = !1,
                className: y,
                onClick: M,
                onContextMenu: v,
                onPopoutRequestClose: x,
                renderPopout: _,
                renderRemixTag: N = !1,
                decorations: b
            } = e,
            L = s.useContext(f.default),
            {
                nick: R,
                colorString: k,
                colorRoleName: C
            } = n,
            j = null != a.messageReference && null != a.webhookId,
            w = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
            D = (0, p.useCanSeeRemixBadge)(),
            P = {
                className: S.username,
                style: "username" === w && null != k ? {
                    color: k
                } : void 0,
                onClick: M,
                onContextMenu: v,
                children: (A ? "@" : "") + R
            };
        t = null != _ && null != T ? (0, r.jsx)(d.Popout, {
            preload: j ? void 0 : function() {
                let e = null != i ? i : a.author;
                return (0, E.default)(e.id, null != n.guildMemberAvatar && null != L ? (0, h.getGuildMemberAvatarURLSimple)({
                    guildId: L,
                    userId: e.id,
                    avatar: n.guildMemberAvatar,
                    size: 80
                }) : e.getAvatarURL(L, 80), {
                    guildId: L,
                    channelId: a.channel_id
                })
            },
            renderPopout: _,
            shouldShow: T,
            position: u.isMobile ? "window_center" : "right",
            onRequestClose: x,
            children: e => {
                let {
                    onClick: t,
                    ...n
                } = e;
                return (0, r.jsx)(d.Clickable, {
                    tag: "span",
                    ...n,
                    ...P,
                    className: o(P.className, S.clickable, y)
                })
            }
        }) : (0, r.jsx)(d.Clickable, {
            ...P,
            className: o(P.className, y)
        });
        let F = null != b ? b[0] : null,
            B = null != b ? b[1] : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [null != F && l ? (0, r.jsxs)(r.Fragment, {
                children: [" ", F, " "]
            }) : null, "dot" === w ? (0, r.jsx)(d.RoleDot, {
                color: k,
                name: C,
                className: S.roleDot
            }) : null, t, null != B ? (0, r.jsx)(r.Fragment, {
                children: B
            }) : null, null == F || l ? null : F, null != a && (0, g.default)(a) && D && N ? (0, r.jsx)(I, {}) : null]
        })
    }(a = i || (i = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES"
}