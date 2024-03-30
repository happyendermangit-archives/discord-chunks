function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRedesignToggleIgnored: function() {
            return a
        },
        useRedesignToggleIgnored: function() {
            return i
        }
    });
    var r = n("94498");
    n("709537");
    var o = (0, r.createExperiment)({
        kind: "user",
        id: "2023-09_mobile_redesign_override_toggles",
        label: "Tabs V2 - redesign opt-out/in for all",
        defaultConfig: {
            hide: !1,
            ignore: !1
        },
        treatments: [{
            id: 1,
            label: "control",
            config: {
                hide: !1,
                ignore: !1
            }
        }, {
            id: 2,
            label: "hide toggles",
            config: {
                hide: !0,
                ignore: !1
            }
        }, {
            id: 3,
            label: "hide & ignore toggles",
            config: {
                hide: !0,
                ignore: !0
            }
        }]
    });
    (0, r.createExperiment)({
        kind: "user",
        id: "2023-09_mobile_redesign_override_toggles_t2",
        label: "Tabs V2 - redesign opt-out for T2",
        defaultConfig: {
            hide: !1
        },
        treatments: [{
            id: 1,
            label: "show",
            config: {
                hide: !1
            }
        }, {
            id: 2,
            label: "hide",
            config: {
                hide: !0
            }
        }]
    });
    var i = function() {
            return o.useExperiment({
                location: "x"
            }, {
                autoTrackExposure: !1
            }).ignore
        },
        a = function() {
            return o.getCurrentConfig({
                location: "x"
            }, {
                autoTrackExposure: !1
            }).ignore
        }
}