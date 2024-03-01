function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, c;
    n.r(t), n.d(t, {
        NativePermissionStatus: function() {
            return i
        },
        NativePermissionStates: function() {
            return r
        },
        NativePermissionTypes: function() {
            return s
        }
    }), (o = i || (i = {})).AUTHORIZED = "authorized", o.DENIED = "denied", o.RESTRICTED = "restricted", o.UNDETERMINED = "undetermined", (l = r || (r = {})).DISMISSED = "dismissed", l.DENIED = "denied", l.ACCEPTED = "accepted", l.NO_DEVICES = "no_devices", l.ERROR = "error", l.NONE = "none", (u = s || (s = {})).AUDIO = "audio", u.CAMERA = "camera", u.STORAGE = "storage", u.NOTIFICATIONS = "notifications", u.PHOTOS = "photos", u.CONTACTS = "contacts", u.INPUT_MONITORING = "input_monitoring", u.SCREEN_RECORDING = "screen_recording", (c = a || (a = {}))[c.UNDETERMINED = 0] = "UNDETERMINED", c[c.DENIED = 1] = "DENIED", c[c.AUTHORIZED = 2] = "AUTHORIZED", c[c.PROVISIONAL = 3] = "PROVISIONAL", c[c.EPHEMERAL = 4] = "EPHEMERAL"
}