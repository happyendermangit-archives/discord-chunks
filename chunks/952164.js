function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openAlbum: function() {
            return d
        },
        openArtist: function() {
            return _
        },
        openPremiumSite: function() {
            return l
        },
        openTrack: function() {
            return u
        }
    }), n("411104");
    var i = n("358085"),
        r = n("18323"),
        a = n("647162"),
        s = n("616922");

    function o(e, t, n) {
        let o;
        !(0, i.isDesktop)() && (o = window.open("", "_blank")), (0, a.getSpotifyMetadataFromActivity)(e, t).then(e => n(e)).then(e => {
            let {
                resourceType: t,
                resourceId: n
            } = e, i = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(t, n) : s.SpotifyEndpoints.WEB_OPEN(t, n);
            null != o ? o.location.href = i : window.open(i)
        }).catch(() => {
            null != o && o.close()
        })
    }

    function l() {
        window.open(s.SpotifyEndpoints.PREMIUM_SITE)
    }

    function u(e) {
        var t;
        let {
            sync_id: n,
            metadata: i
        } = e;
        if (null == n) return;
        let a = (0, s.getSpotifyResourceType)(null !== (t = null == i ? void 0 : i.type) && void 0 !== t ? t : s.SpotifyResourceTypes.TRACK);
        if (null == a) return;
        let o = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(a, n) : s.SpotifyEndpoints.WEB_OPEN(a, n);
        window.open(o)
    }

    function d(e, t) {
        o(e, t, t => {
            var n;
            let {
                album_id: i
            } = t;
            return {
                resourceType: (0, s.getSpotifyResourceType)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === s.SpotifyResourceTypes.EPISODE ? s.SpotifyResourceTypes.SHOW : s.SpotifyResourceTypes.ALBUM,
                resourceId: i
            }
        })
    }

    function _(e, t, n) {
        o(e, t, e => {
            let {
                artist_ids: t
            } = e;
            if (null == t) throw Error("no artist ids in metadata");
            let i = t[n];
            if (null == i) throw Error("invalid artist index");
            return {
                resourceType: s.SpotifyResourceTypes.ARTIST,
                resourceId: i
            }
        })
    }
}