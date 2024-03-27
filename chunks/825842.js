function(e, t, n) {
    "use strict";

    function r() {
        let e = 0,
            t = 0;
        for (let n = 0; n < 28; n += 7) {
            let r = this.buf[this.pos++];
            if (e |= (127 & r) << n, (128 & r) == 0) return this.assertBounds(), [e, t]
        }
        let n = this.buf[this.pos++];
        if (e |= (15 & n) << 28, t = (112 & n) >> 4, (128 & n) == 0) return this.assertBounds(), [e, t];
        for (let n = 3; n <= 31; n += 7) {
            let r = this.buf[this.pos++];
            if (t |= (127 & r) << n, (128 & r) == 0) return this.assertBounds(), [e, t]
        }
        throw Error("invalid varint")
    }

    function i(e, t, n) {
        for (let r = 0; r < 28; r += 7) {
            let i = e >>> r,
                a = !(i >>> 7 == 0 && 0 == t),
                o = (a ? 128 | i : i) & 255;
            if (n.push(o), !a) return
        }
        let r = e >>> 28 & 15 | (7 & t) << 4,
            i = t >> 3 != 0;
        if (n.push((i ? 128 | r : r) & 255), i) {
            for (let e = 3; e < 31; e += 7) {
                let r = t >>> e,
                    i = r >>> 7 != 0,
                    a = (i ? 128 | r : r) & 255;
                if (n.push(a), !i) return
            }
            n.push(t >>> 31 & 1)
        }
    }
    n.r(t), n.d(t, {
        int64fromString: function() {
            return a
        },
        int64toString: function() {
            return o
        },
        varint32read: function() {
            return u
        },
        varint32write: function() {
            return s
        },
        varint64read: function() {
            return r
        },
        varint64write: function() {
            return i
        }
    });

    function a(e) {
        let t = "-" == e[0];
        t && (e = e.slice(1));
        let n = 0,
            r = 0;

        function i(t, i) {
            let a = Number(e.slice(t, i));
            r *= 1e6, (n = 1e6 * n + a) >= 4294967296 && (r += n / 4294967296 | 0, n %= 4294967296)
        }
        return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), [t, n, r]
    }

    function o(e, t) {
        if (t <= 2097151) return "" + (4294967296 * t + (e >>> 0));
        let n = (e >>> 24 | t << 8) >>> 0 & 16777215,
            r = t >> 16 & 65535,
            i = (16777215 & e) + 6777216 * n + 6710656 * r,
            a = n + 8147497 * r,
            o = 2 * r;

        function s(e, t) {
            let n = e ? String(e) : "";
            return t ? "0000000".slice(n.length) + n : n
        }
        return i >= 1e7 && (a += Math.floor(i / 1e7), i %= 1e7), a >= 1e7 && (o += Math.floor(a / 1e7), a %= 1e7), s(o, 0) + s(a, o) + s(i, 1)
    }

    function s(e, t) {
        if (e >= 0) {
            for (; e > 127;) t.push(127 & e | 128), e >>>= 7;
            t.push(e)
        } else {
            for (let n = 0; n < 9; n++) t.push(127 & e | 128), e >>= 7;
            t.push(1)
        }
    }

    function u() {
        let e = this.buf[this.pos++],
            t = 127 & e;
        if ((128 & e) == 0) return this.assertBounds(), t;
        if (t |= (127 & (e = this.buf[this.pos++])) << 7, (128 & e) == 0) return this.assertBounds(), t;
        if (t |= (127 & (e = this.buf[this.pos++])) << 14, (128 & e) == 0) return this.assertBounds(), t;
        if (t |= (127 & (e = this.buf[this.pos++])) << 21, (128 & e) == 0) return this.assertBounds(), t;
        t |= (15 & (e = this.buf[this.pos++])) << 28;
        for (let t = 5;
            (128 & e) != 0 && t < 10; t++) e = this.buf[this.pos++];
        if ((128 & e) != 0) throw Error("invalid varint");
        return this.assertBounds(), t >>> 0
    }
}