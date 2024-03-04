function(e, t, n) {
    var r = n("78798");

    function Node(e) {
        this.data = e, this.left = null, this.right = null, this.red = !0
    }

    function i(e) {
        this._root = null, this._comparator = e, this.size = 0
    }

    function o(e) {
        return null !== e && e.red
    }

    function s(e, t) {
        var n = e.get_child(!t);
        return e.set_child(!t, n.get_child(t)), n.set_child(t, e), e.red = !0, n.red = !1, n
    }

    function a(e, t) {
        return e.set_child(!t, s(e.get_child(!t), !t)), s(e, t)
    }
    Node.prototype.get_child = function(e) {
        return e ? this.right : this.left
    }, Node.prototype.set_child = function(e, t) {
        e ? this.right = t : this.left = t
    }, i.prototype = new r, i.prototype.insert = function(e) {
        var t = !1;
        if (null === this._root) this._root = new Node(e), t = !0, this.size++;
        else {
            var n = new Node(void 0),
                r = 0,
                i = 0,
                c = null,
                u = n,
                d = null,
                l = this._root;
            for (u.right = this._root;;) {
                if (null === l ? (l = new Node(e), d.set_child(r, l), t = !0, this.size++) : o(l.left) && o(l.right) && (l.red = !0, l.left.red = !1, l.right.red = !1), o(l) && o(d)) {
                    var f = u.right === c;
                    l === d.get_child(i) ? u.set_child(f, s(c, !i)) : u.set_child(f, a(c, !i))
                }
                var p = this._comparator(l.data, e);
                if (0 === p) break;
                i = r, r = p < 0, null !== c && (u = c), c = d, d = l, l = l.get_child(r)
            }
            this._root = n.right
        }
        return this._root.red = !1, t
    }, i.prototype.remove = function(e) {
        if (null === this._root) return !1;
        var t = new Node(void 0),
            n = t;
        n.right = this._root;
        for (var r = null, i = null, c = null, u = 1; null !== n.get_child(u);) {
            var d = u;
            i = r, r = n, n = n.get_child(u);
            var l = this._comparator(e, n.data);
            if (u = l > 0, 0 === l && (c = n), !o(n) && !o(n.get_child(u))) {
                if (o(n.get_child(!u))) {
                    var f = s(n, u);
                    r.set_child(d, f), r = f
                } else if (!o(n.get_child(!u))) {
                    var p = r.get_child(!d);
                    if (null !== p) {
                        if (o(p.get_child(!d)) || o(p.get_child(d))) {
                            var h = i.right === r;
                            o(p.get_child(d)) ? i.set_child(h, a(r, d)) : o(p.get_child(!d)) && i.set_child(h, s(r, d));
                            var v = i.get_child(h);
                            v.red = !0, n.red = !0, v.left.red = !1, v.right.red = !1
                        } else r.red = !1, p.red = !0, n.red = !0
                    }
                }
            }
        }
        return null !== c && (c.data = n.data, r.set_child(r.right === n, n.get_child(null === n.left)), this.size--), this._root = t.right, null !== this._root && (this._root.red = !1), null !== c
    }, e.exports = i
}