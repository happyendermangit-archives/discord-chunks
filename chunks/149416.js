function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AudioSubsystems: function() {
            return u.AudioSubsystems
        },
        DeviceTypes: function() {
            return u.DeviceTypes
        },
        InputModes: function() {
            return u.InputModes
        },
        ConnectionStates: function() {
            return u.ConnectionStates
        },
        SpeakingFlags: function() {
            return u.SpeakingFlags
        },
        DEFAULT_VOLUME: function() {
            return u.DEFAULT_VOLUME
        },
        DEFAULT_STREAM_VOLUME: function() {
            return u.DEFAULT_STREAM_VOLUME
        },
        DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
            return u.DEFAULT_SOUNDSHARE_VOICE_BITRATE
        },
        DEFAULT_CALL_BITRATE: function() {
            return u.DEFAULT_CALL_BITRATE
        },
        DEFAULT_CALL_MIN_BITRATE: function() {
            return u.DEFAULT_CALL_MIN_BITRATE
        },
        DEFAULT_CALL_MAX_BITRATE: function() {
            return u.DEFAULT_CALL_MAX_BITRATE
        },
        DEFAULT_DEVICE_ID: function() {
            return u.DEFAULT_DEVICE_ID
        },
        DISABLED_DEVICE_ID: function() {
            return u.DISABLED_DEVICE_ID
        },
        DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
            return u.DEFAULT_PRIORITY_SPEAKER_DUCKING
        },
        MediaEngineContextTypes: function() {
            return u.MediaEngineContextTypes
        },
        Codecs: function() {
            return u.Codecs
        },
        Features: function() {
            return u.Features
        },
        NoiseCancellerError: function() {
            return u.NoiseCancellerError
        },
        ResolutionTypes: function() {
            return u.ResolutionTypes
        },
        PING_INTERVAL: function() {
            return u.PING_INTERVAL
        },
        WATCHDOG_TIMEOUT_MS: function() {
            return d
        },
        NATIVE_MODE_VALUES: function() {
            return c
        },
        NativeFeatures: function() {
            return a
        },
        ProcessPriority: function() {
            return o
        },
        ClipsRecordingEvent: function() {
            return l
        }
    });
    var i, s, r, a, o, l, u = n("353927");
    let d = 3e4,
        c = {
            [u.InputModes.VOICE_ACTIVITY]: 1,
            [u.InputModes.PUSH_TO_TALK]: 2
        };
    (i = a || (a = {})).VOICE_SOUND_STOP_LOOP = "voice_sound_stop_loop", i.VOICE_RELATIVE_SOUNDS = "voice_relative_sounds", i.VOICE_LEGACY_SUBSYSTEM = "voice_legacy_subsystem", i.VOICE_EXPERIMENTAL_SUBSYSTEM = "voice_experimental_subsystem", i.ELEVATED_HOOK = "elevated_hook", i.DEBUG_LOGGING = "debug_logging", i.SOUNDSHARE = "soundshare", i.SOUNDSHARE_LOOPBACK = "soundshare_loopback", i.SET_AUDIO_DEVICE_BY_ID = "set_audio_device_by_id", i.SET_VIDEO_DEVICE_BY_ID = "set_video_device_by_id", i.LOOPBACK = "loopback", i.WUMPUS_VIDEO = "wumpus_video", i.HYBRID_VIDEO = "hybrid_video", i.EXPERIMENTAL_ENCODERS = "experimental_encoders", i.EXPERIMENT_CONFIG = "experiment_config", i.REMOTE_LOCUS_NETWORK_CONTROL = "remote_locus_network_control", i.SCREEN_PREVIEWS = "screen_previews", i.WINDOW_PREVIEWS = "window_previews", i.AUDIO_DEBUG_STATE = "audio_debug_state", i.CONNECTION_REPLAY = "connection_replay", i.SIMULCAST = "simulcast", i.SIMULCAST_BUGFIX = "simulcast_bugfix", i.RTC_REGION_RANKING = "RTC_REGION_RANKING", i.VIDEO_EFFECTS = "video_effects", i.DIRECT_VIDEO = "direct_video", i.ELECTRON_VIDEO = "electron_video", i.MEDIAPIPE = "mediapipe", i.FIXED_KEYFRAME_INTERVAL = "fixed_keyframe_interval", i.FIRST_FRAME_CALLBACK = "first_frame_callback", i.REMOTE_USER_MULTI_STREAM = "remote_user_multi_stream", i.CLIPS = "clips", i.SPEED_TEST = "speed_test", i.GO_LIVE_HARDWARE = "go_live_hardware", i.IMAGE_QUALITY_MEASUREMENT = "image_quality_measurement", i.AMD_EXPERIMENTAL_RATE_CONTROL = "amd_experimental_rate_control", i.SCREEN_CAPTURE_KIT = "screen_capture_kit", i.CAPTURE_TIMEOUT_EXPERIMENTS = "capture_timeout_experiments", i.SCREEN_SOUNDSHARE = "screen_soundshare", (s = o || (o = {}))[s.LOW = 2] = "LOW", s[s.BELOW_NORMAL = 1] = "BELOW_NORMAL", s[s.NORMAL = 0] = "NORMAL", s[s.ABOVE_NORMAL = -1] = "ABOVE_NORMAL", s[s.HIGH = -2] = "HIGH", (r = l || (l = {}))[r.Started = 0] = "Started", r[r.Ended = 1] = "Ended", r[r.Error = 2] = "Error", r[r.TransferredToVoiceCall = 3] = "TransferredToVoiceCall", r[r.TransferredToGoLive = 4] = "TransferredToGoLive", r[r.StoppedByGoLive = 5] = "StoppedByGoLive", r[r.BlockedByGoLive = 6] = "BlockedByGoLive", r[r.GoLiveEnded = 7] = "GoLiveEnded"
}