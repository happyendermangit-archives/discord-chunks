function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AudioSubsystems: function() {
            return D
        },
        Codecs: function() {
            return v
        },
        ConnectionStates: function() {
            return O
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
            return j
        },
        DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
            return F
        },
        DEFAULT_STREAM_VOLUME: function() {
            return V
        },
        DEFAULT_VOICE_BITRATE: function() {
            return x
        },
        DEFAULT_VOLUME: function() {
            return k
        },
        DESKTOP_BITRATE: function() {
            return $
        },
        DESKTOP_BITRATE_ENHANCED: function() {
            return ee
        },
        DISABLED_DEVICE_ID: function() {
            return Y
        },
        DesktopSources: function() {
            return B.DesktopSources
        },
        DeviceTypes: function() {
            return N
        },
        ExperimentFlags: function() {
            return b
        },
        Features: function() {
            return g
        },
        InputModes: function() {
            return p
        },
        MEDIA_SINK_WANTS_PROPERTIES: function() {
            return et
        },
        MediaEngineContextTypes: function() {
            return m
        },
        MediaEngineImplementations: function() {
            return L
        },
        MediaTypes: function() {
            return y
        },
        NoiseCancellerError: function() {
            return w
        },
        PING_INTERVAL: function() {
            return X
        },
        ResolutionTypes: function() {
            return U
        },
        SpeakingFlags: function() {
            return M
        },
        StatsFilter: function() {
            return R
        },
        VIDEO_QUALITY_FRAMERATE: function() {
            return q
        },
        VIDEO_QUALITY_FRAMERATE_MUTED: function() {
            return Z
        },
        VIDEO_QUALITY_FRAMERATE_MUTED_2: function() {
            return J
        },
        VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: function() {
            return Q
        },
        VIEWERSIDE_CLIP_KFI_MS: function() {
            return ei
        },
        VideoQualityMode: function() {
            return G
        },
        VideoToggleReason: function() {
            return C
        },
        defaultVideoQualityOptions: function() {
            return en
        }
    });
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, h, A, m, N, p, O, R, C, g, L, D, v, M, y, P, U, b, G, w, B = n("268146");
    (i = m || (m = {})).DEFAULT = "default", i.STREAM = "stream", (r = N || (N = {})).AUDIO_INPUT = "audioinput", r.AUDIO_OUTPUT = "audiooutput", r.VIDEO_INPUT = "videoinput", (s = p || (p = {})).PUSH_TO_TALK = "PUSH_TO_TALK", s.VOICE_ACTIVITY = "VOICE_ACTIVITY", (a = O || (O = {})).DISCONNECTED = "DISCONNECTED", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.NO_ROUTE = "NO_ROUTE", a.ICE_CHECKING = "ICE_CHECKING", a.DTLS_CONNECTING = "DTLS_CONNECTING", (o = R || (R = {}))[o.TRANSPORT = 1] = "TRANSPORT", o[o.OUTBOUND = 2] = "OUTBOUND", o[o.INBOUND = 4] = "INBOUND", o[o.ALL = 7] = "ALL", (l = C || (C = {})).MANUAL_DISABLE = "video_manual_disable", l.MANUAL_ENABLE = "video_manual_enable", l.MANUAL_REENABLE = "video_manual_reenable", l.AUTO_DISABLE = "video_auto_disable", l.AUTO_ENABLE = "video_auto_enable", l.AUTO_DOWNGRADE = "video_auto_downgrade", l.AUTO_UPGRADE = "video_auto_upgrade,";
    let k = 100,
        V = 18,
        x = 64e3,
        F = 128e3,
        H = "default",
        Y = "disabled",
        j = .1,
        W = 6e5,
        K = 15e4,
        z = 1e7,
        X = 5e3,
        Q = 15e3,
        q = 30,
        Z = 20,
        J = 12,
        $ = 4e6,
        ee = 8e6,
        et = ["remoteSinkWantsPixelCount", "remoteSinkWantsMaxFramerate", "encodingVideoMinBitRate", "encodingVideoMaxBitRate", "encodingVideoBitRate", "streamParameters"],
        en = {
            videoBudget: {
                width: 1280,
                height: 720,
                framerate: q
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
        ei = 6e4;
    (u = g || (g = {})).AUTO_ENABLE = "AUTO_ENABLE", u.ATTENUATION = "ATTENUATION", u.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE", u.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE", u.VOICE_PROCESSING = "VOICE_PROCESSING", u.QOS = "QOS", u.NATIVE_PING = "NATIVE_PING", u.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM", u.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM", u.DEBUG_LOGGING = "DEBUG_LOGGING", u.AUTOMATIC_VAD = "AUTOMATIC_VAD", u.VOICE_PANNING = "VOICE_PANNING", u.DIAGNOSTICS = "DIAGNOSTICS", u.VIDEO = "VIDEO", u.DESKTOP_CAPTURE = "DESKTOP_CAPTURE", u.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT", u.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS", u.SOUNDSHARE = "SOUNDSHARE", u.LOOPBACK = "LOOPBACK", u.VIDEO_HOOK = "VIDEO_HOOK", u.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE", u.WUMPUS_VIDEO = "WUMPUS_VIDEO", u.ELEVATED_HOOK = "ELEVATED_HOOK", u.HYBRID_VIDEO = "HYBRID_VIDEO", u.OPEN_H264 = "OPEN_H264", u.EXPERIMENTAL_ENCODERS = "EXPERIMENTAL_ENCODERS", u.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL", u.SCREEN_PREVIEWS = "SCREEN_PREVIEWS", u.WINDOW_PREVIEWS = "WINDOW_PREVIEWS", u.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE", u.AEC_DUMP = "AEC_DUMP", u.DISABLE_VIDEO = "DISABLE_VIDEO", u.CONNECTION_REPLAY = "CONNECTION_REPLAY", u.SIMULCAST = "SIMULCAST", u.RTC_REGION_RANKING = "RTC_REGION_RANKING", u.DIRECT_VIDEO = "DIRECT_VIDEO", u.ELECTRON_VIDEO = "ELECTRON_VIDEO", u.MEDIAPIPE = "MEDIAPIPE", u.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL", u.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK", u.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK", u.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM", u.NOISE_SUPPRESSION = "NOISE_SUPPRESSION", u.NOISE_CANCELLATION = "NOISE_CANCELLATION", u.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL", u.CLIPS = "CLIPS", u.SPEED_TEST = "SPEED_TEST", u.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT", u.AMD_EXPERIMENTAL_RATE_CONTROL = "AMD_EXPERIMENTAL_RATE_CONTROL", u.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE", u.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT", u.CAPTURE_TIMEOUT_EXPERIMENTS = "CAPTURE_TIMEOUT_EXPERIMENTS", u.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE", (d = L || (L = {})).NATIVE = "NATIVE", d.WEBRTC = "WEBRTC", d.DUMMY = "DUMMY", (_ = D || (D = {})).LEGACY = "legacy", _.STANDARD = "standard", _.EXPERIMENTAL = "experimental", (c = v || (v = {})).OPUS = "opus", c.VP8 = "VP8", c.VP9 = "VP9", c.H264 = "H264", c.RTX = "rtx", c.TEST = "TEST", (E = M || (M = {}))[E.NONE = 0] = "NONE", E[E.VOICE = 1] = "VOICE", E[E.SOUNDSHARE = 2] = "SOUNDSHARE", E[E.PRIORITY = 4] = "PRIORITY", (I = y || (y = {})).AUDIO = "audio", I.VIDEO = "video", I.SCREEN = "screen", I.TEST = "test", (T = P || (P = {})).PLAYING = "playing", T.PAUSED = "paused", (f = U || (U = {})).FIXED = "fixed", f.SOURCE = "source", (S = b || (b = {})).VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control", S.SIGNAL_H265_SUPPORT = "signal_h265_support", S.SIGNAL_H265_DECODE_SUPPORT = "signal_h265_decode_support", S.SIGNAL_AV1_SUPPORT = "signal_av1_support", S.STREAMER_CLIP = "streamer_clip", S.VIEWER_CLIP = "viewer_clip", S.MUTE_BEFORE_PROCESSING = "mute_before_processing", S.PTT_BEFORE_PROCESSING = "ptt_before_processing", S.SKIP_ENCODE = "skip_encode", (h = G || (G = {}))[h.AUTO = 1] = "AUTO", h[h.FULL = 2] = "FULL", (A = w || (w = {}))[A.CPU_OVERUSE = 1] = "CPU_OVERUSE", A[A.FAILED = 2] = "FAILED", A[A.VAD_CPU_OVERUSE = 3] = "VAD_CPU_OVERUSE", A[A.INITIALIZED = 4] = "INITIALIZED"
}