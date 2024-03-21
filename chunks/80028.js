function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClipsLengthSettings: function() {
            return o
        },
        ClipsViewerConnectivitySettings: function() {
            return l
        },
        ClipSaveTypes: function() {
            return u
        },
        ClipsUserEducationType: function() {
            return d
        },
        DEFAULT_KEYBIND: function() {
            return f
        },
        CLIPS_TOAST_DURATION: function() {
            return E
        },
        ClipsLogger: function() {
            return h
        },
        CLIPS_EXPORT_FILENAME: function() {
            return g
        },
        CURRENT_CLIP_METADATA_VERSION: function() {
            return m
        },
        CLIPS_HARDWARE_CLASSIFICATION_VERSION: function() {
            return p
        },
        WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: function() {
            return S
        },
        WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return T
        },
        OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return v
        },
        MIN_CLIP_DURATION_SECONDS: function() {
            return I
        },
        CLIP_PLAYING_DEBOUNCE_MS: function() {
            return A
        },
        CLIP_NAME_MIN_CHAR_LENGTH: function() {
            return C
        },
        CLIP_NAME_MAX_CHAR_LENGTH: function() {
            return y
        },
        CLIPS_EDIT_MODAL_KEY: function() {
            return N
        },
        CLIPS_GALLERY_MODAL_KEY: function() {
            return R
        },
        CLIPS_THUMBNAIL_MAX_WIDTH: function() {
            return O
        },
        CLIPS_THUMBNAIL_MAX_HEIGHT: function() {
            return D
        },
        CLIPS_MAX_PARTICIPANTS: function() {
            return P
        },
        CLIP_NAME_TEMPLATE: function() {
            return L
        },
        MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: function() {
            return M
        },
        CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY: function() {
            return b
        },
        SEEK_DENOMINATOR: function() {
            return U
        },
        SEEK_SHIFT_MODIFIER: function() {
            return w
        },
        CLIPS_EDUCATION_COOLDOWN: function() {
            return k
        },
        CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD: function() {
            return V
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED: function() {
            return G
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED: function() {
            return F
        }
    });
    var i, s, r, a, o, l, u, d, c = n("605250"),
        _ = n("718517");
    (i = o || (o = {}))[i.SECONDS_30 = 30 * _.default.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = _.default.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * _.default.Millis.MINUTE] = "MINUTES_2", (s = l || (l = {}))[s.ALL = 0] = "ALL", s[s.FRIENDS = 1] = "FRIENDS", (r = u || (u = {})).DECOUPLED = "decoupled", r.VIEWER = "viewer", r.STREAMER = "streamer", (a = d || (d = {}))[a.Error = 0] = "Error", a[a.Disabled = 1] = "Disabled", a[a.Enabled = 2] = "Enabled";
    let f = "alt+c",
        E = 6 * _.default.Millis.SECOND,
        h = new c.default("Clips"),
        g = e => "Discord_Clip_".concat(e, ".mp4"),
        m = 3,
        p = 1,
        S = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        T = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
        v = /(Apple M[12].*)/,
        I = .1,
        A = 25,
        C = 0,
        y = 200,
        N = "clips-edit",
        R = "clips-gallery",
        O = 640,
        D = 360,
        P = 100,
        L = e => "Clip - ".concat(new Date(e).toLocaleString()),
        M = 15,
        b = 3e4,
        U = 30,
        w = 10,
        k = 14 * _.default.Millis.DAY,
        V = 5,
        G = 5,
        F = 1
}