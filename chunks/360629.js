function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        inDesktopNotificationCenterExperiment: function() {
            return a
        },
        useInDesktopNotificationCenterExperiment: function() {
            return s
        }
    });
    var i = n("470079");
    let r = (0, n("818083").createExperiment)({
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
        s = () => {
            let {
                enabled: e
            } = r.useExperiment({
                location: "b8976e_1"
            }, {
                autoTrackExposure: !1
            });
            return i.useEffect(() => {
                r.trackExposure({
                    location: "b8976e_2"
                })
            }, []), e
        },
        a = () => {
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