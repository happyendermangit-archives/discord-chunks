function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openPremiumSite: function() {
            return o
        },
        openTrack: function() {
            return u
        },
        openAlbum: function() {
            return d
        },
        openArtist: function() {
            return c
        }
    }), n("70102");
    var i = n("968194"),
        l = n("773336"),
        a = n("155815"),
        s = n("450484");

    function r(e, t, n) {
        let r;
        !(0, l.isDesktop)() && (r = window.open("", "_blank")), (0, i.getMetadata)(e, t).then(e => n(e)).then(e => {
            let {
                resourceType: t,
                resourceId: n
            } = e, i = a.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(t, n) : s.SpotifyEndpoints.WEB_OPEN(t, n);
            null != r ? r.location.href = i : window.open(i)
        }).catch(() => {
            null != r && r.close()
        })
    }

    function o() {
        window.open(s.SpotifyEndpoints.PREMIUM_SITE)
    }

    function u(e) {
        var t;
        let {
            sync_id: n,
            metadata: i
        } = e;
        if (null == n) return;
        let l = (0, s.getSpotifyResourceType)(null !== (t = null == i ? void 0 : i.type) && void 0 !== t ? t : s.SpotifyResourceTypes.TRACK);
        if (null == l) return;
        let r = a.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(l, n) : s.SpotifyEndpoints.WEB_OPEN(l, n);
        window.open(r)
    }

    function d(e, t) {
        r(e, t, t => {
            var n;
            let {
                album_id: i
            } = t, l = (0, s.getSpotifyResourceType)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === s.SpotifyResourceTypes.EPISODE;
            return {
                resourceType: l ? s.SpotifyResourceTypes.SHOW : s.SpotifyResourceTypes.ALBUM,
                resourceId: i
            }
        })
    }

    function c(e, t, n) {
        r(e, t, e => {
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