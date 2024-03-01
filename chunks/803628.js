function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ScalarType: function() {
            return i
        },
        LongType: function() {
            return s
        },
        RepeatType: function() {
            return u
        },
        normalizeFieldInfo: function() {
            return c
        }
    });
    var r, a, o, i, s, u, l = n("816733");

    function c(e) {
        var t, n, r, a;
        return e.localName = null !== (t = e.localName) && void 0 !== t ? t : (0, l.lowerCamelCase)(e.name), e.jsonName = null !== (n = e.jsonName) && void 0 !== n ? n : (0, l.lowerCamelCase)(e.name), e.repeat = null !== (r = e.repeat) && void 0 !== r ? r : u.NO, e.opt = null !== (a = e.opt) && void 0 !== a ? a : !e.repeat && !e.oneof && "message" == e.kind, e
    }(r = i || (i = {}))[r.DOUBLE = 1] = "DOUBLE", r[r.FLOAT = 2] = "FLOAT", r[r.INT64 = 3] = "INT64", r[r.UINT64 = 4] = "UINT64", r[r.INT32 = 5] = "INT32", r[r.FIXED64 = 6] = "FIXED64", r[r.FIXED32 = 7] = "FIXED32", r[r.BOOL = 8] = "BOOL", r[r.STRING = 9] = "STRING", r[r.BYTES = 12] = "BYTES", r[r.UINT32 = 13] = "UINT32", r[r.SFIXED32 = 15] = "SFIXED32", r[r.SFIXED64 = 16] = "SFIXED64", r[r.SINT32 = 17] = "SINT32", r[r.SINT64 = 18] = "SINT64", (a = s || (s = {}))[a.BIGINT = 0] = "BIGINT", a[a.STRING = 1] = "STRING", a[a.NUMBER = 2] = "NUMBER", (o = u || (u = {}))[o.NO = 0] = "NO", o[o.PACKED = 1] = "PACKED", o[o.UNPACKED = 2] = "UNPACKED"
}