function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectChannelAnalyticsMetadata: function() {
            return U
        },
        collectChannelAnalyticsMetadataFromId: function() {
            return P
        },
        collectGuildAnalyticsMetadata: function() {
            return y
        },
        collectVoiceAnalyticsMetadata: function() {
            return b
        },
        getChannelOpenedMetadata: function() {
            return w
        },
        getCustomStatusMetadata: function() {
            return B
        },
        getVoiceStateMetadata: function() {
            return k
        },
        trackWithMetadata: function() {
            return G
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("149765"),
        a = n("50244"),
        o = n("686660"),
        l = n("131704"),
        u = n("314897"),
        d = n("592125"),
        _ = n("984933"),
        c = n("650774"),
        E = n("271383"),
        I = n("430824"),
        T = n("131951"),
        f = n("496675"),
        S = n("158776"),
        h = n("19780"),
        A = n("306680"),
        m = n("944486"),
        N = n("914010"),
        O = n("9156"),
        p = n("979651"),
        R = n("626135"),
        C = n("70956"),
        g = n("700785"),
        L = n("546416"),
        D = n("981631"),
        v = n("176505");

    function M(e) {
        let t = 0;
        for (let n in e) t += 1;
        return t
    }

    function y(e) {
        var t;
        if (null == e) return null;
        let n = I.default.getGuild(e);
        if (null == n) return null;
        let i = I.default.getRoles(n.id),
            r = u.default.getId(),
            s = E.default.getMember(e, r),
            a = _.default.getChannels(e),
            o = a[_.GUILD_SELECTABLE_CHANNELS_KEY].length,
            l = a[_.GUILD_VOCAL_CHANNELS_KEY].length,
            d = p.default.getVoiceStates(e);
        return {
            guild_id: n.id,
            guild_size_total: c.default.getMemberCount(e),
            guild_num_channels: o + l,
            guild_num_text_channels: o,
            guild_num_voice_channels: l,
            guild_num_roles: M(i),
            guild_member_num_roles: null != s ? s.roles.length : 0,
            guild_member_perms: String(null !== (t = f.default.getGuildPermissions(n)) && void 0 !== t ? t : g.NONE),
            guild_is_vip: n.hasFeature(D.GuildFeatures.VIP_REGIONS),
            is_member: null != s,
            num_voice_channels_active: M(d)
        }
    }

    function P(e) {
        if (null == e) return null;
        let t = d.default.getChannel(e);
        return null == t ? null : U(t)
    }

    function U(e) {
        var t;
        if (null == e) return null;
        let n = !1,
            i = e.getGuildId();
        if (null != i) {
            let t = e => {
                if (null == e) return !1;
                let t = e.permissionOverwrites[i];
                return null != t && s.has(t.deny, D.Permissions.VIEW_CHANNEL)
            };
            n = l.THREAD_CHANNEL_TYPES.has(e.type) && null != e.parent_id ? t(d.default.getChannel(e.parent_id)) : t(e)
        }
        return {
            channel_id: e.id,
            channel_type: e.type,
            channel_size_total: e.isPrivate() ? e.recipients.length : 0,
            channel_member_perms: String(null != i && null !== (t = f.default.getChannelPermissions(e)) && void 0 !== t ? t : g.NONE),
            channel_hidden: n
        }
    }

    function b(e) {
        if (null == e) return null;
        let t = d.default.getChannel(e);
        if (null == t) return null;
        let n = T.default.isVideoEnabled(),
            i = h.default.getMediaSessionId();
        return {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: i,
            ...k(t.getGuildId(), t.id, n),
            ...(0, L.getVoiceAnalyticsMetadataAdditional)()
        }
    }

    function G(e) {
        var t, n, i, r, s;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (R.default.isThrottled(e)) return;
        let l = !("location" in a) || a.location !== D.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
            u = "guild_id" in a ? a.guild_id : l ? N.default.getGuildId() : null,
            _ = "channel_id" in a ? a.channel_id : l ? m.default.getChannelId(u) : null,
            c = d.default.getChannel(_);
        let E = (t = c, n = u, null == t ? null != n ? n : null : t.isPrivate() ? null : null !== (r = null !== (i = t.getGuildId()) && void 0 !== i ? i : n) && void 0 !== r ? r : null);
        let I = {
            ...a,
            ...y(E),
            ...null != u && null != _ && (0, v.isStaticChannelRoute)(_) ? (s = 0, {
                channel_static_route: _,
                channel_hidden: !1
            }) : U(c)
        };
        R.default.track(e, I, {
            flush: o
        })
    }

    function w(e) {
        let t = d.default.getChannel(e);
        if (null == t || null == t.guild_id) return {
            channel_id: e
        };
        let n = I.default.getGuild(t.guild_id);
        if (null == n) return {
            channel_id: e
        };
        let i = A.default.getSnapshot(e, 10 * C.default.Millis.SECOND);
        return {
            channel_id: e,
            channel_was_unread: i.unread,
            channel_mention_count: i.mentionCount,
            channel_is_muted: O.default.isChannelMuted(t.guild_id, t.id),
            channel_is_nsfw: t.isNSFW(),
            channel_resolved_unread_setting: O.default.resolveUnreadSetting(t),
            channel_preset: (0, o.presetFromSettings)(O.default.resolveUnreadSetting(t), O.default.resolvedMessageNotifications(t)),
            guild_id: t.guild_id,
            guild_was_unread: i.guildUnread,
            guild_mention_count: i.guildMentionCount,
            guild_is_muted: O.default.isMuted(t.guild_id),
            guild_resolved_unread_setting: O.default.resolveGuildUnreadSetting(n),
            guild_preset: (0, o.presetFromSettings)(O.default.resolveGuildUnreadSetting(n), O.default.getMessageNotifications(t.guild_id)),
            parent_id: t.parent_id,
            parent_channel_type: t.parentChannelThreadType,
            has_pending_member_action: (0, a.hasPendingMemberAction)(t.guild_id, e),
            can_send_message: f.default.can(D.Permissions.SEND_MESSAGES, t)
        }
    }

    function k(e, t, n) {
        let i = {
            voice_state_count: 0,
            video_stream_count: 0,
            video_enabled: n
        };
        return r()(p.default.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== u.default.getId()).forEach(e => {
            i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++
        }), i
    }

    function B(e, t) {
        let n = {
            custom_status_count: 0
        };
        return r()(p.default.getVoiceStates(e)).forEach(e => {
            e.channelId === t && null != S.default.findActivity(e.userId, e => e.type === D.ActivityTypes.CUSTOM_STATUS) && n.custom_status_count++
        }), n
    }
    t.default = {
        trackWithMetadata: G,
        getVoiceStateMetadata: k
    }
}