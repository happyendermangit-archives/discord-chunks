function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, r = n("552442"),
        o = n.n(r),
        s = n("446825");

    function l(e) {
        return 0 | e.mod(4294967296).toJSNumber()
    }

    function a(e) {
        return 0 | e.shiftRight(32).toJSNumber()
    }
    i = class {
        generate(e) {
            let t = o(e),
                n = 0 | this._sequenceNumber++,
                i = new s.Buffer(24);
            return i.writeInt32LE(l(t), 0, !0), i.writeInt32LE(a(t), 4, !0), i.writeInt32LE(this._randomPrefix, 8, !0), i.writeInt32LE(l(this._creationTime), 12, !0), i.writeInt32LE(a(this._creationTime), 16, !0), i.writeInt32LE(n, 20, !0), i.toString("base64")
        }
        constructor() {
            this._randomPrefix = 0 | Math.floor(4294967296 * Math.random()), this._creationTime = o(Date.now()), this._sequenceNumber = 0
        }
    }
}