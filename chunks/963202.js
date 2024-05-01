function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsInUserClanExperiment: function() {
            return a
        }
    });
    var i = n("818083"),
        r = n("308083");
    let s = (0, i.createExperiment)({
        kind: "user",
        id: "2024-02_clans",
        label: "Clans",
        defaultConfig: {
            enableClanCreation: !1,
            defaultGameId: null
        },
        treatments: [{
            id: 1,
            label: "Enable creation of clan guilds",
            config: {
                enableClanCreation: !0,
                defaultGameId: null
            }
        }, {
            id: 2,
            label: "Enable creation of clan guilds - Valorant",
            config: {
                enableClanCreation: !0,
                defaultGameId: r.VALORANT_ID
            }
        }, {
            id: 3,
            label: "Enable creation of clan guilds - Genshin Impact",
            config: {
                enableClanCreation: !0,
                defaultGameId: r.GENSHIN_ID
            }
        }]
    });

    function a() {
        let {
            autoTrackExposure: e = !1,
            disable: t = !1,
            location: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return s.useExperiment({
            location: n
        }, {
            autoTrackExposure: e,
            disable: t
        }).enableClanCreation
    }
}