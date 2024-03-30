function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShowApplicationInGDM: function() {
            return a
        }
    });
    var r = n("37295"),
        o = n("935741"),
        i = n("229913");

    function a(e) {
        var t = (0, r.useStateFromStores)([o.default], function() {
            return o.default.getChannel(e)
        });
        return i.default.useExperiment({
            location: "baec9c_1"
        }).enabled && function(e) {
            return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(function(e) {
                return e.bot
            }))
        }(t)
    }
}