function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        sync: function() {
            return d
        },
        play: function() {
            return s
        },
        getMetadata: function() {
            return o
        }
    }), i("70102");
    var n = i("872717"),
        l = i("913144"),
        a = i("884385"),
        u = i("824563"),
        r = i("49111");

    function d(t, e) {
        l.default.dispatch({
            type: "ACTIVITY_SYNC",
            activity: t,
            userId: e
        })
    }

    function s(t, e) {
        (0, a.getSpotifyMetadataFromActivity)(t, e).then(i => l.default.dispatch({
            type: "ACTIVITY_PLAY",
            activity: t,
            userId: e,
            metadata: i
        })).catch(() => l.default.dispatch({
            type: "ACTIVITY_PLAY",
            activity: t,
            userId: e
        }))
    }
    async function o(t, e) {
        let i = t.metadata;
        if (null != i) return i;
        let a = u.default.getActivityMetadata(e);
        if (null != a) return a;
        if (null == t.session_id) throw Error("null/undefined session_id");
        let {
            body: d
        } = await n.default.get({
            url: r.Endpoints.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
            oldFormErrors: !0
        });
        return l.default.dispatch({
            type: "ACTIVITY_METADATA_UPDATE",
            metadata: d,
            userId: e
        }), d
    }
}