function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        commandName: function() {
            return o
        },
        keyPermissions: function() {
            return a
        },
        toPermissionKey: function() {
            return i
        }
    });
    var r = n("29570");

    function o(e, t) {
        return e === r.ApplicationCommandType.CHAT ? "/" + t : t
    }

    function i(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function a(e) {
        return Object.fromEntries(e.map(function(e) {
            return [i(e.id, e.type), e]
        }))
    }
    n("861272")
}