function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setCurrentImpression: function() {
            return o
        },
        cleanupImpression: function() {
            return l
        },
        setDebugTrackedData: function() {
            return u
        },
        useImpressionStore: function() {
            return d
        },
        getLocation: function() {
            return c
        },
        getImpressionStack: function() {
            return f
        }
    }), n("222007");
    var i = n("308503"),
        s = n("759843");
    let r = Object.freeze({
            debugTrackedData: null,
            impressions: []
        }),
        a = (0, i.default)(e => r),
        o = e => {
            a.setState(t => ({
                impressions: [...t.impressions, e]
            }))
        },
        l = e => {
            a.setState(t => ({
                impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
            }))
        },
        u = (e, t) => {
            a.setState(() => ({
                debugTrackedData: {
                    name: e,
                    ...t
                }
            }))
        },
        d = a;

    function c() {
        let e = {};
        return a.getState().impressions.forEach(t => {
            t.type === s.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name
        }), e
    }

    function f() {
        return a.getState().impressions
    }
}