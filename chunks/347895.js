function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchGuildHomeSettings: function() {
            return h
        },
        fetchNewMemberActions: function() {
            return R
        },
        selectHomeResourceChannel: function() {
            return p
        },
        selectNewMemberActionChannel: function() {
            return A
        },
        completeNewMemberAction: function() {
            return g
        },
        getBlockForChannelDeletion: function() {
            return N
        }
    }), n("222007"), n("808653");
    var l = n("872717"),
        a = n("913144"),
        r = n("819689"),
        u = n("115718"),
        s = n("38654"),
        o = n("144491"),
        i = n("42203"),
        c = n("599110"),
        E = n("299039"),
        d = n("698882"),
        _ = n("129092"),
        T = n("675305"),
        f = n("290886"),
        S = n("49111");
    let h = async e => {
        a.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e
        });
        try {
            let t = await l.HTTP.get({
                    url: S.Endpoints.GUILD_HOME_SETTINGS(e),
                    oldFormErrors: !0
                }),
                n = (0, _.settingsFromServer)(t.body);
            return a.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: n
            }), n
        } catch (t) {
            a.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                guildId: e
            })
        }
    }, R = async e => {
        if (!s.default.isFullServerPreview(e)) {
            a.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                guildId: e
            });
            try {
                let t = await l.HTTP.get({
                        url: S.Endpoints.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0
                    }),
                    n = (0, _.actionsFromServer)(t.body);
                return a.default.dispatch({
                    type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                    guildId: e,
                    memberActions: n
                }), n
            } catch (t) {
                a.default.dispatch({
                    type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                    guildId: e
                })
            }
        }
    }, p = function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (a.default.dispatch({
                type: "SELECT_HOME_RESOURCE_CHANNEL",
                guildId: e,
                channelId: t
            }), null == t) return;
        let l = i.default.getChannel(t),
            _ = d.default.getResourceForChannel(e, t);
        null != e && !s.default.isFullServerPreview(e) && null != l && null != _ && c.default.track(S.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: l.id,
            server_guide_channel_type: "resource",
            channel_action_type: -1
        }), n && (0, o.transitionToChannel)(t), r.default.jumpToMessage({
            channelId: t,
            messageId: E.default.castChannelIdAsMessageId(t),
            flash: !1,
            jumpType: u.JumpTypes.INSTANT
        })
    }, A = (e, t) => {
        a.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: t
        });
        let n = i.default.getChannel(t),
            l = d.default.getActionForChannel(e, t);
        null != e && !s.default.isFullServerPreview(e) && null != n && null != l && c.default.track(S.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: n.id,
            server_guide_channel_type: "member action",
            channel_action_type: l.actionType
        }), (0, o.transitionToChannel)(t)
    }, g = (e, t) => {
        if (a.default.dispatch({
                type: "COMPLETE_NEW_MEMBER_ACTION",
                guildId: e,
                channelId: t
            }), s.default.isFullServerPreview(e)) return;
        let n = i.default.getChannel(t),
            r = d.default.getActionForChannel(e, t);
        if (null != n && null != r) {
            var u, o;
            let t = E.default.keys(null !== (u = T.default.getCompletedActions(e)) && void 0 !== u ? u : {}),
                l = null !== (o = d.default.getNewMemberActions(e)) && void 0 !== o ? o : [];
            c.default.track(S.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: r.actionType,
                has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
            })
        }
        l.HTTP.post({
            url: S.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
        })
    };
    async function N(e, t) {
        if (null == e) return !1;
        let n = (0, f.canSeeOnboardingHome)(e);
        if (!n) return !1;
        let l = d.default.getSettings(e);
        return l === d.NO_SETTINGS && (await h(e), l = d.default.getSettings(e)), l !== d.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
    }
}