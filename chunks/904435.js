function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getIsSpeaking: function() {
            return c
        }
    });
    var r = n("898511"),
        o = n("452700"),
        i = n("894288"),
        a = n("380019"),
        u = n("665863");

    function s(e, t, n) {
        return e || t || n
    }

    function l(e) {
        var t, n, s, l = e.userId,
            c = e.checkSoundSharing,
            f = void 0 !== c && c,
            d = e.checkSoundboardSounds,
            _ = void 0 === d || d,
            E = e.checkIsMuted,
            p = e.context,
            m = (0, r.useStateFromStores)([u.default, i.default], function() {
                var e = i.default.getVoiceChannelId();
                return null != e ? u.default.getVoiceStateForChannel(e, l) : null
            }),
            y = void 0 !== E && E && ((null == m ? void 0 : m.mute) || (null == m ? void 0 : m.selfMute)),
            I = (0, r.useStateFromStores)([a.default], function() {
                return a.default.isSpeaking(l, p) && !y
            }),
            h = (0, r.useStateFromStores)([a.default], function() {
                return a.default.isSoundSharing(l) && f
            }),
            O = (0, r.useStateFromStores)([o.default], function() {
                return o.default.isUserPlayingSounds(l) && _
            });
        return t = I, n = O, s = h, t || n || s
    }

    function c(e) {
        var t, n, r, s = e.userId,
            l = e.checkSoundSharing,
            c = e.checkSoundboardSounds,
            f = e.checkIsMuted,
            d = e.context,
            _ = i.default.getVoiceChannelId(),
            E = null != _ ? u.default.getVoiceStateForChannel(_, s) : null,
            p = void 0 !== f && f && ((null == E ? void 0 : E.mute) || (null == E ? void 0 : E.selfMute)),
            m = a.default.isSpeaking(s, d) && !p,
            y = a.default.isSoundSharing(s) && void 0 !== l && l,
            I = o.default.isUserPlayingSounds(s) && (void 0 === c || c);
        return t = m, n = I, r = y, t || n || r
    }
}