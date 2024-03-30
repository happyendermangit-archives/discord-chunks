function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseSoundboardSound: function() {
            return b
        },
        getAmplitudinalSoundboardVolume: function() {
            return g
        },
        maybePlayCustomJoinSound: function() {
            return R
        },
        playSound: function() {
            return N
        },
        removeCustomJoinSound: function() {
            return D
        },
        trackCustomCallSoundExternallyDeleted: function() {
            return U
        },
        updateCustomJoinSound: function() {
            return L
        },
        useSoundBoardDismissContentTypes: function() {
            return P
        }
    });
    var r = n("37295"),
        o = n("14782"),
        i = n("518305"),
        a = n("53867"),
        u = n("968574"),
        s = n("851285"),
        l = n("402744"),
        c = n("569492"),
        f = n("29884"),
        d = n("208454"),
        _ = n("870331"),
        E = n("830721"),
        p = n("830567"),
        m = n("14253"),
        y = n("452700"),
        I = n("686309"),
        h = n("111272"),
        O = n("625873"),
        T = n("571336"),
        S = n("281767");

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g() {
        var e, t = a.SoundboardSettings.getSetting();
        return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100
    }

    function A(e, t) {
        return (null == t ? void 0 : t.guild_id) == null || f.default.can(S.Permissions.USE_EXTERNAL_SOUNDS, t) || e.guildId === T.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == t ? void 0 : t.guild_id)
    }

    function b(e, t, n) {
        var r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return (E.default.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === T.DEFAULT_SOUND_GUILD_ID) && A(t, n) && (!r || t.available)
    }

    function N(e, t, n) {
        (0, m.playSoundLocally)(t, e, I.LocalSoundTrigger.SOUNDBOARD), (0, l.sendVoiceChannelSoundboardEffect)(t, e, __OVERLAY__, n)
    }

    function R(e) {
        return C.apply(this, arguments)
    }

    function C() {
        var e;
        return e = function(e) {
            var t, n, r, o, a;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(u) {
                switch (u.label) {
                    case 0:
                        if (t = d.default.getCurrentUser(), n = (0, i.default)(), r = (0, O.getCustomJoinSound)(e), null == n || c.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n.type) || null == r || !E.default.canUseCustomCallSounds(t) || !(0, h.canSelectedVoiceChannelUseSoundboard)()) return [2];
                        return [4, (0, m.maybeFetchSoundboardSounds)()];
                    case 1:
                        var s, f;
                        if (u.sent(), o = r.guildId === T.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? T.DEFAULT_SOUND_GUILD_ID : r.guildId, null == (a = y.default.getSound(o, r.soundId))) return [2];
                        if (!A(a, n) || !b(t, a, n, !0)) return [2, null];
                        return s = a, f = n.id, (0, m.playSoundLocally)(f, s, I.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, l.sendVoiceChannelCustomCallSoundEffect)(f, s, __OVERLAY__), [2]
                }
            })
        }, (C = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    v(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    v(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function P(e) {
        var t, n, i = e.isSoundboardButtonDisabled,
            a = (0, r.useStateFromStores)([d.default], function() {
                return d.default.getCurrentUser()
            }),
            u = [o.DismissibleContent.SOUNDBOARD_EDUCATION];
        if (!(void 0 !== i && i) && !Object.values(null !== (n = null === (t = s.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {}).some(function(e) {
                return null != e.joinSound
            })) {
            u.push(o.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
            var l = (0, p.ageEligibleForPremiumUpsell)(a);
            (E.default.canUseCustomCallSounds(a) || l) && u.push(o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
        }
        return u
    }

    function D(e, t) {
        (0, u.updateUserGuildSettings)(e, function(n) {
            n.joinSound = void 0, M({
                guildId: e,
                changeType: I.AnalyticsChangeType.REMOVED,
                soundType: I.AnalyticsSoundType.ENTRY,
                location: t
            })
        }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function L(e, t, n) {
        (0, u.updateUserGuildSettings)(e, function(r) {
            var o = t.guildId === T.DEFAULT_SOUND_GUILD_ID,
                i = o ? I.AnalyticsSoundSource.DEFAULT : I.AnalyticsSoundSource.CUSTOM,
                a = null != r.joinSound ? I.AnalyticsChangeType.UPDATED : I.AnalyticsChangeType.ADDED;
            r.joinSound = {
                soundId: t.soundId,
                guildId: o ? T.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : t.guildId
            }, M({
                guildId: e,
                changeType: a,
                soundSource: i,
                soundType: I.AnalyticsSoundType.ENTRY,
                location: n
            })
        }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function M(e) {
        var t = e.guildId,
            n = e.changeType,
            r = e.soundType,
            o = e.soundSource,
            i = e.location;
        _.default.track(S.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
            location_stack: i,
            guild_id: "" === t ? 0 : Number(t),
            change_type: n,
            sound_type: r,
            sound_source: o
        })
    }

    function U(e) {
        var t = e.location;
        _.default.track(S.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
            location_stack: t
        })
    }
}