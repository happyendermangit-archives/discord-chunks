function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CLIPS_EDIT_MODAL_KEY: function() {
            return g
        },
        CLIPS_EDUCATION_COOLDOWN: function() {
            return w
        },
        CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD: function() {
            return k
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED: function() {
            return V
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED: function() {
            return B
        },
        CLIPS_EXPORT_FILENAME: function() {
            return f
        },
        CLIPS_GALLERY_MODAL_KEY: function() {
            return L
        },
        CLIPS_HARDWARE_CLASSIFICATION_VERSION: function() {
            return h
        },
        CLIPS_MAX_PARTICIPANTS: function() {
            return M
        },
        CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY: function() {
            return U
        },
        CLIPS_THUMBNAIL_MAX_HEIGHT: function() {
            return v
        },
        CLIPS_THUMBNAIL_MAX_WIDTH: function() {
            return D
        },
        CLIPS_TOAST_DURATION: function() {
            return I
        },
        CLIP_NAME_MAX_CHAR_LENGTH: function() {
            return C
        },
        CLIP_NAME_MIN_CHAR_LENGTH: function() {
            return R
        },
        CLIP_NAME_TEMPLATE: function() {
            return y
        },
        CLIP_PLAYING_DEBOUNCE_MS: function() {
            return p
        },
        CURRENT_CLIP_METADATA_VERSION: function() {
            return S
        },
        ClipSaveTypes: function() {
            return u
        },
        ClipsLengthSettings: function() {
            return o
        },
        ClipsLogger: function() {
            return T
        },
        ClipsUserEducationType: function() {
            return d
        },
        ClipsViewerConnectivitySettings: function() {
            return l
        },
        DEFAULT_KEYBIND: function() {
            return E
        },
        MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: function() {
            return P
        },
        MIN_CLIP_DURATION_SECONDS: function() {
            return O
        },
        OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return N
        },
        SEEK_DENOMINATOR: function() {
            return b
        },
        SEEK_SHIFT_MODIFIER: function() {
            return G
        },
        WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return m
        },
        WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: function() {
            return A
        }
    });
    var i, r, s, a, o, l, u, d, _ = n("710845"),
        c = n("70956");
    (i = o || (o = {}))[i.SECONDS_30 = 30 * c.default.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = c.default.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * c.default.Millis.MINUTE] = "MINUTES_2", (r = l || (l = {}))[r.ALL = 0] = "ALL", r[r.FRIENDS = 1] = "FRIENDS", (s = u || (u = {})).DECOUPLED = "decoupled", s.VIEWER = "viewer", s.STREAMER = "streamer", (a = d || (d = {}))[a.Error = 0] = "Error", a[a.Disabled = 1] = "Disabled", a[a.Enabled = 2] = "Enabled";
    let E = "alt+c",
        I = 6 * c.default.Millis.SECOND,
        T = new _.default("Clips"),
        f = e => "Discord_Clip_".concat(e, ".mp4"),
        S = 3,
        h = 1,
        A = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        m = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
        N = /(Apple M[12].*)/,
        O = .1,
        p = 25,
        R = 0,
        C = 200,
        g = "clips-edit",
        L = "clips-gallery",
        D = 640,
        v = 360,
        M = 100,
        y = e => "Clip - ".concat(new Date(e).toLocaleString()),
        P = 15,
        U = 3e4,
        b = 30,
        G = 10,
        w = 14 * c.default.Millis.DAY,
        k = 5,
        B = 5,
        V = 1
}