function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openAlbum: function() {
            return c
        },
        openArtist: function() {
            return f
        },
        openPremiumSite: function() {
            return s
        },
        openTrack: function() {
            return l
        }
    });
    var r = n("374550"),
        o = n("222577"),
        i = n("435801"),
        a = n("935776");

    function u(e, t, n) {
        var u;
        !(0, r.isDesktop)() && (u = window.open("", "_blank")), (0, i.getSpotifyMetadataFromActivity)(e, t).then(function(e) {
            return n(e)
        }).then(function(e) {
            var t = e.resourceType,
                n = e.resourceId,
                r = o.default.isProtocolRegistered() ? a.SpotifyEndpoints.PLAYER_OPEN(t, n) : a.SpotifyEndpoints.WEB_OPEN(t, n);
            null != u ? u.location.href = r : window.open(r)
        }).catch(function() {
            null != u && u.close()
        })
    }

    function s() {
        window.open(a.SpotifyEndpoints.PREMIUM_SITE)
    }

    function l(e) {
        var t, n = e.sync_id,
            r = e.metadata;
        if (null != n) {
            var i = (0, a.getSpotifyResourceType)(null !== (t = null == r ? void 0 : r.type) && void 0 !== t ? t : a.SpotifyResourceTypes.TRACK);
            if (null != i) {
                var u = o.default.isProtocolRegistered() ? a.SpotifyEndpoints.PLAYER_OPEN(i, n) : a.SpotifyEndpoints.WEB_OPEN(i, n);
                window.open(u)
            }
        }
    }

    function c(e, t) {
        u(e, t, function(t) {
            var n, r = t.album_id;
            return {
                resourceType: (0, a.getSpotifyResourceType)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === a.SpotifyResourceTypes.EPISODE ? a.SpotifyResourceTypes.SHOW : a.SpotifyResourceTypes.ALBUM,
                resourceId: r
            }
        })
    }

    function f(e, t, n) {
        u(e, t, function(e) {
            var t = e.artist_ids;
            if (null == t) throw Error("no artist ids in metadata");
            var r = t[n];
            if (null == r) throw Error("invalid artist index");
            return {
                resourceType: a.SpotifyResourceTypes.ARTIST,
                resourceId: r
            }
        })
    }
}