function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clear: function() {
            return s
        },
        report: function() {
            return r
        },
        stringify: function() {
            return a
        }
    }), n("653041"), n("411104"), n("47120");
    let i = [];

    function r(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        let s = function(e) {
            let t = "";
            for (let n of e) {
                let e = typeof n;
                "string" === e || "number" === e || "boolean" === e ? t += n + " " : n instanceof Error ? t += n.message + "\n" + n.stack + " " : t += JSON.stringify(n) + " "
            }
            return t
        }(n);
        for ("string" == typeof e ? i.push({
                time: Date.now(),
                category: e,
                message: s
            }) : i.push({
                time: Date.now(),
                category: e.name,
                timing: e.timing,
                message: s
            }); i.length > 5e3;) i.shift()
    }

    function s() {
        i.length = 0
    }

    function a(e) {
        return i.filter(t => null == e || e.includes(t.category)).map(e => {
            let t = [];
            return t.push(new Date(e.time).toISOString()), null != e.timing && t.push(e.timing), t.push(e.category, e.message), t.join(" -> ")
        }).join("\n")
    }
}