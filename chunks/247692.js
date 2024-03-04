function(e, t, n) {
    "use strict";
    var r, i, o, s = n("112774");

    function a(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0
    }
    var c = 286,
        u = 2 * c + 1,
        d = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        l = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        p = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        h = Array((c + 2) * 2);
    a(h);
    var v = Array(60);
    a(v);
    var g = Array(512);
    a(g);
    var b = Array(256);
    a(b);
    var m = Array(29);
    a(m);
    var y = Array(30);

    function x(e, t, n, r, i) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length
    }

    function w(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
    }

    function S(e) {
        return e < 256 ? g[e] : g[256 + (e >>> 7)]
    }

    function k(e, t) {
        e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
    }

    function E(e, t, n) {
        e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, k(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
    }

    function _(e, t, n) {
        E(e, n[2 * t], n[2 * t + 1])
    }

    function M(e, t) {
        var n = 0;
        do n |= 1 & e, e >>>= 1, n <<= 1; while (--t > 0);
        return n >>> 1
    }
    a(y);

    function D(e, t, n) {
        var r, i, o = Array(16),
            s = 0;
        for (r = 1; r <= 15; r++) o[r] = s = s + n[r - 1] << 1;
        for (i = 0; i <= t; i++) {
            var a = e[2 * i + 1];
            0 !== a && (e[2 * i] = M(o[a]++, a))
        }
    }

    function C(e) {
        var t;
        for (t = 0; t < c; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
    }

    function P(e) {
        e.bi_valid > 8 ? k(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
    }

    function T(e, t, n, r) {
        var i = 2 * t,
            o = 2 * n;
        return e[i] < e[o] || e[i] === e[o] && r[t] <= r[n]
    }

    function A(e, t, n) {
        for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && T(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !T(t, r, e.heap[i], e.depth));) {
            ;
            e.heap[n] = e.heap[i], n = i, i <<= 1
        }
        e.heap[n] = r
    }

    function R(e, t, n) {
        var r, i, o, s, a = 0;
        if (0 !== e.last_lit)
            do r = e.pending_buf[e.d_buf + 2 * a] << 8 | e.pending_buf[e.d_buf + 2 * a + 1], i = e.pending_buf[e.l_buf + a], a++, 0 === r ? _(e, i, t) : (_(e, (o = b[i]) + 256 + 1, t), 0 !== (s = d[o]) && E(e, i -= m[o], s), _(e, o = S(--r), n), 0 !== (s = l[o]) && E(e, r -= y[o], s)); while (a < e.last_lit);
        _(e, 256, t)
    }

    function I(e, t) {
        var n, r, i, o = t.dyn_tree,
            s = t.stat_desc.static_tree,
            a = t.stat_desc.has_stree,
            c = t.stat_desc.elems,
            d = -1;
        for (n = 0, e.heap_len = 0, e.heap_max = u; n < c; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = d = n, e.depth[n] = 0) : o[2 * n + 1] = 0;
        for (; e.heap_len < 2;) o[2 * (i = e.heap[++e.heap_len] = d < 2 ? ++d : 0)] = 1, e.depth[i] = 0, e.opt_len--, a && (e.static_len -= s[2 * i + 1]);
        for (t.max_code = d, n = e.heap_len >> 1; n >= 1; n--) A(e, o, n);
        i = c;
        do n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], A(e, o, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, e.heap[1] = i++, A(e, o, 1); while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1], ! function(e, t) {
            var n, r, i, o, s, a, c = t.dyn_tree,
                d = t.max_code,
                l = t.stat_desc.static_tree,
                f = t.stat_desc.has_stree,
                p = t.stat_desc.extra_bits,
                h = t.stat_desc.extra_base,
                v = t.stat_desc.max_length,
                g = 0;
            for (o = 0; o <= 15; o++) e.bl_count[o] = 0;
            for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < u; n++)(o = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) > v && (o = v, g++), c[2 * r + 1] = o, !(r > d) && (e.bl_count[o]++, s = 0, r >= h && (s = p[r - h]), a = c[2 * r], e.opt_len += a * (o + s), f && (e.static_len += a * (l[2 * r + 1] + s)));
            if (0 !== g) {
                do {
                    for (o = v - 1; 0 === e.bl_count[o];) o--;
                    e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[v]--, g -= 2
                } while (g > 0);
                for (o = v; 0 !== o; o--)
                    for (r = e.bl_count[o]; 0 !== r;) {
                        if (!((i = e.heap[--n]) > d)) c[2 * i + 1] !== o && (e.opt_len += (o - c[2 * i + 1]) * c[2 * i], c[2 * i + 1] = o), r--
                    }
            }
        }(e, t), D(o, d, e.bl_count)
    }

    function O(e, t, n) {
        var r, i, o = -1,
            s = t[1],
            a = 0,
            c = 7,
            u = 4;
        for (0 === s && (c = 138, u = 3), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) {
            if (i = s, s = t[(r + 1) * 2 + 1], !(++a < c) || i !== s) {
                a < u ? e.bl_tree[2 * i] += a : 0 !== i ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[32]++) : a <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++;
                a = 0, o = i, 0 === s ? (c = 138, u = 3) : i === s ? (c = 6, u = 3) : (c = 7, u = 4)
            }
        }
    }

    function L(e, t, n) {
        var r, i, o = -1,
            s = t[1],
            a = 0,
            c = 7,
            u = 4;
        for (0 === s && (c = 138, u = 3), r = 0; r <= n; r++) {
            if (i = s, s = t[(r + 1) * 2 + 1], !(++a < c) || i !== s) {
                if (a < u)
                    do _(e, i, e.bl_tree); while (0 != --a);
                else 0 !== i ? (i !== o && (_(e, i, e.bl_tree), a--), _(e, 16, e.bl_tree), E(e, a - 3, 2)) : a <= 10 ? (_(e, 17, e.bl_tree), E(e, a - 3, 3)) : (_(e, 18, e.bl_tree), E(e, a - 11, 7));
                a = 0, o = i, 0 === s ? (c = 138, u = 3) : i === s ? (c = 6, u = 3) : (c = 7, u = 4)
            }
        }
    }
    var j = !1;

    function N(e, t, n, r) {
        var i, o, a, c;
        E(e, 0 + (r ? 1 : 0), 3), i = e, o = t, a = n, c = !0, P(i), c && (k(i, a), k(i, ~a)), s.arraySet(i.pending_buf, i.window, o, a, i.pending), i.pending += a
    }
    t._tr_init = function(e) {
        !j && (! function() {
            var e, t, n, s, a, u = Array(16);
            for (s = 0, n = 0; s < 28; s++)
                for (e = 0, m[s] = n; e < 1 << d[s]; e++) b[n++] = s;
            for (b[n - 1] = s, a = 0, s = 0; s < 16; s++)
                for (e = 0, y[s] = a; e < 1 << l[s]; e++) g[a++] = s;
            for (a >>= 7; s < 30; s++)
                for (e = 0, y[s] = a << 7; e < 1 << l[s] - 7; e++) g[256 + a++] = s;
            for (t = 0; t <= 15; t++) u[t] = 0;
            for (e = 0; e <= 143;) h[2 * e + 1] = 8, e++, u[8]++;
            for (; e <= 255;) h[2 * e + 1] = 9, e++, u[9]++;
            for (; e <= 279;) h[2 * e + 1] = 7, e++, u[7]++;
            for (; e <= 287;) h[2 * e + 1] = 8, e++, u[8]++;
            for (D(h, c + 1, u), e = 0; e < 30; e++) v[2 * e + 1] = 5, v[2 * e] = M(e, 5);
            r = new x(h, d, 257, c, 15), i = new x(v, l, 0, 30, 15), o = new x([], f, 0, 19, 7)
        }(), j = !0), e.l_desc = new w(e.dyn_ltree, r), e.d_desc = new w(e.dyn_dtree, i), e.bl_desc = new w(e.bl_tree, o), e.bi_buf = 0, e.bi_valid = 0, C(e)
    }, t._tr_stored_block = N, t._tr_flush_block = function(e, t, n, r) {
        var i, o, s = 0;
        e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
            var t, n = 4093624447;
            for (t = 0; t <= 31; t++, n >>>= 1)
                if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
            for (t = 32; t < 256; t++)
                if (0 !== e.dyn_ltree[2 * t]) return 1;
            return 0
        }(e)), I(e, e.l_desc), I(e, e.d_desc), s = function(e) {
            var t;
            for (O(e, e.dyn_ltree, e.l_desc.max_code), O(e, e.dyn_dtree, e.d_desc.max_code), I(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * p[t] + 1]; t--);
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
        }(e), i = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = n + 5, n + 4 <= i && -1 !== t ? N(e, t, n, r) : 4 === e.strategy || o === i ? (E(e, 2 + (r ? 1 : 0), 3), R(e, h, v)) : (E(e, 4 + (r ? 1 : 0), 3), ! function(e, t, n, r) {
            var i;
            for (E(e, t - 257, 5), E(e, n - 1, 5), E(e, r - 4, 4), i = 0; i < r; i++) E(e, e.bl_tree[2 * p[i] + 1], 3);
            L(e, e.dyn_ltree, t - 1), L(e, e.dyn_dtree, n - 1)
        }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), R(e, e.dyn_ltree, e.dyn_dtree)), C(e), r && P(e)
    }, t._tr_tally = function(e, t, n) {
        return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(b[n] + 256 + 1) * 2]++, e.dyn_dtree[2 * S(t)]++), e.last_lit === e.lit_bufsize - 1
    }, t._tr_align = function(e) {
        var t;
        E(e, 2, 3), _(e, 256, h), 16 === (t = e).bi_valid ? (k(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
    }
}