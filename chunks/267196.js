function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
        kind: "user",
        id: "2024-02_activity_react_reply",
        label: "Activity React Reply",
        defaultConfig: {
            enableActivityReactReply: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Activity React / Reply Buttons",
            config: {
                enableActivityReactReply: !0
            }
        }]
    });
    var a = function() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = l.useExperiment({
                location: "useIsEligibleForActivityReactReply"
            }, {
                autoTrackExposure: e
            });
        return t.enableActivityReactReply
    }
}