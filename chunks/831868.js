function(e, t, n) {
    "use strict";
    var r, i, a, o = n("754793");

    function s(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0
    }
    var u = 286,
        c = 2 * u + 1,
        l = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        d = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        p = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        h = Array((u + 2) * 2);
    s(h);
    var m = Array(60);
    s(m);
    var g = Array(512);
    s(g);
    var _ = Array(256);
    s(_);
    var b = Array(29);
    s(b);
    var v = Array(30);

    function y(e, t, n, r, i) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length
    }

    function E(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
    }

    function S(e) {
        return e < 256 ? g[e] : g[256 + (e >>> 7)]
    }

    function x(e, t) {
        e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
    }

    function w(e, t, n) {
        e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, x(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
    }

    function T(e, t, n) {
        w(e, n[2 * t], n[2 * t + 1])
    }

    function C(e, t) {
        var n = 0;
        do n |= 1 & e, e >>>= 1, n <<= 1; while (--t > 0);
        return n >>> 1
    }
    s(v);

    function D(e, t, n) {
        var r, i, a = Array(16),
            o = 0;
        for (r = 1; r <= 15; r++) a[r] = o = o + n[r - 1] << 1;
        for (i = 0; i <= t; i++) {
            var s = e[2 * i + 1];
            0 !== s && (e[2 * i] = C(a[s]++, s))
        }
    }

    function O(e) {
        var t;
        for (t = 0; t < u; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
    }

    function M(e) {
        e.bi_valid > 8 ? x(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
    }

    function A(e, t, n, r) {
        var i = 2 * t,
            a = 2 * n;
        return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n]
    }

    function k(e, t, n) {
        for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && A(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !A(t, r, e.heap[i], e.depth));) {
            ;
            e.heap[n] = e.heap[i], n = i, i <<= 1
        }
        e.heap[n] = r
    }

    function R(e, t, n) {
        var r, i, a, o, s = 0;
        if (0 !== e.last_lit)
            do r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, 0 === r ? T(e, i, t) : (T(e, (a = _[i]) + 256 + 1, t), 0 !== (o = l[a]) && w(e, i -= b[a], o), T(e, a = S(--r), n), 0 !== (o = d[a]) && w(e, r -= v[a], o)); while (s < e.last_lit);
        T(e, 256, t)
    }

    function N(e, t) {
        var n, r, i, a = t.dyn_tree,
            o = t.stat_desc.static_tree,
            s = t.stat_desc.has_stree,
            u = t.stat_desc.elems,
            l = -1;
        for (n = 0, e.heap_len = 0, e.heap_max = c; n < u; n++) 0 !== a[2 * n] ? (e.heap[++e.heap_len] = l = n, e.depth[n] = 0) : a[2 * n + 1] = 0;
        for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= o[2 * i + 1]);
        for (t.max_code = l, n = e.heap_len >> 1; n >= 1; n--) k(e, a, n);
        i = u;
        do n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], k(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, k(e, a, 1); while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1], ! function(e, t) {
            var n, r, i, a, o, s, u = t.dyn_tree,
                l = t.max_code,
                d = t.stat_desc.static_tree,
                f = t.stat_desc.has_stree,
                p = t.stat_desc.extra_bits,
                h = t.stat_desc.extra_base,
                m = t.stat_desc.max_length,
                g = 0;
            for (a = 0; a <= 15; a++) e.bl_count[a] = 0;
            for (u[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < c; n++)(a = u[2 * u[2 * (r = e.heap[n]) + 1] + 1] + 1) > m && (a = m, g++), u[2 * r + 1] = a, !(r > l) && (e.bl_count[a]++, o = 0, r >= h && (o = p[r - h]), s = u[2 * r], e.opt_len += s * (a + o), f && (e.static_len += s * (d[2 * r + 1] + o)));
            if (0 !== g) {
                do {
                    for (a = m - 1; 0 === e.bl_count[a];) a--;
                    e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[m]--, g -= 2
                } while (g > 0);
                for (a = m; 0 !== a; a--)
                    for (r = e.bl_count[a]; 0 !== r;) {
                        if (!((i = e.heap[--n]) > l)) u[2 * i + 1] !== a && (e.opt_len += (a - u[2 * i + 1]) * u[2 * i], u[2 * i + 1] = a), r--
                    }
            }
        }(e, t), D(a, l, e.bl_count)
    }

    function I(e, t, n) {
        var r, i, a = -1,
            o = t[1],
            s = 0,
            u = 7,
            c = 4;
        for (0 === o && (u = 138, c = 3), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) {
            if (i = o, o = t[(r + 1) * 2 + 1], !(++s < u) || i !== o) {
                s < c ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[32]++) : s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++;
                s = 0, a = i, 0 === o ? (u = 138, c = 3) : i === o ? (u = 6, c = 3) : (u = 7, c = 4)
            }
        }
    }

    function L(e, t, n) {
        var r, i, a = -1,
            o = t[1],
            s = 0,
            u = 7,
            c = 4;
        for (0 === o && (u = 138, c = 3), r = 0; r <= n; r++) {
            if (i = o, o = t[(r + 1) * 2 + 1], !(++s < u) || i !== o) {
                if (s < c)
                    do T(e, i, e.bl_tree); while (0 != --s);
                else 0 !== i ? (i !== a && (T(e, i, e.bl_tree), s--), T(e, 16, e.bl_tree), w(e, s - 3, 2)) : s <= 10 ? (T(e, 17, e.bl_tree), w(e, s - 3, 3)) : (T(e, 18, e.bl_tree), w(e, s - 11, 7));
                s = 0, a = i, 0 === o ? (u = 138, c = 3) : i === o ? (u = 6, c = 3) : (u = 7, c = 4)
            }
        }
    }
    var P = !1;

    function F(e, t, n, r) {
        var i, a, s, u;
        w(e, 0 + (r ? 1 : 0), 3), i = e, a = t, s = n, u = !0, M(i), u && (x(i, s), x(i, ~s)), o.arraySet(i.pending_buf, i.window, a, s, i.pending), i.pending += s
    }
    t._tr_init = function(e) {
        !P && (! function() {
            var e, t, n, o, s, c = Array(16);
            for (o = 0, n = 0; o < 28; o++)
                for (e = 0, b[o] = n; e < 1 << l[o]; e++) _[n++] = o;
            for (_[n - 1] = o, s = 0, o = 0; o < 16; o++)
                for (e = 0, v[o] = s; e < 1 << d[o]; e++) g[s++] = o;
            for (s >>= 7; o < 30; o++)
                for (e = 0, v[o] = s << 7; e < 1 << d[o] - 7; e++) g[256 + s++] = o;
            for (t = 0; t <= 15; t++) c[t] = 0;
            for (e = 0; e <= 143;) h[2 * e + 1] = 8, e++, c[8]++;
            for (; e <= 255;) h[2 * e + 1] = 9, e++, c[9]++;
            for (; e <= 279;) h[2 * e + 1] = 7, e++, c[7]++;
            for (; e <= 287;) h[2 * e + 1] = 8, e++, c[8]++;
            for (D(h, u + 1, c), e = 0; e < 30; e++) m[2 * e + 1] = 5, m[2 * e] = C(e, 5);
            r = new y(h, l, 257, u, 15), i = new y(m, d, 0, 30, 15), a = new y([], f, 0, 19, 7)
        }(), P = !0), e.l_desc = new E(e.dyn_ltree, r), e.d_desc = new E(e.dyn_dtree, i), e.bl_desc = new E(e.bl_tree, a), e.bi_buf = 0, e.bi_valid = 0, O(e)
    }, t._tr_stored_block = F, t._tr_flush_block = function(e, t, n, r) {
        var i, a, o = 0;
        e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
            var t, n = 4093624447;
            for (t = 0; t <= 31; t++, n >>>= 1)
                if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
            for (t = 32; t < 256; t++)
                if (0 !== e.dyn_ltree[2 * t]) return 1;
            return 0
        }(e)), N(e, e.l_desc), N(e, e.d_desc), o = function(e) {
            var t;
            for (I(e, e.dyn_ltree, e.l_desc.max_code), I(e, e.dyn_dtree, e.d_desc.max_code), N(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * p[t] + 1]; t--);
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
        }(e), i = e.opt_len + 3 + 7 >>> 3, (a = e.static_len + 3 + 7 >>> 3) <= i && (i = a)) : i = a = n + 5, n + 4 <= i && -1 !== t ? F(e, t, n, r) : 4 === e.strategy || a === i ? (w(e, 2 + (r ? 1 : 0), 3), R(e, h, m)) : (w(e, 4 + (r ? 1 : 0), 3), ! function(e, t, n, r) {
            var i;
            for (w(e, t - 257, 5), w(e, n - 1, 5), w(e, r - 4, 4), i = 0; i < r; i++) w(e, e.bl_tree[2 * p[i] + 1], 3);
            L(e, e.dyn_ltree, t - 1), L(e, e.dyn_dtree, n - 1)
        }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), R(e, e.dyn_ltree, e.dyn_dtree)), O(e), r && M(e)
    }, t._tr_tally = function(e, t, n) {
        return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(_[n] + 256 + 1) * 2]++, e.dyn_dtree[2 * S(t)]++), e.last_lit === e.lit_bufsize - 1
    }, t._tr_align = function(e) {
        var t;
        w(e, 2, 3), T(e, 256, h), 16 === (t = e).bi_valid ? (x(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
    }
}