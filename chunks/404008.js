function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        permissionOverwritesForRoles: function() {
            return h
        },
        permissionOverwriteForUser: function() {
            return P
        },
        permissionOverwriteForRole: function() {
            return g
        },
        permissionOverwritesForAnnouncement: function() {
            return m
        },
        isChannelFull: function() {
            return y
        },
        sanitizeGuildTextChannelName: function() {
            return l.default
        },
        getBitrateLimit: function() {
            return D
        },
        computeSummarizedVoiceUsers: function() {
            return v
        },
        channelTypeString: function() {
            return U
        },
        getMentionIconType: function() {
            return M
        },
        previousTextChannelRouteForGuild: function() {
            return G
        },
        getChannelPermalink: function() {
            return B
        },
        getChannelLinkToCopy: function() {
            return w
        }
    }), n("70102"), n("424973"), n("222007");
    var r = n("316693"),
        i = n("798609"),
        l = n("364480"),
        u = n("89073"),
        a = n("711326"),
        o = n("808422"),
        s = n("233069"),
        d = n("42203"),
        E = n("923959"),
        _ = n("957255"),
        c = n("18494"),
        I = n("316133"),
        S = n("991170"),
        T = n("299039"),
        f = n("49111"),
        p = n("646718"),
        N = n("782340");
    let {
        GUILD_VOICE: A,
        GUILD_CATEGORY: R,
        GUILD_STAGE_VOICE: C
    } = f.ChannelTypes;

    function L(e, t) {
        return e === t || e === R
    }

    function O(e, t, n) {
        let i = S.default.NONE;
        return ((0, s.isGuildSelectableChannelType)(t) || t === R) && (i = r.default.add(i, f.Permissions.VIEW_CHANNEL)), (L(t, A) || L(t, C)) && (i = r.default.add(i, f.Permissions.VIEW_CHANNEL), i = r.default.add(i, f.Permissions.CONNECT)), {
            id: e,
            type: n,
            deny: S.default.NONE,
            allow: i
        }
    }

    function h(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = [];
        if (n.length > 0 || l) {
            var a, o, d;
            let n;
            u.push((a = e, o = t, d = i.PermissionOverwriteType.ROLE, n = S.default.NONE, ((0, s.isGuildSelectableChannelType)(o) || o === R) && (n = r.default.add(n, f.Permissions.VIEW_CHANNEL)), L(o, A) && (n = r.default.add(n, f.Permissions.VIEW_CHANNEL), n = r.default.add(n, f.Permissions.CONNECT)), {
                id: a,
                type: d,
                allow: S.default.NONE,
                deny: n
            }))
        }
        return n.forEach(e => {
            u.push(O(e, t, i.PermissionOverwriteType.ROLE))
        }), u
    }

    function P(e, t) {
        return O(e, t, i.PermissionOverwriteType.MEMBER)
    }

    function g(e, t) {
        return O(e, t, i.PermissionOverwriteType.ROLE)
    }

    function m(e) {
        return [{
            id: e,
            type: i.PermissionOverwriteType.ROLE,
            deny: f.Permissions.SEND_MESSAGES,
            allow: S.default.NONE
        }]
    }

    function y(e, t, n) {
        var r, i;
        let l = e.getGuildId(),
            a = n.getGuild(l),
            o = null !== (r = null == a ? void 0 : a.maxVideoChannelUsers) && void 0 !== r ? r : -1,
            s = null !== (i = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
            d = I.default.countVoiceStatesForChannel(e.id),
            E = I.default.getVoiceStatesForChannel(e),
            c = _.default.can(f.Permissions.MOVE_MEMBERS, e) && _.default.can(f.Permissions.CONNECT, e),
            S = !1;
        S = e.type === C ? null != l && (t.hasVideo(e.id) || (0, u.hasStream)(E)) && s > 0 && d >= s : null != l && t.hasVideo(e.id) && o > 0 && d >= o + (c ? 1 : 0);
        let T = e.userLimit > 0 && d >= e.userLimit;
        return S || T && !c
    }

    function D(e, t) {
        return t.isGuildStageVoice() ? f.BITRATE_DEFAULT : null == e ? f.BITRATE_MAX : Math.max(e.hasFeature(f.GuildFeatures.VIP_REGIONS) ? p.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.bitrate : f.BITRATE_MAX, p.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
    }

    function v(e) {
        let {
            channels: t,
            selectedChannelId: n,
            selectedVoiceChannelId: r,
            voiceStates: i
        } = e, l = function(e) {
            let {
                channels: t,
                selectedChannelId: n,
                selectedVoiceChannelId: r,
                voiceStates: i
            } = e, l = [];
            return t.forEach(e => {
                if (e.id === r || e.id === n) return;
                let t = i[e.id];
                null != t && (e.isGuildStageVoice() ? t.forEach(e => {
                    (0, o.getAudienceRequestToSpeakState)(e.voiceState) === o.RequestToSpeakStates.ON_STAGE && l.push(e)
                }) : t.forEach(e => l.push(e)))
            }), l
        }({
            channels: t,
            selectedChannelId: n,
            selectedVoiceChannelId: r,
            voiceStates: i
        });
        return l.map(e => e.user)
    }

    function U(e) {
        let {
            type: t
        } = e;
        switch (t) {
            case f.ChannelTypes.DM:
                return N.default.Messages.DM;
            case f.ChannelTypes.GROUP_DM:
                return N.default.Messages.GROUP_DM;
            case f.ChannelTypes.GUILD_TEXT:
                return N.default.Messages.TEXT_CHANNEL;
            case f.ChannelTypes.GUILD_FORUM:
                return N.default.Messages.FORUM_CHANNEL;
            case f.ChannelTypes.GUILD_MEDIA:
                return N.default.Messages.MEDIA_CHANNEL;
            case f.ChannelTypes.GUILD_VOICE:
                return N.default.Messages.VOICE_CHANNEL;
            case f.ChannelTypes.GUILD_STAGE_VOICE:
                return N.default.Messages.STAGE_CHANNEL;
            case f.ChannelTypes.GUILD_ANNOUNCEMENT:
                return N.default.Messages.NEWS_CHANNEL;
            case f.ChannelTypes.GUILD_STORE:
                return N.default.Messages.STORE_CHANNEL;
            case f.ChannelTypes.GUILD_CATEGORY:
                return N.default.Messages.CATEGORY;
            default:
                return null
        }
    }

    function M(e) {
        if (null == e) return "text";
        let t = e.isMediaChannel();
        if (e.type === f.ChannelTypes.GUILD_VOICE) return _.default.can(f.Permissions.CONNECT, e) ? "voice" : "voice-locked";
        if (e.type === f.ChannelTypes.GUILD_STAGE_VOICE) return _.default.can(f.Permissions.CONNECT, e) ? "stage" : "stage-locked";
        if (s.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
        else if (e.type === f.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
        else if (e.type === f.ChannelTypes.GUILD_MEDIA) return "media";
        else if (s.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
    }

    function G(e) {
        let t;
        let n = d.default.getChannel(c.default.getLastSelectedChannelId());
        if (null != n && n.getGuildId() === e && n.type === f.ChannelTypes.GUILD_TEXT) t = n.id;
        else {
            let n = E.default.getDefaultChannel(e);
            t = null != n ? n.id : null
        }
        return f.Routes.CHANNEL(e, t)
    }

    function B(e, t, n, r) {
        return "".concat(location.protocol, "//").concat(location.host).concat(f.Routes.CHANNEL(e, t, n)).concat(null == r ? "" : "?summaryId=".concat(r))
    }

    function w(e, t, n, r) {
        let i;
        let l = e.getGuildId(),
            u = (0, a.canUseMediaPostEmbed)(l, t);
        if (null != t && u) {
            var o, s, d, E;
            o = l, s = t.id, d = e.id, E = T.default.castChannelIdAsMessageId(e.id), i = null == o || null == s || null == d ? B(o, s, E) : "".concat(location.protocol, "//").concat(location.host).concat(f.Routes.CHANNEL_THREAD_VIEW(o, s, d, E))
        } else i = null != r ? r : B(l, e.id, n);
        return i
    }
}