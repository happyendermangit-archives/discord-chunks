function(e, t, n) {
    "use strict";
    var i, r, a, s;
    n.r(t), n.d(t, {
        AGE_GATE_REGISTER_TIMEOUT_MS: function() {
            return o
        },
        AgeGateAnalyticAction: function() {
            return r
        },
        AgeGateSource: function() {
            return i
        },
        EXISTING_USER_AGE_GATE_MODAL_KEY: function() {
            return u
        },
        NEW_USER_AGE_GATE_MODAL_KEY: function() {
            return l
        }
    });
    let o = 2 * n("70956").default.Millis.HOUR,
        l = "new-user-age-gate-modal",
        u = "existing-user-age-gate-modal";
    (a = i || (i = {})).AUTH = "Register Age Gate", a.NEW_USER_FLOW = "NUF", a.CLAIM_ACCOUNT = "Claim Age Gate", a.NSFW_CHANNEL = "NSFW Channel", a.NSFW_SERVER = "NSFW Server", a.NSFW_SERVER_INVITE = "NSFW Server Invite", a.NSFW_VOICE_CHANNEL = "NSFW Voice Channel", a.FAMILY_CENTER = "Family Center", a.REGISTER = "Register", a.DEEP_LINK_PROMPT = "Deep Link Prompt", a.UNSPECIFIED = "Unspecified", (s = r || (r = {})).AGE_GATE_OPEN = "AGE_GATE_OPEN", s.AGE_GATE_CLOSE = "AGE_GATE_CLOSE", s.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED", s.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS", s.AGE_GATE_FAILURE = "AGE_GATE_FAILURE", s.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", s.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION = "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", s.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
}