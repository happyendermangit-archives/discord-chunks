function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IdGenerator: function() {
            return u
        }
    });
    var i = n("654861"),
        r = n.n(i),
        s = n("413135");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e) {
        return 0 | e.mod(4294967296).toJSNumber()
    }

    function l(e) {
        return 0 | e.shiftRight(32).toJSNumber()
    }
    class u {
        generate(e) {
            let t = r()(e),
                n = 0 | this._sequenceNumber++,
                i = new s.Buffer(24);
            return i.writeInt32LE(o(t), 0, !0), i.writeInt32LE(l(t), 4, !0), i.writeInt32LE(this._randomPrefix, 8, !0), i.writeInt32LE(o(this._creationTime), 12, !0), i.writeInt32LE(l(this._creationTime), 16, !0), i.writeInt32LE(n, 20, !0), i.toString("base64")
        }
        constructor() {
            a(this, "_randomPrefix", 0 | Math.floor(4294967296 * Math.random())), a(this, "_creationTime", r()(Date.now())), a(this, "_sequenceNumber", 0)
        }
    }
}