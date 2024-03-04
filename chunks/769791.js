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
    var l = n("968194"),
        i = n("773336"),
        a = n("155815"),
        s = n("450484");

    function r(e, t, n) {
        let r;
        !(0, i.isDesktop)() && (r = window.open("", "_blank")), (0, l.getMetadata)(e, t).then(e => n(e)).then(e => {
            let {
                resourceType: t,
                resourceId: n
            } = e, l = a.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(t, n) : s.SpotifyEndpoints.WEB_OPEN(t, n);
            null != r ? r.location.href = l : window.open(l)
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
            metadata: l
        } = e;
        if (null == n) return;
        let i = (0, s.getSpotifyResourceType)(null !== (t = null == l ? void 0 : l.type) && void 0 !== t ? t : s.SpotifyResourceTypes.TRACK);
        if (null == i) return;
        let r = a.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(i, n) : s.SpotifyEndpoints.WEB_OPEN(i, n);
        window.open(r)
    }

    function d(e, t) {
        r(e, t, t => {
            var n;
            let {
                album_id: l
            } = t, i = (0, s.getSpotifyResourceType)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === s.SpotifyResourceTypes.EPISODE;
            return {
                resourceType: i ? s.SpotifyResourceTypes.SHOW : s.SpotifyResourceTypes.ALBUM,
                resourceId: l
            }
        })
    }

    function c(e, t, n) {
        r(e, t, e => {
            let {
                artist_ids: t
            } = e;
            if (null == t) throw Error("no artist ids in metadata");
            let l = t[n];
            if (null == l) throw Error("invalid artist index");
            return {
                resourceType: s.SpotifyResourceTypes.ARTIST,
                resourceId: l
            }
        })
    }
}