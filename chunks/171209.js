function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        removePunctuation: function() {
            return l
        },
        getQueriesFromUserInput: function() {
            return f
        },
        throttledTrackExpressionSuggestionDisplayed: function() {
            return _
        }
    }), n("781738");
    var s = n("369470"),
        i = n.n(s),
        r = n("599110"),
        a = n("721423"),
        o = n("49111");
    let d = /(!|\.|;|,|-|—|–|\?|"|')/g,
        u = /(\n|\t|\s)/g,
        l = e => e.replace(d, "").replace(u, " "),
        f = e => null == e ? [] : l(e).trim().split(" "),
        _ = i(e => {
            r.default.track(o.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                suggestion_trigger: e
            })
        }, a.SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS, {
            leading: !0,
            trailing: !1
        })
}