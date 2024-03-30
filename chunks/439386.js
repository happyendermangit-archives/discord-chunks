function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AudioSubsystems: function() {
            return R
        },
        Codecs: function() {
            return C
        },
        ConnectionStates: function() {
            return v
        },
        DEFAULT_CALL_BITRATE: function() {
            return W
        },
        DEFAULT_CALL_MAX_BITRATE: function() {
            return z
        },
        DEFAULT_CALL_MIN_BITRATE: function() {
            return K
        },
        DEFAULT_DEVICE_ID: function() {
            return H
        },
        DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
            return Y
        },
        DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
            return V
        },
        DEFAULT_STREAM_VOLUME: function() {
            return j
        },
        DEFAULT_VOICE_BITRATE: function() {
            return F
        },
        DEFAULT_VOLUME: function() {
            return B
        },
        DESKTOP_BITRATE: function() {
            return $
        },
        DESKTOP_BITRATE_ENHANCED: function() {
            return ee
        },
        DISABLED_DEVICE_ID: function() {
            return x
        },
        DesktopSources: function() {
            return G.DesktopSources
        },
        DeviceTypes: function() {
            return T
        },
        ExperimentFlags: function() {
            return U
        },
        Features: function() {
            return b
        },
        InputModes: function() {
            return S
        },
        MEDIA_SINK_WANTS_PROPERTIES: function() {
            return et
        },
        MediaEngineContextTypes: function() {
            return O
        },
        MediaEngineImplementations: function() {
            return N
        },
        MediaTypes: function() {
            return D
        },
        NoiseCancellerError: function() {
            return k
        },
        PING_INTERVAL: function() {
            return X
        },
        ResolutionTypes: function() {
            return M
        },
        SpeakingFlags: function() {
            return P
        },
        StatsFilter: function() {
            return g
        },
        VIDEO_QUALITY_FRAMERATE: function() {
            return Q
        },
        VIDEO_QUALITY_FRAMERATE_MUTED: function() {
            return J
        },
        VIDEO_QUALITY_FRAMERATE_MUTED_2: function() {
            return Z
        },
        VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: function() {
            return q
        },
        VIEWERSIDE_CLIP_KFI_MS: function() {
            return er
        },
        VideoQualityMode: function() {
            return w
        },
        VideoToggleReason: function() {
            return A
        },
        defaultVideoQualityOptions: function() {
            return en
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P, D, L, M, U, w, k, G = n("719838");
    (r = O || (O = {})).DEFAULT = "default", r.STREAM = "stream", (o = T || (T = {})).AUDIO_INPUT = "audioinput", o.AUDIO_OUTPUT = "audiooutput", o.VIDEO_INPUT = "videoinput", (i = S || (S = {})).PUSH_TO_TALK = "PUSH_TO_TALK", i.VOICE_ACTIVITY = "VOICE_ACTIVITY", (a = v || (v = {})).DISCONNECTED = "DISCONNECTED", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.NO_ROUTE = "NO_ROUTE", a.ICE_CHECKING = "ICE_CHECKING", a.DTLS_CONNECTING = "DTLS_CONNECTING", (u = g || (g = {}))[u.TRANSPORT = 1] = "TRANSPORT", u[u.OUTBOUND = 2] = "OUTBOUND", u[u.INBOUND = 4] = "INBOUND", u[u.ALL = 7] = "ALL", (s = A || (A = {})).MANUAL_DISABLE = "video_manual_disable", s.MANUAL_ENABLE = "video_manual_enable", s.MANUAL_REENABLE = "video_manual_reenable", s.AUTO_DISABLE = "video_auto_disable", s.AUTO_ENABLE = "video_auto_enable", s.AUTO_DOWNGRADE = "video_auto_downgrade", s.AUTO_UPGRADE = "video_auto_upgrade,";
    var B = 100,
        j = 18,
        F = 64e3,
        V = 128e3,
        H = "default",
        x = "disabled",
        Y = .1,
        W = 6e5,
        K = 15e4,
        z = 1e7,
        X = 5e3,
        q = 15e3,
        Q = 30,
        J = 20,
        Z = 12,
        $ = 4e6,
        ee = 8e6,
        et = ["remoteSinkWantsPixelCount", "remoteSinkWantsMaxFramerate", "encodingVideoMinBitRate", "encodingVideoMaxBitRate", "encodingVideoBitRate", "streamParameters"],
        en = {
            videoBudget: {
                width: 1280,
                height: 720,
                framerate: 30
            },
            videoCapture: {
                width: 1280,
                height: 720,
                framerate: 30
            },
            videoBitrate: {
                min: 15e4,
                max: 25e5
            },
            desktopBitrate: {
                min: 5e5,
                max: 4e6,
                target: 6e5
            },
            videoBitrateFloor: 15e4
        },
        er = 6e4;
    (l = b || (b = {})).AUTO_ENABLE = "AUTO_ENABLE", l.ATTENUATION = "ATTENUATION", l.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE", l.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE", l.VOICE_PROCESSING = "VOICE_PROCESSING", l.QOS = "QOS", l.NATIVE_PING = "NATIVE_PING", l.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM", l.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM", l.DEBUG_LOGGING = "DEBUG_LOGGING", l.AUTOMATIC_VAD = "AUTOMATIC_VAD", l.VOICE_PANNING = "VOICE_PANNING", l.DIAGNOSTICS = "DIAGNOSTICS", l.VIDEO = "VIDEO", l.DESKTOP_CAPTURE = "DESKTOP_CAPTURE", l.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT", l.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS", l.SOUNDSHARE = "SOUNDSHARE", l.LOOPBACK = "LOOPBACK", l.VIDEO_HOOK = "VIDEO_HOOK", l.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE", l.WUMPUS_VIDEO = "WUMPUS_VIDEO", l.ELEVATED_HOOK = "ELEVATED_HOOK", l.HYBRID_VIDEO = "HYBRID_VIDEO", l.OPEN_H264 = "OPEN_H264", l.EXPERIMENTAL_ENCODERS = "EXPERIMENTAL_ENCODERS", l.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL", l.SCREEN_PREVIEWS = "SCREEN_PREVIEWS", l.WINDOW_PREVIEWS = "WINDOW_PREVIEWS", l.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE", l.AEC_DUMP = "AEC_DUMP", l.DISABLE_VIDEO = "DISABLE_VIDEO", l.CONNECTION_REPLAY = "CONNECTION_REPLAY", l.SIMULCAST = "SIMULCAST", l.RTC_REGION_RANKING = "RTC_REGION_RANKING", l.DIRECT_VIDEO = "DIRECT_VIDEO", l.ELECTRON_VIDEO = "ELECTRON_VIDEO", l.MEDIAPIPE = "MEDIAPIPE", l.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL", l.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK", l.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK", l.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM", l.NOISE_SUPPRESSION = "NOISE_SUPPRESSION", l.NOISE_CANCELLATION = "NOISE_CANCELLATION", l.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL", l.CLIPS = "CLIPS", l.SPEED_TEST = "SPEED_TEST", l.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT", l.AMD_EXPERIMENTAL_RATE_CONTROL = "AMD_EXPERIMENTAL_RATE_CONTROL", l.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE", l.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT", l.CAPTURE_TIMEOUT_EXPERIMENTS = "CAPTURE_TIMEOUT_EXPERIMENTS", l.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE", (c = N || (N = {})).NATIVE = "NATIVE", c.WEBRTC = "WEBRTC", c.DUMMY = "DUMMY", (f = R || (R = {})).LEGACY = "legacy", f.STANDARD = "standard", f.EXPERIMENTAL = "experimental", (d = C || (C = {})).OPUS = "opus", d.VP8 = "VP8", d.VP9 = "VP9", d.H264 = "H264", d.RTX = "rtx", d.TEST = "TEST", (_ = P || (P = {}))[_.NONE = 0] = "NONE", _[_.VOICE = 1] = "VOICE", _[_.SOUNDSHARE = 2] = "SOUNDSHARE", _[_.PRIORITY = 4] = "PRIORITY", (E = D || (D = {})).AUDIO = "audio", E.VIDEO = "video", E.SCREEN = "screen", E.TEST = "test", (p = L || (L = {})).PLAYING = "playing", p.PAUSED = "paused", (m = M || (M = {})).FIXED = "fixed", m.SOURCE = "source", (y = U || (U = {})).VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control", y.SIGNAL_H265_SUPPORT = "signal_h265_support", y.SIGNAL_H265_DECODE_SUPPORT = "signal_h265_decode_support", y.SIGNAL_AV1_SUPPORT = "signal_av1_support", y.STREAMER_CLIP = "streamer_clip", y.VIEWER_CLIP = "viewer_clip", y.MUTE_BEFORE_PROCESSING = "mute_before_processing", y.PTT_BEFORE_PROCESSING = "ptt_before_processing", y.SKIP_ENCODE = "skip_encode", (I = w || (w = {}))[I.AUTO = 1] = "AUTO", I[I.FULL = 2] = "FULL", (h = k || (k = {}))[h.CPU_OVERUSE = 1] = "CPU_OVERUSE", h[h.FAILED = 2] = "FAILED", h[h.VAD_CPU_OVERUSE = 3] = "VAD_CPU_OVERUSE", h[h.INITIALIZED = 4] = "INITIALIZED"
}