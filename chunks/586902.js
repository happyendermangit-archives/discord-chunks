function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getIsSpeaking: function() {
            return d
        }
    });
    var i = n("442837"),
        r = n("763296"),
        s = n("944486"),
        a = n("606304"),
        o = n("979651");

    function l(e, t, n) {
        return e || t || n
    }

    function u(e) {
        var t, n, l;
        let {
            userId: u,
            checkSoundSharing: d = !1,
            checkSoundboardSounds: _ = !0,
            checkIsMuted: c = !1,
            context: E
        } = e, I = (0, i.useStateFromStores)([o.default, s.default], () => {
            let e = s.default.getVoiceChannelId();
            return null != e ? o.default.getVoiceStateForChannel(e, u) : null
        }), T = c && ((null == I ? void 0 : I.mute) || (null == I ? void 0 : I.selfMute)), f = (0, i.useStateFromStores)([a.default], () => a.default.isSpeaking(u, E) && !T), S = (0, i.useStateFromStores)([a.default], () => a.default.isSoundSharing(u) && d), A = (0, i.useStateFromStores)([r.default], () => r.default.isUserPlayingSounds(u) && _);
        return t = f, n = A, l = S, t || n || l
    }

    function d(e) {
        var t, n, i;
        let {
            userId: l,
            checkSoundSharing: u = !1,
            checkSoundboardSounds: d = !0,
            checkIsMuted: _ = !1,
            context: c
        } = e, E = s.default.getVoiceChannelId(), I = null != E ? o.default.getVoiceStateForChannel(E, l) : null, T = _ && ((null == I ? void 0 : I.mute) || (null == I ? void 0 : I.selfMute)), f = a.default.isSpeaking(l, c) && !T, S = a.default.isSoundSharing(l) && u, A = r.default.isUserPlayingSounds(l) && d;
        return t = f, n = A, i = S, t || n || i
    }
}