function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        channelTypeString: function() {
            return P
        },
        computeSummarizedVoiceUsers: function() {
            return y
        },
        getBitrateLimit: function() {
            return M
        },
        getChannelLinkToCopy: function() {
            return w
        },
        getChannelPermalink: function() {
            return G
        },
        getMentionIconType: function() {
            return U
        },
        isChannelFull: function() {
            return v
        },
        permissionOverwriteForRole: function() {
            return L
        },
        permissionOverwriteForUser: function() {
            return g
        },
        permissionOverwritesForAnnouncement: function() {
            return D
        },
        permissionOverwritesForRoles: function() {
            return C
        },
        previousTextChannelRouteForGuild: function() {
            return b
        },
        sanitizeGuildTextChannelName: function() {
            return s.default
        }
    }), n("411104"), n("653041"), n("47120");
    var i = n("149765"),
        r = n("911969"),
        s = n("90463"),
        a = n("968358"),
        o = n("874748"),
        l = n("590415"),
        u = n("131704"),
        d = n("592125"),
        _ = n("984933"),
        c = n("496675"),
        E = n("944486"),
        I = n("938475"),
        T = n("700785"),
        f = n("709054"),
        S = n("981631"),
        h = n("474936"),
        A = n("689938");
    let {
        GUILD_VOICE: m,
        GUILD_CATEGORY: N,
        GUILD_STAGE_VOICE: O
    } = S.ChannelTypes;

    function p(e, t) {
        return e === t || e === N
    }

    function R(e, t, n) {
        let r = T.NONE;
        return ((0, u.isGuildSelectableChannelType)(t) || t === N) && (r = i.add(r, S.Permissions.VIEW_CHANNEL)), (p(t, m) || p(t, O)) && (r = i.add(r, S.Permissions.VIEW_CHANNEL), r = i.add(r, S.Permissions.CONNECT)), {
            id: e,
            type: n,
            deny: T.NONE,
            allow: r
        }
    }

    function C(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = [];
        if (n.length > 0 || s) {
            var o, l, d;
            let n;
            a.push((o = e, l = t, d = r.PermissionOverwriteType.ROLE, n = T.NONE, ((0, u.isGuildSelectableChannelType)(l) || l === N) && (n = i.add(n, S.Permissions.VIEW_CHANNEL)), p(l, m) && (n = i.add(n, S.Permissions.VIEW_CHANNEL), n = i.add(n, S.Permissions.CONNECT)), {
                id: o,
                type: d,
                allow: T.NONE,
                deny: n
            }))
        }
        return n.forEach(e => {
            a.push(R(e, t, r.PermissionOverwriteType.ROLE))
        }), a
    }

    function g(e, t) {
        return R(e, t, r.PermissionOverwriteType.MEMBER)
    }

    function L(e, t) {
        return R(e, t, r.PermissionOverwriteType.ROLE)
    }

    function D(e) {
        return [{
            id: e,
            type: r.PermissionOverwriteType.ROLE,
            deny: S.Permissions.SEND_MESSAGES,
            allow: T.NONE
        }]
    }

    function v(e, t, n) {
        var i, r;
        let s = e.getGuildId(),
            o = n.getGuild(s),
            l = null !== (i = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== i ? i : -1,
            u = null !== (r = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== r ? r : -1,
            d = I.default.countVoiceStatesForChannel(e.id),
            _ = I.default.getVoiceStatesForChannel(e),
            E = c.default.can(S.Permissions.MOVE_MEMBERS, e) && c.default.can(S.Permissions.CONNECT, e),
            T = !1;
        T = e.type === O ? null != s && (t.hasVideo(e.id) || (0, a.hasStream)(_)) && u > 0 && d >= u : null != s && t.hasVideo(e.id) && l > 0 && d >= l + (E ? 1 : 0);
        let f = e.userLimit > 0 && d >= e.userLimit;
        return T || f && !E
    }

    function M(e, t) {
        return t.isGuildStageVoice() ? S.BITRATE_DEFAULT : null == e ? S.BITRATE_MAX : Math.max(e.hasFeature(S.GuildFeatures.VIP_REGIONS) ? h.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.bitrate : S.BITRATE_MAX, h.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
    }

    function y(e) {
        let {
            channels: t,
            selectedChannelId: n,
            selectedVoiceChannelId: i,
            voiceStates: r
        } = e;
        return (function(e) {
            let {
                channels: t,
                selectedChannelId: n,
                selectedVoiceChannelId: i,
                voiceStates: r
            } = e, s = [];
            return t.forEach(e => {
                if (e.id === i || e.id === n) return;
                let t = r[e.id];
                null != t && (e.isGuildStageVoice() ? t.forEach(e => {
                    (0, l.getAudienceRequestToSpeakState)(e.voiceState) === l.RequestToSpeakStates.ON_STAGE && s.push(e)
                }) : t.forEach(e => s.push(e)))
            }), s
        })({
            channels: t,
            selectedChannelId: n,
            selectedVoiceChannelId: i,
            voiceStates: r
        }).map(e => e.user)
    }

    function P(e) {
        let {
            type: t
        } = e;
        switch (t) {
            case S.ChannelTypes.DM:
                return A.default.Messages.DM;
            case S.ChannelTypes.GROUP_DM:
                return A.default.Messages.GROUP_DM;
            case S.ChannelTypes.GUILD_TEXT:
                return A.default.Messages.TEXT_CHANNEL;
            case S.ChannelTypes.GUILD_FORUM:
                return A.default.Messages.FORUM_CHANNEL;
            case S.ChannelTypes.GUILD_MEDIA:
                return A.default.Messages.MEDIA_CHANNEL;
            case S.ChannelTypes.GUILD_VOICE:
                return A.default.Messages.VOICE_CHANNEL;
            case S.ChannelTypes.GUILD_STAGE_VOICE:
                return A.default.Messages.STAGE_CHANNEL;
            case S.ChannelTypes.GUILD_ANNOUNCEMENT:
                return A.default.Messages.NEWS_CHANNEL;
            case S.ChannelTypes.GUILD_STORE:
                return A.default.Messages.STORE_CHANNEL;
            case S.ChannelTypes.GUILD_CATEGORY:
                return A.default.Messages.CATEGORY;
            default:
                return null
        }
    }

    function U(e) {
        if (null == e) return "text";
        let t = e.isMediaChannel();
        if (e.type === S.ChannelTypes.GUILD_VOICE) return c.default.can(S.Permissions.CONNECT, e) ? "voice" : "voice-locked";
        if (e.type === S.ChannelTypes.GUILD_STAGE_VOICE) return c.default.can(S.Permissions.CONNECT, e) ? "stage" : "stage-locked";
        if (u.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
        else if (e.type === S.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
        else if (e.type === S.ChannelTypes.GUILD_MEDIA) return "media";
        else if (u.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
    }

    function b(e) {
        let t;
        let n = d.default.getChannel(E.default.getLastSelectedChannelId());
        if (null != n && n.getGuildId() === e && n.type === S.ChannelTypes.GUILD_TEXT) t = n.id;
        else {
            let n = _.default.getDefaultChannel(e);
            t = null != n ? n.id : null
        }
        return S.Routes.CHANNEL(e, t)
    }

    function G(e, t, n, i) {
        return "".concat(location.protocol, "//").concat(location.host).concat(S.Routes.CHANNEL(e, t, n)).concat(null == i ? "" : "?summaryId=".concat(i))
    }

    function w(e, t, n, i) {
        let r;
        let s = e.getGuildId(),
            a = (0, o.canUseMediaPostEmbed)(s, t);
        if (null != t && a) {
            var l, u, d, _;
            l = s, u = t.id, d = e.id, _ = f.default.castChannelIdAsMessageId(e.id), r = null == l || null == u || null == d ? G(l, u, _) : "".concat(location.protocol, "//").concat(location.host).concat(S.Routes.CHANNEL_THREAD_VIEW(l, u, d, _))
        } else r = null != i ? i : G(s, e.id, n);
        return r
    }
}