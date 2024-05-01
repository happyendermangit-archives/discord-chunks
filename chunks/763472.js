function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMetadata: function() {
            return d
        },
        play: function() {
            return u
        },
        sync: function() {
            return l
        }
    }), n("411104");
    var i = n("544891"),
        r = n("570140"),
        a = n("647162"),
        s = n("158776"),
        o = n("981631");

    function l(e, t) {
        r.default.dispatch({
            type: "ACTIVITY_SYNC",
            activity: e,
            userId: t
        })
    }

    function u(e, t) {
        (0, a.getSpotifyMetadataFromActivity)(e, t).then(n => r.default.dispatch({
            type: "ACTIVITY_PLAY",
            activity: e,
            userId: t,
            metadata: n
        })).catch(() => r.default.dispatch({
            type: "ACTIVITY_PLAY",
            activity: e,
            userId: t
        }))
    }
    async function d(e, t) {
        let n = e.metadata;
        if (null != n) return n;
        let a = s.default.getActivityMetadata(t);
        if (null != a) return a;
        if (null == e.session_id) throw Error("null/undefined session_id");
        let {
            body: l
        } = await i.HTTP.get({
            url: o.Endpoints.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
            oldFormErrors: !0
        });
        return r.default.dispatch({
            type: "ACTIVITY_METADATA_UPDATE",
            metadata: l,
            userId: t
        }), l
    }
}