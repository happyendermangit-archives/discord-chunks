function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceChannelEffectSentLocation: function() {
            return l
        },
        sendVoiceChannelCustomCallSoundEffect: function() {
            return I
        },
        sendVoiceChannelSoundboardEffect: function() {
            return T
        },
        sendVoiceChannelEffect: function() {
            return v
        }
    });
    var i, l, a = n("917351"),
        s = n("872717"),
        r = n("913144"),
        o = n("812204"),
        u = n("716241"),
        d = n("385976"),
        c = n("389480"),
        f = n("454614"),
        p = n("18494"),
        m = n("718517"),
        h = n("402671"),
        x = n("82230"),
        E = n("568088"),
        y = n("397485"),
        g = n("626334"),
        S = n("49111"),
        C = n("846325");

    function _(e) {
        let t = new AbortController,
            n = (0, a.throttle)(n => {
                p.default.getVoiceChannelId() !== e && t.abort()
            }, 1e3);
        return {
            abortController: t,
            onRequestProgress: n
        }
    }

    function I(e, t, n) {
        var i;
        let {
            abortController: l,
            onRequestProgress: a
        } = _(e), r = null !== (i = x.default.getState().animationType) && void 0 !== i ? i : g.VoiceChannelEffectAnimationType.BASIC, u = {
            animation_type: r,
            animation_id: (0, y.sampleAnimationId)(r, y.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
        };
        s.default.post({
            url: S.Endpoints.CUSTOM_CALL_SOUNDS(e),
            body: u,
            signal: l.signal,
            onRequestProgress: a
        }).then(S.NOOP_NULL, () => {
            if (l.signal.aborted) return
        }), (0, f.default)([o.default.CHANNEL_CALL], n, t, c.AnalyticsSoundType.ENTRY)
    }

    function T(e, t, n, i) {
        var l, a;
        let r = d.default.getCustomEmojiById(null !== (l = t.emojiId) && void 0 !== l ? l : ""),
            {
                abortController: o,
                onRequestProgress: u
            } = _(e),
            p = {
                sound_id: t.soundId,
                emoji_id: t.emojiId,
                emoji_name: null !== (a = t.emojiName) && void 0 !== a ? a : null == r ? void 0 : r.name
            };
        t.guildId !== C.DEFAULT_SOUND_GUILD_ID && (p.source_guild_id = t.guildId), s.default.post({
            url: S.Endpoints.SEND_SOUNDBOARD_SOUND(e),
            body: p,
            signal: o.signal,
            onRequestProgress: u
        }).then(S.NOOP_NULL, () => {
            if (o.signal.aborted) return
        }), (0, f.default)(null != i ? i : [], n, t, c.AnalyticsSoundType.DEFAULT)
    }(i = l || (l = {})).EMOJI_PICKER = "emoji_picker", i.EFFECT_BAR = "effect_bar";
    let v = async e => {
        let {
            channel: t,
            emoji: n,
            location: i,
            animationType: l,
            animationId: a,
            isPremium: o
        } = e;
        if (null == n || E.default.isOnCooldown) return;
        let u = o && null != l ? l : g.VoiceChannelEffectAnimationType.BASIC;
        try {
            let e = null != n.id ? {
                emoji_id: n.id,
                emoji_name: n.name,
                animation_type: u,
                animation_id: a
            } : {
                emoji_id: null,
                emoji_name: n.optionallyDiverseSequence,
                animation_type: u,
                animation_id: a
            };
            await s.default.post({
                url: S.Endpoints.VOICE_CHANNEL_EFFECTS(t.id),
                body: e
            }), A(t, n, i, u), r.default.dispatch({
                type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
            })
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let t = e.body.retry_after * m.default.Millis.SECOND;
                r.default.dispatch({
                    type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                    cooldownEndsAtMs: t
                })
            }
        }
    }, N = {
        [g.VoiceChannelEffectAnimationType.BASIC]: "Basic",
        [g.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
    }, A = (e, t, n, i) => {
        let {
            unicode: l,
            custom: a,
            customExternal: s,
            managed: r,
            managedExternal: o,
            animated: d
        } = (0, h.countEmoji)([t], e.getGuildId()), c = N[i];
        u.default.trackWithMetadata(S.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: n,
            emoji_unicode: l,
            emoji_custom: a,
            emoji_custom_external: s,
            emoji_managed: r,
            emoji_managed_external: o,
            emoji_animated: d,
            animation_type: c,
            is_broadcast: e.isBroadcastChannel()
        })
    }
}