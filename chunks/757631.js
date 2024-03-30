function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("898511"),
        r = n("572088"),
        i = n("53867"),
        l = n("335328"),
        s = n("870331"),
        o = n("166642"),
        u = n("281767"),
        c = n("941504");

    function m() {
        return p() && o.default.experiment.getCurrentConfig({
            location: "holiday_events_is_eligible"
        }, {
            autoTrackExposure: !1
        }).enabled
    }

    function d() {
        var e = o.default.experiment.useExperiment({
            location: "holiday_events_use_eligible"
        }, {
            autoTrackExposure: !1
        }).enabled;
        return p() && e
    }

    function f() {
        return null != o.default.ringtone && null != o.default.getRingtoneSettingsLabel
    }

    function p() {
        var e = Date.now();
        return e >= o.default.startTimeMs && e <= o.default.endTimeMs
    }
    t.default = {
        subscribe: function(e) {
            return o.default.experiment.subscribe({
                location: "holiday_events_subscribe"
            }, e)
        },
        isEligible: m,
        isRingtoneDisabled: function() {
            return null == o.default.ringtone || l.default.isSoundDisabled(o.default.ringtone)
        },
        isRingtoneEligible: function() {
            return m() && f()
        },
        onRingtoneSettingValueChange: function(e) {
            var t = l.default.getDisabledSounds();
            if (null != o.default.ringtone) {
                var n = t.filter(function(e) {
                    return e !== o.default.ringtone
                });
                !e && n.push(o.default.ringtone), r.default.setDisabledSounds(n), s.default.track(u.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
                    toggled_on: e,
                    sound_name: o.default.ringtone
                })
            }
        },
        useIsEligible: d,
        useIsRingtoneDisabled: function() {
            return (0, a.useStateFromStores)([l.default], function() {
                return null == o.default.ringtone || l.default.isSoundDisabled(o.default.ringtone)
            })
        },
        useIsRingtoneEligible: function() {
            return d() && f()
        },
        useRingtoneSettingDescription: function() {
            return i.NativePhoneIntegrationEnabled.useSetting() ? void 0 : c.default.Messages.ENABLE_PHONE_INTEGRATION
        },
        useRingtoneSettingValue: function() {
            var e = (0, a.useStateFromStores)([l.default], function() {
                    return l.default.getDisabledSounds()
                }),
                t = i.NativePhoneIntegrationEnabled.useSetting();
            return null != o.default.ringtone && t && !e.includes(o.default.ringtone)
        },
        getAppSpinnerSources: function() {
            return p() ? o.default.appSpinnerSources : null
        },
        getLoadingTips: function() {
            var e;
            return p() ? null === (e = o.default.getLoadingTips) || void 0 === e ? void 0 : e.call(o.default) : null
        }
    }
}