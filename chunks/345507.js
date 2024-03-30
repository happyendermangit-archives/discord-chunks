function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r, o = n("705014");

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = (i(r = {}, o.Soundpacks.CLASSIC, {
        discodo: "discodo",
        message1: "message1",
        deafen: "deafen",
        undeafen: "undeafen",
        mute: "mute",
        unmute: "unmute",
        disconnect: "disconnect",
        ptt_start: "ptt_start",
        ptt_stop: "ptt_stop",
        user_join: "user_join",
        user_leave: "user_leave",
        user_moved: "user_moved",
        call_calling: "call_calling",
        call_ringing: "call_ringing",
        stream_started: "stream_started",
        stream_ended: "stream_ended",
        stream_user_joined: "stream_user_joined",
        stream_user_left: "stream_user_left",
        poggermode_enabled: "poggermode_enabled",
        poggermode_applause: "poggermode_applause",
        poggermode_achievement_unlock: "poggermode_achievement_unlock",
        stage_waiting: "stage_waiting"
    }), i(r, o.Soundpacks.DETUNE, {
        discodo: "detune_discodo",
        message1: "detune_message1",
        deafen: "detune_deafen",
        undeafen: "detune_undeafen",
        mute: "detune_mute",
        unmute: "detune_unmute",
        disconnect: "detune_disconnect",
        ptt_start: "detune_ptt_start",
        ptt_stop: "detune_ptt_stop",
        user_join: "detune_user_join",
        user_leave: "detune_user_leave",
        user_moved: "detune_user_moved",
        call_calling: "detune_call_calling",
        call_ringing: "detune_call_ringing",
        stream_started: "detune_stream_started",
        stream_ended: "detune_stream_ended",
        stream_user_joined: "detune_stream_user_joined",
        stream_user_left: "detune_stream_user_left"
    }), r);

    function u(e) {
        return a[e]
    }
}