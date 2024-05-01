function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCanSeeRemixBadge: function() {
            return r
        },
        useIsRemixANitroPerk: function() {
            return a
        }
    }), n("906732");
    let i = (0, n("818083").createExperiment)({
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

    function r() {
        return i.useExperiment({
            location: "canSeeRemixBadge"
        }, {
            autoTrackExposure: !0
        }).canSeeRemixBadge
    }

    function a() {
        return !!i.useExperiment({
            location: "isRemixANitroPerkHook"
        }, {
            autoTrackExposure: !0
        }).isNitroPerk
    }
}