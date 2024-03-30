function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceChannelEffectSentLocation: function() {
            return a
        },
        sendVoiceChannelCustomCallSoundEffect: function() {
            return R
        },
        sendVoiceChannelEffect: function() {
            return P
        },
        sendVoiceChannelSoundboardEffect: function() {
            return C
        }
    });
    var r, o, i, a, u, s = n("392711"),
        l = n("967888"),
        c = n("629815"),
        f = n("649455"),
        d = n("140817"),
        _ = n("300983"),
        E = n("686309"),
        p = n("673186"),
        m = n("894288"),
        y = n("388990"),
        I = n("739226"),
        h = n("792522"),
        O = n("45279"),
        T = n("781984"),
        S = n("992478"),
        v = n("281767"),
        g = n("571336");

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e) {
        var t = new AbortController,
            n = (0, s.throttle)(function(n) {
                m.default.getVoiceChannelId() !== e && t.abort()
            }, 1e3);
        return {
            abortController: t,
            onRequestProgress: n
        }
    }

    function R(e, t, n) {
        var r, o = N(e),
            i = o.abortController,
            a = o.onRequestProgress,
            u = null !== (r = h.default.getState().animationType) && void 0 !== r ? r : S.VoiceChannelEffectAnimationType.BASIC,
            s = {
                animation_type: u,
                animation_id: (0, T.sampleAnimationId)(u, T.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
            };
        l.HTTP.post({
            url: v.Endpoints.CUSTOM_CALL_SOUNDS(e),
            body: s,
            signal: i.signal,
            onRequestProgress: a
        }).then(v.NOOP_NULL, function() {
            if (i.signal.aborted) return
        }), (0, p.default)([f.default.CHANNEL_CALL], n, t, E.AnalyticsSoundType.ENTRY)
    }

    function C(e, t, n, r) {
        var o, i, a = _.default.getCustomEmojiById(null !== (o = t.emojiId) && void 0 !== o ? o : ""),
            u = N(e),
            s = u.abortController,
            c = u.onRequestProgress,
            f = {
                sound_id: t.soundId,
                emoji_id: t.emojiId,
                emoji_name: null !== (i = t.emojiName) && void 0 !== i ? i : null == a ? void 0 : a.name
            };
        t.guildId !== g.DEFAULT_SOUND_GUILD_ID && (f.source_guild_id = t.guildId), l.HTTP.post({
            url: v.Endpoints.SEND_SOUNDBOARD_SOUND(e),
            body: f,
            signal: s.signal,
            onRequestProgress: c
        }).then(v.NOOP_NULL, function() {
            if (s.signal.aborted) return
        }), (0, p.default)(null != r ? r : [], n, t, E.AnalyticsSoundType.DEFAULT)
    }(r = a || (a = {})).EMOJI_PICKER = "emoji_picker", r.EFFECT_BAR = "effect_bar";
    var P = (i = (o = function(e) {
            var t, n, r, o, i, a, u, s, f, d;
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
            }(this, function(_) {
                switch (_.label) {
                    case 0:
                        if (t = e.channel, n = e.emoji, r = e.location, o = e.animationType, i = e.animationId, a = e.isPremium, null == n || O.default.isOnCooldown) return [2];
                        u = a && null != o ? o : S.VoiceChannelEffectAnimationType.BASIC, _.label = 1;
                    case 1:
                        return _.trys.push([1, 3, , 4]), s = null != n.id ? {
                            emoji_id: n.id,
                            emoji_name: n.name,
                            animation_type: u,
                            animation_id: i
                        } : {
                            emoji_id: null,
                            emoji_name: n.optionallyDiverseSequence,
                            animation_type: u,
                            animation_id: i
                        }, [4, l.HTTP.post({
                            url: v.Endpoints.VOICE_CHANNEL_EFFECTS(t.id),
                            body: s
                        })];
                    case 2:
                        return _.sent(), L(t, n, r, u), c.default.dispatch({
                            type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
                        }), [3, 4];
                    case 3:
                        return 429 === (f = _.sent()).status && null != f.body.retry_after && (d = f.body.retry_after * y.default.Millis.SECOND, c.default.dispatch({
                            type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                            cooldownEndsAtMs: d
                        })), [3, 4];
                    case 4:
                        return [2]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(n, r) {
                var i = o.apply(e, t);

                function a(e) {
                    A(i, n, r, a, u, "next", e)
                }

                function u(e) {
                    A(i, n, r, a, u, "throw", e)
                }
                a(void 0)
            })
        }), function(e) {
            return i.apply(this, arguments)
        }),
        D = (b(u = {}, S.VoiceChannelEffectAnimationType.BASIC, "Basic"), b(u, S.VoiceChannelEffectAnimationType.PREMIUM, "Premium"), u),
        L = function(e, t, n, r) {
            var o = (0, I.countEmoji)([t], e.getGuildId()),
                i = o.unicode,
                a = o.custom,
                u = o.customExternal,
                s = o.managed,
                l = o.managedExternal,
                c = o.animated,
                f = D[r];
            d.default.trackWithMetadata(v.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
                channel_id: e.id,
                guild_id: e.getGuildId(),
                location: n,
                emoji_unicode: i,
                emoji_custom: a,
                emoji_custom_external: u,
                emoji_managed: s,
                emoji_managed_external: l,
                emoji_animated: c,
                animation_type: f,
                is_broadcast: e.isBroadcastChannel()
            })
        }
}