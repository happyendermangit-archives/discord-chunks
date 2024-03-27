function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d;
    n.r(t), n.d(t, {
        GuildJoinRequestApplicationStatuses: function() {
            return a
        },
        GuildJoinRequestSortOrders: function() {
            return s
        },
        MAX_RESULTS_PER_PAGE: function() {
            return _
        },
        MAX_VISIBLE_PAGES: function() {
            return c
        },
        VerificationFormFieldTypes: function() {
            return i
        },
        isTermsFormField: function() {
            return E
        }
    });
    let _ = 25,
        c = 4;

    function E(e) {
        return null != e && "TERMS" === e.field_type
    }(o = i || (i = {})).TERMS = "TERMS", o.TEXT_INPUT = "TEXT_INPUT", o.PARAGRAPH = "PARAGRAPH", o.MULTIPLE_CHOICE = "MULTIPLE_CHOICE", o.VERIFICATION = "VERIFICATION", (l = r || (r = {})).EMAIL = "email", l.PHONE = "phone", (u = s || (s = {})).TIMESTAMP_DESC = "NEWEST", u.TIMESTAMP_ASC = "OLDEST", (d = a || (a = {})).STARTED = "STARTED", d.SUBMITTED = "SUBMITTED", d.REJECTED = "REJECTED", d.APPROVED = "APPROVED"
}