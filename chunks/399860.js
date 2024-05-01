function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        commandName: function() {
            return r
        },
        keyPermissions: function() {
            return s
        },
        toPermissionKey: function() {
            return a
        }
    }), n("47120");
    var i = n("911969");

    function r(e, t) {
        return e === i.ApplicationCommandType.CHAT ? "/" + t : t
    }

    function a(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function s(e) {
        return Object.fromEntries(e.map(e => [a(e.id, e.type), e]))
    }
    n("895924")
}