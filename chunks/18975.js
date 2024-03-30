function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NEW_MEMBER_ACTION_MAX: function() {
            return _
        },
        NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
            return d
        },
        NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
            return f
        },
        NewMemberActionTypes: function() {
            return o
        },
        RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
            return m
        },
        RESOURCE_CHANNEL_MAX: function() {
            return y
        },
        RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
            return p
        },
        RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
            return E
        },
        WELCOME_MESSAGE_MAX_LENGTH: function() {
            return c
        },
        WELCOME_MESSAGE_MIN_LENGTH: function() {
            return l
        },
        actionsFromServer: function() {
            return S
        },
        isChannelValidForNewMemberAction: function() {
            return N
        },
        isChannelValidForResourceChannel: function() {
            return b
        },
        isSettingsEmpty: function() {
            return g
        },
        isSettingsValid: function() {
            return A
        },
        isWelcomeMessageEmpty: function() {
            return v
        },
        newMemberActionFromServer: function() {
            return I
        },
        resourceChannelFromServer: function() {
            return h
        },
        settingsFromServer: function() {
            return O
        },
        settingsToServer: function() {
            return T
        }
    });
    var r, o, i = n("935741"),
        a = n("162677"),
        u = n("359017"),
        s = n("281767"),
        l = 7,
        c = 300,
        f = 7,
        d = 60,
        _ = 5,
        E = 1,
        p = 30,
        m = 200,
        y = 7;

    function I(e) {
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

    function h(e) {
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

    function O(e) {
        if (null == e) return null;
        var t = e.welcome_message,
            n = e.new_member_actions,
            r = e.resource_channels,
            o = e.enabled;
        return {
            welcomeMessage: {
                authorIds: t.author_ids,
                message: t.message
            },
            newMemberActions: n.filter(function(e) {
                return (0, a.isNotNullish)(i.default.getChannel(e.channel_id))
            }).map(I),
            resourceChannels: r.filter(function(e) {
                return (0, a.isNotNullish)(i.default.getChannel(e.channel_id))
            }).map(h),
            enabled: o
        }
    }

    function T(e, t) {
        if (null == t) return null;
        var n, r, o = t.welcomeMessage,
            u = t.newMemberActions,
            s = t.resourceChannels,
            l = t.enabled;
        return {
            guild_id: e,
            welcome_message: {
                author_ids: null !== (n = null == o ? void 0 : o.authorIds) && void 0 !== n ? n : [],
                message: null !== (r = null == o ? void 0 : o.message) && void 0 !== r ? r : ""
            },
            new_member_actions: (null != u ? u : []).filter(function(e) {
                return (0, a.isNotNullish)(i.default.getChannel(e.channelId))
            }).map(function(e) {
                var t, n, r, o, i, a, u;
                return {
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (o = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== o ? o : void 0,
                        name: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : void 0,
                        animated: null !== (a = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== a ? a : void 0
                    },
                    icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
                }
            }),
            resource_channels: (null != s ? s : []).filter(function(e) {
                return (0, a.isNotNullish)(i.default.getChannel(e.channelId))
            }).map(function(e) {
                var t, n, r, o, i, a, u;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (o = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== o ? o : void 0,
                        name: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : void 0,
                        animated: null !== (a = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== a ? a : void 0
                    },
                    icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
                }
            }),
            enabled: l
        }
    }(r = o || (o = {}))[r.VIEW = 0] = "VIEW", r[r.CHAT = 1] = "CHAT";
    var S = function(e) {
        if (null == e) return null;
        var t = {};
        for (var n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t
    };

    function v(e) {
        return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
    }

    function g(e) {
        return null == e || !!v(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
    }

    function A(e) {
        var t, n;
        return null != e && (!!g(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < l) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
    }

    function b(e) {
        return e.type === s.ChannelTypes.GUILD_TEXT && !u.canEveryoneRole(s.Permissions.SEND_MESSAGES, e) && u.canEveryoneRole(s.Permissions.VIEW_CHANNEL, e)
    }

    function N(e) {
        switch (e.type) {
            case s.ChannelTypes.GUILD_TEXT:
            case s.ChannelTypes.GUILD_ANNOUNCEMENT:
            case s.ChannelTypes.GUILD_FORUM:
            case s.ChannelTypes.GUILD_MEDIA:
                return u.canEveryoneRole(s.Permissions.VIEW_CHANNEL, e);
            default:
                return !1
        }
    }
}