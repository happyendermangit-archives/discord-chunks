function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        },
        useGetVoiceChannelInfoForVoiceActivitySection: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("396586"),
        u = n("481910"),
        s = n("935741"),
        l = n("306912"),
        c = n("29884"),
        f = n("545072"),
        d = n("665863"),
        _ = n("372844"),
        E = n("893427"),
        p = n("264437"),
        m = n("444226"),
        y = n("877987"),
        I = n("281767"),
        h = n("941504"),
        O = n("989171"),
        T = n("858903");

    function S(e, t) {
        var n = (0, o.useStateFromStores)([d.default], function() {
                var n;
                return null !== (n = d.default.getVoiceState(t, e)) && void 0 !== n ? n : d.default.getVoiceStateForUser(e)
            }, [t, e]),
            r = (0, o.useStateFromStores)([s.default], function() {
                return null != n && null != n.channelId ? s.default.getChannel(n.channelId) : null
            }, [n]),
            i = (0, o.useStateFromStores)([l.default], function() {
                return null != r ? l.default.getGuild(r.guild_id) : null
            }, [r]),
            a = (0, o.useStateFromStores)([c.default], function() {
                return null != r && c.default.can(I.Permissions.VIEW_CHANNEL, r)
            }, [r]),
            u = (0, o.useStateFromStores)([c.default], function() {
                return null != r && c.default.can(I.Permissions.CONNECT, r)
            }, [r]);
        return a && u && null != r && null != i ? {
            voiceGuild: i,
            voiceChannel: r
        } : null
    }

    function v(e) {
        var t = e.voiceGuild,
            n = e.voiceChannel,
            s = e.color,
            l = (0, a.default)().analyticsLocations,
            c = (0, p.useUserProfileAnalyticsContext)(),
            d = c.trackUserProfileAction,
            I = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(c, ["trackUserProfileAction"]),
            S = (0, o.useStateFromStores)([f.default], function() {
                return f.default.getChannelId() === n.id
            }),
            v = S ? h.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : n.isGuildStageVoice() ? h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : h.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
        return r.createElement(y.default, null, r.createElement(i.Heading, {
            variant: "eyebrow",
            className: O.title
        }, h.default.Messages.PROFILE_IN_VOICE_CALL), r.createElement("div", {
            className: T.voiceDisplayContainer
        }, r.createElement("div", {
            className: T.iconContainer
        }, r.createElement(_.default, {
            size: _.default.Sizes.SMALL,
            active: !0,
            guild: t
        }), r.createElement("div", {
            className: T.speakerIconContainer
        }, r.createElement(E.default, {
            className: T.speakerIcon
        }))), r.createElement("div", {
            className: T.voiceChannelInfo
        }, r.createElement(i.Text, {
            variant: "text-sm/semibold"
        }, n.name), r.createElement(i.Text, {
            variant: "text-xs/normal",
            color: "text-muted"
        }, null == t ? void 0 : t.name))), r.createElement(i.Button, {
            onClick: function() {
                d({
                    action: "JOIN_ACTIVITY"
                }), (0, m.trackUserProfileActivityJoined)(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({
                    activityType: "VOICE",
                    voiceChannelId: n.id,
                    analyticsLocations: l
                }, I)), u.default.handleVoiceConnect({
                    channel: n,
                    needSubscriptionToAccess: !1,
                    connected: S
                })
            },
            color: null != s ? s : i.Button.Colors.PRIMARY,
            size: i.Button.Sizes.SMALL,
            fullWidth: !0
        }, v))
    }
}