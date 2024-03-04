function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPrivateChannelIntegration: function() {
            return s
        }
    });
    var i = n("653047");

    function s(e) {
        return {
            ...e,
            application: i.default.createFromServer(e.application)
        }
    }
}