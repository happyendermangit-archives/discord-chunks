function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCanSeeRemixBadge: function() {
            return a
        },
        useIsRemixANitroPerk: function() {
            return o
        }
    }), n("396586");
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-08_remix_ga",
        label: "Remix General Available",
        defaultConfig: {
            canSeeRemixBadge: !1,
            canRemix: !1,
            isNitroPerk: !1
        },
        treatments: [{
            id: 1,
            label: "Remix for Nitro Subscribers",
            config: {
                canSeeRemixBadge: !0,
                canRemix: !0,
                isNitroPerk: !0
            }
        }, {
            id: 3,
            label: "Upsell Remix for Non-Nitro Users",
            config: {
                canSeeRemixBadge: !0,
                canRemix: !1,
                isNitroPerk: !0
            }
        }, {
            id: 5,
            label: "Remix GA for everyone",
            config: {
                canSeeRemixBadge: !0,
                canRemix: !0,
                isNitroPerk: !1
            }
        }]
    });

    function a() {
        return r.useExperiment({
            location: "canSeeRemixBadge"
        }, {
            autoTrackExposure: !0
        }).canSeeRemixBadge
    }

    function o() {
        return !!r.useExperiment({
            location: "isRemixANitroPerkHook"
        }, {
            autoTrackExposure: !0
        }).isNitroPerk
    }
}