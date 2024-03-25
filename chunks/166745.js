function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IdGenerator: function() {
            return a
        }
    });
    var i = n("552442"),
        r = n.n(i),
        o = n("446825");

    function s(e) {
        return 0 | e.mod(4294967296).toJSNumber()
    }

    function l(e) {
        return 0 | e.shiftRight(32).toJSNumber()
    }
    class a {
        generate(e) {
            let t = r(e),
                n = 0 | this._sequenceNumber++,
                i = new o.Buffer(24);
            return i.writeInt32LE(s(t), 0, !0), i.writeInt32LE(l(t), 4, !0), i.writeInt32LE(this._randomPrefix, 8, !0), i.writeInt32LE(s(this._creationTime), 12, !0), i.writeInt32LE(l(this._creationTime), 16, !0), i.writeInt32LE(n, 20, !0), i.toString("base64")
        }
        constructor() {
            this._randomPrefix = 0 | Math.floor(4294967296 * Math.random()), this._creationTime = r(Date.now()), this._sequenceNumber = 0
        }
    }
}