function(e, t, n) {
    var r = n("829132");

    function i(e) {
        this.data = e, this.left = null, this.right = null, this.red = !0
    }

    function a(e) {
        this._root = null, this._comparator = e, this.size = 0
    }

    function o(e) {
        return null !== e && e.red
    }

    function s(e, t) {
        var n = e.get_child(!t);
        return e.set_child(!t, n.get_child(t)), n.set_child(t, e), e.red = !0, n.red = !1, n
    }

    function u(e, t) {
        return e.set_child(!t, s(e.get_child(!t), !t)), s(e, t)
    }
    i.prototype.get_child = function(e) {
        return e ? this.right : this.left
    }, i.prototype.set_child = function(e, t) {
        e ? this.right = t : this.left = t
    }, a.prototype = new r, a.prototype.insert = function(e) {
        var t = !1;
        if (null === this._root) this._root = new i(e), t = !0, this.size++;
        else {
            var n = new i(void 0),
                r = 0,
                a = 0,
                c = null,
                l = n,
                d = null,
                f = this._root;
            for (l.right = this._root;;) {
                if (null === f ? (f = new i(e), d.set_child(r, f), t = !0, this.size++) : o(f.left) && o(f.right) && (f.red = !0, f.left.red = !1, f.right.red = !1), o(f) && o(d)) {
                    var p = l.right === c;
                    f === d.get_child(a) ? l.set_child(p, s(c, !a)) : l.set_child(p, u(c, !a))
                }
                var h = this._comparator(f.data, e);
                if (0 === h) break;
                a = r, r = h < 0, null !== c && (l = c), c = d, d = f, f = f.get_child(r)
            }
            this._root = n.right
        }
        return this._root.red = !1, t
    }, a.prototype.remove = function(e) {
        if (null === this._root) return !1;
        var t = new i(void 0),
            n = t;
        n.right = this._root;
        for (var r = null, a = null, c = null, l = 1; null !== n.get_child(l);) {
            var d = l;
            a = r, r = n, n = n.get_child(l);
            var f = this._comparator(e, n.data);
            if (l = f > 0, 0 === f && (c = n), !o(n) && !o(n.get_child(l))) {
                if (o(n.get_child(!l))) {
                    var p = s(n, l);
                    r.set_child(d, p), r = p
                } else if (!o(n.get_child(!l))) {
                    var h = r.get_child(!d);
                    if (null !== h) {
                        if (o(h.get_child(!d)) || o(h.get_child(d))) {
                            var m = a.right === r;
                            o(h.get_child(d)) ? a.set_child(m, u(r, d)) : o(h.get_child(!d)) && a.set_child(m, s(r, d));
                            var g = a.get_child(m);
                            g.red = !0, n.red = !0, g.left.red = !1, g.right.red = !1
                        } else r.red = !1, h.red = !0, n.red = !0
                    }
                }
            }
        }
        return null !== c && (c.data = n.data, r.set_child(r.right === n, n.get_child(null === n.left)), this.size--), this._root = t.right, null !== this._root && (this._root.red = !1), null !== c
    }, e.exports = a
}