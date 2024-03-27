function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reflectionScalarDefault: function() {
            return o
        }
    });
    var r = n("36056"),
        i = n("929412"),
        a = n("69122");

    function o(e, t = r.LongType.STRING) {
        switch (e) {
            case r.ScalarType.BOOL:
                return !1;
            case r.ScalarType.UINT64:
            case r.ScalarType.FIXED64:
                return (0, i.reflectionLongConvert)(a.PbULong.ZERO, t);
            case r.ScalarType.INT64:
            case r.ScalarType.SFIXED64:
            case r.ScalarType.SINT64:
                return (0, i.reflectionLongConvert)(a.PbLong.ZERO, t);
            case r.ScalarType.DOUBLE:
            case r.ScalarType.FLOAT:
                return 0;
            case r.ScalarType.BYTES:
                return new Uint8Array(0);
            case r.ScalarType.STRING:
                return "";
            default:
                return 0
        }
    }
}