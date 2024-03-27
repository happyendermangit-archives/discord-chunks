function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        commandName: function() {
            return r
        },
        keyPermissions: function() {
            return a
        },
        toPermissionKey: function() {
            return s
        }
    }), n("47120");
    var i = n("911969");

    function r(e, t) {
        return e === i.ApplicationCommandType.CHAT ? "/" + t : t
    }

    function s(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function a(e) {
        return Object.fromEntries(e.map(e => [s(e.id, e.type), e]))
    }
    n("895924")
}