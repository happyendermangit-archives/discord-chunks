function(e, t, n) {
    function r(e) {
        var t = this;
        if (!(t instanceof r) && (t = new r), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach(function(e) {
            t.push(e)
        });
        else if (arguments.length > 0)
            for (var n = 0, a = arguments.length; n < a; n++) t.push(arguments[n]);
        return t
    }
    n("854508"), n("424973"), n("70102"), n("843762"), n("808653"), e.exports = r, r.Node = Node, r.create = r, r.prototype.removeNode = function(e) {
        if (e.list !== this) throw Error("removing node which does not belong to this list");
        var t = e.next,
            n = e.prev;
        t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null
    }, r.prototype.unshiftNode = function(e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            e.list = this, e.next = t, t && (t.prev = e), this.head = e, !this.tail && (this.tail = e), this.length++
        }
    }, r.prototype.pushNode = function(e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            e.list = this, e.prev = t, t && (t.next = e), this.tail = e, !this.head && (this.head = e), this.length++
        }
    }, r.prototype.push = function() {
        for (var e = 0, t = arguments.length; e < t; e++)(function(e, t) {
            e.tail = new Node(t, e.tail, null, e), !e.head && (e.head = e.tail), e.length++
        })(this, arguments[e]);
        return this.length
    }, r.prototype.unshift = function() {
        for (var e = 0, t = arguments.length; e < t; e++)(function(e, t) {
            e.head = new Node(t, null, e.head, e), !e.tail && (e.tail = e.head), e.length++
        })(this, arguments[e]);
        return this.length
    }, r.prototype.pop = function() {
        if (this.tail) {
            var e = this.tail.value;
            return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
        }
    }, r.prototype.shift = function() {
        if (this.head) {
            var e = this.head.value;
            return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
        }
    }, r.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), n = n.next
    }, r.prototype.forEachReverse = function(e, t) {
        t = t || this;
        for (var n = this.tail, r = this.length - 1; null !== n; r--) e.call(t, n.value, r, this), n = n.prev
    }, r.prototype.get = function(e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
        if (t === e && null !== n) return n.value
    }, r.prototype.getReverse = function(e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
        if (t === e && null !== n) return n.value
    }, r.prototype.map = function(e, t) {
        t = t || this;
        for (var n = new r, a = this.head; null !== a;) n.push(e.call(t, a.value, this)), a = a.next;
        return n
    }, r.prototype.mapReverse = function(e, t) {
        t = t || this;
        for (var n = new r, a = this.tail; null !== a;) n.push(e.call(t, a.value, this)), a = a.prev;
        return n
    }, r.prototype.reduce = function(e, t) {
        var n, r = this.head;
        if (arguments.length > 1) n = t;
        else if (this.head) r = this.head.next, n = this.head.value;
        else throw TypeError("Reduce of empty list with no initial value");
        for (var a = 0; null !== r; a++) n = e(n, r.value, a), r = r.next;
        return n
    }, r.prototype.reduceReverse = function(e, t) {
        var n, r = this.tail;
        if (arguments.length > 1) n = t;
        else if (this.tail) r = this.tail.prev, n = this.tail.value;
        else throw TypeError("Reduce of empty list with no initial value");
        for (var a = this.length - 1; null !== r; a--) n = e(n, r.value, a), r = r.prev;
        return n
    }, r.prototype.toArray = function() {
        for (var e = Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, n = n.next;
        return e
    }, r.prototype.toArrayReverse = function() {
        for (var e = Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, n = n.prev;
        return e
    }, r.prototype.slice = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var a = 0, i = this.head; null !== i && a < e; a++) i = i.next;
        for (; null !== i && a < t; a++, i = i.next) n.push(i.value);
        return n
    }, r.prototype.sliceReverse = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var a = this.length, i = this.tail; null !== i && a > t; a--) i = i.prev;
        for (; null !== i && a > e; a--, i = i.prev) n.push(i.value);
        return n
    }, r.prototype.reverse = function() {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
            var r = n.prev;
            n.prev = n.next, n.next = r
        }
        return this.head = t, this.tail = e, this
    };

    function Node(e, t, n, r) {
        if (!(this instanceof Node)) return new Node(e, t, n, r);
        this.list = r, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null
    }
}