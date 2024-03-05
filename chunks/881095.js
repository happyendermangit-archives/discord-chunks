function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var a = n("161454"),
        i = n("374014"),
        l = n("373469"),
        d = n("271938"),
        r = n("824563"),
        s = n("945956"),
        u = n("800762"),
        o = n("299039"),
        c = n("80028"),
        f = n("49111"),
        g = n("782340");

    function p(e) {
        let {
            sourceName: t,
            sourceApplicationId: n
        } = function(e) {
            var t, n;
            if (null != e) {
                let {
                    ownerId: t
                } = i.decodeStreamKey(e);
                if (t !== d.default.getId()) {
                    let e = r.default.getActivities(t).find(e => e.type === f.ActivityTypes.PLAYING);
                    return {
                        sourceName: null == e ? void 0 : e.name,
                        sourceApplicationId: null == e ? void 0 : e.application_id
                    }
                }
            }
            let s = l.default.getStreamerActiveStreamMetadata(),
                u = null == s ? void 0 : s.pid,
                o = null != s ? null != u ? a.default.getGameForPID(u) : null : a.default.getVisibleGame();
            return {
                sourceName: null !== (t = null == s ? void 0 : s.sourceName) && void 0 !== t ? t : null == o ? void 0 : o.name,
                sourceApplicationId: null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : null == o ? void 0 : o.id
            }
        }(e), p = s.default.getChannelId(), _ = [d.default.getId()];
        return null != p && (_ = Object.keys(u.default.getVoiceStatesForChannel(p))), {
            id: o.default.fromTimestamp(Date.now()),
            version: c.CURRENT_CLIP_METADATA_VERSION,
            applicationName: null != t ? t : g.default.Messages.CLIPS_UNKNOWN_SOURCE,
            applicationId: n,
            users: _,
            clipMethod: "manual",
            length: 0,
            thumbnail: ""
        }
    }
}