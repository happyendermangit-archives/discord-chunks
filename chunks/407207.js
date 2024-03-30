function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isIFrameModalForGuildEnabled: function() {
            return a
        }
    });
    var r = n("94498"),
        o = n("281767"),
        i = (0, r.createExperiment)({
            kind: "guild",
            id: "2023-08_iframe_modal_guild",
            label: "iFrame Modal guild experiment",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable iFrame Modal Guild",
                config: {
                    enabled: !0
                }
            }]
        });

    function a(e) {
        return i.getCurrentConfig({
            guildId: null != e ? e : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "2d360b_1"
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}