function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return o
        }
    });
    var t = E("773336");
    async function o(e, _) {
        let {
            default: o
        } = await E.el("572544").then(E.bind(E, "572544")), n = o(e, {
            skipExtensionCheck: _,
            analyticsLocations: []
        });
        if (null != n) n(null);
        else if (t.isPlatformEmbedded) window.open(e);
        else {
            let _ = document.createElement("a");
            _.href = e, _.target = "_blank", _.rel = "noreferrer noopener", _.click()
        }
    }
}