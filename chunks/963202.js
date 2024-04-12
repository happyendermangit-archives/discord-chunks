function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanExperiment: function() {
            return i
        },
        useIsInUserClanExperiment: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-02_clans",
        label: "Clans",
        defaultConfig: {
            enableClanCreation: !1
        },
        treatments: [{
            id: 1,
            label: "Enable creation of clan guilds",
            config: {
                enableClanCreation: !0
            }
        }]
    });

    function r() {
        let {
            autoTrackExposure: e = !1,
            disable: t = !1,
            location: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i.useExperiment({
            location: n
        }, {
            autoTrackExposure: e,
            disable: t
        }).enableClanCreation
    }
}