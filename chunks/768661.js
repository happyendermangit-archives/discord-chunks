function(e, t, n) {
    var r = n("78798");

    function Node(e) {
        this.data = e, this.left = null, this.right = null, this.red = !0
    }

    function a(e) {
        this._root = null, this._comparator = e, this.size = 0
    }

    function i(e) {
        return null !== e && e.red
    }

    function o(e, t) {
        var n = e.get_child(!t);
        return e.set_child(!t, n.get_child(t)), n.set_child(t, e), e.red = !0, n.red = !1, n
    }

    function s(e, t) {
        return e.set_child(!t, o(e.get_child(!t), !t)), o(e, t)
    }
    Node.prototype.get_child = function(e) {
        return e ? this.right : this.left
    }, Node.prototype.set_child = function(e, t) {
        e ? this.right = t : this.left = t
    }, a.prototype = new r, a.prototype.insert = function(e) {
        var t = !1;
        if (null === this._root) this._root = new Node(e), t = !0, this.size++;
        else {
            var n = new Node(void 0),
                r = 0,
                a = 0,
                c = null,
                l = n,
                u = null,
                d = this._root;
            for (l.right = this._root;;) {
                if (null === d ? (d = new Node(e), u.set_child(r, d), t = !0, this.size++) : i(d.left) && i(d.right) && (d.red = !0, d.left.red = !1, d.right.red = !1), i(d) && i(u)) {
                    var p = l.right === c;
                    d === u.get_child(a) ? l.set_child(p, o(c, !a)) : l.set_child(p, s(c, !a))
                }
                var f = this._comparator(d.data, e);
                if (0 === f) break;
                a = r, r = f < 0, null !== c && (l = c), c = u, u = d, d = d.get_child(r)
            }
            this._root = n.right
        }
        return this._root.red = !1, t
    }, a.prototype.remove = function(e) {
        if (null === this._root) return !1;
        var t = new Node(void 0),
            n = t;
        n.right = this._root;
        for (var r = null, a = null, c = null, l = 1; null !== n.get_child(l);) {
            var u = l;
            a = r, r = n, n = n.get_child(l);
            var d = this._comparator(e, n.data);
            if (l = d > 0, 0 === d && (c = n), !i(n) && !i(n.get_child(l))) {
                if (i(n.get_child(!l))) {
                    var p = o(n, l);
                    r.set_child(u, p), r = p
                } else if (!i(n.get_child(!l))) {
                    var f = r.get_child(!u);
                    if (null !== f) {
                        if (i(f.get_child(!u)) || i(f.get_child(u))) {
                            var m = a.right === r;
                            i(f.get_child(u)) ? a.set_child(m, s(r, u)) : i(f.get_child(!u)) && a.set_child(m, o(r, u));
                            var h = a.get_child(m);
                            h.red = !0, n.red = !0, h.left.red = !1, h.right.red = !1
                        } else r.red = !1, f.red = !0, n.red = !0
                    }
                }
            }
        }
        return null !== c && (c.data = n.data, r.set_child(r.right === n, n.get_child(null === n.left)), this.size--), this._root = t.right, null !== this._root && (this._root.red = !1), null !== c
    }, e.exports = a
}