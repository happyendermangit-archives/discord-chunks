function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAmplitudinalSoundboardVolume: function() {
            return T
        },
        canUseSoundboardSound: function() {
            return v
        },
        playSound: function() {
            return N
        },
        maybePlayCustomJoinSound: function() {
            return A
        },
        useSoundBoardDismissContentTypes: function() {
            return O
        },
        removeCustomJoinSound: function() {
            return M
        },
        updateCustomJoinSound: function() {
            return R
        },
        trackCustomCallSoundExternallyDeleted: function() {
            return L
        }
    }), n("424973");
    var i = n("65597"),
        l = n("151426"),
        a = n("880553"),
        s = n("845579"),
        r = n("872173"),
        o = n("374363"),
        u = n("229502"),
        d = n("233069"),
        c = n("957255"),
        f = n("697218"),
        p = n("599110"),
        m = n("719923"),
        h = n("158998"),
        x = n("305122"),
        E = n("235004"),
        y = n("389480"),
        g = n("245463"),
        S = n("675961"),
        C = n("846325"),
        I = n("49111");

    function T() {
        var e;
        let t = s.SoundboardSettings.getSetting();
        return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100
    }

    function _(e, t) {
        return (null == t ? void 0 : t.guild_id) == null || c.default.can(I.Permissions.USE_EXTERNAL_SOUNDS, t) || e.guildId === C.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == t ? void 0 : t.guild_id)
    }

    function v(e, t, n) {
        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return (m.default.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === C.DEFAULT_SOUND_GUILD_ID) && _(t, n) && (!i || t.available)
    }

    function N(e, t, n) {
        (0, x.playSoundLocally)(t, e, y.LocalSoundTrigger.SOUNDBOARD), (0, u.sendVoiceChannelSoundboardEffect)(t, e, __OVERLAY__, n)
    }
    async function A(e) {
        let t = f.default.getCurrentUser(),
            n = (0, a.default)(),
            i = (0, S.getCustomJoinSound)(e);
        if (null == n || d.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n.type) || null == i || !m.default.canUseCustomCallSounds(t) || !(0, g.canSelectedVoiceChannelUseSoundboard)()) return;
        await (0, x.maybeFetchSoundboardSounds)();
        let l = i.guildId === C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? C.DEFAULT_SOUND_GUILD_ID : i.guildId,
            s = E.default.getSound(l, i.soundId);
        if (null != s) {
            var r, o;
            if (!_(s, n) || !v(t, s, n, !0)) return null;
            r = s, o = n.id, (0, x.playSoundLocally)(o, r, y.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, u.sendVoiceChannelCustomCallSoundEffect)(o, r, __OVERLAY__)
        }
    }

    function O(e) {
        let {
            isSoundboardButtonDisabled: t = !1
        } = e, n = (0, i.default)([f.default], () => f.default.getCurrentUser()), a = [l.DismissibleContent.SOUNDBOARD_EDUCATION];
        if (!t && ! function() {
                var e, t;
                let n = null !== (t = null === (e = o.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
                return Object.values(n).some(e => null != e.joinSound)
            }()) {
            a.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
            let e = (0, h.ageEligibleForPremiumUpsell)(n);
            (m.default.canUseCustomCallSounds(n) || e) && a.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
        }
        return a
    }

    function M(e, t) {
        (0, r.updateUserGuildSettings)(e, n => {
            n.joinSound = void 0, k({
                guildId: e,
                changeType: y.AnalyticsChangeType.REMOVED,
                soundType: y.AnalyticsSoundType.ENTRY,
                location: t
            })
        }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function R(e, t, n) {
        (0, r.updateUserGuildSettings)(e, i => {
            let l = t.guildId === C.DEFAULT_SOUND_GUILD_ID,
                a = l ? y.AnalyticsSoundSource.DEFAULT : y.AnalyticsSoundSource.CUSTOM,
                s = null != i.joinSound ? y.AnalyticsChangeType.UPDATED : y.AnalyticsChangeType.ADDED;
            i.joinSound = {
                soundId: t.soundId,
                guildId: l ? C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : t.guildId
            }, k({
                guildId: e,
                changeType: s,
                soundSource: a,
                soundType: y.AnalyticsSoundType.ENTRY,
                location: n
            })
        }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function k(e) {
        let {
            guildId: t,
            changeType: n,
            soundType: i,
            soundSource: l,
            location: a
        } = e;
        p.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
            location_stack: a,
            guild_id: "" === t ? 0 : Number(t),
            change_type: n,
            sound_type: i,
            sound_source: l
        })
    }

    function L(e) {
        let {
            location: t
        } = e;
        p.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
            location_stack: t
        })
    }
}