function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reflectionLongConvert: function() {
            return i
        }
    });
    var r = n("36056");

    function i(e, t) {
        switch (t) {
            case r.LongType.BIGINT:
                return e.toBigInt();
            case r.LongType.NUMBER:
                return e.toNumber();
            default:
                return e.toString()
        }
    }
}