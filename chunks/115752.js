function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        channelTypeString: function() {
            return L
        },
        computeSummarizedVoiceUsers: function() {
            return D
        },
        getBitrateLimit: function() {
            return P
        },
        getChannelLinkToCopy: function() {
            return k
        },
        getChannelPermalink: function() {
            return w
        },
        getMentionIconType: function() {
            return M
        },
        isChannelFull: function() {
            return C
        },
        permissionOverwriteForRole: function() {
            return N
        },
        permissionOverwriteForUser: function() {
            return b
        },
        permissionOverwritesForAnnouncement: function() {
            return R
        },
        permissionOverwritesForRoles: function() {
            return A
        },
        previousTextChannelRouteForGuild: function() {
            return U
        },
        sanitizeGuildTextChannelName: function() {
            return i.default
        }
    });
    var r = n("22287"),
        o = n("29570"),
        i = n("146479"),
        a = n("706067"),
        u = n("911751"),
        s = n("672933"),
        l = n("569492"),
        c = n("935741"),
        f = n("29604"),
        d = n("29884"),
        _ = n("894288"),
        E = n("473702"),
        p = n("359017"),
        m = n("523018"),
        y = n("281767"),
        I = n("868615"),
        h = n("941504"),
        O = y.ChannelTypes.GUILD_VOICE,
        T = y.ChannelTypes.GUILD_CATEGORY,
        S = y.ChannelTypes.GUILD_STAGE_VOICE;

    function v(e, t) {
        return e === t || e === T
    }

    function g(e, t, n) {
        var o = p.NONE;
        return ((0, l.isGuildSelectableChannelType)(t) || t === T) && (o = r.add(o, y.Permissions.VIEW_CHANNEL)), (v(t, O) || v(t, S)) && (o = r.add(o, y.Permissions.VIEW_CHANNEL), o = r.add(o, y.Permissions.CONNECT)), {
            id: e,
            type: n,
            deny: p.NONE,
            allow: o
        }
    }

    function A(e, t, n) {
        var i, a, u, s, c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            f = [];
        if (n.length > 0 || c) {
            ;
            f.push((i = e, a = t, u = o.PermissionOverwriteType.ROLE, s = p.NONE, ((0, l.isGuildSelectableChannelType)(a) || a === T) && (s = r.add(s, y.Permissions.VIEW_CHANNEL)), v(a, O) && (s = r.add(s, y.Permissions.VIEW_CHANNEL), s = r.add(s, y.Permissions.CONNECT)), {
                id: i,
                type: u,
                allow: p.NONE,
                deny: s
            }))
        }
        return n.forEach(function(e) {
            f.push(g(e, t, o.PermissionOverwriteType.ROLE))
        }), f
    }

    function b(e, t) {
        return g(e, t, o.PermissionOverwriteType.MEMBER)
    }

    function N(e, t) {
        return g(e, t, o.PermissionOverwriteType.ROLE)
    }

    function R(e) {
        return [{
            id: e,
            type: o.PermissionOverwriteType.ROLE,
            deny: y.Permissions.SEND_MESSAGES,
            allow: p.NONE
        }]
    }

    function C(e, t, n) {
        var r, o, i = e.getGuildId(),
            u = n.getGuild(i),
            s = null !== (r = null == u ? void 0 : u.maxVideoChannelUsers) && void 0 !== r ? r : -1,
            l = null !== (o = null == u ? void 0 : u.maxStageVideoChannelUsers) && void 0 !== o ? o : -1,
            c = E.default.countVoiceStatesForChannel(e.id),
            f = E.default.getVoiceStatesForChannel(e),
            _ = d.default.can(y.Permissions.MOVE_MEMBERS, e) && d.default.can(y.Permissions.CONNECT, e),
            p = !1;
        p = e.type === S ? null != i && (t.hasVideo(e.id) || (0, a.hasStream)(f)) && l > 0 && c >= l : null != i && t.hasVideo(e.id) && s > 0 && c >= s + (_ ? 1 : 0);
        var m = e.userLimit > 0 && c >= e.userLimit;
        return p || m && !_
    }

    function P(e, t) {
        return t.isGuildStageVoice() ? y.BITRATE_DEFAULT : null == e ? y.BITRATE_MAX : Math.max(e.hasFeature(y.GuildFeatures.VIP_REGIONS) ? I.BoostedGuildFeatures[y.BoostedGuildTiers.TIER_3].limits.bitrate : y.BITRATE_MAX, I.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
    }

    function D(e) {
        var t, n, r, o, i, a;
        return (n = (t = {
            channels: e.channels,
            selectedChannelId: e.selectedChannelId,
            selectedVoiceChannelId: e.selectedVoiceChannelId,
            voiceStates: e.voiceStates
        }).channels, r = t.selectedChannelId, o = t.selectedVoiceChannelId, i = t.voiceStates, a = [], n.forEach(function(e) {
            if (e.id !== o && e.id !== r) {
                var t = i[e.id];
                null != t && (e.isGuildStageVoice() ? t.forEach(function(e) {
                    (0, s.getAudienceRequestToSpeakState)(e.voiceState) === s.RequestToSpeakStates.ON_STAGE && a.push(e)
                }) : t.forEach(function(e) {
                    return a.push(e)
                }))
            }
        }), a).map(function(e) {
            return e.user
        })
    }

    function L(e) {
        switch (e.type) {
            case y.ChannelTypes.DM:
                return h.default.Messages.DM;
            case y.ChannelTypes.GROUP_DM:
                return h.default.Messages.GROUP_DM;
            case y.ChannelTypes.GUILD_TEXT:
                return h.default.Messages.TEXT_CHANNEL;
            case y.ChannelTypes.GUILD_FORUM:
                return h.default.Messages.FORUM_CHANNEL;
            case y.ChannelTypes.GUILD_MEDIA:
                return h.default.Messages.MEDIA_CHANNEL;
            case y.ChannelTypes.GUILD_VOICE:
                return h.default.Messages.VOICE_CHANNEL;
            case y.ChannelTypes.GUILD_STAGE_VOICE:
                return h.default.Messages.STAGE_CHANNEL;
            case y.ChannelTypes.GUILD_ANNOUNCEMENT:
                return h.default.Messages.NEWS_CHANNEL;
            case y.ChannelTypes.GUILD_STORE:
                return h.default.Messages.STORE_CHANNEL;
            case y.ChannelTypes.GUILD_CATEGORY:
                return h.default.Messages.CATEGORY;
            default:
                return null
        }
    }

    function M(e) {
        if (null == e) return "text";
        var t = e.isMediaChannel();
        if (e.type === y.ChannelTypes.GUILD_VOICE) return d.default.can(y.Permissions.CONNECT, e) ? "voice" : "voice-locked";
        if (e.type === y.ChannelTypes.GUILD_STAGE_VOICE) return d.default.can(y.Permissions.CONNECT, e) ? "stage" : "stage-locked";
        if (l.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
        else if (e.type === y.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
        else if (e.type === y.ChannelTypes.GUILD_MEDIA) return "media";
        else if (l.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
    }

    function U(e) {
        var t, n = c.default.getChannel(_.default.getLastSelectedChannelId());
        if (null != n && n.getGuildId() === e && n.type === y.ChannelTypes.GUILD_TEXT) t = n.id;
        else {
            var r = f.default.getDefaultChannel(e);
            t = null != r ? r.id : null
        }
        return y.Routes.CHANNEL(e, t)
    }

    function w(e, t, n, r) {
        return "".concat(location.protocol, "//").concat(location.host).concat(y.Routes.CHANNEL(e, t, n)).concat(null == r ? "" : "?summaryId=".concat(r))
    }

    function k(e, t, n, r) {
        var o, i, a, s, l, c = e.getGuildId(),
            f = (0, u.canUseMediaPostEmbed)(c, t);
        if (null != t && f) {
            ;
            o = c, i = t.id, a = e.id, s = m.default.castChannelIdAsMessageId(e.id), l = null == o || null == i || null == a ? w(o, i, s) : "".concat(location.protocol, "//").concat(location.host).concat(y.Routes.CHANNEL_THREAD_VIEW(o, i, a, s))
        } else l = null != r ? r : w(c, e.id, n);
        return l
    }
}