function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackgroundOpacityClasses: function() {
            return I
        },
        OVERLAY_SUPPORTED: function() {
            return m
        },
        OpacityBounds: function() {
            return h
        },
        OverlayMethod: function() {
            return E
        },
        OverlayNotificationAction: function() {
            return _
        },
        OverlayNotificationGroup: function() {
            return f
        },
        OverlayNotificationType: function() {
            return d
        },
        OverlayNudgeTypes: function() {
            return l
        },
        getOverlayNotificationGroup: function() {
            return y
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _, E, p = n("374550"),
        m = p.isPlatformEmbedded && ((0, p.isWindows)() || !1);

    function y(e) {
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
    }(r = l || (l = {}))[r.WELCOME = 0] = "WELCOME", r[r.NEWS = 1] = "NEWS", r[r.GO_LIVE_VOICE = 2] = "GO_LIVE_VOICE", r[r.GO_LIVE_NON_VOICE = 3] = "GO_LIVE_NON_VOICE", r[r.BROADCAST = 4] = "BROADCAST", r[r.KEYBIND_INDICATORS = 5] = "KEYBIND_INDICATORS", (o = c || (c = {})).PRIMARY = "PRIMARY", o.BRAND = "BRAND", o.DANGER = "DANGER", (i = f || (f = {}))[i.Nudge = 0] = "Nudge", i[i.TextChat = 1] = "TextChat", i[i.VoiceCall = 2] = "VoiceCall", i[i.Activity = 3] = "Activity", i[i.Clips = 4] = "Clips", i[i.Other = 5] = "Other", (a = d || (d = {})).NewsNudge = "News Nudge", a.WelcomeNudge = "Welcome Nudge", a.TextChat = "Text Chat", a.ActivityUserJoin = "Activity User Join", a.ActivityInvite = "Activity Invite", a.IncomingCall = "Incoming Call", a.GoLiveNudge = "Go Live Nudge", a.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge", a.OverlayCrashed = "Overlay Crashed", a.StartBroadcastNotification = "Start Broadcast Notification", a.ClipsReminderNotification = "Clips Reminder Notification", a.ClipsNotification = "Clips Notification", a.KeybindIndicatorsNotification = "Keybind Indicators Notification", (u = _ || (_ = {}))[u.Viewed = 0] = "Viewed", u[u.Clicked = 1] = "Clicked";
    var I = Object.freeze({
        LOW: "background-opacity-low",
        MEDIUM: "background-opacity-medium",
        HIGH: "background-opacity-high",
        FULL: "background-opacity-full",
        DISABLED: null
    });
    (s = E || (E = {}))[s.Disabled = 0] = "Disabled", s[s.Hook = 1] = "Hook", s[s.OutOfProcess = 2] = "OutOfProcess";
    var h = Object.freeze({
        BOTTOM: 0,
        LOWER: .25,
        UPPER: .75,
        TOP: 1
    })
}