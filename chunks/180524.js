function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d;
    n.r(t), n.d(t, {
        NativePermissionStatus: function() {
            return i
        },
        NativePermissionStates: function() {
            return s
        },
        NativePermissionTypes: function() {
            return r
        }
    }), (o = i || (i = {})).AUTHORIZED = "authorized", o.DENIED = "denied", o.RESTRICTED = "restricted", o.UNDETERMINED = "undetermined", (l = s || (s = {})).DISMISSED = "dismissed", l.DENIED = "denied", l.ACCEPTED = "accepted", l.NO_DEVICES = "no_devices", l.ERROR = "error", l.NONE = "none", (u = r || (r = {})).AUDIO = "audio", u.CAMERA = "camera", u.STORAGE = "storage", u.NOTIFICATIONS = "notifications", u.PHOTOS = "photos", u.CONTACTS = "contacts", u.INPUT_MONITORING = "input_monitoring", u.SCREEN_RECORDING = "screen_recording", (d = a || (a = {}))[d.UNDETERMINED = 0] = "UNDETERMINED", d[d.DENIED = 1] = "DENIED", d[d.AUTHORIZED = 2] = "AUTHORIZED", d[d.PROVISIONAL = 3] = "PROVISIONAL", d[d.EPHEMERAL = 4] = "EPHEMERAL"
}