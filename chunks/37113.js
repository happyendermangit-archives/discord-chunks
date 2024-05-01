function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationStreamFPS: function() {
            return r
        },
        ApplicationStreamFPSButtons: function() {
            return N
        },
        ApplicationStreamFPSButtonsWithSuffixLabel: function() {
            return p
        },
        ApplicationStreamPresetValues: function() {
            return I
        },
        ApplicationStreamPresets: function() {
            return s
        },
        ApplicationStreamResolutionButtons: function() {
            return S
        },
        ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
            return m
        },
        ApplicationStreamResolutions: function() {
            return i
        },
        ApplicationStreamSettingRequirements: function() {
            return T
        },
        GoLiveDeviceResolutionButtons: function() {
            return h
        },
        getApplicationFramerate: function() {
            return E
        },
        getApplicationResolution: function() {
            return c
        }
    }), n("411104");
    var i, r, s, a, o, l, u = n("981631"),
        d = n("474936"),
        _ = n("689938");

    function c(e) {
        switch (e) {
            case 480:
                return 480;
            case 720:
                return 720;
            case 1080:
                return 1080;
            case 0:
                return 0;
            default:
                throw Error("Unknown resolution: ".concat(e))
        }
    }

    function E(e) {
        switch (e) {
            case 5:
                return 5;
            case 15:
                return 15;
            case 30:
                return 30;
            case 60:
                return 60;
            default:
                throw Error("Unknown frame rate: ".concat(e))
        }
    }(a = i || (i = {}))[a.RESOLUTION_480 = 480] = "RESOLUTION_480", a[a.RESOLUTION_720 = 720] = "RESOLUTION_720", a[a.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", a[a.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", a[a.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (o = r || (r = {}))[o.FPS_5 = 5] = "FPS_5", o[o.FPS_15 = 15] = "FPS_15", o[o.FPS_30 = 30] = "FPS_30", o[o.FPS_60 = 60] = "FPS_60", (l = s || (s = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
    let I = {
            2: [{
                resolution: 0,
                fps: 15
            }, {
                resolution: 0,
                fps: 5
            }],
            1: [{
                resolution: 1440,
                fps: 60
            }, {
                resolution: 1080,
                fps: 60
            }, {
                resolution: 720,
                fps: 60
            }, {
                resolution: 720,
                fps: 30
            }],
            3: []
        },
        T = [{
            resolution: 0,
            fps: 60,
            quality: d.StreamQualities.HIGH_STREAMING_QUALITY
        }, {
            resolution: 0,
            fps: 30,
            quality: d.StreamQualities.HIGH_STREAMING_QUALITY
        }, {
            resolution: 0,
            fps: 15,
            quality: d.StreamQualities.HIGH_STREAMING_QUALITY
        }, {
            resolution: 0,
            fps: 5,
            preset: 2
        }, {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: u.BoostedGuildTiers.TIER_2,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: u.BoostedGuildTiers.TIER_2,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: u.BoostedGuildTiers.TIER_2,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: u.BoostedGuildTiers.TIER_2,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: u.BoostedGuildTiers.TIER_2,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: u.BoostedGuildTiers.TIER_2,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 720,
            fps: 60,
            guildPremiumTier: u.BoostedGuildTiers.TIER_1,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 720,
            fps: 30
        }, {
            resolution: 720,
            fps: 15
        }, {
            resolution: 720,
            fps: 5
        }, {
            resolution: 480,
            fps: 60,
            guildPremiumTier: u.BoostedGuildTiers.TIER_1,
            quality: d.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 480,
            fps: 30
        }, {
            resolution: 480,
            fps: 15
        }, {
            resolution: 480,
            fps: 5
        }];

    function f(e, t) {
        return {
            value: e,
            get label() {
                return null != t ? t() : e
            }
        }
    }
    let S = [f(720), f(1080), f(1440), f(0, () => _.default.Messages.SCREENSHARE_SOURCE)],
        h = [f(720), f(1080), f(1440)],
        A = e => "".concat(e, "p"),
        m = [f(480, () => A(480)), f(720, () => A(720)), f(1080, () => A(1080)), f(1440, () => A(1440)), f(0, () => _.default.Messages.SCREENSHARE_SOURCE)],
        N = [f(15), f(30), f(60)],
        p = [f(15, () => _.default.Messages.STREAM_FPS_OPTION.format({
            value: 15
        })), f(30, () => _.default.Messages.STREAM_FPS_OPTION.format({
            value: 30
        })), f(60, () => _.default.Messages.STREAM_FPS_OPTION.format({
            value: 60
        }))]
}