function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShowApplicationInGDM: function() {
            return s
        }
    });
    var i = n("399606"),
        r = n("592125"),
        a = n("587100");

    function s(e) {
        let t = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(e)),
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