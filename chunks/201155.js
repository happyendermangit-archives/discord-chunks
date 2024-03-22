function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShowApplicationInGDM: function() {
            return s
        }
    });
    var i = n("65597"),
        l = n("42203"),
        a = n("337026");

    function s(e) {
        let t = (0, i.useStateFromStores)([l.default], () => l.default.getChannel(e)),
            {
                enabled: n
            } = a.default.useExperiment({
                location: "baec9c_1"
            });
        return n && function(e) {
            return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
        }(t)
    }
}