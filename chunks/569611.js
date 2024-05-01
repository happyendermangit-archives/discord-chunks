function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clear: function() {
            return o
        },
        report: function() {
            return s
        },
        stringify: function() {
            return l
        }
    }), n("653041"), n("411104"), n("47120");
    var i = n("427786"),
        r = n.n(i);
    let a = new(r())(5e3);

    function s(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        let r = function(e) {
            let t = "";
            for (let n of e) {
                let e = typeof n;
                "string" === e || "number" === e || "boolean" === e ? t += n + " " : n instanceof Error ? t += n.message + "\n" + n.stack + " " : t += JSON.stringify(n) + " "
            }
            return t
        }(n);
        for ("string" == typeof e ? a.push({
                time: Date.now(),
                category: e,
                message: r
            }) : a.push({
                time: Date.now(),
                category: e.name,
                timing: e.timing,
                message: r
            }); a.length > 5e3;) a.shift()
    }

    function o() {
        a.clear()
    }

    function l(e) {
        return a.toArray().filter(t => null == e || e.includes(t.category)).map(e => {
            let t = [];
            return t.push(new Date(e.time).toISOString()), null != e.timing && t.push(e.timing), t.push(e.category, e.message), t.join(" -> ")
        }).join("\n")
    }
}