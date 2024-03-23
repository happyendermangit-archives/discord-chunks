function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("424973");
    var s = n("446674"),
        r = n("193990"),
        a = n("845579"),
        i = n("385649"),
        l = n("599110"),
        u = n("684581"),
        o = n("49111"),
        c = n("782340");

    function d() {
        return m() && u.default.experiment.getCurrentConfig({
            location: "holiday_events_is_eligible"
        }, {
            autoTrackExposure: !1
        }).enabled
    }

    function f() {
        let {
            enabled: e
        } = u.default.experiment.useExperiment({
            location: "holiday_events_use_eligible"
        }, {
            autoTrackExposure: !1
        });
        return m() && e
    }

    function p() {
        return null != u.default.ringtone && null != u.default.getRingtoneSettingsLabel
    }

    function m() {
        let e = Date.now();
        return e >= u.default.startTimeMs && e <= u.default.endTimeMs
    }
    var g = {
        subscribe: function(e) {
            return u.default.experiment.subscribe({
                location: "holiday_events_subscribe"
            }, e)
        },
        isEligible: d,
        isRingtoneDisabled: function() {
            return null == u.default.ringtone || i.default.isSoundDisabled(u.default.ringtone)
        },
        isRingtoneEligible: function() {
            let e = d();
            return e && p()
        },
        onRingtoneSettingValueChange: function(e) {
            let t = i.default.getDisabledSounds();
            if (null == u.default.ringtone) return;
            let n = t.filter(e => e !== u.default.ringtone);
            !e && n.push(u.default.ringtone), r.default.setDisabledSounds(n), l.default.track(o.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
                toggled_on: e,
                sound_name: u.default.ringtone
            })
        },
        useIsEligible: f,
        useIsRingtoneDisabled: function() {
            return (0, s.useStateFromStores)([i.default], () => null == u.default.ringtone || i.default.isSoundDisabled(u.default.ringtone))
        },
        useIsRingtoneEligible: function() {
            let e = f();
            return e && p()
        },
        useRingtoneSettingDescription: function() {
            let e = a.NativePhoneIntegrationEnabled.useSetting();
            return e ? void 0 : c.default.Messages.ENABLE_PHONE_INTEGRATION
        },
        useRingtoneSettingValue: function() {
            let e = (0, s.useStateFromStores)([i.default], () => i.default.getDisabledSounds()),
                t = a.NativePhoneIntegrationEnabled.useSetting();
            return null != u.default.ringtone && t && !e.includes(u.default.ringtone)
        },
        getAppSpinnerSources: function() {
            return m() ? u.default.appSpinnerSources : null
        },
        getLoadingTips: function() {
            var e;
            return m() ? null === (e = u.default.getLoadingTips) || void 0 === e ? void 0 : e.call(u.default) : null
        }
    }
}