function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LongType: function() {
            return s
        },
        RepeatType: function() {
            return u
        },
        ScalarType: function() {
            return o
        },
        normalizeFieldInfo: function() {
            return l
        }
    });
    var r, i, a, o, s, u, c = n("119585");

    function l(e) {
        var t, n, r, i;
        return e.localName = null !== (t = e.localName) && void 0 !== t ? t : (0, c.lowerCamelCase)(e.name), e.jsonName = null !== (n = e.jsonName) && void 0 !== n ? n : (0, c.lowerCamelCase)(e.name), e.repeat = null !== (r = e.repeat) && void 0 !== r ? r : u.NO, e.opt = null !== (i = e.opt) && void 0 !== i ? i : !e.repeat && !e.oneof && "message" == e.kind, e
    }(r = o || (o = {}))[r.DOUBLE = 1] = "DOUBLE", r[r.FLOAT = 2] = "FLOAT", r[r.INT64 = 3] = "INT64", r[r.UINT64 = 4] = "UINT64", r[r.INT32 = 5] = "INT32", r[r.FIXED64 = 6] = "FIXED64", r[r.FIXED32 = 7] = "FIXED32", r[r.BOOL = 8] = "BOOL", r[r.STRING = 9] = "STRING", r[r.BYTES = 12] = "BYTES", r[r.UINT32 = 13] = "UINT32", r[r.SFIXED32 = 15] = "SFIXED32", r[r.SFIXED64 = 16] = "SFIXED64", r[r.SINT32 = 17] = "SINT32", r[r.SINT64 = 18] = "SINT64", (i = s || (s = {}))[i.BIGINT = 0] = "BIGINT", i[i.STRING = 1] = "STRING", i[i.NUMBER = 2] = "NUMBER", (a = u || (u = {}))[a.NO = 0] = "NO", a[a.PACKED = 1] = "PACKED", a[a.UNPACKED = 2] = "UNPACKED"
}