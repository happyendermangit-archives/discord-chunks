function(e, t, n) {
    function r() {}

    function a(e) {
        this._tree = e, this._ancestors = [], this._cursor = null
    }
    n("424973"), r.prototype.clear = function() {
        this._root = null, this.size = 0
    }, r.prototype.find = function(e) {
        for (var t = this._root; null !== t;) {
            var n = this._comparator(e, t.data);
            if (0 === n) return t.data;
            t = t.get_child(n > 0)
        }
        return null
    }, r.prototype.findIter = function(e) {
        for (var t = this._root, n = this.iterator(); null !== t;) {
            var r = this._comparator(e, t.data);
            if (0 === r) return n._cursor = t, n;
            n._ancestors.push(t), t = t.get_child(r > 0)
        }
        return null
    }, r.prototype.lowerBound = function(e) {
        for (var t = this._root, n = this.iterator(), r = this._comparator; null !== t;) {
            var a = r(e, t.data);
            if (0 === a) return n._cursor = t, n;
            n._ancestors.push(t), t = t.get_child(a > 0)
        }
        for (var i = n._ancestors.length - 1; i >= 0; --i)
            if (0 > r(e, (t = n._ancestors[i]).data)) return n._cursor = t, n._ancestors.length = i, n;
        return n._ancestors.length = 0, n
    }, r.prototype.upperBound = function(e) {
        for (var t = this.lowerBound(e), n = this._comparator; null !== t.data() && 0 === n(t.data(), e);) t.next();
        return t
    }, r.prototype.min = function() {
        var e = this._root;
        if (null === e) return null;
        for (; null !== e.left;) e = e.left;
        return e.data
    }, r.prototype.max = function() {
        var e = this._root;
        if (null === e) return null;
        for (; null !== e.right;) e = e.right;
        return e.data
    }, r.prototype.iterator = function() {
        return new a(this)
    }, r.prototype.each = function(e) {
        for (var t, n = this.iterator(); null !== (t = n.next());) e(t)
    }, r.prototype.reach = function(e) {
        for (var t, n = this.iterator(); null !== (t = n.prev());) e(t)
    }, a.prototype.data = function() {
        return null !== this._cursor ? this._cursor.data : null
    }, a.prototype.next = function() {
        if (null === this._cursor) {
            var e, t = this._tree._root;
            null !== t && this._minNode(t)
        } else if (null === this._cursor.right)
            do
                if (e = this._cursor, this._ancestors.length) this._cursor = this._ancestors.pop();
                else {
                    this._cursor = null;
                    break
                } while (this._cursor.right === e);
        else this._ancestors.push(this._cursor), this._minNode(this._cursor.right);
        return null !== this._cursor ? this._cursor.data : null
    }, a.prototype.prev = function() {
        if (null === this._cursor) {
            var e, t = this._tree._root;
            null !== t && this._maxNode(t)
        } else if (null === this._cursor.left)
            do
                if (e = this._cursor, this._ancestors.length) this._cursor = this._ancestors.pop();
                else {
                    this._cursor = null;
                    break
                } while (this._cursor.left === e);
        else this._ancestors.push(this._cursor), this._maxNode(this._cursor.left);
        return null !== this._cursor ? this._cursor.data : null
    }, a.prototype._minNode = function(e) {
        for (; null !== e.left;) this._ancestors.push(e), e = e.left;
        this._cursor = e
    }, a.prototype._maxNode = function(e) {
        for (; null !== e.right;) this._ancestors.push(e), e = e.right;
        this._cursor = e
    }, e.exports = r
}