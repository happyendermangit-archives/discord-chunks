function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var a = n("161454"),
        i = n("374014"),
        l = n("373469"),
        r = n("271938"),
        s = n("824563"),
        u = n("945956"),
        d = n("800762"),
        o = n("299039"),
        c = n("80028"),
        _ = n("49111"),
        f = n("782340");

    function E(e) {
        let {
            sourceName: t,
            sourceApplicationId: n
        } = function(e) {
            var t, n;
            if (null != e) {
                let {
                    ownerId: t
                } = i.decodeStreamKey(e);
                if (t !== r.default.getId()) {
                    let e = s.default.getActivities(t).find(e => e.type === _.ActivityTypes.PLAYING);
                    return {
                        sourceName: null == e ? void 0 : e.name,
                        sourceApplicationId: null == e ? void 0 : e.application_id
                    }
                }
            }
            let u = l.default.getStreamerActiveStreamMetadata(),
                d = null == u ? void 0 : u.pid,
                o = null != u ? null != d ? a.default.getGameForPID(d) : null : a.default.getVisibleGame();
            return {
                sourceName: null !== (t = null == u ? void 0 : u.sourceName) && void 0 !== t ? t : null == o ? void 0 : o.name,
                sourceApplicationId: null !== (n = null == u ? void 0 : u.id) && void 0 !== n ? n : null == o ? void 0 : o.id
            }
        }(e), E = u.default.getChannelId(), g = [r.default.getId()];
        return null != E && (g = Object.keys(d.default.getVoiceStatesForChannel(E))), {
            id: o.default.fromTimestamp(Date.now()),
            version: c.CURRENT_CLIP_METADATA_VERSION,
            applicationName: null != t ? t : f.default.Messages.CLIPS_UNKNOWN_SOURCE,
            applicationId: n,
            users: g,
            clipMethod: "manual",
            length: 0,
            thumbnail: ""
        }
    }
}