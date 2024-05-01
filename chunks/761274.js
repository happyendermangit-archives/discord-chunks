function(e, t, n) {
    "use strict";
    var i, r, a, s, o, l, u, d;
    n.r(t), n.d(t, {
        NativePermissionStates: function() {
            return r
        },
        NativePermissionStatus: function() {
            return i
        },
        NativePermissionTypes: function() {
            return a
        }
    }), (o = i || (i = {})).AUTHORIZED = "authorized", o.DENIED = "denied", o.RESTRICTED = "restricted", o.UNDETERMINED = "undetermined", (l = r || (r = {})).DISMISSED = "dismissed", l.DENIED = "denied", l.ACCEPTED = "accepted", l.NO_DEVICES = "no_devices", l.ERROR = "error", l.NONE = "none", (u = a || (a = {})).AUDIO = "audio", u.CAMERA = "camera", u.STORAGE = "storage", u.NOTIFICATIONS = "notifications", u.PHOTOS = "photos", u.CONTACTS = "contacts", u.INPUT_MONITORING = "input_monitoring", u.SCREEN_RECORDING = "screen_recording", (d = s || (s = {}))[d.UNDETERMINED = 0] = "UNDETERMINED", d[d.DENIED = 1] = "DENIED", d[d.AUTHORIZED = 2] = "AUTHORIZED", d[d.PROVISIONAL = 3] = "PROVISIONAL", d[d.EPHEMERAL = 4] = "EPHEMERAL"
}