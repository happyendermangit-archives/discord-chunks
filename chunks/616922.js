function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SPOTIFY_APP_PROTOCOL: function() {
            return d
        },
        SPOTIFY_HOSTNAMES: function() {
            return I
        },
        SPOTIFY_PARTY_PREFIX: function() {
            return _
        },
        SPOTIFY_PLATFORM_NAME: function() {
            return c
        },
        SpotifyActionTypes: function() {
            return a
        },
        SpotifyEndpoints: function() {
            return S
        },
        SpotifyResourceTypes: function() {
            return s
        },
        getSpotifyResourceType: function() {
            return A
        },
        isSpotifyParty: function() {
            return E
        }
    });
    var i, r, s, a, o = n("726542"),
        l = n("358085"),
        u = n("981631");
    let d = "spotify",
        _ = "spotify:",
        c = o.default.get(u.PlatformTypes.SPOTIFY).name;

    function E(e) {
        return null != e && e.startsWith(_)
    }(i = s || (s = {})).TRACK = "track", i.ARTIST = "artist", i.ALBUM = "album", i.PLAYLIST = "playlist", i.EPISODE = "episode", i.SHOW = "show", (r = a || (a = {})).USER_ACTIVITY_PLAY = "user_activity_play", r.USER_ACTIVITY_SYNC = "user_activity_sync", r.EMBED_SYNC = "embed_sync";
    let I = ["open.spotify.com", "www.spotify.com"],
        T = "https://api.spotify.com/v1",
        f = e => "?utm_source=discord&utm_medium=".concat(e),
        S = Object.freeze({
            PROFILE: "".concat(T, "/me"),
            NOTIFICATIONS_PLAYER: "".concat(T, "/me/notifications/player"),
            PLAYER: "".concat(T, "/me/player"),
            PLAYER_DEVICES: "".concat(T, "/me/player/devices"),
            PLAYER_PLAY: "".concat(T, "/me/player/play"),
            PLAYER_PAUSE: "".concat(T, "/me/player/pause"),
            PLAYER_REPEAT: "".concat(T, "/me/player/repeat"),
            WEB_OPEN: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(f(n))
            },
            EMBED: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                return "https://open.spotify.com/embed".concat(e).concat(f(t))
            },
            PLAYER_OPEN: function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                return "".concat(d, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? f(i) : "")
            },
            PREMIUM_SITE: "https://www.spotify.com/premium/".concat(f("desktop")),
            INSTALL_ATTRIBUTION: e => "https://app.adjust.com/bdyga9?campaign=".concat(e),
            APP_STORE: (0, l.isAndroid)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
            IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
        });

    function A(e) {
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