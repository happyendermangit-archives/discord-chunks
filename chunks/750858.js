function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsernameDecorationTypes: function() {
            return r
        },
        default: function() {
            return R
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("873546"),
        d = n("442837"),
        _ = n("481060"),
        c = n("607070"),
        E = n("100527"),
        I = n("906732"),
        T = n("979264"),
        f = n("372900"),
        S = n("463396"),
        h = n("477734"),
        A = n("484459"),
        m = n("467679"),
        N = n("768581"),
        p = n("904335");

    function O(e) {
        let {
            compact: t
        } = e;
        return (0, s.jsx)(m.default, {
            className: t ? p.botTagCompact : p.botTagCozy,
            type: m.default.Types.REMIX,
            useRemSizes: !0
        })
    }

    function R(e) {
        let t, {
                author: n,
                message: i,
                userOverride: r,
                compact: o = !1,
                withMentionPrefix: m = !1,
                showPopout: R = !1,
                className: C,
                onClick: g,
                onContextMenu: L,
                onPopoutRequestClose: D,
                renderPopout: v,
                renderRemixTag: M = !1,
                decorations: y
            } = e,
            P = a.useContext(f.default),
            {
                analyticsLocations: U
            } = (0, I.default)(E.default.USERNAME),
            {
                nick: b,
                colorString: G,
                colorRoleName: w
            } = n,
            B = null != i.messageReference && null != i.webhookId,
            k = (0, d.useStateFromStores)([c.default], () => c.default.roleStyle),
            V = (0, h.useCanSeeRemixBadge)(),
            x = {
                className: p.username,
                style: "username" === k && null != G ? {
                    color: G
                } : void 0,
                onClick: g,
                onContextMenu: L,
                children: (0, s.jsxs)(s.Fragment, {
                    children: [(m ? "@" : "") + b, (0, s.jsx)(T.default, {
                        clan: n.clan,
                        userId: i.author.id,
                        className: p.clanTagChiplet
                    })]
                })
            };
        t = null != v && null != R ? (0, s.jsx)(_.Popout, {
            preload: B ? void 0 : function() {
                let e = null != r ? r : i.author;
                return (0, A.default)(e.id, null != n.guildMemberAvatar && null != P ? (0, N.getGuildMemberAvatarURLSimple)({
                    guildId: P,
                    userId: e.id,
                    avatar: n.guildMemberAvatar,
                    size: 80
                }) : e.getAvatarURL(P, 80), {
                    guildId: P,
                    channelId: i.channel_id
                })
            },
            renderPopout: v,
            shouldShow: R,
            position: u.isMobile ? "window_center" : "right",
            onRequestClose: D,
            children: e => {
                let {
                    onClick: t,
                    ...n
                } = e;
                return (0, s.jsx)(_.Clickable, {
                    tag: "span",
                    ...n,
                    ...x,
                    className: l()(x.className, p.clickable, C)
                })
            }
        }) : (0, s.jsx)(_.Clickable, {
            ...x,
            className: l()(x.className, C)
        });
        let F = null != y ? y[0] : null,
            H = null != y ? y[1] : null;
        return (0, s.jsxs)(I.AnalyticsLocationProvider, {
            value: U,
            children: [null != F && o ? (0, s.jsxs)(s.Fragment, {
                children: [" ", F, " "]
            }) : null, "dot" === k ? (0, s.jsx)(_.RoleDot, {
                color: G,
                name: w,
                className: p.roleDot
            }) : null, t, null != H ? (0, s.jsx)(s.Fragment, {
                children: H
            }) : null, null == F || o ? null : F, null != i && (0, S.default)(i) && V && M ? (0, s.jsx)(O, {}) : null]
        })
    }(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"
}