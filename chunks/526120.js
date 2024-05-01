function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        completeNewMemberAction: function() {
            return N
        },
        fetchGuildHomeSettings: function() {
            return S
        },
        fetchNewMemberActions: function() {
            return h
        },
        getBlockForChannelDeletion: function() {
            return p
        },
        selectHomeResourceChannel: function() {
            return A
        },
        selectNewMemberActionChannel: function() {
            return m
        }
    }), n("47120"), n("724458");
    var i = n("544891"),
        r = n("570140"),
        a = n("904245"),
        s = n("593472"),
        o = n("160404"),
        l = n("359110"),
        u = n("592125"),
        d = n("626135"),
        _ = n("709054"),
        c = n("563534"),
        E = n("734893"),
        I = n("846121"),
        T = n("931261"),
        f = n("981631");
    let S = async e => {
        r.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e
        });
        try {
            let t = await i.HTTP.get({
                    url: f.Endpoints.GUILD_HOME_SETTINGS(e),
                    oldFormErrors: !0
                }),
                n = (0, E.settingsFromServer)(t.body);
            return r.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: n
            }), n
        } catch (t) {
            r.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                guildId: e
            })
        }
    }, h = async e => {
        if (!o.default.isFullServerPreview(e)) {
            r.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                guildId: e
            });
            try {
                let t = await i.HTTP.get({
                        url: f.Endpoints.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0
                    }),
                    n = (0, E.actionsFromServer)(t.body);
                return r.default.dispatch({
                    type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                    guildId: e,
                    memberActions: n
                }), n
            } catch (t) {
                r.default.dispatch({
                    type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                    guildId: e
                })
            }
        }
    }, A = function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (r.default.dispatch({
                type: "SELECT_HOME_RESOURCE_CHANNEL",
                guildId: e,
                channelId: t
            }), null == t) return;
        let i = u.default.getChannel(t),
            E = c.default.getResourceForChannel(e, t);
        null != e && !o.default.isFullServerPreview(e) && null != i && null != E && d.default.track(f.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: i.id,
            server_guide_channel_type: "resource",
            channel_action_type: -1
        }), n && (0, l.transitionToChannel)(t), a.default.jumpToMessage({
            channelId: t,
            messageId: _.default.castChannelIdAsMessageId(t),
            flash: !1,
            jumpType: s.JumpTypes.INSTANT
        })
    }, m = (e, t) => {
        r.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: t
        });
        let n = u.default.getChannel(t),
            i = c.default.getActionForChannel(e, t);
        null != e && !o.default.isFullServerPreview(e) && null != n && null != i && d.default.track(f.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: n.id,
            server_guide_channel_type: "member action",
            channel_action_type: i.actionType
        }), (0, l.transitionToChannel)(t)
    }, N = (e, t) => {
        if (r.default.dispatch({
                type: "COMPLETE_NEW_MEMBER_ACTION",
                guildId: e,
                channelId: t
            }), o.default.isFullServerPreview(e)) return;
        let n = u.default.getChannel(t),
            a = c.default.getActionForChannel(e, t);
        if (null != n && null != a) {
            var s, l;
            let t = _.default.keys(null !== (s = I.default.getCompletedActions(e)) && void 0 !== s ? s : {}),
                i = null !== (l = c.default.getNewMemberActions(e)) && void 0 !== l ? l : [];
            d.default.track(f.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: a.actionType,
                has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0)
            })
        }
        i.HTTP.post({
            url: f.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
        })
    };
    async function p(e, t) {
        if (null == e || !(0, T.canSeeOnboardingHome)(e)) return !1;
        let n = c.default.getSettings(e);
        return n === c.NO_SETTINGS && (await S(e), n = c.default.getSettings(e)), n !== c.NO_SETTINGS && null != n && (null != n.newMemberActions && null != n.newMemberActions.find(e => e.channelId === t) ? "todo" : null != n.resourceChannels && null != n.resourceChannels.find(e => e.channelId === t) && "resource")
    }
}