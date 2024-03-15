function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OVERLAY_SUPPORTED: function() {
            return g
        },
        OverlayNudgeTypes: function() {
            return u
        },
        getOverlayNotificationGroup: function() {
            return m
        },
        OverlayNotificationGroup: function() {
            return c
        },
        OverlayNotificationType: function() {
            return f
        },
        OverlayNotificationAction: function() {
            return _
        },
        BackgroundOpacityClasses: function() {
            return p
        },
        OverlayMethod: function() {
            return E
        },
        OpacityBounds: function() {
            return S
        }
    });
    var i, s, r, a, o, l, u, d, c, f, _, E, h = n("773336");
    let g = h.isPlatformEmbedded && ((0, h.isWindows)() || !1);

    function m(e) {
        switch (e) {
            case "News Nudge":
            case "Welcome Nudge":
            case "Go Live Nudge":
            case "Go Live Non Voice Nudge":
            case "Start Broadcast Notification":
                return 0;
            case "Text Chat":
                return 1;
            case "Activity User Join":
            case "Activity Invite":
                return 3;
            case "Incoming Call":
                return 2;
            case "Clips Reminder Notification":
            case "Clips Notification":
                return 4;
            default:
                return 5
        }
    }(i = u || (u = {}))[i.WELCOME = 0] = "WELCOME", i[i.NEWS = 1] = "NEWS", i[i.GO_LIVE_VOICE = 2] = "GO_LIVE_VOICE", i[i.GO_LIVE_NON_VOICE = 3] = "GO_LIVE_NON_VOICE", i[i.BROADCAST = 4] = "BROADCAST", i[i.KEYBIND_INDICATORS = 5] = "KEYBIND_INDICATORS", (s = d || (d = {})).PRIMARY = "PRIMARY", s.BRAND = "BRAND", s.DANGER = "DANGER", (r = c || (c = {}))[r.Nudge = 0] = "Nudge", r[r.TextChat = 1] = "TextChat", r[r.VoiceCall = 2] = "VoiceCall", r[r.Activity = 3] = "Activity", r[r.Clips = 4] = "Clips", r[r.Other = 5] = "Other", (a = f || (f = {})).NewsNudge = "News Nudge", a.WelcomeNudge = "Welcome Nudge", a.TextChat = "Text Chat", a.ActivityUserJoin = "Activity User Join", a.ActivityInvite = "Activity Invite", a.IncomingCall = "Incoming Call", a.GoLiveNudge = "Go Live Nudge", a.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge", a.OverlayCrashed = "Overlay Crashed", a.StartBroadcastNotification = "Start Broadcast Notification", a.ClipsReminderNotification = "Clips Reminder Notification", a.ClipsNotification = "Clips Notification", a.KeybindIndicatorsNotification = "Keybind Indicators Notification", (o = _ || (_ = {}))[o.Viewed = 0] = "Viewed", o[o.Clicked = 1] = "Clicked";
    let p = Object.freeze({
        LOW: "background-opacity-low",
        MEDIUM: "background-opacity-medium",
        HIGH: "background-opacity-high",
        FULL: "background-opacity-full",
        DISABLED: null
    });
    (l = E || (E = {}))[l.Disabled = 0] = "Disabled", l[l.Hook = 1] = "Hook", l[l.OutOfProcess = 2] = "OutOfProcess";
    let S = Object.freeze({
        BOTTOM: 0,
        LOWER: .25,
        UPPER: .75,
        TOP: 1
    })
}