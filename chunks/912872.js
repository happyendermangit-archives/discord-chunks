function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AudioSubsystems: function() {
            return c.AudioSubsystems
        },
        ClipsRecordingEvent: function() {
            return l
        },
        Codecs: function() {
            return c.Codecs
        },
        ConnectionStates: function() {
            return c.ConnectionStates
        },
        DEFAULT_CALL_BITRATE: function() {
            return c.DEFAULT_CALL_BITRATE
        },
        DEFAULT_CALL_MAX_BITRATE: function() {
            return c.DEFAULT_CALL_MAX_BITRATE
        },
        DEFAULT_CALL_MIN_BITRATE: function() {
            return c.DEFAULT_CALL_MIN_BITRATE
        },
        DEFAULT_DEVICE_ID: function() {
            return c.DEFAULT_DEVICE_ID
        },
        DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
            return c.DEFAULT_PRIORITY_SPEAKER_DUCKING
        },
        DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
            return c.DEFAULT_SOUNDSHARE_VOICE_BITRATE
        },
        DEFAULT_STREAM_VOLUME: function() {
            return c.DEFAULT_STREAM_VOLUME
        },
        DEFAULT_VOLUME: function() {
            return c.DEFAULT_VOLUME
        },
        DISABLED_DEVICE_ID: function() {
            return c.DISABLED_DEVICE_ID
        },
        DeviceTypes: function() {
            return c.DeviceTypes
        },
        Features: function() {
            return c.Features
        },
        InputModes: function() {
            return c.InputModes
        },
        MediaEngineContextTypes: function() {
            return c.MediaEngineContextTypes
        },
        NATIVE_MODE_VALUES: function() {
            return _
        },
        NativeFeatures: function() {
            return u
        },
        NoiseCancellerError: function() {
            return c.NoiseCancellerError
        },
        PING_INTERVAL: function() {
            return c.PING_INTERVAL
        },
        ProcessPriority: function() {
            return s
        },
        ResolutionTypes: function() {
            return c.ResolutionTypes
        },
        SpeakingFlags: function() {
            return c.SpeakingFlags
        },
        WATCHDOG_TIMEOUT_MS: function() {
            return d
        }
    });
    var r, o, i, a, u, s, l, c = n("439386");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = 3e4,
        _ = (f(a = {}, c.InputModes.VOICE_ACTIVITY, 1), f(a, c.InputModes.PUSH_TO_TALK, 2), a);
    (r = u || (u = {})).VOICE_SOUND_STOP_LOOP = "voice_sound_stop_loop", r.VOICE_RELATIVE_SOUNDS = "voice_relative_sounds", r.VOICE_LEGACY_SUBSYSTEM = "voice_legacy_subsystem", r.VOICE_EXPERIMENTAL_SUBSYSTEM = "voice_experimental_subsystem", r.ELEVATED_HOOK = "elevated_hook", r.DEBUG_LOGGING = "debug_logging", r.SOUNDSHARE = "soundshare", r.SOUNDSHARE_LOOPBACK = "soundshare_loopback", r.SET_AUDIO_DEVICE_BY_ID = "set_audio_device_by_id", r.SET_VIDEO_DEVICE_BY_ID = "set_video_device_by_id", r.LOOPBACK = "loopback", r.WUMPUS_VIDEO = "wumpus_video", r.HYBRID_VIDEO = "hybrid_video", r.EXPERIMENTAL_ENCODERS = "experimental_encoders", r.EXPERIMENT_CONFIG = "experiment_config", r.REMOTE_LOCUS_NETWORK_CONTROL = "remote_locus_network_control", r.SCREEN_PREVIEWS = "screen_previews", r.WINDOW_PREVIEWS = "window_previews", r.AUDIO_DEBUG_STATE = "audio_debug_state", r.CONNECTION_REPLAY = "connection_replay", r.SIMULCAST = "simulcast", r.SIMULCAST_BUGFIX = "simulcast_bugfix", r.RTC_REGION_RANKING = "RTC_REGION_RANKING", r.VIDEO_EFFECTS = "video_effects", r.DIRECT_VIDEO = "direct_video", r.ELECTRON_VIDEO = "electron_video", r.MEDIAPIPE = "mediapipe", r.FIXED_KEYFRAME_INTERVAL = "fixed_keyframe_interval", r.FIRST_FRAME_CALLBACK = "first_frame_callback", r.REMOTE_USER_MULTI_STREAM = "remote_user_multi_stream", r.CLIPS = "clips", r.SPEED_TEST = "speed_test", r.GO_LIVE_HARDWARE = "go_live_hardware", r.IMAGE_QUALITY_MEASUREMENT = "image_quality_measurement", r.AMD_EXPERIMENTAL_RATE_CONTROL = "amd_experimental_rate_control", r.SCREEN_CAPTURE_KIT = "screen_capture_kit", r.CAPTURE_TIMEOUT_EXPERIMENTS = "capture_timeout_experiments", r.SCREEN_SOUNDSHARE = "screen_soundshare", (o = s || (s = {}))[o.LOW = 2] = "LOW", o[o.BELOW_NORMAL = 1] = "BELOW_NORMAL", o[o.NORMAL = 0] = "NORMAL", o[o.ABOVE_NORMAL = -1] = "ABOVE_NORMAL", o[o.HIGH = -2] = "HIGH", (i = l || (l = {}))[i.Started = 0] = "Started", i[i.Ended = 1] = "Ended", i[i.Error = 2] = "Error", i[i.TransferredToVoiceCall = 3] = "TransferredToVoiceCall", i[i.TransferredToGoLive = 4] = "TransferredToGoLive", i[i.StoppedByGoLive = 5] = "StoppedByGoLive", i[i.BlockedByGoLive = 6] = "BlockedByGoLive", i[i.GoLiveEnded = 7] = "GoLiveEnded"
}