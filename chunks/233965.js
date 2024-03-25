function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateHangStatus: function() {
            return o
        },
        updateCustomHangStatus: function() {
            return d
        },
        clearHangStatus: function() {
            return c
        }
    });
    var a = n("913144"),
        r = n("42203"),
        s = n("945956"),
        l = n("18494"),
        i = n("599110"),
        u = n("49111");

    function o(e, t) {
        var n;
        if (null == e) {
            c(t);
            return
        }
        a.default.dispatch({
            type: "UPDATE_HANG_STATUS",
            status: e,
            saveAsDefault: t
        }), i.default.track(u.AnalyticEvents.SET_HANG_STATUS, {
            status_type: e,
            channel_id: l.default.getVoiceChannelId(),
            guild_id: null === (n = r.default.getChannel(l.default.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
            media_session_id: s.default.getMediaSessionId()
        })
    }

    function d(e, t, n) {
        var o;
        if ("" === e || null == t) {
            c(n);
            return
        }
        a.default.dispatch({
            type: "UPDATE_HANG_STATUS_CUSTOM",
            emoji: t,
            status: e,
            saveAsDefault: n
        }), i.default.track(u.AnalyticEvents.SET_HANG_STATUS, {
            status_type: e,
            channel_id: l.default.getVoiceChannelId(),
            guild_id: null === (o = r.default.getChannel(l.default.getVoiceChannelId())) || void 0 === o ? void 0 : o.guild_id,
            media_session_id: s.default.getMediaSessionId()
        })
    }

    function c(e) {
        var t;
        a.default.dispatch({
            type: "CLEAR_HANG_STATUS",
            saveAsDefault: e
        }), i.default.track(u.AnalyticEvents.CLEAR_HANG_STATUS, {
            channel_id: l.default.getVoiceChannelId(),
            guild_id: null === (t = r.default.getChannel(l.default.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
            media_session_id: s.default.getMediaSessionId()
        })
    }
}