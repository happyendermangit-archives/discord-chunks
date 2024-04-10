function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceChannelEffectSentLocation: function() {
            return r
        },
        sendVoiceChannelCustomCallSoundEffect: function() {
            return p
        },
        sendVoiceChannelEffect: function() {
            return C
        },
        sendVoiceChannelSoundboardEffect: function() {
            return R
        }
    });
    var i, r, s = n("392711"),
        a = n("544891"),
        o = n("570140"),
        l = n("100527"),
        u = n("367907"),
        d = n("339085"),
        _ = n("697426"),
        c = n("100986"),
        E = n("944486"),
        I = n("70956"),
        T = n("176354"),
        f = n("696900"),
        S = n("456631"),
        A = n("963838"),
        h = n("353368"),
        m = n("981631"),
        N = n("710111");

    function O(e) {
        let t = new AbortController,
            n = (0, s.throttle)(n => {
                E.default.getVoiceChannelId() !== e && t.abort()
            }, 1e3);
        return {
            abortController: t,
            onRequestProgress: n
        }
    }

    function p(e, t, n) {
        var i;
        let {
            abortController: r,
            onRequestProgress: s
        } = O(e), o = null !== (i = f.default.getState().animationType) && void 0 !== i ? i : h.VoiceChannelEffectAnimationType.BASIC, u = {
            animation_type: o,
            animation_id: (0, A.sampleAnimationId)(o, A.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
        };
        a.HTTP.post({
            url: m.Endpoints.CUSTOM_CALL_SOUNDS(e),
            body: u,
            signal: r.signal,
            onRequestProgress: s
        }).then(m.NOOP_NULL, () => {
            if (r.signal.aborted) return
        }), (0, c.default)([l.default.CHANNEL_CALL], n, t, _.AnalyticsSoundType.ENTRY)
    }

    function R(e, t, n, i) {
        var r, s;
        let o = d.default.getCustomEmojiById(null !== (r = t.emojiId) && void 0 !== r ? r : ""),
            {
                abortController: l,
                onRequestProgress: u
            } = O(e),
            E = {
                sound_id: t.soundId,
                emoji_id: t.emojiId,
                emoji_name: null !== (s = t.emojiName) && void 0 !== s ? s : null == o ? void 0 : o.name
            };
        t.guildId !== N.DEFAULT_SOUND_GUILD_ID && (E.source_guild_id = t.guildId), a.HTTP.post({
            url: m.Endpoints.SEND_SOUNDBOARD_SOUND(e),
            body: E,
            signal: l.signal,
            onRequestProgress: u
        }).then(m.NOOP_NULL, () => {
            if (l.signal.aborted) return
        }), (0, c.default)(null != i ? i : [], n, t, _.AnalyticsSoundType.DEFAULT)
    }(i = r || (r = {})).EMOJI_PICKER = "emoji_picker", i.EFFECT_BAR = "effect_bar";
    let C = async e => {
        let {
            channel: t,
            emoji: n,
            location: i,
            animationType: r,
            animationId: s,
            isPremium: l
        } = e;
        if (null == n || S.default.isOnCooldown) return;
        let u = l && null != r ? r : h.VoiceChannelEffectAnimationType.BASIC;
        try {
            let e = null != n.id ? {
                emoji_id: n.id,
                emoji_name: n.name,
                animation_type: u,
                animation_id: s
            } : {
                emoji_id: null,
                emoji_name: n.optionallyDiverseSequence,
                animation_type: u,
                animation_id: s
            };
            await a.HTTP.post({
                url: m.Endpoints.VOICE_CHANNEL_EFFECTS(t.id),
                body: e
            }), L(t, n, i, u), o.default.dispatch({
                type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
            })
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let t = e.body.retry_after * I.default.Millis.SECOND;
                o.default.dispatch({
                    type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                    cooldownEndsAtMs: t
                })
            }
        }
    }, g = {
        [h.VoiceChannelEffectAnimationType.BASIC]: "Basic",
        [h.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
    }, L = (e, t, n, i) => {
        let {
            unicode: r,
            custom: s,
            customExternal: a,
            managed: o,
            managedExternal: l,
            animated: d
        } = (0, T.countEmoji)([t], e.getGuildId()), _ = g[i];
        u.default.trackWithMetadata(m.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: n,
            emoji_unicode: r,
            emoji_custom: s,
            emoji_custom_external: a,
            emoji_managed: o,
            emoji_managed_external: l,
            emoji_animated: d,
            animation_type: _,
            is_broadcast: e.isBroadcastChannel()
        })
    }
}