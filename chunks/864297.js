function(e, t, n) {
    var r = n("78798");

    function Node(e) {
        this.data = e, this.left = null, this.right = null
    }

    function i(e) {
        this._root = null, this._comparator = e, this.size = 0
    }
    Node.prototype.get_child = function(e) {
        return e ? this.right : this.left
    }, Node.prototype.set_child = function(e, t) {
        e ? this.right = t : this.left = t
    }, i.prototype = new r, i.prototype.insert = function(e) {
        if (null === this._root) return this._root = new Node(e), this.size++, !0;
        for (var t = 0, n = null, r = this._root;;) {
            if (null === r) return r = new Node(e), n.set_child(t, r), ret = !0, this.size++, !0;
            if (0 === this._comparator(r.data, e)) return !1;
            t = 0 > this._comparator(r.data, e), n = r, r = r.get_child(t)
        }
    }, i.prototype.remove = function(e) {
        if (null === this._root) return !1;
        var t = new Node(void 0),
            n = t;
        n.right = this._root;
        for (var r = null, i = null, o = 1; null !== n.get_child(o);) {
            r = n, n = n.get_child(o);
            var s = this._comparator(e, n.data);
            o = s > 0, 0 === s && (i = n)
        }
        return null !== i && (i.data = n.data, r.set_child(r.right === n, n.get_child(null === n.left)), this._root = t.right, this.size--, !0)
    }, e.exports = i
}