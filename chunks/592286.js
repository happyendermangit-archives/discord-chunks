function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
            return a
        },
        IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
            return S
        },
        MANUAL_APPROVAL_FORM_FIELDS: function() {
            return s
        },
        MAX_CHOICE_LENGTH: function() {
            return c
        },
        MAX_DESCRIPTION_LENGTH: function() {
            return T
        },
        MAX_FORM_ELEMENTS: function() {
            return o
        },
        MAX_NUM_CHOICES: function() {
            return _
        },
        MAX_NUM_RULES: function() {
            return l
        },
        MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
            return I
        },
        MAX_QUESTION_LENGTH: function() {
            return d
        },
        MAX_RULE_LENGTH: function() {
            return u
        },
        MAX_TEXT_RESPONSE_LENGTH: function() {
            return E
        },
        MEMBER_VERIFICATION_TYPE: function() {
            return f
        }
    }), n("47120");
    var i, r = n("246364");
    r.VerificationFormFieldTypes.VERIFICATION;
    let a = new Set([r.VerificationFormFieldTypes.TERMS]),
        s = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
        o = 5,
        l = 16,
        u = 300,
        d = 300,
        _ = 8,
        c = 150,
        E = 150,
        I = 1e3,
        T = 300,
        f = "Membership Gating",
        S = "in-app-member-verification";
    (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
}