function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DesktopSources: function() {
            return V.DesktopSources
        },
        MediaEngineContextTypes: function() {
            return T
        },
        DeviceTypes: function() {
            return v
        },
        InputModes: function() {
            return I
        },
        ConnectionStates: function() {
            return A
        },
        StatsFilter: function() {
            return C
        },
        VideoToggleReason: function() {
            return y
        },
        DEFAULT_VOLUME: function() {
            return G
        },
        DEFAULT_STREAM_VOLUME: function() {
            return F
        },
        DEFAULT_VOICE_BITRATE: function() {
            return x
        },
        DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
            return B
        },
        DEFAULT_DEVICE_ID: function() {
            return H
        },
        DISABLED_DEVICE_ID: function() {
            return Y
        },
        DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
            return K
        },
        DEFAULT_CALL_BITRATE: function() {
            return j
        },
        DEFAULT_CALL_MIN_BITRATE: function() {
            return W
        },
        DEFAULT_CALL_MAX_BITRATE: function() {
            return z
        },
        PING_INTERVAL: function() {
            return q
        },
        VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: function() {
            return X
        },
        VIDEO_QUALITY_FRAMERATE: function() {
            return Q
        },
        VIDEO_QUALITY_FRAMERATE_MUTED: function() {
            return Z
        },
        VIDEO_QUALITY_FRAMERATE_MUTED_2: function() {
            return J
        },
        DESKTOP_BITRATE: function() {
            return $
        },
        DESKTOP_BITRATE_ENHANCED: function() {
            return ee
        },
        MEDIA_SINK_WANTS_PROPERTIES: function() {
            return et
        },
        defaultVideoQualityOptions: function() {
            return en
        },
        VIEWERSIDE_CLIP_KFI_MS: function() {
            return ei
        },
        Features: function() {
            return N
        },
        MediaEngineImplementations: function() {
            return R
        },
        AudioSubsystems: function() {
            return O
        },
        Codecs: function() {
            return D
        },
        SpeakingFlags: function() {
            return P
        },
        MediaTypes: function() {
            return L
        },
        ResolutionTypes: function() {
            return b
        },
        ExperimentFlags: function() {
            return U
        },
        VideoQualityMode: function() {
            return w
        },
        NoiseCancellerError: function() {
            return k
        }
    });
    var i, s, r, a, o, l, u, d, c, _, f, E, h, g, m, p, S, T, v, I, A, C, y, N, R, O, D, P, L, M, b, U, w, k, V = n("771281");
    (i = T || (T = {})).DEFAULT = "default", i.STREAM = "stream", (s = v || (v = {})).AUDIO_INPUT = "audioinput", s.AUDIO_OUTPUT = "audiooutput", s.VIDEO_INPUT = "videoinput", (r = I || (I = {})).PUSH_TO_TALK = "PUSH_TO_TALK", r.VOICE_ACTIVITY = "VOICE_ACTIVITY", (a = A || (A = {})).DISCONNECTED = "DISCONNECTED", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.NO_ROUTE = "NO_ROUTE", a.ICE_CHECKING = "ICE_CHECKING", a.DTLS_CONNECTING = "DTLS_CONNECTING", (o = C || (C = {}))[o.TRANSPORT = 1] = "TRANSPORT", o[o.OUTBOUND = 2] = "OUTBOUND", o[o.INBOUND = 4] = "INBOUND", o[o.ALL = 7] = "ALL", (l = y || (y = {})).MANUAL_DISABLE = "video_manual_disable", l.MANUAL_ENABLE = "video_manual_enable", l.MANUAL_REENABLE = "video_manual_reenable", l.AUTO_DISABLE = "video_auto_disable", l.AUTO_ENABLE = "video_auto_enable", l.AUTO_DOWNGRADE = "video_auto_downgrade", l.AUTO_UPGRADE = "video_auto_upgrade,";
    let G = 100,
        F = 18,
        x = 64e3,
        B = 128e3,
        H = "default",
        Y = "disabled",
        K = .1,
        j = 6e5,
        W = 15e4,
        z = 1e7,
        q = 5e3,
        X = 15e3,
        Q = 30,
        Z = 20,
        J = 12,
        $ = 4e6,
        ee = 8e6,
        et = ["remoteSinkWantsPixelCount", "remoteSinkWantsMaxFramerate", "encodingVideoMinBitRate", "encodingVideoMaxBitRate", "encodingVideoBitRate", "streamParameters"],
        en = {
            videoBudget: {
                width: 1280,
                height: 720,
                framerate: Q
            },
            videoCapture: {
                width: 1280,
                height: 720,
                framerate: Q
            },
            videoBitrate: {
                min: 15e4,
                max: 25e5
            },
            desktopBitrate: {
                min: 5e5,
                max: $,
                target: 6e5
            },
            videoBitrateFloor: 15e4
        },
        ei = 6e4;
    (u = N || (N = {})).AUTO_ENABLE = "AUTO_ENABLE", u.ATTENUATION = "ATTENUATION", u.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE", u.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE", u.VOICE_PROCESSING = "VOICE_PROCESSING", u.QOS = "QOS", u.NATIVE_PING = "NATIVE_PING", u.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM", u.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM", u.DEBUG_LOGGING = "DEBUG_LOGGING", u.AUTOMATIC_VAD = "AUTOMATIC_VAD", u.VOICE_PANNING = "VOICE_PANNING", u.DIAGNOSTICS = "DIAGNOSTICS", u.VIDEO = "VIDEO", u.DESKTOP_CAPTURE = "DESKTOP_CAPTURE", u.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT", u.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS", u.SOUNDSHARE = "SOUNDSHARE", u.LOOPBACK = "LOOPBACK", u.VIDEO_HOOK = "VIDEO_HOOK", u.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE", u.WUMPUS_VIDEO = "WUMPUS_VIDEO", u.ELEVATED_HOOK = "ELEVATED_HOOK", u.HYBRID_VIDEO = "HYBRID_VIDEO", u.OPEN_H264 = "OPEN_H264", u.EXPERIMENTAL_ENCODERS = "EXPERIMENTAL_ENCODERS", u.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL", u.SCREEN_PREVIEWS = "SCREEN_PREVIEWS", u.WINDOW_PREVIEWS = "WINDOW_PREVIEWS", u.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE", u.AEC_DUMP = "AEC_DUMP", u.DISABLE_VIDEO = "DISABLE_VIDEO", u.CONNECTION_REPLAY = "CONNECTION_REPLAY", u.SIMULCAST = "SIMULCAST", u.RTC_REGION_RANKING = "RTC_REGION_RANKING", u.DIRECT_VIDEO = "DIRECT_VIDEO", u.ELECTRON_VIDEO = "ELECTRON_VIDEO", u.MEDIAPIPE = "MEDIAPIPE", u.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL", u.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK", u.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK", u.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM", u.NOISE_SUPPRESSION = "NOISE_SUPPRESSION", u.NOISE_CANCELLATION = "NOISE_CANCELLATION", u.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL", u.CLIPS = "CLIPS", u.SPEED_TEST = "SPEED_TEST", u.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT", u.AMD_EXPERIMENTAL_RATE_CONTROL = "AMD_EXPERIMENTAL_RATE_CONTROL", u.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE", u.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT", u.CAPTURE_TIMEOUT_EXPERIMENTS = "CAPTURE_TIMEOUT_EXPERIMENTS", u.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE", (d = R || (R = {})).NATIVE = "NATIVE", d.WEBRTC = "WEBRTC", d.DUMMY = "DUMMY", (c = O || (O = {})).LEGACY = "legacy", c.STANDARD = "standard", c.EXPERIMENTAL = "experimental", (_ = D || (D = {})).OPUS = "opus", _.VP8 = "VP8", _.VP9 = "VP9", _.H264 = "H264", _.RTX = "rtx", _.TEST = "TEST", (f = P || (P = {}))[f.NONE = 0] = "NONE", f[f.VOICE = 1] = "VOICE", f[f.SOUNDSHARE = 2] = "SOUNDSHARE", f[f.PRIORITY = 4] = "PRIORITY", (E = L || (L = {})).AUDIO = "audio", E.VIDEO = "video", E.SCREEN = "screen", E.TEST = "test", (h = M || (M = {})).PLAYING = "playing", h.PAUSED = "paused", (g = b || (b = {})).FIXED = "fixed", g.SOURCE = "source", (m = U || (U = {})).VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control", m.SIGNAL_H265_SUPPORT = "signal_h265_support", m.SIGNAL_H265_DECODE_SUPPORT = "signal_h265_decode_support", m.SIGNAL_AV1_SUPPORT = "signal_av1_support", m.STREAMER_CLIP = "streamer_clip", m.VIEWER_CLIP = "viewer_clip", m.MUTE_BEFORE_PROCESSING = "mute_before_processing", m.PTT_BEFORE_PROCESSING = "ptt_before_processing", m.SKIP_ENCODE = "skip_encode", (p = w || (w = {}))[p.AUTO = 1] = "AUTO", p[p.FULL = 2] = "FULL", (S = k || (k = {}))[S.CPU_OVERUSE = 1] = "CPU_OVERUSE", S[S.FAILED = 2] = "FAILED", S[S.VAD_CPU_OVERUSE = 3] = "VAD_CPU_OVERUSE", S[S.INITIALIZED = 4] = "INITIALIZED"
}