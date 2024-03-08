function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUMMARY_POLL_INTERVAL: function() {
            return c
        },
        SummariesSidebarToggledSource: function() {
            return s
        },
        SummariesTopicClickedSource: function() {
            return r
        },
        SummaryFeedbackReasons: function() {
            return o
        },
        getSummaryFeedbackReasons: function() {
            return f
        }
    });
    var i, l, a, s, r, o, u = n("718517"),
        d = n("782340");
    let c = 5 * u.default.Millis.SECOND;

    function f() {
        return [{
            value: "DUPLICATED",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_DUPLICATED
        }, {
            value: "TOO_GENERIC",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_GENERIC
        }, {
            value: "TOO_MANY",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_MANY
        }, {
            value: "INACCURATE",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_INACCURATE
        }, {
            value: "NOT_USEFUL",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_NOT_USEFUL
        }, {
            value: "OTHER",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_OTHER
        }]
    }(i = s || (s = {})).TOOLBAR_BUTTON = "toolbar button", i.PILL = "pill", (l = r || (r = {})).SIDEBAR = "sidebar", l.PILL_DROPDOWN = "pill dropdown", l.PILL_NEXT_ARROW = "pill next arrow", l.PILL_PREVIOUS_ARROW = "pill previous arrow", (a = o || (o = {})).DUPLICATED = "DUPLICATED", a.TOO_GENERIC = "TOO_GENERIC", a.TOO_MANY = "TOO_MANY", a.INACCURATE = "INACCURATE", a.NOT_USEFUL = "NOT_USEFUL", a.OTHER = "OTHER"
}