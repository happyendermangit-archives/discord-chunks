function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DispatchErrorCodes: function() {
            return l
        },
        RPCDeepLinks: function() {
            return s
        },
        RPC_AUTHENTICATED_SCOPE: function() {
            return E
        },
        RPC_LOCAL_SCOPE: function() {
            return _
        },
        RPC_PRIVATE_LIMITED_SCOPE: function() {
            return d
        },
        RPC_PRIVATE_SCOPE: function() {
            return f
        },
        RPC_SCOPE_CONFIG: function() {
            return u
        },
        TransportTypes: function() {
            return c
        }
    }), (a = u || (u = {})).ANY = "$any", a.ALL = "$all";
    var r, o, i, a, u, s, l, c, f = "RPC_PRIVATE_SCOPE",
        d = "RPC_PRIVATE_LIMITED_SCOPE",
        _ = "RPC_LOCAL_SCOPE",
        E = "RPC_AUTHENTICATED_SCOPE";
    (r = s || (s = {})).USER_SETTINGS = "USER_SETTINGS", r.CHANGELOG = "CHANGELOG", r.LIBRARY = "LIBRARY", r.STORE_HOME = "STORE_HOME", r.STORE_LISTING = "STORE_LISTING", r.CHANNEL = "CHANNEL", r.PICK_GUILD_SETTINGS = "PICK_GUILD_SETTINGS", (o = l || (l = {}))[o.APPLICATION_NOT_FOUND = 101] = "APPLICATION_NOT_FOUND", o[o.DISK_LOW = 2022] = "DISK_LOW", o[o.DISK_PERMISSION_DENIED = 2025] = "DISK_PERMISSION_DENIED", o[o.POST_INSTALL_FAILED = 2025] = "POST_INSTALL_FAILED", o[o.REDISTRIBUTABLE_INSTALL_FAILED = 2026] = "REDISTRIBUTABLE_INSTALL_FAILED", o[o.APPLICATION_LOAD_FAILED = 2034] = "APPLICATION_LOAD_FAILED", o[o.DESERIALIZATION_FAILED = 2047] = "DESERIALIZATION_FAILED", o[o.INTERRUPTED = 2055] = "INTERRUPTED", o[o.MAX_REQUEST_RETRIES_EXCEEDED = 2058] = "MAX_REQUEST_RETRIES_EXCEEDED", o[o.AUTHENTICATION_FAILED = 2063] = "AUTHENTICATION_FAILED", o[o.IO_PERMISSION_DENIED = 2064] = "IO_PERMISSION_DENIED", o[o.NO_MANIFESTS = 2065] = "NO_MANIFESTS", o[o.POST_INSTALL_CANCELLED = 2066] = "POST_INSTALL_CANCELLED", o[o.API_ERROR = 2069] = "API_ERROR", o[o.FILE_NAME_TOO_LONG = 2072] = "FILE_NAME_TOO_LONG", o[o.NOT_ENTITLED = 2073] = "NOT_ENTITLED", o[o.APPLICATION_LOCK_FAILED = 2076] = "APPLICATION_LOCK_FAILED", o[o.NOT_DIRECTORY = 2077] = "NOT_DIRECTORY", o[o.INVALID_DRIVE = 2078] = "INVALID_DRIVE", o[o.DISK_FULL = 2080] = "DISK_FULL", (i = c || (c = {})).IPC = "ipc", i.WEBSOCKET = "ws", i.HTTP = "http", i.POST_MESSAGE = "post_message"
}