function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("540498"),
        o = n("407207");

    function i(e) {
        return (0, r.isIFrameModalUserEnabled)() || (0, o.isIFrameModalForGuildEnabled)(e)
    }
}