function(e, _, E) {
    "use strict";
    let t, o;
    E.r(_), E.d(_, {
        default: function() {
            return A
        }
    }), E("808653");
    var n = E("446674"),
        r = E("95410"),
        a = E("913144"),
        i = E("42203"),
        I = E("305961");
    let s = "hideSuppressWarning",
        T = !1,
        S = !0,
        N = !1;
    class O extends n.default.Store {
        initialize() {
            N = r.Storage.get(s) || N
        }
        isAFKChannel() {
            let e = i.default.getChannel(o);
            if (null == e) return !1;
            let _ = I.default.getGuild(e.getGuildId());
            return null != _ && e.id === _.afkChannelId
        }
        shouldShowWarning() {
            var e;
            return !(null === (e = i.default.getChannel(o)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !S
        }
    }
    O.displayName = "PermissionSpeakStore";
    var A = new O(a.default, {
        CONNECTION_OPEN: function(e) {
            t = e.sessionId, T = !1
        },
        CONNECTION_CLOSED: function() {
            t = null, o = null, S = !0
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: _
            } = e;
            return _.reduce((e, _) => t !== _.sessionId ? e : (T !== _.suppress && (S = !(T = _.suppress)), o !== _.channelId && (o = _.channelId, S = !T), (N || null == _.channelId) && (S = !0), !0), !1)
        },
        PERMISSION_CLEAR_SUPPRESS_WARNING: function(e) {
            let {
                forever: _
            } = e;
            S = !0, _ && (N = !0, r.Storage.set(s, N))
        }
    })
}