function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        initMetric: function() {
            return s
        }
    });
    var r = n("607190"),
        i = n("134954"),
        a = n("726300"),
        o = n("27583");
    let s = (t, e) => {
        let n = (0, o.getNavigationEntry)(),
            s = "navigate";
        return n && (s = r.WINDOW.document.prerendering || (0, a.getActivationStart)() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: (0, i.generateUniqueID)(),
            navigationType: s
        }
    }
}