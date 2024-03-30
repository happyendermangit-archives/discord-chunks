function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Timestamp: function() {
            return s
        }
    }), n("411104"), n("757143"), n("47120");
    var i = n("578012");
    class r extends i.MessageType {
        now() {
            let e = this.create(),
                t = Date.now();
            return e.seconds = i.PbLong.from(Math.floor(t / 1e3)).toString(), e.nanos = t % 1e3 * 1e6, e
        }
        toDate(e) {
            return new Date(1e3 * i.PbLong.from(e.seconds).toNumber() + Math.ceil(e.nanos / 1e6))
        }
        fromDate(e) {
            let t = this.create(),
                n = e.getTime();
            return t.seconds = i.PbLong.from(Math.floor(n / 1e3)).toString(), t.nanos = n % 1e3 * 1e6, t
        }
        internalJsonWrite(e, t) {
            let n = 1e3 * i.PbLong.from(e.seconds).toNumber();
            if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
            if (e.nanos < 0) throw Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
            let r = "Z";
            if (e.nanos > 0) {
                let t = (e.nanos + 1e9).toString().substring(1);
                r = "000000" === t.substring(3) ? "." + t.substring(0, 3) + "Z" : "000" === t.substring(6) ? "." + t.substring(0, 6) + "Z" : "." + t + "Z"
            }
            return new Date(n).toISOString().replace(".000Z", r)
        }
        internalJsonRead(e, t, n) {
            if ("string" != typeof e) throw Error("Unable to parse Timestamp from JSON " + (0, i.typeofJsonValue)(e) + ".");
            let r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
            if (!r) throw Error("Unable to parse Timestamp from JSON. Invalid format.");
            let s = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
            if (Number.isNaN(s)) throw Error("Unable to parse Timestamp from JSON. Invalid value.");
            if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z")) throw new globalThis.Error("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
            return !n && (n = this.create()), n.seconds = i.PbLong.from(s / 1e3).toString(), n.nanos = 0, r[7] && (n.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), n
        }
        create(e) {
            let t = {
                seconds: "0",
                nanos: 0
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                switch (t) {
                    case 1:
                        s.seconds = e.int64().toString();
                        break;
                    case 2:
                        s.nanos = e.int32();
                        break;
                    default:
                        let a = n.readUnknownField;
                        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                        let o = e.skip(r);
                        !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            "0" !== e.seconds && t.tag(1, i.WireType.Varint).int64(e.seconds), 0 !== e.nanos && t.tag(2, i.WireType.Varint).int32(e.nanos);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.Timestamp", [{
                no: 1,
                name: "seconds",
                kind: "scalar",
                T: 3
            }, {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 5
            }])
        }
    }
    let s = new r
}