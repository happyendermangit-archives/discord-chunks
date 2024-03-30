function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IdGenerator: function() {
            return c
        }
    });
    var r = n("654861"),
        o = n.n(r),
        i = n("413135");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return 0 | e.mod(4294967296).toJSNumber()
    }

    function l(e) {
        return 0 | e.shiftRight(32).toJSNumber()
    }
    var c = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), u(this, "_randomPrefix", 0 | Math.floor(4294967296 * Math.random())), u(this, "_creationTime", o()(Date.now())), u(this, "_sequenceNumber", 0)
        }
        return e = r, t = [{
            key: "generate",
            value: function(e) {
                var t = o()(e),
                    n = 0 | this._sequenceNumber++,
                    r = new i.Buffer(24);
                return r.writeInt32LE(s(t), 0, !0), r.writeInt32LE(l(t), 4, !0), r.writeInt32LE(this._randomPrefix, 8, !0), r.writeInt32LE(s(this._creationTime), 12, !0), r.writeInt32LE(l(this._creationTime), 16, !0), r.writeInt32LE(n, 20, !0), r.toString("base64")
            }
        }], a(e.prototype, t), n && a(e, n), r
    }()
}