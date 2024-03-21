function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d;
    n.r(t), n.d(t, {
        MAX_RESULTS_PER_PAGE: function() {
            return c
        },
        MAX_VISIBLE_PAGES: function() {
            return _
        },
        VerificationFormFieldTypes: function() {
            return i
        },
        GuildJoinRequestSortOrders: function() {
            return r
        },
        GuildJoinRequestApplicationStatuses: function() {
            return a
        },
        isTermsFormField: function() {
            return f
        }
    });
    let c = 25,
        _ = 4;

    function f(e) {
        return null != e && "TERMS" === e.field_type
    }(o = i || (i = {})).TERMS = "TERMS", o.TEXT_INPUT = "TEXT_INPUT", o.PARAGRAPH = "PARAGRAPH", o.MULTIPLE_CHOICE = "MULTIPLE_CHOICE", o.VERIFICATION = "VERIFICATION", (l = s || (s = {})).EMAIL = "email", l.PHONE = "phone", (u = r || (r = {})).TIMESTAMP_DESC = "NEWEST", u.TIMESTAMP_ASC = "OLDEST", (d = a || (a = {})).STARTED = "STARTED", d.SUBMITTED = "SUBMITTED", d.REJECTED = "REJECTED", d.APPROVED = "APPROVED"
}