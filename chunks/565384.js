function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        cleanupImpression: function() {
            return l
        },
        getImpressionStack: function() {
            return c
        },
        getLocation: function() {
            return _
        },
        setCurrentImpression: function() {
            return o
        },
        setDebugTrackedData: function() {
            return u
        },
        useImpressionStore: function() {
            return d
        }
    }), n("47120");
    var i = n("652874"),
        r = n("990547");
    let s = Object.freeze({
            debugTrackedData: null,
            impressions: []
        }),
        a = (0, i.default)(e => s),
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

    function _() {
        let e = {};
        return a.getState().impressions.forEach(t => {
            t.type === r.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name
        }), e
    }

    function c() {
        return a.getState().impressions
    }
}