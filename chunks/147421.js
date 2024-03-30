function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        inDesktopNotificationCenterExperiment: function() {
            return a
        },
        useInDesktopNotificationCenterExperiment: function() {
            return i
        }
    });
    var r = n("470079"),
        o = (0, n("94498").createExperiment)({
            kind: "user",
            id: "2022-11_desktop_notification_center",
            label: "Desktop notification center",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Notification center desktop enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        i = function() {
            var e = o.useExperiment({
                location: "b8976e_1"
            }, {
                autoTrackExposure: !1
            }).enabled;
            return r.useEffect(function() {
                o.trackExposure({
                    location: "b8976e_2"
                })
            }, []), e
        },
        a = function() {
            return o.getCurrentConfig({
                location: "b8976e_3"
            }, {
                autoTrackExposure: !1
            }).enabled
        }
}