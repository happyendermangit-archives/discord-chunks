function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearHangStatus: function() {
            return _
        },
        updateCustomHangStatus: function() {
            return d
        },
        updateHangStatus: function() {
            return u
        }
    });
    var i = n("570140"),
        r = n("592125"),
        a = n("19780"),
        s = n("944486"),
        o = n("626135"),
        l = n("981631");

    function u(e, t) {
        var n;
        if (null == e) {
            _(t);
            return
        }
        i.default.dispatch({
            type: "UPDATE_HANG_STATUS",
            status: e,
            saveAsDefault: t
        }), o.default.track(l.AnalyticEvents.SET_HANG_STATUS, {
            status_type: e,
            channel_id: s.default.getVoiceChannelId(),
            guild_id: null === (n = r.default.getChannel(s.default.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
            media_session_id: a.default.getMediaSessionId()
        })
    }

    function d(e, t, n) {
        var u;
        if ("" === e || null == t) {
            _(n);
            return
        }
        i.default.dispatch({
            type: "UPDATE_HANG_STATUS_CUSTOM",
            emoji: t,
            status: e,
            saveAsDefault: n
        }), o.default.track(l.AnalyticEvents.SET_HANG_STATUS, {
            status_type: e,
            channel_id: s.default.getVoiceChannelId(),
            guild_id: null === (u = r.default.getChannel(s.default.getVoiceChannelId())) || void 0 === u ? void 0 : u.guild_id,
            media_session_id: a.default.getMediaSessionId()
        })
    }

    function _(e) {
        var t;
        i.default.dispatch({
            type: "CLEAR_HANG_STATUS",
            saveAsDefault: e
        }), o.default.track(l.AnalyticEvents.CLEAR_HANG_STATUS, {
            channel_id: s.default.getVoiceChannelId(),
            guild_id: null === (t = r.default.getChannel(s.default.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
            media_session_id: a.default.getMediaSessionId()
        })
    }
}