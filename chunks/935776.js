function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SPOTIFY_APP_PROTOCOL: function() {
            return c
        },
        SPOTIFY_HOSTNAMES: function() {
            return E
        },
        SPOTIFY_PARTY_PREFIX: function() {
            return f
        },
        SPOTIFY_PLATFORM_NAME: function() {
            return d
        },
        SpotifyActionTypes: function() {
            return a
        },
        SpotifyEndpoints: function() {
            return y
        },
        SpotifyResourceTypes: function() {
            return i
        },
        getSpotifyResourceType: function() {
            return I
        },
        isSpotifyParty: function() {
            return _
        }
    });
    var r, o, i, a, u = n("386823"),
        s = n("374550"),
        l = n("281767"),
        c = "spotify",
        f = "spotify:",
        d = u.default.get(l.PlatformTypes.SPOTIFY).name;

    function _(e) {
        return null != e && e.startsWith(f)
    }(r = i || (i = {})).TRACK = "track", r.ARTIST = "artist", r.ALBUM = "album", r.PLAYLIST = "playlist", r.EPISODE = "episode", r.SHOW = "show", (o = a || (a = {})).USER_ACTIVITY_PLAY = "user_activity_play", o.USER_ACTIVITY_SYNC = "user_activity_sync", o.EMBED_SYNC = "embed_sync";
    var E = ["open.spotify.com", "www.spotify.com"],
        p = "https://api.spotify.com/v1",
        m = function(e) {
            return "?utm_source=discord&utm_medium=".concat(e)
        },
        y = Object.freeze({
            PROFILE: "".concat(p, "/me"),
            NOTIFICATIONS_PLAYER: "".concat(p, "/me/notifications/player"),
            PLAYER: "".concat(p, "/me/player"),
            PLAYER_DEVICES: "".concat(p, "/me/player/devices"),
            PLAYER_PLAY: "".concat(p, "/me/player/play"),
            PLAYER_PAUSE: "".concat(p, "/me/player/pause"),
            PLAYER_REPEAT: "".concat(p, "/me/player/repeat"),
            WEB_OPEN: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(m(n))
            },
            EMBED: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                return "https://open.spotify.com/embed".concat(e).concat(m(t))
            },
            PLAYER_OPEN: function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                return "".concat(c, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? m(r) : "")
            },
            PREMIUM_SITE: "https://www.spotify.com/premium/".concat(m("desktop")),
            INSTALL_ATTRIBUTION: function(e) {
                return "https://app.adjust.com/bdyga9?campaign=".concat(e)
            },
            APP_STORE: (0, s.isAndroid)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
            IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
        });

    function I(e) {
        if ("string" != typeof e) return null;
        switch (e) {
            case "track":
                return "track";
            case "artist":
                return "artist";
            case "album":
                return "album";
            case "playlist":
                return "playlist";
            case "episode":
                return "episode";
            case "show":
                return "show";
            default:
                return null
        }
    }
}