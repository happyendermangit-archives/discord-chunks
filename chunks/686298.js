function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationStreamResolutions: function() {
            return i
        },
        getApplicationResolution: function() {
            return _
        },
        ApplicationStreamFPS: function() {
            return s
        },
        ApplicationStreamPresets: function() {
            return r
        },
        getApplicationFramerate: function() {
            return f
        },
        ApplicationStreamPresetValues: function() {
            return E
        },
        ApplicationStreamSettingRequirements: function() {
            return h
        },
        ApplicationStreamResolutionButtons: function() {
            return m
        },
        GoLiveDeviceResolutionButtons: function() {
            return p
        },
        ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
            return v
        },
        ApplicationStreamFPSButtons: function() {
            return T
        },
        ApplicationStreamFPSButtonsWithSuffixLabel: function() {
            return I
        }
    }), n("70102");
    var i, s, r, a, o, l, u = n("49111"),
        d = n("646718"),
        c = n("782340");

    function _(e) {
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

    function f(e) {
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
    }(a = i || (i = {}))[a.RESOLUTION_480 = 480] = "RESOLUTION_480", a[a.RESOLUTION_720 = 720] = "RESOLUTION_720", a[a.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", a[a.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", a[a.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (o = s || (s = {}))[o.FPS_5 = 5] = "FPS_5", o[o.FPS_15 = 15] = "FPS_15", o[o.FPS_30 = 30] = "FPS_30", o[o.FPS_60 = 60] = "FPS_60", (l = r || (r = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
    let E = {
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
        h = [{
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

    function g(e, t) {
        return {
            value: e,
            get label() {
                return null != t ? t() : e
            }
        }
    }
    let m = [g(720), g(1080), g(1440), g(0, () => c.default.Messages.SCREENSHARE_SOURCE)],
        p = [g(720), g(1080), g(1440)],
        S = e => "".concat(e, "p"),
        v = [g(480, () => S(480)), g(720, () => S(720)), g(1080, () => S(1080)), g(1440, () => S(1440)), g(0, () => c.default.Messages.SCREENSHARE_SOURCE)],
        T = [g(15), g(30), g(60)],
        I = [g(15, () => c.default.Messages.STREAM_FPS_OPTION.format({
            value: 15
        })), g(30, () => c.default.Messages.STREAM_FPS_OPTION.format({
            value: 30
        })), g(60, () => c.default.Messages.STREAM_FPS_OPTION.format({
            value: 60
        }))]
}