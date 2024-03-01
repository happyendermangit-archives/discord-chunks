function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useInDesktopNotificationCenterExperiment: function() {
            return a
        },
        inDesktopNotificationCenterExperiment: function() {
            return o
        }
    });
    var s = n("884691"),
        i = n("862205");
    let r = (0, i.createExperiment)({
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
        a = () => {
            let {
                enabled: e
            } = r.useExperiment({
                location: "b8976e_1"
            }, {
                autoTrackExposure: !1
            });
            return s.useEffect(() => {
                r.trackExposure({
                    location: "b8976e_2"
                })
            }, []), e
        },
        o = () => {
            let {
                enabled: e
            } = r.getCurrentConfig({
                location: "b8976e_3"
            }, {
                autoTrackExposure: !1
            });
            return e
        }
}