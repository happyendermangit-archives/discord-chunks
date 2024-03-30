function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("433517"),
        r = n("570140"),
        s = n("317770"),
        a = n("314897"),
        o = n("944486"),
        l = n("105372"),
        u = n("88751"),
        d = n("157925");
    class _ extends s.default {
        _initialize() {
            r.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
        }
        _terminate() {
            r.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
        }
        constructor(...e) {
            var t, n, r;
            super(...e), t = this, n = "handleVoiceStateUpdates", r = e => {
                let {
                    voiceStates: t
                } = e;
                t.forEach(e => {
                    if (null == e.channelId || e.userId !== a.default.getId()) return;
                    if (this.terminate(), i.Storage.get(d.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !1)) return;
                    let t = o.default.getVoiceChannelId();
                    if (null != t) e.channelId === t && u.default.isAudienceMember(e.userId, t) && (i.Storage.set(d.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !0), l.openStageChannelAudienceNoticeModal(t))
                })
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }
    }
    t.default = new _
}