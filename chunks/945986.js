function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CLIPS_EDIT_MODAL_KEY: function() {
            return b
        },
        CLIPS_EDUCATION_COOLDOWN: function() {
            return k
        },
        CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD: function() {
            return G
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED: function() {
            return j
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED: function() {
            return B
        },
        CLIPS_EXPORT_FILENAME: function() {
            return m
        },
        CLIPS_GALLERY_MODAL_KEY: function() {
            return N
        },
        CLIPS_HARDWARE_CLASSIFICATION_VERSION: function() {
            return I
        },
        CLIPS_MAX_PARTICIPANTS: function() {
            return P
        },
        CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY: function() {
            return M
        },
        CLIPS_THUMBNAIL_MAX_HEIGHT: function() {
            return C
        },
        CLIPS_THUMBNAIL_MAX_WIDTH: function() {
            return R
        },
        CLIPS_TOAST_DURATION: function() {
            return E
        },
        CLIP_NAME_MAX_CHAR_LENGTH: function() {
            return A
        },
        CLIP_NAME_MIN_CHAR_LENGTH: function() {
            return g
        },
        CLIP_NAME_TEMPLATE: function() {
            return D
        },
        CLIP_PLAYING_DEBOUNCE_MS: function() {
            return v
        },
        CURRENT_CLIP_METADATA_VERSION: function() {
            return y
        },
        ClipSaveTypes: function() {
            return l
        },
        ClipsLengthSettings: function() {
            return u
        },
        ClipsLogger: function() {
            return p
        },
        ClipsUserEducationType: function() {
            return c
        },
        ClipsViewerConnectivitySettings: function() {
            return s
        },
        DEFAULT_KEYBIND: function() {
            return _
        },
        MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: function() {
            return L
        },
        MIN_CLIP_DURATION_SECONDS: function() {
            return S
        },
        OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return T
        },
        SEEK_DENOMINATOR: function() {
            return U
        },
        SEEK_SHIFT_MODIFIER: function() {
            return w
        },
        WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return O
        },
        WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: function() {
            return h
        }
    });
    var r, o, i, a, u, s, l, c, f = n("35523"),
        d = n("388990");
    (r = u || (u = {}))[r.SECONDS_30 = 30 * d.default.Millis.SECOND] = "SECONDS_30", r[r.MINUTES_1 = d.default.Millis.MINUTE] = "MINUTES_1", r[r.MINUTES_2 = 2 * d.default.Millis.MINUTE] = "MINUTES_2", (o = s || (s = {}))[o.ALL = 0] = "ALL", o[o.FRIENDS = 1] = "FRIENDS", (i = l || (l = {})).DECOUPLED = "decoupled", i.VIEWER = "viewer", i.STREAMER = "streamer", (a = c || (c = {}))[a.Error = 0] = "Error", a[a.Disabled = 1] = "Disabled", a[a.Enabled = 2] = "Enabled";
    var _ = "alt+c",
        E = 6 * d.default.Millis.SECOND,
        p = new f.default("Clips"),
        m = function(e) {
            return "Discord_Clip_".concat(e, ".mp4")
        },
        y = 3,
        I = 1,
        h = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        O = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
        T = /(Apple M[12].*)/,
        S = .1,
        v = 25,
        g = 0,
        A = 200,
        b = "clips-edit",
        N = "clips-gallery",
        R = 640,
        C = 360,
        P = 100,
        D = function(e) {
            return "Clip - ".concat(new Date(e).toLocaleString())
        },
        L = 15,
        M = 3e4,
        U = 30,
        w = 10,
        k = 14 * d.default.Millis.DAY,
        G = 5,
        B = 5,
        j = 1
}