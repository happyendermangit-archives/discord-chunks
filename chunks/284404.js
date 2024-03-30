function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQueriesFromUserInput: function() {
            return f
        },
        removePunctuation: function() {
            return c
        },
        throttledTrackExpressionSuggestionDisplayed: function() {
            return d
        }
    });
    var r = n("299608"),
        o = n.n(r),
        i = n("870331"),
        a = n("241261"),
        u = n("281767"),
        s = /(!|\.|;|,|-|—|–|\?|"|')/g,
        l = /(\n|\t|\s)/g,
        c = function(e) {
            return e.replace(s, "").replace(l, " ")
        },
        f = function(e) {
            return null == e ? [] : c(e).trim().split(" ")
        },
        d = o()(function(e) {
            i.default.track(u.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                suggestion_trigger: e
            })
        }, a.SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS, {
            leading: !0,
            trailing: !1
        })
}