function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("904245"),
        s = n("593472"),
        a = n("526120"),
        o = n("348245"),
        l = n("897473"),
        u = n("176505");
    t.default = {
        openPrivateChannelAsSidebar(e) {
            let {
                channelId: t,
                messageId: n,
                baseChannelId: s,
                hasSingleMessageRequest: a
            } = e;
            i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.SidebarType.VIEW_MESSAGE_REQUEST,
                baseChannelId: s,
                channelId: t,
                details: {
                    type: l.SidebarOpenDetailsType.MESSAGE_REQUEST,
                    hasSingleMessageRequest: a
                }
            }), null != n ? r.default.jumpToMessage({
                channelId: t,
                messageId: n,
                flash: !0
            }) : o.default.fetchMessages({
                channelId: t
            })
        },
        openChannelAsSidebar(e) {
            let {
                guildId: t,
                channelId: n,
                baseChannelId: a,
                flash: u = !0,
                details: d
            } = e;
            i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: a,
                channelId: n,
                details: d
            });
            let _ = null == d ? void 0 : d.initialMessageId;
            null != _ ? r.default.jumpToMessage({
                channelId: n,
                messageId: _,
                flash: u,
                jumpType: s.JumpTypes.INSTANT
            }) : o.default.fetchMessages({
                guildId: t,
                channelId: n
            })
        },
        openResourceChannelAsSidebar(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            null != t && ((0, a.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: u.StaticChannelRoute.GUILD_HOME,
                channelId: n
            }))
        },
        openThreadAsSidebar(e) {
            let {
                guildId: t,
                baseChannelId: n,
                channelId: a,
                flash: u = !0,
                details: d
            } = e;
            i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.SidebarType.VIEW_THREAD,
                baseChannelId: n,
                channelId: a,
                details: d
            }), (null == d ? void 0 : d.initialMessageId) != null ? r.default.jumpToMessage({
                channelId: a,
                messageId: d.initialMessageId,
                flash: u,
                jumpType: s.JumpTypes.INSTANT
            }) : o.default.fetchMessages({
                guildId: t,
                channelId: a
            })
        },
        closeChannelSidebar(e) {
            i.default.dispatch({
                type: "SIDEBAR_CLOSE",
                baseChannelId: e
            })
        },
        openGuildSidebar(e) {
            let {
                guildId: t,
                baseChannelId: n,
                sidebarType: r,
                details: s
            } = e;
            return i.default.dispatch({
                type: "SIDEBAR_VIEW_GUILD",
                sidebarType: r,
                baseChannelId: n,
                guildId: t,
                details: s
            })
        },
        closeGuildSidebar(e) {
            i.default.dispatch({
                type: "SIDEBAR_CLOSE_GUILD",
                guildId: e
            })
        }
    }
}