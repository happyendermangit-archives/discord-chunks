function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = r("%TypeError%"),
        o = r("%SyntaxError%"),
        s = n("748795"),
        a = n("610330"),
        c = {
            "Property Descriptor": function(e) {
                var t = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                if (!e) return !1;
                for (var n in e)
                    if (s(e, n) && !t[n]) return !1;
                var r = s(e, "[[Value]]"),
                    o = s(e, "[[Get]]") || s(e, "[[Set]]");
                if (r && o) throw new i("Property Descriptors may not be both accessor and data descriptors");
                return !0
            },
            "Match Record": n("990633"),
            "Iterator Record": function(e) {
                return s(e, "[[Iterator]]") && s(e, "[[NextMethod]]") && s(e, "[[Done]]")
            },
            "PromiseCapability Record": function(e) {
                return !!e && s(e, "[[Resolve]]") && "function" == typeof e["[[Resolve]]"] && s(e, "[[Reject]]") && "function" == typeof e["[[Reject]]"] && s(e, "[[Promise]]") && e["[[Promise]]"] && "function" == typeof e["[[Promise]]"].then
            },
            "AsyncGeneratorRequest Record": function(e) {
                return !!e && s(e, "[[Completion]]") && s(e, "[[Capability]]") && c["PromiseCapability Record"](e["[[Capability]]"])
            },
            "RegExp Record": function(e) {
                return e && s(e, "[[IgnoreCase]]") && "boolean" == typeof e["[[IgnoreCase]]"] && s(e, "[[Multiline]]") && "boolean" == typeof e["[[Multiline]]"] && s(e, "[[DotAll]]") && "boolean" == typeof e["[[DotAll]]"] && s(e, "[[Unicode]]") && "boolean" == typeof e["[[Unicode]]"] && s(e, "[[CapturingGroupsCount]]") && "number" == typeof e["[[CapturingGroupsCount]]"] && a(e["[[CapturingGroupsCount]]"]) && e["[[CapturingGroupsCount]]"] >= 0
            }
        };
    e.exports = function(e, t, n, r) {
        var s = c[t];
        if ("function" != typeof s) throw new o("unknown record type: " + t);
        if ("Object" !== e(r) || !s(r)) throw new i(n + " must be a " + t)
    }
}