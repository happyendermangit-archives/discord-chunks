function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectGuildAnalyticsMetadata: function() {
            return P
        },
        collectChannelAnalyticsMetadataFromId: function() {
            return L
        },
        collectChannelAnalyticsMetadata: function() {
            return M
        },
        collectVoiceAnalyticsMetadata: function() {
            return b
        },
        trackWithMetadata: function() {
            return U
        },
        getChannelOpenedMetadata: function() {
            return w
        },
        getVoiceStateMetadata: function() {
            return k
        },
        getCustomStatusMetadata: function() {
            return V
        },
        default: function() {
            return G
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("316693"),
        a = n("507313"),
        o = n("233069"),
        l = n("271938"),
        u = n("42203"),
        d = n("923959"),
        c = n("525065"),
        f = n("26989"),
        _ = n("305961"),
        h = n("42887"),
        E = n("957255"),
        g = n("824563"),
        m = n("945956"),
        p = n("660478"),
        S = n("18494"),
        v = n("162771"),
        T = n("282109"),
        I = n("800762"),
        C = n("599110"),
        A = n("718517"),
        y = n("991170"),
        N = n("761932"),
        R = n("49111"),
        O = n("724210");

    function D(e) {
        let t = 0;
        for (let n in e) t += 1;
        return t
    }

    function P(e) {
        var t;
        if (null == e) return null;
        let n = _.default.getGuild(e);
        if (null == n) return null;
        let i = l.default.getId(),
            s = f.default.getMember(e, i),
            r = d.default.getChannels(e),
            a = r[d.GUILD_SELECTABLE_CHANNELS_KEY].length,
            o = r[d.GUILD_VOCAL_CHANNELS_KEY].length,
            u = I.default.getVoiceStates(e);
        return {
            guild_id: n.id,
            guild_size_total: c.default.getMemberCount(e),
            guild_num_channels: a + o,
            guild_num_text_channels: a,
            guild_num_voice_channels: o,
            guild_num_roles: D(n.roles),
            guild_member_num_roles: null != s ? s.roles.length : 0,
            guild_member_perms: String(null !== (t = E.default.getGuildPermissions(n)) && void 0 !== t ? t : y.default.NONE),
            guild_is_vip: n.hasFeature(R.GuildFeatures.VIP_REGIONS),
            is_member: null != s,
            num_voice_channels_active: D(u)
        }
    }

    function L(e) {
        if (null == e) return null;
        let t = u.default.getChannel(e);
        return null == t ? null : M(t)
    }

    function M(e) {
        var t;
        if (null == e) return null;
        let n = !1,
            i = e.getGuildId();
        if (null != i) {
            let t = e => {
                if (null == e) return !1;
                let t = e.permissionOverwrites[i];
                return null != t && r.default.has(t.deny, R.Permissions.VIEW_CHANNEL)
            };
            n = o.THREAD_CHANNEL_TYPES.has(e.type) && null != e.parent_id ? t(u.default.getChannel(e.parent_id)) : t(e)
        }
        return {
            channel_id: e.id,
            channel_type: e.type,
            channel_size_total: e.isPrivate() ? e.recipients.length : 0,
            channel_member_perms: String(null != i && null !== (t = E.default.getChannelPermissions(e)) && void 0 !== t ? t : y.default.NONE),
            channel_hidden: n
        }
    }

    function b(e) {
        if (null == e) return null;
        let t = u.default.getChannel(e);
        if (null == t) return null;
        let n = h.default.isVideoEnabled(),
            i = m.default.getMediaSessionId();
        return {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: i,
            ...k(t.getGuildId(), t.id, n),
            ...(0, N.getVoiceAnalyticsMetadataAdditional)()
        }
    }

    function U(e) {
        var t, n, i, s, r;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (C.default.isThrottled(e)) return;
        let l = !("location" in a) || a.location !== R.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
            d = "guild_id" in a ? a.guild_id : l ? v.default.getGuildId() : null,
            c = "channel_id" in a ? a.channel_id : l ? S.default.getChannelId(d) : null,
            f = u.default.getChannel(c);
        let _ = (t = f, n = d, null == t ? null != n ? n : null : t.isPrivate() ? null : null !== (s = null !== (i = t.getGuildId()) && void 0 !== i ? i : n) && void 0 !== s ? s : null);
        let h = {
            ...a,
            ...P(_),
            ...null != d && null != c && (0, O.isStaticChannelRoute)(c) ? (r = 0, {
                channel_static_route: c,
                channel_hidden: !1
            }) : M(f)
        };
        C.default.track(e, h, {
            flush: o
        })
    }

    function w(e) {
        let t = u.default.getChannel(e);
        if (null == t || null == t.guild_id) return {};
        let n = _.default.getGuild(t.guild_id);
        if (null == n) return {};
        let i = p.default.getSnapshot(e, 10 * A.default.Millis.SECOND);
        return {
            channel_was_unread: i.unread,
            channel_mention_count: i.mentionCount,
            channel_is_muted: T.default.isChannelMuted(t.guild_id, t.id),
            channel_resolved_unread_setting: T.default.resolveUnreadSetting(t),
            channel_preset: (0, a.presetFromSettings)(T.default.resolveUnreadSetting(t), T.default.resolvedMessageNotifications(t)),
            guild_was_unread: i.guildUnread,
            guild_mention_count: i.guildMentionCount,
            guild_is_muted: T.default.isMuted(t.guild_id),
            guild_resolved_unread_setting: T.default.resolveGuildUnreadSetting(n),
            guild_preset: (0, a.presetFromSettings)(T.default.resolveGuildUnreadSetting(n), T.default.getMessageNotifications(t.guild_id))
        }
    }

    function k(e, t, n) {
        let i = {
            voice_state_count: 0,
            video_stream_count: 0,
            video_enabled: n
        };
        return s(I.default.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== l.default.getId()).forEach(e => {
            i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++
        }), i
    }

    function V(e, t) {
        let n = {
            custom_status_count: 0
        };
        return s(I.default.getVoiceStates(e)).forEach(e => {
            e.channelId === t && null != g.default.findActivity(e.userId, e => e.type === R.ActivityTypes.CUSTOM_STATUS) && n.custom_status_count++
        }), n
    }
    var G = {
        trackWithMetadata: U,
        getVoiceStateMetadata: k
    }
}