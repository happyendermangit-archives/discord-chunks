function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AudioSubsystems: function() {
            return u.AudioSubsystems
        },
        ClipsRecordingEvent: function() {
            return l
        },
        Codecs: function() {
            return u.Codecs
        },
        ConnectionStates: function() {
            return u.ConnectionStates
        },
        DEFAULT_CALL_BITRATE: function() {
            return u.DEFAULT_CALL_BITRATE
        },
        DEFAULT_CALL_MAX_BITRATE: function() {
            return u.DEFAULT_CALL_MAX_BITRATE
        },
        DEFAULT_CALL_MIN_BITRATE: function() {
            return u.DEFAULT_CALL_MIN_BITRATE
        },
        DEFAULT_DEVICE_ID: function() {
            return u.DEFAULT_DEVICE_ID
        },
        DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
            return u.DEFAULT_PRIORITY_SPEAKER_DUCKING
        },
        DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
            return u.DEFAULT_SOUNDSHARE_VOICE_BITRATE
        },
        DEFAULT_STREAM_VOLUME: function() {
            return u.DEFAULT_STREAM_VOLUME
        },
        DEFAULT_VOLUME: function() {
            return u.DEFAULT_VOLUME
        },
        DISABLED_DEVICE_ID: function() {
            return u.DISABLED_DEVICE_ID
        },
        DeviceTypes: function() {
            return u.DeviceTypes
        },
        Features: function() {
            return u.Features
        },
        InputModes: function() {
            return u.InputModes
        },
        MediaEngineContextTypes: function() {
            return u.MediaEngineContextTypes
        },
        NATIVE_MODE_VALUES: function() {
            return _
        },
        NativeFeatures: function() {
            return s
        },
        NoiseCancellerError: function() {
            return u.NoiseCancellerError
        },
        PING_INTERVAL: function() {
            return u.PING_INTERVAL
        },
        ProcessPriority: function() {
            return o
        },
        ResolutionTypes: function() {
            return u.ResolutionTypes
        },
        SpeakingFlags: function() {
            return u.SpeakingFlags
        },
        WATCHDOG_TIMEOUT_MS: function() {
            return d
        }
    });
    var i, r, a, s, o, l, u = n("65154");
    let d = 3e4,
        _ = {
            [u.InputModes.VOICE_ACTIVITY]: 1,
            [u.InputModes.PUSH_TO_TALK]: 2
        };
    (i = s || (s = {})).VOICE_SOUND_STOP_LOOP = "voice_sound_stop_loop", i.VOICE_RELATIVE_SOUNDS = "voice_relative_sounds", i.VOICE_LEGACY_SUBSYSTEM = "voice_legacy_subsystem", i.VOICE_EXPERIMENTAL_SUBSYSTEM = "voice_experimental_subsystem", i.ELEVATED_HOOK = "elevated_hook", i.DEBUG_LOGGING = "debug_logging", i.SOUNDSHARE = "soundshare", i.SOUNDSHARE_LOOPBACK = "soundshare_loopback", i.SET_AUDIO_DEVICE_BY_ID = "set_audio_device_by_id", i.SET_VIDEO_DEVICE_BY_ID = "set_video_device_by_id", i.LOOPBACK = "loopback", i.WUMPUS_VIDEO = "wumpus_video", i.HYBRID_VIDEO = "hybrid_video", i.EXPERIMENTAL_ENCODERS = "experimental_encoders", i.EXPERIMENT_CONFIG = "experiment_config", i.REMOTE_LOCUS_NETWORK_CONTROL = "remote_locus_network_control", i.SCREEN_PREVIEWS = "screen_previews", i.WINDOW_PREVIEWS = "window_previews", i.AUDIO_DEBUG_STATE = "audio_debug_state", i.CONNECTION_REPLAY = "connection_replay", i.SIMULCAST = "simulcast", i.SIMULCAST_BUGFIX = "simulcast_bugfix", i.RTC_REGION_RANKING = "RTC_REGION_RANKING", i.VIDEO_EFFECTS = "video_effects", i.DIRECT_VIDEO = "direct_video", i.ELECTRON_VIDEO = "electron_video", i.MEDIAPIPE = "mediapipe", i.FIXED_KEYFRAME_INTERVAL = "fixed_keyframe_interval", i.FIRST_FRAME_CALLBACK = "first_frame_callback", i.REMOTE_USER_MULTI_STREAM = "remote_user_multi_stream", i.CLIPS = "clips", i.SPEED_TEST = "speed_test", i.GO_LIVE_HARDWARE = "go_live_hardware", i.IMAGE_QUALITY_MEASUREMENT = "image_quality_measurement", i.AMD_EXPERIMENTAL_RATE_CONTROL = "amd_experimental_rate_control", i.SCREEN_CAPTURE_KIT = "screen_capture_kit", i.CAPTURE_TIMEOUT_EXPERIMENTS = "capture_timeout_experiments", i.SCREEN_SOUNDSHARE = "screen_soundshare", (r = o || (o = {}))[r.LOW = 2] = "LOW", r[r.BELOW_NORMAL = 1] = "BELOW_NORMAL", r[r.NORMAL = 0] = "NORMAL", r[r.ABOVE_NORMAL = -1] = "ABOVE_NORMAL", r[r.HIGH = -2] = "HIGH", (a = l || (l = {}))[a.Started = 0] = "Started", a[a.Ended = 1] = "Ended", a[a.Error = 2] = "Error", a[a.TransferredToVoiceCall = 3] = "TransferredToVoiceCall", a[a.TransferredToGoLive = 4] = "TransferredToGoLive", a[a.StoppedByGoLive = 5] = "StoppedByGoLive", a[a.BlockedByGoLive = 6] = "BlockedByGoLive", a[a.GoLiveEnded = 7] = "GoLiveEnded"
}