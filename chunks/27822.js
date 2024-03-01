function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var s = n("95410"),
        i = n("913144"),
        r = n("316272"),
        a = n("271938"),
        o = n("18494"),
        d = n("569182"),
        u = n("325861"),
        l = n("837979");
    class f extends r.default {
        _initialize() {
            i.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
        }
        _terminate() {
            i.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
        }
        constructor(...e) {
            super(...e), this.handleVoiceStateUpdates = e => {
                let {
                    voiceStates: t
                } = e;
                t.forEach(e => {
                    if (null == e.channelId || e.userId !== a.default.getId()) return;
                    if (this.terminate(), s.default.get(l.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !1)) return;
                    let t = o.default.getVoiceChannelId();
                    if (null != t) e.channelId === t && u.default.isAudienceMember(e.userId, t) && (s.default.set(l.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !0), d.openStageChannelAudienceNoticeModal(t))
                })
            }
        }
    }
    var _ = new f
}