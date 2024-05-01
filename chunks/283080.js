function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        serializeComponentRenderAverages: function() {
            return s
        }
    }), n("47120"), n("735250"), n("470079");
    let i = {};

    function r(e, t) {
        let n = e.length > t ? t : e.length;
        return e.substring(0, n).padEnd(t, " ")
    }

    function s() {
        if (0 === Object.keys(i).length) return "";
        let e = "|".concat(r("id", 20), "|").concat(r("Mounts", 8), "|").concat(r("Mount Average", 20), "|").concat(r("Updates", 8), "|").concat(r("Update Average", 20), "|").concat(r("Nested", 8), "|").concat(r("Nested Average", 20), "|\n");
        return "Component Render Averages:\n" + e + Object.entries(i).map(e => {
            let [t, n] = e;
            return "|".concat(r(t, 20), "|").concat(r(n.mountAverage.count.toString(), 8), "|").concat(r(n.mountAverage.currentAverage.toString(), 20), "|").concat(r(n.updateAverage.count.toString(), 8), "|").concat(r(n.updateAverage.currentAverage.toString(), 20), "|").concat(r(n.nestedUpdateAverage.count.toString(), 8), "|").concat(r(n.nestedUpdateAverage.currentAverage.toString(), 20), "|\n")
        })
    }
}