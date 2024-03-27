function(e, t, n) {
    "use strict";
    var r, i, a;
    n.r(t), n.d(t, {
        UnknownFieldHandler: function() {
            return r
        },
        WireType: function() {
            return i
        }
    }), ! function(e) {
        e.symbol = Symbol.for("protobuf-ts/unknown"), e.onRead = (n, r, i, a, o) => {
            (t(r) ? r[e.symbol] : r[e.symbol] = []).push({
                no: i,
                wireType: a,
                data: o
            })
        }, e.onWrite = (t, n, r) => {
            for (let {
                    no: t,
                    wireType: i,
                    data: a
                }
                of e.list(n)) r.tag(t, i).raw(a)
        }, e.list = (n, r) => {
            if (t(n)) {
                let t = n[e.symbol];
                return r ? t.filter(e => e.no == r) : t
            }
            return []
        }, e.last = (t, n) => e.list(t, n).slice(-1)[0];
        let t = t => t && Array.isArray(t[e.symbol])
    }(r || (r = {})), (a = i || (i = {}))[a.Varint = 0] = "Varint", a[a.Bit64 = 1] = "Bit64", a[a.LengthDelimited = 2] = "LengthDelimited", a[a.StartGroup = 3] = "StartGroup", a[a.EndGroup = 4] = "EndGroup", a[a.Bit32 = 5] = "Bit32"
}