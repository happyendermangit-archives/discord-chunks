function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        WELCOME_MESSAGE_MIN_LENGTH: function() {
            return i
        },
        WELCOME_MESSAGE_MAX_LENGTH: function() {
            return c
        },
        NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
            return E
        },
        NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
            return d
        },
        NEW_MEMBER_ACTION_MAX: function() {
            return _
        },
        RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
            return T
        },
        RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
            return f
        },
        RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
            return S
        },
        RESOURCE_CHANNEL_MAX: function() {
            return h
        },
        NewMemberActionTypes: function() {
            return a
        },
        newMemberActionFromServer: function() {
            return R
        },
        resourceChannelFromServer: function() {
            return p
        },
        settingsFromServer: function() {
            return A
        },
        settingsToServer: function() {
            return g
        },
        actionsFromServer: function() {
            return N
        },
        isWelcomeMessageEmpty: function() {
            return I
        },
        isSettingsEmpty: function() {
            return y
        },
        isSettingsValid: function() {
            return m
        },
        isChannelValidForResourceChannel: function() {
            return M
        },
        isChannelValidForNewMemberAction: function() {
            return C
        }
    });
    var l, a, r = n("42203"),
        u = n("449008"),
        s = n("991170"),
        o = n("49111");
    let i = 7,
        c = 300,
        E = 7,
        d = 60,
        _ = 5,
        T = 1,
        f = 30,
        S = 200,
        h = 7;

    function R(e) {
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

    function p(e) {
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

    function A(e) {
        if (null == e) return null;
        let {
            welcome_message: t,
            new_member_actions: n,
            resource_channels: l,
            enabled: a
        } = e, s = {
            authorIds: t.author_ids,
            message: t.message
        }, o = n.filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channel_id))).map(R), i = l.filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channel_id))).map(p);
        return {
            welcomeMessage: s,
            newMemberActions: o,
            resourceChannels: i,
            enabled: a
        }
    }

    function g(e, t) {
        var n, l;
        if (null == t) return null;
        let {
            welcomeMessage: a,
            newMemberActions: s,
            resourceChannels: o,
            enabled: i
        } = t, c = {
            author_ids: null !== (n = null == a ? void 0 : a.authorIds) && void 0 !== n ? n : [],
            message: null !== (l = null == a ? void 0 : a.message) && void 0 !== l ? l : ""
        }, E = (null != s ? s : []).filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
            var t, n, l, a, r, u, s;
            return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                    id: null !== (a = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== a ? a : void 0,
                    name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                    animated: null !== (u = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== u ? u : void 0
                },
                icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
            }
        }), d = (null != o ? o : []).filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
            var t, n, l, a, r, u, s;
            return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                    id: null !== (a = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== a ? a : void 0,
                    name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                    animated: null !== (u = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== u ? u : void 0
                },
                icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
            }
        });
        return {
            guild_id: e,
            welcome_message: c,
            new_member_actions: E,
            resource_channels: d,
            enabled: i
        }
    }(l = a || (a = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
    let N = e => {
        if (null == e) return null;
        let t = {};
        for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t
    };

    function I(e) {
        return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
    }

    function y(e) {
        return null == e || !!I(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
    }

    function m(e) {
        var t, n;
        return null != e && (!!y(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < i) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
    }

    function M(e) {
        return e.type === o.ChannelTypes.GUILD_TEXT && !s.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) && s.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
    }

    function C(e) {
        switch (e.type) {
            case o.ChannelTypes.GUILD_TEXT:
            case o.ChannelTypes.GUILD_ANNOUNCEMENT:
            case o.ChannelTypes.GUILD_FORUM:
            case o.ChannelTypes.GUILD_MEDIA:
                return s.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e);
            default:
                return !1
        }
    }
}