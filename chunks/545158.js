function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("773336");
    async function s(e, t) {
        let {
            default: s
        } = await n.el("572544").then(n.bind(n, "572544")), r = s(e, {
            skipExtensionCheck: t,
            analyticsLocations: []
        });
        if (null != r) r(null);
        else if (i.isPlatformEmbedded) window.open(e);
        else {
            let t = document.createElement("a");
            t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
        }
    }
}