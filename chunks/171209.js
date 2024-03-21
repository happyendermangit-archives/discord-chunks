function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        removePunctuation: function() {
            return d
        },
        getQueriesFromUserInput: function() {
            return c
        },
        throttledTrackExpressionSuggestionDisplayed: function() {
            return _
        }
    }), n("781738");
    var i = n("369470"),
        s = n.n(i),
        r = n("599110"),
        a = n("721423"),
        o = n("49111");
    let l = /(!|\.|;|,|-|—|–|\?|"|')/g,
        u = /(\n|\t|\s)/g,
        d = e => e.replace(l, "").replace(u, " "),
        c = e => null == e ? [] : d(e).trim().split(" "),
        _ = s(e => {
            r.default.track(o.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                suggestion_trigger: e
            })
        }, a.SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS, {
            leading: !0,
            trailing: !1
        })
}