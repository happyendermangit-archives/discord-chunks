function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deserializeObject: function() {
            return s
        },
        serializeObject: function() {
            return u
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("22287"),
        a = n("453604");

    function u(e) {
        return o().cloneDeepWith(e, function(e) {
            return (0, i.isBigFlag)(e) ? {
                __tag__: "bigflag",
                data: e.toJSON()
            } : (0, a.isUint8Array)(e) ? {
                __tag__: "uint8array",
                data: Array.from(e)
            } : void 0
        })
    }

    function s(e) {
        return o().cloneDeepWith(e, function(e) {
            return null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__ ? i.deserialize(e.data) : (0, a.isSerializedUint8Array)(e) ? new Uint8Array(e.data) : void 0
        })
    }
}