function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d;
    n.r(t), n.d(t, {
        DispatchErrorCodes: function() {
            return s
        },
        RPCDeepLinks: function() {
            return r
        },
        RPC_AUTHENTICATED_SCOPE: function() {
            return I
        },
        RPC_LOCAL_SCOPE: function() {
            return E
        },
        RPC_PRIVATE_LIMITED_SCOPE: function() {
            return c
        },
        RPC_PRIVATE_SCOPE: function() {
            return _
        },
        RPC_SCOPE_CONFIG: function() {
            return i
        },
        TransportTypes: function() {
            return a
        }
    }), (o = i || (i = {})).ANY = "$any", o.ALL = "$all";
    let _ = "RPC_PRIVATE_SCOPE",
        c = "RPC_PRIVATE_LIMITED_SCOPE",
        E = "RPC_LOCAL_SCOPE",
        I = "RPC_AUTHENTICATED_SCOPE";
    (l = r || (r = {})).USER_SETTINGS = "USER_SETTINGS", l.CHANGELOG = "CHANGELOG", l.LIBRARY = "LIBRARY", l.STORE_HOME = "STORE_HOME", l.STORE_LISTING = "STORE_LISTING", l.CHANNEL = "CHANNEL", l.PICK_GUILD_SETTINGS = "PICK_GUILD_SETTINGS", (u = s || (s = {}))[u.APPLICATION_NOT_FOUND = 101] = "APPLICATION_NOT_FOUND", u[u.DISK_LOW = 2022] = "DISK_LOW", u[u.DISK_PERMISSION_DENIED = 2025] = "DISK_PERMISSION_DENIED", u[u.POST_INSTALL_FAILED = 2025] = "POST_INSTALL_FAILED", u[u.REDISTRIBUTABLE_INSTALL_FAILED = 2026] = "REDISTRIBUTABLE_INSTALL_FAILED", u[u.APPLICATION_LOAD_FAILED = 2034] = "APPLICATION_LOAD_FAILED", u[u.DESERIALIZATION_FAILED = 2047] = "DESERIALIZATION_FAILED", u[u.INTERRUPTED = 2055] = "INTERRUPTED", u[u.MAX_REQUEST_RETRIES_EXCEEDED = 2058] = "MAX_REQUEST_RETRIES_EXCEEDED", u[u.AUTHENTICATION_FAILED = 2063] = "AUTHENTICATION_FAILED", u[u.IO_PERMISSION_DENIED = 2064] = "IO_PERMISSION_DENIED", u[u.NO_MANIFESTS = 2065] = "NO_MANIFESTS", u[u.POST_INSTALL_CANCELLED = 2066] = "POST_INSTALL_CANCELLED", u[u.API_ERROR = 2069] = "API_ERROR", u[u.FILE_NAME_TOO_LONG = 2072] = "FILE_NAME_TOO_LONG", u[u.NOT_ENTITLED = 2073] = "NOT_ENTITLED", u[u.APPLICATION_LOCK_FAILED = 2076] = "APPLICATION_LOCK_FAILED", u[u.NOT_DIRECTORY = 2077] = "NOT_DIRECTORY", u[u.INVALID_DRIVE = 2078] = "INVALID_DRIVE", u[u.DISK_FULL = 2080] = "DISK_FULL", (d = a || (a = {})).IPC = "ipc", d.WEBSOCKET = "ws", d.HTTP = "http", d.POST_MESSAGE = "post_message"
}