function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCanSeeRemixBadge: function() {
            return r
        },
        useIsRemixANitroPerk: function() {
            return i
        }
    }), n("685665");
    var a = n("862205");
    let s = (0, a.createExperiment)({
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
        return s.useExperiment({
            location: "canSeeRemixBadge"
        }, {
            autoTrackExposure: !0
        }).canSeeRemixBadge
    }

    function i() {
        return !!s.useExperiment({
            location: "isRemixANitroPerkHook"
        }, {
            autoTrackExposure: !0
        }).isNitroPerk
    }
}