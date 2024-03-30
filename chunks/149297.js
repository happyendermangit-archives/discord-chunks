function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("10132"),
        o = n("898381");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var a = (0, o.getErlpackEncoding)(),
        u = function() {
            var e, t, n;

            function r() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r)
            }
            return e = r, t = [{
                key: "pack",
                value: function(e) {
                    return JSON.stringify(e)
                }
            }, {
                key: "unpack",
                value: function(e) {
                    if ("string" != typeof e) {
                        var t;
                        throw Error("Expected a string to be passed to JSONEncoding.unpack, got ".concat(null == e ? null : void 0 === e ? "undefined" : (t = e) && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t))
                    }
                    return JSON.parse(e)
                }
            }, {
                key: "getName",
                value: function() {
                    return "json"
                }
            }, {
                key: "wantsString",
                value: function() {
                    return !0
                }
            }], i(e.prototype, t), n && i(e, n), r
        }(),
        s = void 0 !== a ? a : u;
    r.ProcessArgs.isDiscordGatewayPlaintextSet() && (s = u), t.default = s
}