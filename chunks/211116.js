function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("654370"),
        o = n("736381"),
        i = n("73013"),
        a = n("217014"),
        u = n("868447"),
        s = n("545072"),
        l = n("665863"),
        c = n("523018"),
        f = n("945986"),
        d = n("281767"),
        _ = n("941504");

    function E(e) {
        var t = function(e) {
                if (null != e) {
                    var t, n, s = o.decodeStreamKey(e).ownerId;
                    if (s !== a.default.getId()) {
                        var l = u.default.getActivities(s).find(function(e) {
                            return e.type === d.ActivityTypes.PLAYING
                        });
                        return {
                            sourceName: null == l ? void 0 : l.name,
                            sourceApplicationId: null == l ? void 0 : l.application_id
                        }
                    }
                }
                var c = i.default.getStreamerActiveStreamMetadata(),
                    f = null == c ? void 0 : c.pid,
                    _ = null != c ? null != f ? r.default.getGameForPID(f) : null : r.default.getVisibleGame();
                return {
                    sourceName: null !== (t = null == c ? void 0 : c.sourceName) && void 0 !== t ? t : null == _ ? void 0 : _.name,
                    sourceApplicationId: null !== (n = null == c ? void 0 : c.id) && void 0 !== n ? n : null == _ ? void 0 : _.id
                }
            }(e),
            n = t.sourceName,
            E = t.sourceApplicationId,
            p = s.default.getChannelId(),
            m = [a.default.getId()];
        return null != p && (m = Object.keys(l.default.getVoiceStatesForChannel(p))), {
            id: c.default.fromTimestamp(Date.now()),
            version: f.CURRENT_CLIP_METADATA_VERSION,
            applicationName: null != n ? n : _.default.Messages.CLIPS_UNKNOWN_SOURCE,
            applicationId: E,
            users: m,
            clipMethod: "manual",
            length: 0,
            thumbnail: ""
        }
    }
}