function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("724458");
    var s, a, o, l, u = n("442837"),
        d = n("433517"),
        _ = n("570140"),
        c = n("592125"),
        E = n("430824");
    let I = "hideSuppressWarning",
        T = !1,
        f = !0,
        S = !1;
    class h extends(s = u.default.Store) {
        initialize() {
            S = d.Storage.get(I) || S
        }
        isAFKChannel() {
            let e = c.default.getChannel(r);
            if (null == e) return !1;
            let t = E.default.getGuild(e.getGuildId());
            return null != t && e.id === t.afkChannelId
        }
        shouldShowWarning() {
            var e;
            return !(null === (e = c.default.getChannel(r)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !f
        }
    }
    l = "PermissionSpeakStore", (o = "displayName") in(a = h) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new h(_.default, {
        CONNECTION_OPEN: function(e) {
            i = e.sessionId, T = !1
        },
        CONNECTION_CLOSED: function() {
            i = null, r = null, f = !0
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => i !== t.sessionId ? e : (T !== t.suppress && (f = !(T = t.suppress)), r !== t.channelId && (r = t.channelId, f = !T), (S || null == t.channelId) && (f = !0), !0), !1)
        },
        PERMISSION_CLEAR_SUPPRESS_WARNING: function(e) {
            let {
                forever: t
            } = e;
            f = !0, t && (S = !0, d.Storage.set(I, S))
        }
    })
}