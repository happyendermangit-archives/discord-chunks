function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("904245"),
        a = n("593472"),
        s = n("526120"),
        o = n("348245"),
        l = n("897473"),
        u = n("176505");
    t.default = {
        openPrivateChannelAsSidebar(e) {
            let {
                channelId: t,
                messageId: n,
                baseChannelId: a,
                hasSingleMessageRequest: s
            } = e;
            i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.SidebarType.VIEW_MESSAGE_REQUEST,
                baseChannelId: a,
                channelId: t,
                details: {
                    type: l.SidebarOpenDetailsType.MESSAGE_REQUEST,
                    hasSingleMessageRequest: s
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
                baseChannelId: s,
                flash: u = !0,
                details: d
            } = e;
            i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: s,
                channelId: n,
                details: d
            });
            let _ = null == d ? void 0 : d.initialMessageId;
            null != _ ? r.default.jumpToMessage({
                channelId: n,
                messageId: _,
                flash: u,
                jumpType: a.JumpTypes.INSTANT
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
            null != t && ((0, s.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
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
                channelId: s,
                flash: u = !0,
                details: d
            } = e;
            i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.SidebarType.VIEW_THREAD,
                baseChannelId: n,
                channelId: s,
                details: d
            }), (null == d ? void 0 : d.initialMessageId) != null ? r.default.jumpToMessage({
                channelId: s,
                messageId: d.initialMessageId,
                flash: u,
                jumpType: a.JumpTypes.INSTANT
            }) : o.default.fetchMessages({
                guildId: t,
                channelId: s
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
                details: a
            } = e;
            return i.default.dispatch({
                type: "SIDEBAR_VIEW_GUILD",
                sidebarType: r,
                baseChannelId: n,
                guildId: t,
                details: a
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