function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
            return i
        },
        IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
            return y
        },
        MANUAL_APPROVAL_FORM_FIELDS: function() {
            return a
        },
        MAX_CHOICE_LENGTH: function() {
            return d
        },
        MAX_DESCRIPTION_LENGTH: function() {
            return p
        },
        MAX_FORM_ELEMENTS: function() {
            return u
        },
        MAX_NUM_CHOICES: function() {
            return f
        },
        MAX_NUM_RULES: function() {
            return s
        },
        MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
            return E
        },
        MAX_QUESTION_LENGTH: function() {
            return c
        },
        MAX_RULE_LENGTH: function() {
            return l
        },
        MAX_TEXT_RESPONSE_LENGTH: function() {
            return _
        },
        MEMBER_VERIFICATION_TYPE: function() {
            return m
        }
    });
    var r, o = n("599527");
    o.VerificationFormFieldTypes.VERIFICATION;
    var i = new Set([o.VerificationFormFieldTypes.TERMS]),
        a = new Set([o.VerificationFormFieldTypes.MULTIPLE_CHOICE, o.VerificationFormFieldTypes.TEXT_INPUT, o.VerificationFormFieldTypes.PARAGRAPH]),
        u = 5,
        s = 16,
        l = 300,
        c = 300,
        f = 8,
        d = 150,
        _ = 150,
        E = 1e3,
        p = 300,
        m = "Membership Gating",
        y = "in-app-member-verification";
    (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
}