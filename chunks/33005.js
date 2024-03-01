function(t, e, s) {
    "use strict";
    var r = s("555671"),
        i = s("943753");

    function n() {
        if (!(this instanceof n)) return new n;
        i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }
    r.inherits(n, i), t.exports = n, n.blockSize = 1024, n.outSize = 384, n.hmacStrength = 192, n.padLength = 128, n.prototype._digest = function(t) {
        return "hex" === t ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big")
    }
}