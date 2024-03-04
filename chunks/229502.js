function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceChannelEffectSentLocation: function() {
            return i
        },
        sendVoiceChannelCustomCallSoundEffect: function() {
            return _
        },
        sendVoiceChannelSoundboardEffect: function() {
            return N
        },
        sendVoiceChannelEffect: function() {
            return A
        }
    });
    var l, i, a = n("917351"),
        s = n("872717"),
        r = n("913144"),
        o = n("812204"),
        u = n("716241"),
        d = n("385976"),
        c = n("389480"),
        f = n("454614"),
        m = n("18494"),
        p = n("718517"),
        h = n("402671"),
        E = n("82230"),
        g = n("568088"),
        C = n("397485"),
        S = n("626334"),
        T = n("49111"),
        v = n("846325");

    function I(e) {
        let t = new AbortController,
            n = (0, a.throttle)(n => {
                m.default.getVoiceChannelId() !== e && t.abort()
            }, 1e3);
        return {
            abortController: t,
            onRequestProgress: n
        }
    }

    function _(e, t, n) {
        var l;
        let {
            abortController: i,
            onRequestProgress: a
        } = I(e), r = null !== (l = E.default.getState().animationType) && void 0 !== l ? l : S.VoiceChannelEffectAnimationType.BASIC, u = {
            animation_type: r,
            animation_id: (0, C.sampleAnimationId)(r, C.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
        };
        s.default.post({
            url: T.Endpoints.CUSTOM_CALL_SOUNDS(e),
            body: u,
            signal: i.signal,
            onRequestProgress: a
        }).then(T.NOOP_NULL, () => {
            if (i.signal.aborted) return
        }), (0, f.default)([o.default.CHANNEL_CALL], n, t, c.AnalyticsSoundType.ENTRY)
    }

    function N(e, t, n, l) {
        var i, a;
        let r = d.default.getCustomEmojiById(null !== (i = t.emojiId) && void 0 !== i ? i : ""),
            {
                abortController: o,
                onRequestProgress: u
            } = I(e),
            m = {
                sound_id: t.soundId,
                emoji_id: t.emojiId,
                emoji_name: null !== (a = t.emojiName) && void 0 !== a ? a : null == r ? void 0 : r.name
            };
        t.guildId !== v.DEFAULT_SOUND_GUILD_ID && (m.source_guild_id = t.guildId), s.default.post({
            url: T.Endpoints.SEND_SOUNDBOARD_SOUND(e),
            body: m,
            signal: o.signal,
            onRequestProgress: u
        }).then(T.NOOP_NULL, () => {
            if (o.signal.aborted) return
        }), (0, f.default)(null != l ? l : [], n, t, c.AnalyticsSoundType.DEFAULT)
    }(l = i || (i = {})).EMOJI_PICKER = "emoji_picker", l.EFFECT_BAR = "effect_bar";
    let A = async e => {
        let {
            channel: t,
            emoji: n,
            location: l,
            animationType: i,
            animationId: a,
            isPremium: o
        } = e;
        if (null == n || g.default.isOnCooldown) return;
        let u = o && null != i ? i : S.VoiceChannelEffectAnimationType.BASIC;
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
                url: T.Endpoints.VOICE_CHANNEL_EFFECTS(t.id),
                body: e
            }), y(t, n, l, u), r.default.dispatch({
                type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
            })
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let t = e.body.retry_after * p.default.Millis.SECOND;
                r.default.dispatch({
                    type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                    cooldownEndsAtMs: t
                })
            }
        }
    }, x = {
        [S.VoiceChannelEffectAnimationType.BASIC]: "Basic",
        [S.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
    }, y = (e, t, n, l) => {
        let {
            unicode: i,
            custom: a,
            customExternal: s,
            managed: r,
            managedExternal: o,
            animated: d
        } = (0, h.countEmoji)([t], e.getGuildId()), c = x[l];
        u.default.trackWithMetadata(T.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: n,
            emoji_unicode: i,
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