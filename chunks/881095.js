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
        u = n("945956"),
        s = n("800762"),
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
            let u = l.default.getStreamerActiveStreamMetadata(),
                s = null == u ? void 0 : u.pid,
                o = null != u ? null != s ? a.default.getGameForPID(s) : null : a.default.getVisibleGame();
            return {
                sourceName: null !== (t = null == u ? void 0 : u.sourceName) && void 0 !== t ? t : null == o ? void 0 : o.name,
                sourceApplicationId: null !== (n = null == u ? void 0 : u.id) && void 0 !== n ? n : null == o ? void 0 : o.id
            }
        }(e), p = u.default.getChannelId(), _ = [d.default.getId()];
        return null != p && (_ = Object.keys(s.default.getVoiceStatesForChannel(p))), {
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