function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("594190"),
        r = n("569545"),
        s = n("199902"),
        a = n("314897"),
        o = n("158776"),
        l = n("19780"),
        u = n("979651"),
        d = n("709054"),
        _ = n("356659"),
        c = n("981631"),
        E = n("689938");

    function I(e) {
        let {
            sourceName: t,
            sourceApplicationId: n
        } = function(e) {
            var t, n;
            if (null != e) {
                let {
                    ownerId: t
                } = r.decodeStreamKey(e);
                if (t !== a.default.getId()) {
                    let e = o.default.getActivities(t).find(e => e.type === c.ActivityTypes.PLAYING);
                    return {
                        sourceName: null == e ? void 0 : e.name,
                        sourceApplicationId: null == e ? void 0 : e.application_id
                    }
                }
            }
            let l = s.default.getStreamerActiveStreamMetadata(),
                u = null == l ? void 0 : l.pid,
                d = null != l ? null != u ? i.default.getGameForPID(u) : null : i.default.getVisibleGame();
            return {
                sourceName: null !== (t = null == l ? void 0 : l.sourceName) && void 0 !== t ? t : null == d ? void 0 : d.name,
                sourceApplicationId: null !== (n = null == l ? void 0 : l.id) && void 0 !== n ? n : null == d ? void 0 : d.id
            }
        }(e), I = l.default.getChannelId(), T = [a.default.getId()];
        return null != I && (T = Object.keys(u.default.getVoiceStatesForChannel(I))), {
            id: d.default.fromTimestamp(Date.now()),
            version: _.CURRENT_CLIP_METADATA_VERSION,
            applicationName: null != t ? t : E.default.Messages.CLIPS_UNKNOWN_SOURCE,
            applicationId: n,
            users: T,
            clipMethod: "manual",
            length: 0,
            thumbnail: ""
        }
    }
}