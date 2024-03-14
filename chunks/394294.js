function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
            return r
        },
        MANUAL_APPROVAL_FORM_FIELDS: function() {
            return a
        },
        MAX_FORM_ELEMENTS: function() {
            return o
        },
        MAX_NUM_RULES: function() {
            return l
        },
        MAX_RULE_LENGTH: function() {
            return u
        },
        MAX_QUESTION_LENGTH: function() {
            return d
        },
        MAX_NUM_CHOICES: function() {
            return c
        },
        MAX_CHOICE_LENGTH: function() {
            return f
        },
        MAX_TEXT_RESPONSE_LENGTH: function() {
            return _
        },
        MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
            return h
        },
        MAX_DESCRIPTION_LENGTH: function() {
            return E
        },
        MEMBER_VERIFICATION_TYPE: function() {
            return g
        },
        IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
            return m
        }
    }), n("222007");
    var i, s = n("567054");
    s.VerificationFormFieldTypes.VERIFICATION;
    let r = new Set([s.VerificationFormFieldTypes.TERMS]),
        a = new Set([s.VerificationFormFieldTypes.MULTIPLE_CHOICE, s.VerificationFormFieldTypes.TEXT_INPUT, s.VerificationFormFieldTypes.PARAGRAPH]),
        o = 5,
        l = 16,
        u = 300,
        d = 300,
        c = 8,
        f = 150,
        _ = 150,
        h = 1e3,
        E = 300,
        g = "Membership Gating",
        m = "in-app-member-verification";
    (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
}