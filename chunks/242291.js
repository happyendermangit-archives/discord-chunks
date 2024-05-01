function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseSoundboardSound: function() {
            return C
        },
        getAmplitudinalSoundboardVolume: function() {
            return O
        },
        maybePlayCustomJoinSound: function() {
            return L
        },
        playSound: function() {
            return g
        },
        removeCustomJoinSound: function() {
            return D
        },
        trackCustomCallSoundExternallyDeleted: function() {
            return P
        },
        updateCustomJoinSound: function() {
            return M
        },
        useSoundBoardDismissContentTypes: function() {
            return v
        }
    }), n("653041");
    var i = n("399606"),
        r = n("524437"),
        a = n("736045"),
        s = n("695346"),
        o = n("675478"),
        l = n("581883"),
        u = n("401062"),
        d = n("131704"),
        _ = n("496675"),
        c = n("594174"),
        E = n("626135"),
        I = n("74538"),
        T = n("51144"),
        f = n("208049"),
        S = n("763296"),
        h = n("697426"),
        A = n("641015"),
        m = n("893663"),
        N = n("710111"),
        p = n("981631");

    function O() {
        var e;
        let t = s.SoundboardSettings.getSetting();
        return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100
    }

    function R(e, t) {
        return (null == t ? void 0 : t.guild_id) == null || _.default.can(p.Permissions.USE_EXTERNAL_SOUNDS, t) || e.guildId === N.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == t ? void 0 : t.guild_id)
    }

    function C(e, t, n) {
        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return (I.default.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === N.DEFAULT_SOUND_GUILD_ID) && R(t, n) && (!i || t.available)
    }

    function g(e, t, n) {
        (0, f.playSoundLocally)(t, e, h.LocalSoundTrigger.SOUNDBOARD), (0, u.sendVoiceChannelSoundboardEffect)(t, e, __OVERLAY__, n)
    }
    async function L(e) {
        let t = c.default.getCurrentUser(),
            n = (0, a.default)(),
            i = (0, m.getCustomJoinSound)(e);
        if (null == n || d.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n.type) || null == i || !I.default.canUseCustomCallSounds(t) || !(0, A.canSelectedVoiceChannelUseSoundboard)()) return;
        await (0, f.maybeFetchSoundboardSounds)();
        let r = i.guildId === N.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? N.DEFAULT_SOUND_GUILD_ID : i.guildId,
            s = S.default.getSound(r, i.soundId);
        if (null != s) {
            var o, l;
            if (!R(s, n) || !C(t, s, n, !0)) return null;
            o = s, l = n.id, (0, f.playSoundLocally)(l, o, h.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, u.sendVoiceChannelCustomCallSoundEffect)(l, o, __OVERLAY__)
        }
    }

    function v(e) {
        var t, n;
        let {
            isSoundboardButtonDisabled: a = !1
        } = e, s = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser()), o = [r.DismissibleContent.SOUNDBOARD_EDUCATION];
        if (!a && !Object.values(null !== (n = null === (t = l.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {}).some(e => null != e.joinSound)) {
            o.push(r.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
            let e = (0, T.ageEligibleForPremiumUpsell)(s);
            (I.default.canUseCustomCallSounds(s) || e) && o.push(r.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
        }
        return o
    }

    function D(e, t) {
        (0, o.updateUserGuildSettings)(e, n => {
            n.joinSound = void 0, y({
                guildId: e,
                changeType: h.AnalyticsChangeType.REMOVED,
                soundType: h.AnalyticsSoundType.ENTRY,
                location: t
            })
        }, o.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function M(e, t, n) {
        (0, o.updateUserGuildSettings)(e, i => {
            let r = t.guildId === N.DEFAULT_SOUND_GUILD_ID,
                a = r ? h.AnalyticsSoundSource.DEFAULT : h.AnalyticsSoundSource.CUSTOM,
                s = null != i.joinSound ? h.AnalyticsChangeType.UPDATED : h.AnalyticsChangeType.ADDED;
            i.joinSound = {
                soundId: t.soundId,
                guildId: r ? N.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : t.guildId
            }, y({
                guildId: e,
                changeType: s,
                soundSource: a,
                soundType: h.AnalyticsSoundType.ENTRY,
                location: n
            })
        }, o.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function y(e) {
        let {
            guildId: t,
            changeType: n,
            soundType: i,
            soundSource: r,
            location: a
        } = e;
        E.default.track(p.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
            location_stack: a,
            guild_id: "" === t ? 0 : Number(t),
            change_type: n,
            sound_type: i,
            sound_source: r
        })
    }

    function P(e) {
        let {
            location: t
        } = e;
        E.default.track(p.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
            location_stack: t
        })
    }
}