function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQueriesFromUserInput: function() {
            return _
        },
        removePunctuation: function() {
            return d
        },
        throttledTrackExpressionSuggestionDisplayed: function() {
            return c
        }
    }), n("757143");
    var i = n("299608"),
        r = n.n(i),
        s = n("626135"),
        a = n("549058"),
        o = n("981631");
    let l = /(!|\.|;|,|-|—|–|\?|"|')/g,
        u = /(\n|\t|\s)/g,
        d = e => e.replace(l, "").replace(u, " "),
        _ = e => null == e ? [] : d(e).trim().split(" "),
        c = r()(e => {
            s.default.track(o.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                suggestion_trigger: e
            })
        }, a.SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS, {
            leading: !0,
            trailing: !1
        })
}