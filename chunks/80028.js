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
            return _
        },
        CLIPS_TOAST_DURATION: function() {
            return h
        },
        ClipsLogger: function() {
            return E
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
            return v
        },
        OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return T
        },
        MIN_CLIP_DURATION_SECONDS: function() {
            return I
        },
        CLIP_PLAYING_DEBOUNCE_MS: function() {
            return C
        },
        CLIP_NAME_MIN_CHAR_LENGTH: function() {
            return A
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
            return M
        },
        MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: function() {
            return L
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
        f = n("718517");
    (i = o || (o = {}))[i.SECONDS_30 = 30 * f.default.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = f.default.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * f.default.Millis.MINUTE] = "MINUTES_2", (s = l || (l = {}))[s.ALL = 0] = "ALL", s[s.FRIENDS = 1] = "FRIENDS", (r = u || (u = {})).DECOUPLED = "decoupled", r.VIEWER = "viewer", r.STREAMER = "streamer", (a = d || (d = {}))[a.Error = 0] = "Error", a[a.Disabled = 1] = "Disabled", a[a.Enabled = 2] = "Enabled";
    let _ = "alt+c",
        h = 6 * f.default.Millis.SECOND,
        E = new c.default("Clips"),
        g = e => "Discord_Clip_".concat(e, ".mp4"),
        m = 3,
        p = 1,
        S = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        v = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
        T = /(Apple M[12].*)/,
        I = .1,
        C = 25,
        A = 0,
        y = 200,
        N = "clips-edit",
        R = "clips-gallery",
        O = 640,
        D = 360,
        P = 100,
        M = e => "Clip - ".concat(new Date(e).toLocaleString()),
        L = 15,
        b = 3e4,
        U = 30,
        w = 10,
        k = 14 * f.default.Millis.DAY,
        V = 5,
        G = 5,
        F = 1
}