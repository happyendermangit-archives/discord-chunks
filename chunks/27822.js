function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("95410"),
        s = n("913144"),
        r = n("316272"),
        a = n("271938"),
        o = n("18494"),
        l = n("569182"),
        u = n("325861"),
        d = n("837979");
    class c extends r.default {
        _initialize() {
            s.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
        }
        _terminate() {
            s.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
        }
        constructor(...e) {
            super(...e), this.handleVoiceStateUpdates = e => {
                let {
                    voiceStates: t
                } = e;
                t.forEach(e => {
                    if (null == e.channelId || e.userId !== a.default.getId()) return;
                    if (this.terminate(), i.default.get(d.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !1)) return;
                    let t = o.default.getVoiceChannelId();
                    if (null != t) e.channelId === t && u.default.isAudienceMember(e.userId, t) && (i.default.set(d.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !0), l.openStageChannelAudienceNoticeModal(t))
                })
            }
        }
    }
    var f = new c
}