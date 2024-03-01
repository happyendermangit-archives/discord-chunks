function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        Timestamp: function() {
            return n
        }
    }), E("70102"), E("781738"), E("222007");
    var t = E("849266");
    class o extends t.MessageType {
        now() {
            let e = this.create(),
                _ = Date.now();
            return e.seconds = t.PbLong.from(Math.floor(_ / 1e3)).toString(), e.nanos = _ % 1e3 * 1e6, e
        }
        toDate(e) {
            return new Date(1e3 * t.PbLong.from(e.seconds).toNumber() + Math.ceil(e.nanos / 1e6))
        }
        fromDate(e) {
            let _ = this.create(),
                E = e.getTime();
            return _.seconds = t.PbLong.from(Math.floor(E / 1e3)).toString(), _.nanos = E % 1e3 * 1e6, _
        }
        internalJsonWrite(e, _) {
            let E = 1e3 * t.PbLong.from(e.seconds).toNumber();
            if (E < Date.parse("0001-01-01T00:00:00Z") || E > Date.parse("9999-12-31T23:59:59Z")) throw Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
            if (e.nanos < 0) throw Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
            let o = "Z";
            if (e.nanos > 0) {
                let _ = (e.nanos + 1e9).toString().substring(1);
                o = "000000" === _.substring(3) ? "." + _.substring(0, 3) + "Z" : "000" === _.substring(6) ? "." + _.substring(0, 6) + "Z" : "." + _ + "Z"
            }
            return new Date(E).toISOString().replace(".000Z", o)
        }
        internalJsonRead(e, _, E) {
            if ("string" != typeof e) throw Error("Unable to parse Timestamp from JSON " + (0, t.typeofJsonValue)(e) + ".");
            let o = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
            if (!o) throw Error("Unable to parse Timestamp from JSON. Invalid format.");
            let n = Date.parse(o[1] + "-" + o[2] + "-" + o[3] + "T" + o[4] + ":" + o[5] + ":" + o[6] + (o[8] ? o[8] : "Z"));
            if (Number.isNaN(n)) throw Error("Unable to parse Timestamp from JSON. Invalid value.");
            if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new globalThis.Error("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
            return !E && (E = this.create()), E.seconds = t.PbLong.from(n / 1e3).toString(), E.nanos = 0, o[7] && (E.nanos = parseInt("1" + o[7] + "0".repeat(9 - o[7].length)) - 1e9), E
        }
        create(e) {
            let _ = {
                seconds: "0",
                nanos: 0
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                switch (_) {
                    case 1:
                        n.seconds = e.int64().toString();
                        break;
                    case 2:
                        n.nanos = e.int32();
                        break;
                    default:
                        let r = E.readUnknownField;
                        if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                        let i = e.skip(o);
                        !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, i)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            "0" !== e.seconds && _.tag(1, t.WireType.Varint).int64(e.seconds), 0 !== e.nanos && _.tag(2, t.WireType.Varint).int32(e.nanos);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let n = new o
}