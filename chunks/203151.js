function(e, t, n) {
    "use strict";
    var r, o, i, a, u, s, l, c;
    n.r(t), n.d(t, {
        NativePermissionStates: function() {
            return o
        },
        NativePermissionStatus: function() {
            return r
        },
        NativePermissionTypes: function() {
            return i
        }
    }), (u = r || (r = {})).AUTHORIZED = "authorized", u.DENIED = "denied", u.RESTRICTED = "restricted", u.UNDETERMINED = "undetermined", (s = o || (o = {})).DISMISSED = "dismissed", s.DENIED = "denied", s.ACCEPTED = "accepted", s.NO_DEVICES = "no_devices", s.ERROR = "error", s.NONE = "none", (l = i || (i = {})).AUDIO = "audio", l.CAMERA = "camera", l.STORAGE = "storage", l.NOTIFICATIONS = "notifications", l.PHOTOS = "photos", l.CONTACTS = "contacts", l.INPUT_MONITORING = "input_monitoring", l.SCREEN_RECORDING = "screen_recording", (c = a || (a = {}))[c.UNDETERMINED = 0] = "UNDETERMINED", c[c.DENIED = 1] = "DENIED", c[c.AUTHORIZED = 2] = "AUTHORIZED", c[c.PROVISIONAL = 3] = "PROVISIONAL", c[c.EPHEMERAL = 4] = "EPHEMERAL"
}