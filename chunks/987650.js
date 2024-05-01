function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackgroundOpacityClasses: function() {
            return h
        },
        OVERLAY_SUPPORTED: function() {
            return f
        },
        OpacityBounds: function() {
            return A
        },
        OverlayMethod: function() {
            return I
        },
        OverlayNotificationAction: function() {
            return E
        },
        OverlayNotificationGroup: function() {
            return _
        },
        OverlayNotificationType: function() {
            return c
        },
        OverlayNudgeTypes: function() {
            return u
        },
        getOverlayNotificationGroup: function() {
            return S
        }
    });
    var i, r, a, s, o, l, u, d, _, c, E, I, T = n("358085");
    let f = T.isPlatformEmbedded && ((0, T.isWindows)() || !1);

    function S(e) {
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
    }(i = u || (u = {}))[i.WELCOME = 0] = "WELCOME", i[i.NEWS = 1] = "NEWS", i[i.GO_LIVE_VOICE = 2] = "GO_LIVE_VOICE", i[i.GO_LIVE_NON_VOICE = 3] = "GO_LIVE_NON_VOICE", i[i.BROADCAST = 4] = "BROADCAST", i[i.KEYBIND_INDICATORS = 5] = "KEYBIND_INDICATORS", (r = d || (d = {})).PRIMARY = "PRIMARY", r.BRAND = "BRAND", r.DANGER = "DANGER", (a = _ || (_ = {}))[a.Nudge = 0] = "Nudge", a[a.TextChat = 1] = "TextChat", a[a.VoiceCall = 2] = "VoiceCall", a[a.Activity = 3] = "Activity", a[a.Clips = 4] = "Clips", a[a.Other = 5] = "Other", (s = c || (c = {})).NewsNudge = "News Nudge", s.WelcomeNudge = "Welcome Nudge", s.TextChat = "Text Chat", s.ActivityUserJoin = "Activity User Join", s.ActivityInvite = "Activity Invite", s.IncomingCall = "Incoming Call", s.GoLiveNudge = "Go Live Nudge", s.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge", s.OverlayCrashed = "Overlay Crashed", s.StartBroadcastNotification = "Start Broadcast Notification", s.ClipsReminderNotification = "Clips Reminder Notification", s.ClipsNotification = "Clips Notification", s.KeybindIndicatorsNotification = "Keybind Indicators Notification", (o = E || (E = {}))[o.Viewed = 0] = "Viewed", o[o.Clicked = 1] = "Clicked";
    let h = Object.freeze({
        LOW: "background-opacity-low",
        MEDIUM: "background-opacity-medium",
        HIGH: "background-opacity-high",
        FULL: "background-opacity-full",
        DISABLED: null
    });
    (l = I || (I = {}))[l.Disabled = 0] = "Disabled", l[l.Hook = 1] = "Hook", l[l.OutOfProcess = 2] = "OutOfProcess";
    let A = Object.freeze({
        BOTTOM: 0,
        LOWER: .25,
        UPPER: .75,
        TOP: 1
    })
}