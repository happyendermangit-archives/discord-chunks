function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationStreamFPS: function() {
            return u
        },
        ApplicationStreamFPSButtons: function() {
            return v
        },
        ApplicationStreamFPSButtonsWithSuffixLabel: function() {
            return g
        },
        ApplicationStreamPresetValues: function() {
            return m
        },
        ApplicationStreamPresets: function() {
            return s
        },
        ApplicationStreamResolutionButtons: function() {
            return h
        },
        ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
            return S
        },
        ApplicationStreamResolutions: function() {
            return a
        },
        ApplicationStreamSettingRequirements: function() {
            return y
        },
        GoLiveDeviceResolutionButtons: function() {
            return O
        },
        getApplicationFramerate: function() {
            return p
        },
        getApplicationResolution: function() {
            return E
        }
    });
    var r, o, i, a, u, s, l, c = n("281767"),
        f = n("868615"),
        d = n("941504");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
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

    function p(e) {
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
    }(r = a || (a = {}))[r.RESOLUTION_480 = 480] = "RESOLUTION_480", r[r.RESOLUTION_720 = 720] = "RESOLUTION_720", r[r.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", r[r.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", r[r.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (o = u || (u = {}))[o.FPS_5 = 5] = "FPS_5", o[o.FPS_15 = 15] = "FPS_15", o[o.FPS_30 = 30] = "FPS_30", o[o.FPS_60 = 60] = "FPS_60", (i = s || (s = {}))[i.PRESET_VIDEO = 1] = "PRESET_VIDEO", i[i.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", i[i.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
    var m = (_(l = {}, 2, [{
            resolution: 0,
            fps: 15
        }, {
            resolution: 0,
            fps: 5
        }]), _(l, 1, [{
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
        }]), _(l, 3, []), l),
        y = [{
            resolution: 0,
            fps: 60,
            quality: f.StreamQualities.HIGH_STREAMING_QUALITY
        }, {
            resolution: 0,
            fps: 30,
            quality: f.StreamQualities.HIGH_STREAMING_QUALITY
        }, {
            resolution: 0,
            fps: 15,
            quality: f.StreamQualities.HIGH_STREAMING_QUALITY
        }, {
            resolution: 0,
            fps: 5,
            preset: 2
        }, {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: c.BoostedGuildTiers.TIER_2,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: c.BoostedGuildTiers.TIER_2,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: c.BoostedGuildTiers.TIER_2,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: c.BoostedGuildTiers.TIER_2,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: c.BoostedGuildTiers.TIER_2,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: c.BoostedGuildTiers.TIER_2,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
        }, {
            resolution: 720,
            fps: 60,
            guildPremiumTier: c.BoostedGuildTiers.TIER_1,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
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
            guildPremiumTier: c.BoostedGuildTiers.TIER_1,
            quality: f.StreamQualities.MID_STREAMING_QUALITY
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

    function I(e, t) {
        return {
            value: e,
            get label() {
                return null != t ? t() : e
            }
        }
    }
    var h = [I(720), I(1080), I(1440), I(0, function() {
            return d.default.Messages.SCREENSHARE_SOURCE
        })],
        O = [I(720), I(1080), I(1440)],
        T = function(e) {
            return "".concat(e, "p")
        },
        S = [I(480, function() {
            return T(480)
        }), I(720, function() {
            return T(720)
        }), I(1080, function() {
            return T(1080)
        }), I(1440, function() {
            return T(1440)
        }), I(0, function() {
            return d.default.Messages.SCREENSHARE_SOURCE
        })],
        v = [I(15), I(30), I(60)],
        g = [I(15, function() {
            return d.default.Messages.STREAM_FPS_OPTION.format({
                value: 15
            })
        }), I(30, function() {
            return d.default.Messages.STREAM_FPS_OPTION.format({
                value: 30
            })
        }), I(60, function() {
            return d.default.Messages.STREAM_FPS_OPTION.format({
                value: 60
            })
        })]
}