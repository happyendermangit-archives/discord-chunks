function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, {
        WELCOME_MESSAGE_MIN_LENGTH: function() {
            return d
        },
        WELCOME_MESSAGE_MAX_LENGTH: function() {
            return c
        },
        NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
            return s
        },
        NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
            return E
        },
        NEW_MEMBER_ACTION_MAX: function() {
            return _
        },
        RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
            return f
        },
        RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
            return h
        },
        RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
            return m
        },
        RESOURCE_CHANNEL_MAX: function() {
            return p
        },
        NewMemberActionTypes: function() {
            return i
        },
        newMemberActionFromServer: function() {
            return g
        },
        resourceChannelFromServer: function() {
            return C
        },
        settingsFromServer: function() {
            return T
        },
        settingsToServer: function() {
            return v
        },
        actionsFromServer: function() {
            return N
        },
        isWelcomeMessageEmpty: function() {
            return I
        },
        isSettingsEmpty: function() {
            return S
        },
        isSettingsValid: function() {
            return A
        },
        isChannelValidForResourceChannel: function() {
            return M
        },
        isChannelValidForNewMemberAction: function() {
            return y
        }
    });
    var l, i, r = t("42203"),
        o = t("449008"),
        a = t("991170"),
        u = t("49111");
    let d = 7,
        c = 300,
        s = 7,
        E = 60,
        _ = 5,
        f = 1,
        h = 30,
        m = 200,
        p = 7;

    function g(e) {
        var n;
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
            icon: null !== (n = e.icon) && void 0 !== n ? n : null
        }
    }

    function C(e) {
        var n, t;
        return {
            channelId: e.channel_id,
            title: e.title,
            description: null !== (n = e.description) && void 0 !== n ? n : "",
            emoji: null == e.emoji ? null : {
                id: e.emoji.id,
                name: e.emoji.name,
                animated: e.emoji.animated
            },
            icon: null !== (t = e.icon) && void 0 !== t ? t : null
        }
    }

    function T(e) {
        if (null == e) return null;
        let {
            welcome_message: n,
            new_member_actions: t,
            resource_channels: l,
            enabled: i
        } = e, a = {
            authorIds: n.author_ids,
            message: n.message
        }, u = t.filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channel_id))).map(g), d = l.filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channel_id))).map(C);
        return {
            welcomeMessage: a,
            newMemberActions: u,
            resourceChannels: d,
            enabled: i
        }
    }

    function v(e, n) {
        var t, l;
        if (null == n) return null;
        let {
            welcomeMessage: i,
            newMemberActions: a,
            resourceChannels: u,
            enabled: d
        } = n, c = {
            author_ids: null !== (t = null == i ? void 0 : i.authorIds) && void 0 !== t ? t : [],
            message: null !== (l = null == i ? void 0 : i.message) && void 0 !== l ? l : ""
        }, s = (null != a ? a : []).filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
            var n, t, l, i, r, o, a;
            return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                    id: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : void 0,
                    name: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : void 0,
                    animated: null !== (o = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== o ? o : void 0
                },
                icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
            }
        }), E = (null != u ? u : []).filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
            var n, t, l, i, r, o, a;
            return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                    id: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : void 0,
                    name: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : void 0,
                    animated: null !== (o = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== o ? o : void 0
                },
                icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
            }
        });
        return {
            guild_id: e,
            welcome_message: c,
            new_member_actions: s,
            resource_channels: E,
            enabled: d
        }
    }(l = i || (i = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
    let N = e => {
        if (null == e) return null;
        let n = {};
        for (let t in e.channel_actions) n[t] = e.channel_actions[t].completed;
        return n
    };

    function I(e) {
        return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
    }

    function S(e) {
        return null == e || !!I(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
    }

    function A(e) {
        var n, t;
        return null != e && (!!S(e) || (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) != null && !(e.welcomeMessage.message.length < d) && (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
    }

    function M(e) {
        return e.type === u.ChannelTypes.GUILD_TEXT && !a.default.canEveryoneRole(u.Permissions.SEND_MESSAGES, e) && a.default.canEveryoneRole(u.Permissions.VIEW_CHANNEL, e)
    }

    function y(e) {
        switch (e.type) {
            case u.ChannelTypes.GUILD_TEXT:
            case u.ChannelTypes.GUILD_ANNOUNCEMENT:
            case u.ChannelTypes.GUILD_FORUM:
            case u.ChannelTypes.GUILD_MEDIA:
                return a.default.canEveryoneRole(u.Permissions.VIEW_CHANNEL, e);
            default:
                return !1
        }
    }
}