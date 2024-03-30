function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearHangStatus: function() {
            return f
        },
        updateCustomHangStatus: function() {
            return c
        },
        updateHangStatus: function() {
            return l
        }
    });
    var r = n("629815"),
        o = n("935741"),
        i = n("545072"),
        a = n("894288"),
        u = n("870331"),
        s = n("281767");

    function l(e, t) {
        var n;
        if (null == e) {
            f(t);
            return
        }
        r.default.dispatch({
            type: "UPDATE_HANG_STATUS",
            status: e,
            saveAsDefault: t
        }), u.default.track(s.AnalyticEvents.SET_HANG_STATUS, {
            status_type: e,
            channel_id: a.default.getVoiceChannelId(),
            guild_id: null === (n = o.default.getChannel(a.default.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
            media_session_id: i.default.getMediaSessionId()
        })
    }

    function c(e, t, n) {
        var l;
        if ("" === e || null == t) {
            f(n);
            return
        }
        r.default.dispatch({
            type: "UPDATE_HANG_STATUS_CUSTOM",
            emoji: t,
            status: e,
            saveAsDefault: n
        }), u.default.track(s.AnalyticEvents.SET_HANG_STATUS, {
            status_type: e,
            channel_id: a.default.getVoiceChannelId(),
            guild_id: null === (l = o.default.getChannel(a.default.getVoiceChannelId())) || void 0 === l ? void 0 : l.guild_id,
            media_session_id: i.default.getMediaSessionId()
        })
    }

    function f(e) {
        var t;
        r.default.dispatch({
            type: "CLEAR_HANG_STATUS",
            saveAsDefault: e
        }), u.default.track(s.AnalyticEvents.CLEAR_HANG_STATUS, {
            channel_id: a.default.getVoiceChannelId(),
            guild_id: null === (t = o.default.getChannel(a.default.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
            media_session_id: i.default.getMediaSessionId()
        })
    }
}