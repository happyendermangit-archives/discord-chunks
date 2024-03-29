function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = r("%TypeError%"),
        a = r("%SyntaxError%"),
        o = n("706165"),
        s = n("73871"),
        u = {
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
                    if (o(e, n) && !t[n]) return !1;
                var r = o(e, "[[Value]]"),
                    a = o(e, "[[Get]]") || o(e, "[[Set]]");
                if (r && a) throw new i("Property Descriptors may not be both accessor and data descriptors");
                return !0
            },
            "Match Record": n("290951"),
            "Iterator Record": function(e) {
                return o(e, "[[Iterator]]") && o(e, "[[NextMethod]]") && o(e, "[[Done]]")
            },
            "PromiseCapability Record": function(e) {
                return !!e && o(e, "[[Resolve]]") && "function" == typeof e["[[Resolve]]"] && o(e, "[[Reject]]") && "function" == typeof e["[[Reject]]"] && o(e, "[[Promise]]") && e["[[Promise]]"] && "function" == typeof e["[[Promise]]"].then
            },
            "AsyncGeneratorRequest Record": function(e) {
                return !!e && o(e, "[[Completion]]") && o(e, "[[Capability]]") && u["PromiseCapability Record"](e["[[Capability]]"])
            },
            "RegExp Record": function(e) {
                return e && o(e, "[[IgnoreCase]]") && "boolean" == typeof e["[[IgnoreCase]]"] && o(e, "[[Multiline]]") && "boolean" == typeof e["[[Multiline]]"] && o(e, "[[DotAll]]") && "boolean" == typeof e["[[DotAll]]"] && o(e, "[[Unicode]]") && "boolean" == typeof e["[[Unicode]]"] && o(e, "[[CapturingGroupsCount]]") && "number" == typeof e["[[CapturingGroupsCount]]"] && s(e["[[CapturingGroupsCount]]"]) && e["[[CapturingGroupsCount]]"] >= 0
            }
        };
    e.exports = function(e, t, n, r) {
        var o = u[t];
        if ("function" != typeof o) throw new a("unknown record type: " + t);
        if ("Object" !== e(r) || !o(r)) throw new i(n + " must be a " + t)
    }
}