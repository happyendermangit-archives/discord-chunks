function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        permissionOverwritesForRoles: function() {
            return y
        },
        permissionOverwriteForUser: function() {
            return N
        },
        permissionOverwriteForRole: function() {
            return R
        },
        permissionOverwritesForAnnouncement: function() {
            return O
        },
        isChannelFull: function() {
            return D
        },
        sanitizeGuildTextChannelName: function() {
            return r.default
        },
        getBitrateLimit: function() {
            return P
        },
        computeSummarizedVoiceUsers: function() {
            return L
        },
        channelTypeString: function() {
            return M
        },
        getMentionIconType: function() {
            return b
        },
        previousTextChannelRouteForGuild: function() {
            return U
        },
        getChannelPermalink: function() {
            return w
        },
        getChannelLinkToCopy: function() {
            return k
        }
    }), n("70102"), n("424973"), n("222007");
    var i = n("316693"),
        s = n("798609"),
        r = n("364480"),
        a = n("89073"),
        o = n("711326"),
        l = n("808422"),
        u = n("233069"),
        d = n("42203"),
        c = n("923959"),
        f = n("957255"),
        _ = n("18494"),
        h = n("316133"),
        E = n("991170"),
        g = n("299039"),
        m = n("49111"),
        p = n("646718"),
        S = n("782340");
    let {
        GUILD_VOICE: v,
        GUILD_CATEGORY: T,
        GUILD_STAGE_VOICE: I
    } = m.ChannelTypes;

    function C(e, t) {
        return e === t || e === T
    }

    function A(e, t, n) {
        let s = E.default.NONE;
        return ((0, u.isGuildSelectableChannelType)(t) || t === T) && (s = i.default.add(s, m.Permissions.VIEW_CHANNEL)), (C(t, v) || C(t, I)) && (s = i.default.add(s, m.Permissions.VIEW_CHANNEL), s = i.default.add(s, m.Permissions.CONNECT)), {
            id: e,
            type: n,
            deny: E.default.NONE,
            allow: s
        }
    }

    function y(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = [];
        if (n.length > 0 || r) {
            var o, l, d;
            let n;
            a.push((o = e, l = t, d = s.PermissionOverwriteType.ROLE, n = E.default.NONE, ((0, u.isGuildSelectableChannelType)(l) || l === T) && (n = i.default.add(n, m.Permissions.VIEW_CHANNEL)), C(l, v) && (n = i.default.add(n, m.Permissions.VIEW_CHANNEL), n = i.default.add(n, m.Permissions.CONNECT)), {
                id: o,
                type: d,
                allow: E.default.NONE,
                deny: n
            }))
        }
        return n.forEach(e => {
            a.push(A(e, t, s.PermissionOverwriteType.ROLE))
        }), a
    }

    function N(e, t) {
        return A(e, t, s.PermissionOverwriteType.MEMBER)
    }

    function R(e, t) {
        return A(e, t, s.PermissionOverwriteType.ROLE)
    }

    function O(e) {
        return [{
            id: e,
            type: s.PermissionOverwriteType.ROLE,
            deny: m.Permissions.SEND_MESSAGES,
            allow: E.default.NONE
        }]
    }

    function D(e, t, n) {
        var i, s;
        let r = e.getGuildId(),
            o = n.getGuild(r),
            l = null !== (i = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== i ? i : -1,
            u = null !== (s = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== s ? s : -1,
            d = h.default.countVoiceStatesForChannel(e.id),
            c = h.default.getVoiceStatesForChannel(e),
            _ = f.default.can(m.Permissions.MOVE_MEMBERS, e) && f.default.can(m.Permissions.CONNECT, e),
            E = !1;
        E = e.type === I ? null != r && (t.hasVideo(e.id) || (0, a.hasStream)(c)) && u > 0 && d >= u : null != r && t.hasVideo(e.id) && l > 0 && d >= l + (_ ? 1 : 0);
        let g = e.userLimit > 0 && d >= e.userLimit;
        return E || g && !_
    }

    function P(e, t) {
        return t.isGuildStageVoice() ? m.BITRATE_DEFAULT : null == e ? m.BITRATE_MAX : Math.max(e.hasFeature(m.GuildFeatures.VIP_REGIONS) ? p.BoostedGuildFeatures[m.BoostedGuildTiers.TIER_3].limits.bitrate : m.BITRATE_MAX, p.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
    }

    function L(e) {
        let {
            channels: t,
            selectedChannelId: n,
            selectedVoiceChannelId: i,
            voiceStates: s
        } = e, r = function(e) {
            let {
                channels: t,
                selectedChannelId: n,
                selectedVoiceChannelId: i,
                voiceStates: s
            } = e, r = [];
            return t.forEach(e => {
                if (e.id === i || e.id === n) return;
                let t = s[e.id];
                null != t && (e.isGuildStageVoice() ? t.forEach(e => {
                    (0, l.getAudienceRequestToSpeakState)(e.voiceState) === l.RequestToSpeakStates.ON_STAGE && r.push(e)
                }) : t.forEach(e => r.push(e)))
            }), r
        }({
            channels: t,
            selectedChannelId: n,
            selectedVoiceChannelId: i,
            voiceStates: s
        });
        return r.map(e => e.user)
    }

    function M(e) {
        let {
            type: t
        } = e;
        switch (t) {
            case m.ChannelTypes.DM:
                return S.default.Messages.DM;
            case m.ChannelTypes.GROUP_DM:
                return S.default.Messages.GROUP_DM;
            case m.ChannelTypes.GUILD_TEXT:
                return S.default.Messages.TEXT_CHANNEL;
            case m.ChannelTypes.GUILD_FORUM:
                return S.default.Messages.FORUM_CHANNEL;
            case m.ChannelTypes.GUILD_MEDIA:
                return S.default.Messages.MEDIA_CHANNEL;
            case m.ChannelTypes.GUILD_VOICE:
                return S.default.Messages.VOICE_CHANNEL;
            case m.ChannelTypes.GUILD_STAGE_VOICE:
                return S.default.Messages.STAGE_CHANNEL;
            case m.ChannelTypes.GUILD_ANNOUNCEMENT:
                return S.default.Messages.NEWS_CHANNEL;
            case m.ChannelTypes.GUILD_STORE:
                return S.default.Messages.STORE_CHANNEL;
            case m.ChannelTypes.GUILD_CATEGORY:
                return S.default.Messages.CATEGORY;
            default:
                return null
        }
    }

    function b(e) {
        if (null == e) return "text";
        let t = e.isMediaChannel();
        if (e.type === m.ChannelTypes.GUILD_VOICE) return f.default.can(m.Permissions.CONNECT, e) ? "voice" : "voice-locked";
        if (e.type === m.ChannelTypes.GUILD_STAGE_VOICE) return f.default.can(m.Permissions.CONNECT, e) ? "stage" : "stage-locked";
        if (u.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
        else if (e.type === m.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
        else if (e.type === m.ChannelTypes.GUILD_MEDIA) return "media";
        else if (u.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
    }

    function U(e) {
        let t;
        let n = d.default.getChannel(_.default.getLastSelectedChannelId());
        if (null != n && n.getGuildId() === e && n.type === m.ChannelTypes.GUILD_TEXT) t = n.id;
        else {
            let n = c.default.getDefaultChannel(e);
            t = null != n ? n.id : null
        }
        return m.Routes.CHANNEL(e, t)
    }

    function w(e, t, n, i) {
        return "".concat(location.protocol, "//").concat(location.host).concat(m.Routes.CHANNEL(e, t, n)).concat(null == i ? "" : "?summaryId=".concat(i))
    }

    function k(e, t, n, i) {
        let s;
        let r = e.getGuildId(),
            a = (0, o.canUseMediaPostEmbed)(r, t);
        if (null != t && a) {
            var l, u, d, c;
            l = r, u = t.id, d = e.id, c = g.default.castChannelIdAsMessageId(e.id), s = null == l || null == u || null == d ? w(l, u, c) : "".concat(location.protocol, "//").concat(location.host).concat(m.Routes.CHANNEL_THREAD_VIEW(l, u, d, c))
        } else s = null != i ? i : w(r, e.id, n);
        return s
    }
}