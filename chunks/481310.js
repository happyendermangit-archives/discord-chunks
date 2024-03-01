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

    function a(e, t, n) {
        for (let r = 0; r < 28; r += 7) {
            let a = e >>> r,
                o = !(a >>> 7 == 0 && 0 == t),
                i = (o ? 128 | a : a) & 255;
            if (n.push(i), !o) return
        }
        let r = e >>> 28 & 15 | (7 & t) << 4,
            a = t >> 3 != 0;
        if (n.push((a ? 128 | r : r) & 255), a) {
            for (let e = 3; e < 31; e += 7) {
                let r = t >>> e,
                    a = r >>> 7 != 0,
                    o = (a ? 128 | r : r) & 255;
                if (n.push(o), !a) return
            }
            n.push(t >>> 31 & 1)
        }
    }
    n.r(t), n.d(t, {
        varint64read: function() {
            return r
        },
        varint64write: function() {
            return a
        },
        int64fromString: function() {
            return o
        },
        int64toString: function() {
            return i
        },
        varint32write: function() {
            return s
        },
        varint32read: function() {
            return u
        }
    }), n("70102"), n("424973");

    function o(e) {
        let t = "-" == e[0];
        t && (e = e.slice(1));
        let n = 0,
            r = 0;

        function a(t, a) {
            let o = Number(e.slice(t, a));
            r *= 1e6, (n = 1e6 * n + o) >= 4294967296 && (r += n / 4294967296 | 0, n %= 4294967296)
        }
        return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), [t, n, r]
    }

    function i(e, t) {
        if (t <= 2097151) return "" + (4294967296 * t + (e >>> 0));
        let n = (e >>> 24 | t << 8) >>> 0 & 16777215,
            r = t >> 16 & 65535,
            a = (16777215 & e) + 6777216 * n + 6710656 * r,
            o = n + 8147497 * r,
            i = 2 * r;

        function s(e, t) {
            let n = e ? String(e) : "";
            return t ? "0000000".slice(n.length) + n : n
        }
        return a >= 1e7 && (o += Math.floor(a / 1e7), a %= 1e7), o >= 1e7 && (i += Math.floor(o / 1e7), o %= 1e7), s(i, 0) + s(o, i) + s(a, 1)
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