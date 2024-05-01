function(e, t, n) {
    "use strict";
    var i, r, s, a;
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
    (s = i || (i = {})).AUTH = "Register Age Gate", s.NEW_USER_FLOW = "NUF", s.CLAIM_ACCOUNT = "Claim Age Gate", s.NSFW_CHANNEL = "NSFW Channel", s.NSFW_SERVER = "NSFW Server", s.NSFW_SERVER_INVITE = "NSFW Server Invite", s.NSFW_VOICE_CHANNEL = "NSFW Voice Channel", s.FAMILY_CENTER = "Family Center", s.REGISTER = "Register", s.DEEP_LINK_PROMPT = "Deep Link Prompt", s.UNSPECIFIED = "Unspecified", (a = r || (r = {})).AGE_GATE_OPEN = "AGE_GATE_OPEN", a.AGE_GATE_CLOSE = "AGE_GATE_CLOSE", a.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED", a.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS", a.AGE_GATE_FAILURE = "AGE_GATE_FAILURE", a.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", a.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION = "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", a.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
}