function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        sync: function() {
            return o
        },
        play: function() {
            return c
        },
        getMetadata: function() {
            return f
        }
    }), i("70102");
    var n = i("872717"),
        l = i("913144"),
        a = i("824563"),
        u = i("49111"),
        r = i("450484");

    function d(e) {
        if ("string" == typeof e) return e;
        throw Error("value is not a string")
    }

    function s(e) {
        var t;
        let i = (0, r.getSpotifyResourceType)(d(null !== (t = e.type) && void 0 !== t ? t : r.SpotifyResourceTypes.TRACK));
        if (null === i) throw Error("invalid type ".concat(e.type));
        return {
            context_uri: "string" == typeof e.context_uri ? e.context_uri : void 0,
            album_id: d(e.album_id),
            artist_ids: Array.isArray(e.artist_ids) ? e.artist_ids.map(d) : [],
            type: i,
            button_urls: Array.isArray(e.button_url) ? e.button_url.map(d) : []
        }
    }

    function o(e, t) {
        l.default.dispatch({
            type: "ACTIVITY_SYNC",
            activity: e,
            userId: t
        })
    }

    function c(e, t) {
        f(e, t).then(i => l.default.dispatch({
            type: "ACTIVITY_PLAY",
            activity: e,
            userId: t,
            metadata: i
        })).catch(() => l.default.dispatch({
            type: "ACTIVITY_PLAY",
            activity: e,
            userId: t
        }))
    }
    async function f(e, t) {
        let i = e.metadata;
        if (null != i) return s(i);
        let r = a.default.getActivityMetadata(t);
        if (null != r) return s(r);
        if (null == e.session_id) throw Error("null/undefined session_id");
        let {
            body: d
        } = await n.default.get({
            url: u.Endpoints.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
            oldFormErrors: !0
        });
        return l.default.dispatch({
            type: "ACTIVITY_METADATA_UPDATE",
            metadata: d,
            userId: t
        }), s(d)
    }
}