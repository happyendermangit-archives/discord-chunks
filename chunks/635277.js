function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUMMARY_POLL_INTERVAL: function() {
            return f
        },
        SummariesSidebarToggledSource: function() {
            return a
        },
        SummariesTopicClickedSource: function() {
            return u
        },
        SummaryFeedbackReasons: function() {
            return s
        },
        getSummaryFeedbackReasons: function() {
            return d
        }
    });
    var r, o, i, a, u, s, l = n("388990"),
        c = n("941504"),
        f = 5 * l.default.Millis.SECOND;

    function d() {
        return [{
            value: "DUPLICATED",
            label: c.default.Messages.SUMMARIES_FEEDBACK_OPTION_DUPLICATED
        }, {
            value: "TOO_GENERIC",
            label: c.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_GENERIC
        }, {
            value: "TOO_MANY",
            label: c.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_MANY
        }, {
            value: "INACCURATE",
            label: c.default.Messages.SUMMARIES_FEEDBACK_OPTION_INACCURATE
        }, {
            value: "NOT_USEFUL",
            label: c.default.Messages.SUMMARIES_FEEDBACK_OPTION_NOT_USEFUL
        }, {
            value: "OTHER",
            label: c.default.Messages.SUMMARIES_FEEDBACK_OPTION_OTHER
        }]
    }(r = a || (a = {})).TOOLBAR_BUTTON = "toolbar button", r.PILL = "pill", (o = u || (u = {})).SIDEBAR = "sidebar", o.PILL_DROPDOWN = "pill dropdown", o.PILL_NEXT_ARROW = "pill next arrow", o.PILL_PREVIOUS_ARROW = "pill previous arrow", (i = s || (s = {})).DUPLICATED = "DUPLICATED", i.TOO_GENERIC = "TOO_GENERIC", i.TOO_MANY = "TOO_MANY", i.INACCURATE = "INACCURATE", i.NOT_USEFUL = "NOT_USEFUL", i.OTHER = "OTHER"
}