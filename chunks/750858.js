function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsernameDecorationTypes: function() {
            return r
        },
        default: function() {
            return C
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
        p = n("981631"),
        O = n("904335");

    function R(e) {
        let {
            compact: t
        } = e;
        return (0, s.jsx)(m.default, {
            className: t ? O.botTagCompact : O.botTagCozy,
            type: m.default.Types.REMIX,
            useRemSizes: !0
        })
    }

    function C(e) {
        let t, {
                author: n,
                message: i,
                userOverride: r,
                compact: o = !1,
                withMentionPrefix: m = !1,
                showPopout: C = !1,
                className: g,
                onClick: L,
                onContextMenu: v,
                onPopoutRequestClose: D,
                renderPopout: M,
                renderRemixTag: y = !1,
                decorations: P
            } = e,
            U = a.useContext(f.default),
            {
                analyticsLocations: b
            } = (0, I.default)(E.default.USERNAME),
            {
                nick: G,
                colorString: w,
                colorRoleName: B
            } = n,
            k = null != i.messageReference && null != i.webhookId,
            V = (0, d.useStateFromStores)([c.default], () => c.default.roleStyle),
            x = (0, h.useCanSeeRemixBadge)(),
            F = {
                className: O.username,
                style: "username" === V && null != w ? {
                    color: w
                } : void 0,
                onClick: L,
                onContextMenu: v,
                children: (0, s.jsxs)(s.Fragment, {
                    children: [(m ? "@" : "") + G, (0, s.jsx)(T.default, {
                        clan: n.clan,
                        userId: i.author.id,
                        className: O.clanTagChiplet,
                        source: p.AnalyticsSections.CHANNEL
                    })]
                })
            };
        t = null != M && null != C ? (0, s.jsx)(_.Popout, {
            preload: k ? void 0 : function() {
                let e = null != r ? r : i.author;
                return (0, A.maybeFetchUserProfileForPopout)(e.id, null != n.guildMemberAvatar && null != U ? (0, N.getGuildMemberAvatarURLSimple)({
                    guildId: U,
                    userId: e.id,
                    avatar: n.guildMemberAvatar,
                    size: 80
                }) : e.getAvatarURL(U, 80), {
                    guildId: U,
                    channelId: i.channel_id
                })
            },
            renderPopout: M,
            shouldShow: C,
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
                    ...F,
                    className: l()(F.className, O.clickable, g)
                })
            }
        }) : (0, s.jsx)(_.Clickable, {
            ...F,
            className: l()(F.className, g)
        });
        let H = null != P ? P[0] : null,
            Y = null != P ? P[1] : null;
        return (0, s.jsxs)(I.AnalyticsLocationProvider, {
            value: b,
            children: [null != H && o ? (0, s.jsxs)(s.Fragment, {
                children: [" ", H, " "]
            }) : null, "dot" === V ? (0, s.jsx)(_.RoleDot, {
                color: w,
                name: B,
                className: O.roleDot
            }) : null, t, null != Y ? (0, s.jsx)(s.Fragment, {
                children: Y
            }) : null, null == H || o ? null : H, null != i && (0, S.default)(i) && x && y ? (0, s.jsx)(R, {}) : null]
        })
    }(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"
}