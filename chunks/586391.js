function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AGE_GATE_REGISTER_TIMEOUT_MS: function() {
            return l
        },
        NEW_USER_AGE_GATE_MODAL_KEY: function() {
            return u
        },
        EXISTING_USER_AGE_GATE_MODAL_KEY: function() {
            return c
        },
        AgeGateSource: function() {
            return s
        },
        AgeGateAnalyticAction: function() {
            return a
        }
    });
    var i, r, s, a, o = n("718517");
    let l = 2 * o.default.Millis.HOUR,
        u = "new-user-age-gate-modal",
        c = "existing-user-age-gate-modal";
    (i = s || (s = {})).AUTH = "Register Age Gate", i.NEW_USER_FLOW = "NUF", i.CLAIM_ACCOUNT = "Claim Age Gate", i.NSFW_CHANNEL = "NSFW Channel", i.NSFW_SERVER = "NSFW Server", i.NSFW_SERVER_INVITE = "NSFW Server Invite", i.NSFW_VOICE_CHANNEL = "NSFW Voice Channel", i.FAMILY_CENTER = "Family Center", i.REGISTER = "Register", i.DEEP_LINK_PROMPT = "Deep Link Prompt", i.UNSPECIFIED = "Unspecified", (r = a || (a = {})).AGE_GATE_OPEN = "AGE_GATE_OPEN", r.AGE_GATE_CLOSE = "AGE_GATE_CLOSE", r.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED", r.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS", r.AGE_GATE_FAILURE = "AGE_GATE_FAILURE", r.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", r.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION = "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", r.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
}