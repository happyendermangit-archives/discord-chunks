function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("358085");
    async function r(e, t) {
        let {
            default: r
        } = await Promise.resolve().then(n.bind(n, "315263")), s = r(e, {
            skipExtensionCheck: t,
            analyticsLocations: []
        });
        if (null != s) s(null);
        else if (i.isPlatformEmbedded) window.open(e);
        else {
            let t = document.createElement("a");
            t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
        }
    }
}