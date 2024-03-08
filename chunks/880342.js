function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        recentlyHeardExperiment: function() {
            return a
        },
        useRecentlyHeardExperiment: function() {
            return s
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
        kind: "user",
        id: "2023-11_soundboard_recently_heard_frequently_played",
        label: "Soundboard Recently Heard & Frequently Played",
        defaultConfig: {
            canSeeRecentlyHeard: !1,
            canSeeFrequentlyPlayed: !1
        },
        treatments: [{
            id: 1,
            label: "User can see Recently Heard soundboard section",
            config: {
                canSeeRecentlyHeard: !0,
                canSeeFrequentlyPlayed: !1
            }
        }, {
            id: 2,
            label: "User can see Frequently Played soundboard section",
            config: {
                canSeeRecentlyHeard: !1,
                canSeeFrequentlyPlayed: !0
            }
        }, {
            id: 3,
            label: "User can see Frequently Played & Recently Heard soundboard sections",
            config: {
                canSeeRecentlyHeard: !0,
                canSeeFrequentlyPlayed: !0
            }
        }]
    });

    function a(e) {
        let {
            location: t,
            autoTrackExposure: n
        } = e;
        return l.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        })
    }

    function s(e) {
        let {
            autoTrackExposure: t,
            location: n
        } = e;
        return l.useExperiment({
            location: n
        }, {
            autoTrackExposure: t
        })
    }
}