function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        jsonReadOptions: function() {
            return a
        },
        jsonWriteOptions: function() {
            return o
        }
    });
    let r = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0
        },
        i = {
            ignoreUnknownFields: !1
        };

    function a(e) {
        return e ? Object.assign(Object.assign({}, i), e) : i
    }

    function o(e) {
        return e ? Object.assign(Object.assign({}, r), e) : r
    }
}