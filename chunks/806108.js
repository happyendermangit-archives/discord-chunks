function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AGE_GATE_REGISTER_TIMEOUT_MS: function() {
            return u
        },
        AgeGateAnalyticAction: function() {
            return o
        },
        AgeGateSource: function() {
            return r
        },
        EXISTING_USER_AGE_GATE_MODAL_KEY: function() {
            return l
        },
        NEW_USER_AGE_GATE_MODAL_KEY: function() {
            return s
        }
    });
    var r, o, i, a, u = 2 * n("388990").default.Millis.HOUR,
        s = "new-user-age-gate-modal",
        l = "existing-user-age-gate-modal";
    (i = r || (r = {})).AUTH = "Register Age Gate", i.NEW_USER_FLOW = "NUF", i.CLAIM_ACCOUNT = "Claim Age Gate", i.NSFW_CHANNEL = "NSFW Channel", i.NSFW_SERVER = "NSFW Server", i.NSFW_SERVER_INVITE = "NSFW Server Invite", i.NSFW_VOICE_CHANNEL = "NSFW Voice Channel", i.FAMILY_CENTER = "Family Center", i.REGISTER = "Register", i.DEEP_LINK_PROMPT = "Deep Link Prompt", i.UNSPECIFIED = "Unspecified", (a = o || (o = {})).AGE_GATE_OPEN = "AGE_GATE_OPEN", a.AGE_GATE_CLOSE = "AGE_GATE_CLOSE", a.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED", a.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS", a.AGE_GATE_FAILURE = "AGE_GATE_FAILURE", a.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", a.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION = "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", a.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
}