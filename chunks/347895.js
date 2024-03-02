function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, {
        fetchGuildHomeSettings: function() {
            return C
        },
        fetchNewMemberActions: function() {
            return p
        },
        selectHomeResourceChannel: function() {
            return T
        },
        selectNewMemberActionChannel: function() {
            return N
        },
        completeNewMemberAction: function() {
            return g
        },
        getBlockForChannelDeletion: function() {
            return v
        }
    }), t("222007"), t("808653");
    var l = t("872717"),
        i = t("913144"),
        r = t("819689"),
        o = t("115718"),
        u = t("38654"),
        a = t("144491"),
        d = t("42203"),
        c = t("599110"),
        s = t("299039"),
        E = t("698882"),
        _ = t("129092"),
        f = t("675305"),
        h = t("290886"),
        m = t("49111");
    let C = async e => {
        i.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e
        });
        try {
            let n = await l.default.get({
                    url: m.Endpoints.GUILD_HOME_SETTINGS(e),
                    oldFormErrors: !0
                }),
                t = (0, _.settingsFromServer)(n.body);
            return i.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: t
            }), t
        } catch (n) {
            i.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                guildId: e
            })
        }
    }, p = async e => {
        if (!u.default.isFullServerPreview(e)) {
            i.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                guildId: e
            });
            try {
                let n = await l.default.get({
                        url: m.Endpoints.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0
                    }),
                    t = (0, _.actionsFromServer)(n.body);
                return i.default.dispatch({
                    type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                    guildId: e,
                    memberActions: t
                }), t
            } catch (n) {
                i.default.dispatch({
                    type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                    guildId: e
                })
            }
        }
    }, T = function(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (i.default.dispatch({
                type: "SELECT_HOME_RESOURCE_CHANNEL",
                guildId: e,
                channelId: n
            }), null == n) return;
        let l = d.default.getChannel(n),
            _ = E.default.getResourceForChannel(e, n);
        null != e && !u.default.isFullServerPreview(e) && null != l && null != _ && c.default.track(m.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: l.id,
            server_guide_channel_type: "resource",
            channel_action_type: -1
        }), t && (0, a.transitionToChannel)(n), r.default.jumpToMessage({
            channelId: n,
            messageId: s.default.castChannelIdAsMessageId(n),
            flash: !1,
            jumpType: o.JumpTypes.INSTANT
        })
    }, N = (e, n) => {
        i.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: n
        });
        let t = d.default.getChannel(n),
            l = E.default.getActionForChannel(e, n);
        null != e && !u.default.isFullServerPreview(e) && null != t && null != l && c.default.track(m.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: t.id,
            server_guide_channel_type: "member action",
            channel_action_type: l.actionType
        }), (0, a.transitionToChannel)(n)
    }, g = (e, n) => {
        if (i.default.dispatch({
                type: "COMPLETE_NEW_MEMBER_ACTION",
                guildId: e,
                channelId: n
            }), u.default.isFullServerPreview(e)) return;
        let t = d.default.getChannel(n),
            r = E.default.getActionForChannel(e, n);
        if (null != t && null != r) {
            var o, a;
            let n = s.default.keys(null !== (o = f.default.getCompletedActions(e)) && void 0 !== o ? o : {}),
                l = null !== (a = E.default.getNewMemberActions(e)) && void 0 !== a ? a : [];
            c.default.track(m.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_action_type: r.actionType,
                has_completed_all: l.reduce((e, t) => e && n.includes(t.channelId), !0)
            })
        }
        l.default.post({
            url: m.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, n)
        })
    };
    async function v(e, n) {
        if (null == e) return !1;
        let t = (0, h.canSeeOnboardingHome)(e);
        if (!t) return !1;
        let l = E.default.getSettings(e);
        return l === E.NO_SETTINGS && (await C(e), l = E.default.getSettings(e)), l !== E.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === n) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === n) && "resource")
    }
}