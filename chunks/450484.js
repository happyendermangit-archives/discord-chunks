function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SPOTIFY_APP_PROTOCOL: function() {
            return l
        },
        SPOTIFY_PARTY_PREFIX: function() {
            return f
        },
        SPOTIFY_PLATFORM_NAME: function() {
            return _
        },
        isSpotifyParty: function() {
            return c
        },
        SpotifyResourceTypes: function() {
            return r
        },
        SpotifyActionTypes: function() {
            return a
        },
        SPOTIFY_HOSTNAMES: function() {
            return g
        },
        SpotifyEndpoints: function() {
            return v
        }
    });
    var s, i, r, a, o = n("376556"),
        d = n("773336"),
        u = n("49111");
    let l = "spotify",
        f = "spotify:",
        _ = o.default.get(u.PlatformTypes.SPOTIFY).name;

    function c(e) {
        return null != e && e.startsWith(f)
    }(s = r || (r = {})).TRACK = "track", s.ARTIST = "artist", s.ALBUM = "album", s.PLAYLIST = "playlist", (i = a || (a = {})).USER_ACTIVITY_PLAY = "user_activity_play", i.USER_ACTIVITY_SYNC = "user_activity_sync", i.EMBED_SYNC = "embed_sync";
    let g = ["open.spotify.com", "www.spotify.com"],
        m = "https://api.spotify.com/v1",
        h = e => "?utm_source=discord&utm_medium=".concat(e),
        v = Object.freeze({
            PROFILE: "".concat(m, "/me"),
            NOTIFICATIONS_PLAYER: "".concat(m, "/me/notifications/player"),
            PLAYER: "".concat(m, "/me/player"),
            PLAYER_DEVICES: "".concat(m, "/me/player/devices"),
            PLAYER_PLAY: "".concat(m, "/me/player/play"),
            PLAYER_PAUSE: "".concat(m, "/me/player/pause"),
            PLAYER_REPEAT: "".concat(m, "/me/player/repeat"),
            WEB_OPEN: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(h(n))
            },
            EMBED: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                return "https://open.spotify.com/embed".concat(e).concat(h(t))
            },
            PLAYER_OPEN: function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                return "".concat(l, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? h(s) : "")
            },
            PREMIUM_SITE: "https://www.spotify.com/premium/".concat(h("desktop")),
            INSTALL_ATTRIBUTION: e => "https://app.adjust.com/bdyga9?campaign=".concat(e),
            APP_STORE: (0, d.isAndroid)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
            IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
        })
}