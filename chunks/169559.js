function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("430824"),
        a = n("963202");

    function s(e) {
        let t = (0, i.useStateFromStoresArray)([r.default], () => Object.values(r.default.getGuilds())),
            n = (0, a.useAnyClanPrepilotExperimentEnabled)(t, e),
            {
                clanDiscoveryEnabled: s
            } = (0, a.useClanPilotExperiment)(e);
        return n || s
    }
}