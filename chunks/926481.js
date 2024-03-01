function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        binaryReadOptions: function() {
            return s
        },
        BinaryReader: function() {
            return u
        }
    }), n("70102"), n("222007");
    var r = n("764624"),
        a = n("497557"),
        o = n("481310");
    let i = {
        readUnknownField: !0,
        readerFactory: e => new u(e)
    };

    function s(e) {
        return e ? Object.assign(Object.assign({}, i), e) : i
    }
    class u {
        tag() {
            let e = this.uint32(),
                t = e >>> 3,
                n = 7 & e;
            if (t <= 0 || n < 0 || n > 5) throw Error("illegal tag: field no " + t + " wire type " + n);
            return [t, n]
        }
        skip(e) {
            let t = this.pos;
            switch (e) {
                case r.WireType.Varint:
                    for (; 128 & this.buf[this.pos++];);
                    break;
                case r.WireType.Bit64:
                    this.pos += 4;
                case r.WireType.Bit32:
                    this.pos += 4;
                    break;
                case r.WireType.LengthDelimited:
                    let n = this.uint32();
                    this.pos += n;
                    break;
                case r.WireType.StartGroup:
                    let a;
                    for (;
                        (a = this.tag()[1]) !== r.WireType.EndGroup;) this.skip(a);
                    break;
                default:
                    throw Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos)
        }
        assertBounds() {
            if (this.pos > this.len) throw RangeError("premature EOF")
        }
        int32() {
            return 0 | this.uint32()
        }
        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(1 & e)
        }
        int64() {
            return new a.PbLong(...this.varint64())
        }
        uint64() {
            return new a.PbULong(...this.varint64())
        }
        sint64() {
            let [e, t] = this.varint64(), n = -(1 & e);
            return e = (e >>> 1 | (1 & t) << 31) ^ n, t = t >>> 1 ^ n, new a.PbLong(e, t)
        }
        bool() {
            let [e, t] = this.varint64();
            return 0 !== e || 0 !== t
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }
        fixed64() {
            return new a.PbULong(this.sfixed32(), this.sfixed32())
        }
        sfixed64() {
            return new a.PbLong(this.sfixed32(), this.sfixed32())
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }
        bytes() {
            let e = this.uint32(),
                t = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
        }
        string() {
            return this.textDecoder.decode(this.bytes())
        }
        constructor(e, t) {
            this.varint64 = o.varint64read, this.uint32 = o.varint32read, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != t ? t : new TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            })
        }
    }
}