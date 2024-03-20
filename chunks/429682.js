function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isIFrameModalForGuildEnabled: function() {
            return l
        }
    });
    var i = n("862205"),
        r = n("49111");
    let s = (0, i.createExperiment)({
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

    function l(e) {
        return s.getCurrentConfig({
            guildId: null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "2d360b_1"
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}