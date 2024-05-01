function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NEW_MEMBER_ACTION_MAX: function() {
            return E
        },
        NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
            return c
        },
        NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
            return _
        },
        NewMemberActionTypes: function() {
            return r
        },
        RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
            return f
        },
        RESOURCE_CHANNEL_MAX: function() {
            return S
        },
        RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
            return T
        },
        RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
            return I
        },
        WELCOME_MESSAGE_MAX_LENGTH: function() {
            return d
        },
        WELCOME_MESSAGE_MIN_LENGTH: function() {
            return u
        },
        actionsFromServer: function() {
            return p
        },
        isChannelValidForNewMemberAction: function() {
            return L
        },
        isChannelValidForResourceChannel: function() {
            return g
        },
        isSettingsEmpty: function() {
            return R
        },
        isSettingsValid: function() {
            return C
        },
        isWelcomeMessageEmpty: function() {
            return O
        },
        newMemberActionFromServer: function() {
            return h
        },
        resourceChannelFromServer: function() {
            return A
        },
        settingsFromServer: function() {
            return m
        },
        settingsToServer: function() {
            return N
        }
    });
    var i, r, a = n("592125"),
        s = n("823379"),
        o = n("700785"),
        l = n("981631");
    let u = 7,
        d = 300,
        _ = 7,
        c = 60,
        E = 5,
        I = 1,
        T = 30,
        f = 200,
        S = 7;

    function h(e) {
        var t;
        return {
            channelId: e.channel_id,
            actionType: e.action_type,
            title: e.title,
            description: e.description,
            emoji: null == e.emoji ? null : {
                id: e.emoji.id,
                name: e.emoji.name,
                animated: e.emoji.animated
            },
            icon: null !== (t = e.icon) && void 0 !== t ? t : null
        }
    }

    function A(e) {
        var t, n;
        return {
            channelId: e.channel_id,
            title: e.title,
            description: null !== (t = e.description) && void 0 !== t ? t : "",
            emoji: null == e.emoji ? null : {
                id: e.emoji.id,
                name: e.emoji.name,
                animated: e.emoji.animated
            },
            icon: null !== (n = e.icon) && void 0 !== n ? n : null
        }
    }

    function m(e) {
        if (null == e) return null;
        let {
            welcome_message: t,
            new_member_actions: n,
            resource_channels: i,
            enabled: r
        } = e, o = {
            authorIds: t.author_ids,
            message: t.message
        }, l = n.filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channel_id))).map(h);
        return {
            welcomeMessage: o,
            newMemberActions: l,
            resourceChannels: i.filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channel_id))).map(A),
            enabled: r
        }
    }

    function N(e, t) {
        var n, i;
        if (null == t) return null;
        let {
            welcomeMessage: r,
            newMemberActions: o,
            resourceChannels: l,
            enabled: u
        } = t, d = {
            author_ids: null !== (n = null == r ? void 0 : r.authorIds) && void 0 !== n ? n : [],
            message: null !== (i = null == r ? void 0 : r.message) && void 0 !== i ? i : ""
        }, _ = (null != o ? o : []).filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
            var t, n, i, r, a, s, o;
            return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                    id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                    name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                    animated: null !== (s = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== s ? s : void 0
                },
                icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
            }
        });
        return {
            guild_id: e,
            welcome_message: d,
            new_member_actions: _,
            resource_channels: (null != l ? l : []).filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                var t, n, i, r, a, s, o;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                        name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                        animated: null !== (s = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== s ? s : void 0
                    },
                    icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
                }
            }),
            enabled: u
        }
    }(i = r || (r = {}))[i.VIEW = 0] = "VIEW", i[i.CHAT = 1] = "CHAT";
    let p = e => {
        if (null == e) return null;
        let t = {};
        for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t
    };

    function O(e) {
        return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
    }

    function R(e) {
        return null == e || !!O(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
    }

    function C(e) {
        var t, n;
        return null != e && (!!R(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < u) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
    }

    function g(e) {
        return e.type === l.ChannelTypes.GUILD_TEXT && !o.canEveryoneRole(l.Permissions.SEND_MESSAGES, e) && o.canEveryoneRole(l.Permissions.VIEW_CHANNEL, e)
    }

    function L(e) {
        switch (e.type) {
            case l.ChannelTypes.GUILD_TEXT:
            case l.ChannelTypes.GUILD_ANNOUNCEMENT:
            case l.ChannelTypes.GUILD_FORUM:
            case l.ChannelTypes.GUILD_MEDIA:
                return o.canEveryoneRole(l.Permissions.VIEW_CHANNEL, e);
            default:
                return !1
        }
    }
}