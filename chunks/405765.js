function(e, t, n) {
    "use strict";
    t.default = {
        locale: "en",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."),
                r = !n[1],
                a = Number(n[0]) == e,
                o = a && n[0].slice(-1),
                i = a && n[0].slice(-2);
            return t ? 1 == o && 11 != i ? "one" : 2 == o && 12 != i ? "two" : 3 == o && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other"
        }
    }
}