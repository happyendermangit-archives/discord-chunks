function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectGuildAnalyticsMetadata: function() {
            return L
        },
        collectChannelAnalyticsMetadataFromId: function() {
            return M
        },
        collectChannelAnalyticsMetadata: function() {
            return b
        },
        collectVoiceAnalyticsMetadata: function() {
            return U
        },
        trackWithMetadata: function() {
            return w
        },
        getChannelOpenedMetadata: function() {
            return k
        },
        getVoiceStateMetadata: function() {
            return V
        },
        getCustomStatusMetadata: function() {
            return G
        },
        default: function() {
            return F
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("316693"),
        a = n("759971"),
        o = n("507313"),
        l = n("233069"),
        u = n("271938"),
        d = n("42203"),
        c = n("923959"),
        _ = n("525065"),
        f = n("26989"),
        E = n("305961"),
        h = n("42887"),
        g = n("957255"),
        m = n("824563"),
        p = n("945956"),
        S = n("660478"),
        T = n("18494"),
        v = n("162771"),
        I = n("282109"),
        A = n("800762"),
        C = n("599110"),
        y = n("718517"),
        N = n("991170"),
        R = n("761932"),
        O = n("49111"),
        D = n("724210");

    function P(e) {
        let t = 0;
        for (let n in e) t += 1;
        return t
    }

    function L(e) {
        var t;
        if (null == e) return null;
        let n = E.default.getGuild(e);
        if (null == n) return null;
        let i = E.default.getRoles(n.id),
            s = u.default.getId(),
            r = f.default.getMember(e, s),
            a = c.default.getChannels(e),
            o = a[c.GUILD_SELECTABLE_CHANNELS_KEY].length,
            l = a[c.GUILD_VOCAL_CHANNELS_KEY].length,
            d = A.default.getVoiceStates(e);
        return {
            guild_id: n.id,
            guild_size_total: _.default.getMemberCount(e),
            guild_num_channels: o + l,
            guild_num_text_channels: o,
            guild_num_voice_channels: l,
            guild_num_roles: P(i),
            guild_member_num_roles: null != r ? r.roles.length : 0,
            guild_member_perms: String(null !== (t = g.default.getGuildPermissions(n)) && void 0 !== t ? t : N.NONE),
            guild_is_vip: n.hasFeature(O.GuildFeatures.VIP_REGIONS),
            is_member: null != r,
            num_voice_channels_active: P(d)
        }
    }

    function M(e) {
        if (null == e) return null;
        let t = d.default.getChannel(e);
        return null == t ? null : b(t)
    }

    function b(e) {
        var t;
        if (null == e) return null;
        let n = !1,
            i = e.getGuildId();
        if (null != i) {
            let t = e => {
                if (null == e) return !1;
                let t = e.permissionOverwrites[i];
                return null != t && r.has(t.deny, O.Permissions.VIEW_CHANNEL)
            };
            n = l.THREAD_CHANNEL_TYPES.has(e.type) && null != e.parent_id ? t(d.default.getChannel(e.parent_id)) : t(e)
        }
        return {
            channel_id: e.id,
            channel_type: e.type,
            channel_size_total: e.isPrivate() ? e.recipients.length : 0,
            channel_member_perms: String(null != i && null !== (t = g.default.getChannelPermissions(e)) && void 0 !== t ? t : N.NONE),
            channel_hidden: n
        }
    }

    function U(e) {
        if (null == e) return null;
        let t = d.default.getChannel(e);
        if (null == t) return null;
        let n = h.default.isVideoEnabled(),
            i = p.default.getMediaSessionId();
        return {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: i,
            ...V(t.getGuildId(), t.id, n),
            ...(0, R.getVoiceAnalyticsMetadataAdditional)()
        }
    }

    function w(e) {
        var t, n, i, s, r;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (C.default.isThrottled(e)) return;
        let l = !("location" in a) || a.location !== O.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
            u = "guild_id" in a ? a.guild_id : l ? v.default.getGuildId() : null,
            c = "channel_id" in a ? a.channel_id : l ? T.default.getChannelId(u) : null,
            _ = d.default.getChannel(c);
        let f = (t = _, n = u, null == t ? null != n ? n : null : t.isPrivate() ? null : null !== (s = null !== (i = t.getGuildId()) && void 0 !== i ? i : n) && void 0 !== s ? s : null);
        let E = {
            ...a,
            ...L(f),
            ...null != u && null != c && (0, D.isStaticChannelRoute)(c) ? (r = 0, {
                channel_static_route: c,
                channel_hidden: !1
            }) : b(_)
        };
        C.default.track(e, E, {
            flush: o
        })
    }

    function k(e) {
        let t = d.default.getChannel(e);
        if (null == t || null == t.guild_id) return {
            channel_id: e
        };
        let n = E.default.getGuild(t.guild_id);
        if (null == n) return {
            channel_id: e
        };
        let i = S.default.getSnapshot(e, 10 * y.default.Millis.SECOND);
        return {
            channel_id: e,
            channel_was_unread: i.unread,
            channel_mention_count: i.mentionCount,
            channel_is_muted: I.default.isChannelMuted(t.guild_id, t.id),
            channel_is_nsfw: t.isNSFW(),
            channel_resolved_unread_setting: I.default.resolveUnreadSetting(t),
            channel_preset: (0, o.presetFromSettings)(I.default.resolveUnreadSetting(t), I.default.resolvedMessageNotifications(t)),
            guild_id: t.guild_id,
            guild_was_unread: i.guildUnread,
            guild_mention_count: i.guildMentionCount,
            guild_is_muted: I.default.isMuted(t.guild_id),
            guild_resolved_unread_setting: I.default.resolveGuildUnreadSetting(n),
            guild_preset: (0, o.presetFromSettings)(I.default.resolveGuildUnreadSetting(n), I.default.getMessageNotifications(t.guild_id)),
            parent_id: t.parent_id,
            parent_channel_type: t.parentChannelThreadType,
            has_pending_member_action: (0, a.hasPendingMemberAction)(t.guild_id, e),
            can_send_message: g.default.can(O.Permissions.SEND_MESSAGES, t)
        }
    }

    function V(e, t, n) {
        let i = {
            voice_state_count: 0,
            video_stream_count: 0,
            video_enabled: n
        };
        return s(A.default.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== u.default.getId()).forEach(e => {
            i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++
        }), i
    }

    function G(e, t) {
        let n = {
            custom_status_count: 0
        };
        return s(A.default.getVoiceStates(e)).forEach(e => {
            e.channelId === t && null != m.default.findActivity(e.userId, e => e.type === O.ActivityTypes.CUSTOM_STATUS) && n.custom_status_count++
        }), n
    }
    var F = {
        trackWithMetadata: w,
        getVoiceStateMetadata: V
    }
}