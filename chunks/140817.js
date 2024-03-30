function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectChannelAnalyticsMetadata: function() {
            return U
        },
        collectChannelAnalyticsMetadataFromId: function() {
            return M
        },
        collectGuildAnalyticsMetadata: function() {
            return L
        },
        collectVoiceAnalyticsMetadata: function() {
            return w
        },
        getChannelOpenedMetadata: function() {
            return G
        },
        getCustomStatusMetadata: function() {
            return j
        },
        getVoiceStateMetadata: function() {
            return B
        },
        trackWithMetadata: function() {
            return k
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("22287"),
        a = n("99307"),
        u = n("856527"),
        s = n("569492"),
        l = n("217014"),
        c = n("935741"),
        f = n("29604"),
        d = n("382199"),
        _ = n("957808"),
        E = n("306912"),
        p = n("335911"),
        m = n("29884"),
        y = n("868447"),
        I = n("545072"),
        h = n("879547"),
        O = n("894288"),
        T = n("63116"),
        S = n("848957"),
        v = n("665863"),
        g = n("870331"),
        A = n("388990"),
        b = n("359017"),
        N = n("596318"),
        R = n("281767"),
        C = n("928204");

    function P(e) {
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
    }

    function D(e) {
        var t = 0;
        for (var n in e) t += 1;
        return t
    }

    function L(e) {
        if (null == e) return null;
        var t, n = E.default.getGuild(e);
        if (null == n) return null;
        var r = E.default.getRoles(n.id),
            o = l.default.getId(),
            i = _.default.getMember(e, o),
            a = f.default.getChannels(e),
            u = a[f.GUILD_SELECTABLE_CHANNELS_KEY].length,
            s = a[f.GUILD_VOCAL_CHANNELS_KEY].length,
            c = v.default.getVoiceStates(e);
        return {
            guild_id: n.id,
            guild_size_total: d.default.getMemberCount(e),
            guild_num_channels: u + s,
            guild_num_text_channels: u,
            guild_num_voice_channels: s,
            guild_num_roles: D(r),
            guild_member_num_roles: null != i ? i.roles.length : 0,
            guild_member_perms: String(null !== (t = m.default.getGuildPermissions(n)) && void 0 !== t ? t : b.NONE),
            guild_is_vip: n.hasFeature(R.GuildFeatures.VIP_REGIONS),
            is_member: null != i,
            num_voice_channels_active: D(c)
        }
    }

    function M(e) {
        if (null == e) return null;
        var t = c.default.getChannel(e);
        return null == t ? null : U(t)
    }

    function U(e) {
        if (null == e) return null;
        var t, n = !1,
            r = e.getGuildId();
        if (null != r) {
            var o = function(e) {
                if (null == e) return !1;
                var t = e.permissionOverwrites[r];
                return null != t && i.has(t.deny, R.Permissions.VIEW_CHANNEL)
            };
            n = s.THREAD_CHANNEL_TYPES.has(e.type) && null != e.parent_id ? o(c.default.getChannel(e.parent_id)) : o(e)
        }
        return {
            channel_id: e.id,
            channel_type: e.type,
            channel_size_total: e.isPrivate() ? e.recipients.length : 0,
            channel_member_perms: String(null != r && null !== (t = m.default.getChannelPermissions(e)) && void 0 !== t ? t : b.NONE),
            channel_hidden: n
        }
    }

    function w(e) {
        if (null == e) return null;
        var t = c.default.getChannel(e);
        if (null == t) return null;
        var n = p.default.isVideoEnabled(),
            r = I.default.getMediaSessionId();
        return P({
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.getGuildId(),
            media_session_id: r
        }, B(t.getGuildId(), t.id, n), (0, N.getVoiceAnalyticsMetadataAdditional)())
    }

    function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!g.default.isThrottled(e)) {
            var r, o, i, a, u, s = !("location" in t) || t.location !== R.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                l = "guild_id" in t ? t.guild_id : s ? T.default.getGuildId() : null,
                f = "channel_id" in t ? t.channel_id : s ? O.default.getChannelId(l) : null,
                d = c.default.getChannel(f);
            var _ = P({}, t, L((r = d, o = l, null == r ? null != o ? o : null : r.isPrivate() ? null : null !== (a = null !== (i = r.getGuildId()) && void 0 !== i ? i : o) && void 0 !== a ? a : null)), null != l && null != f && (0, C.isStaticChannelRoute)(f) ? (u = 0, {
                channel_static_route: f,
                channel_hidden: !1
            }) : U(d));
            g.default.track(e, _, {
                flush: n
            })
        }
    }

    function G(e) {
        var t = c.default.getChannel(e);
        if (null == t || null == t.guild_id) return {
            channel_id: e
        };
        var n = E.default.getGuild(t.guild_id);
        if (null == n) return {
            channel_id: e
        };
        var r = h.default.getSnapshot(e, 10 * A.default.Millis.SECOND);
        return {
            channel_id: e,
            channel_was_unread: r.unread,
            channel_mention_count: r.mentionCount,
            channel_is_muted: S.default.isChannelMuted(t.guild_id, t.id),
            channel_is_nsfw: t.isNSFW(),
            channel_resolved_unread_setting: S.default.resolveUnreadSetting(t),
            channel_preset: (0, u.presetFromSettings)(S.default.resolveUnreadSetting(t), S.default.resolvedMessageNotifications(t)),
            guild_id: t.guild_id,
            guild_was_unread: r.guildUnread,
            guild_mention_count: r.guildMentionCount,
            guild_is_muted: S.default.isMuted(t.guild_id),
            guild_resolved_unread_setting: S.default.resolveGuildUnreadSetting(n),
            guild_preset: (0, u.presetFromSettings)(S.default.resolveGuildUnreadSetting(n), S.default.getMessageNotifications(t.guild_id)),
            parent_id: t.parent_id,
            parent_channel_type: t.parentChannelThreadType,
            has_pending_member_action: (0, a.hasPendingMemberAction)(t.guild_id, e),
            can_send_message: m.default.can(R.Permissions.SEND_MESSAGES, t)
        }
    }

    function B(e, t, n) {
        var r = {
            voice_state_count: 0,
            video_stream_count: 0,
            video_enabled: n
        };
        return o()(v.default.getVoiceStates(e)).filter(function(e) {
            return e.channelId === t
        }).filter(function(e) {
            return e.userId !== l.default.getId()
        }).forEach(function(e) {
            r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++
        }), r
    }

    function j(e, t) {
        var n = {
            custom_status_count: 0
        };
        return o()(v.default.getVoiceStates(e)).forEach(function(e) {
            e.channelId === t && null != y.default.findActivity(e.userId, function(e) {
                return e.type === R.ActivityTypes.CUSTOM_STATUS
            }) && n.custom_status_count++
        }), n
    }
    t.default = {
        trackWithMetadata: k,
        getVoiceStateMetadata: B
    }
}