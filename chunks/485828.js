function(e, t, n) {
    "use strict";

    function r(e) {
        if (this._capacity = s(e), this._length = 0, this._front = 0, this._makeCapacity(), i(e)) {
            for (var t = e.length, n = 0; n < t; ++n) this[n] = e[n];
            this._length = t
        }
    }
    n("424973"), n("843762"), n("274635"), n("70102"), r.prototype.toArray = function() {
        for (var e = this._length, t = Array(e), n = this._front, r = this._capacity, i = 0; i < e; ++i) t[i] = this[n + i & r - 1];
        return t
    }, r.prototype.push = function(e) {
        var t = arguments.length,
            n = this._length;
        if (t > 1) {
            var r = this._capacity;
            if (n + t > r) {
                for (var i = 0; i < t; ++i) {
                    this._checkCapacity(n + 1);
                    var o = this._front + n & this._capacity - 1;
                    this[o] = arguments[i], n++, this._length = n
                }
                return n
            }
            for (var o = this._front, i = 0; i < t; ++i) this[o + n & r - 1] = arguments[i], o++;
            return this._length = n + t, n + t
        }
        if (0 === t) return n;
        this._checkCapacity(n + 1);
        var i = this._front + n & this._capacity - 1;
        return this[i] = e, this._length = n + 1, n + 1
    }, r.prototype.pop = function() {
        var e = this._length;
        if (0 !== e) {
            var t = this._front + e - 1 & this._capacity - 1,
                n = this[t];
            return this[t] = void 0, this._length = e - 1, n
        }
    }, r.prototype.shift = function() {
        var e = this._length;
        if (0 !== e) {
            var t = this._front,
                n = this[t];
            return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length = e - 1, n
        }
    }, r.prototype.unshift = function(e) {
        var t = this._length,
            n = arguments.length;
        if (n > 1) {
            var r = this._capacity;
            if (t + n > r) {
                for (var i = n - 1; i >= 0; i--) {
                    this._checkCapacity(t + 1);
                    var r = this._capacity,
                        o = (this._front - 1 & r - 1 ^ r) - r;
                    this[o] = arguments[i], t++, this._length = t, this._front = o
                }
                return t
            }
            for (var s = this._front, i = n - 1; i >= 0; i--) {
                var o = (s - 1 & r - 1 ^ r) - r;
                this[o] = arguments[i], s = o
            }
            return this._front = s, this._length = t + n, t + n
        }
        if (0 === n) return t;
        this._checkCapacity(t + 1);
        var r = this._capacity,
            i = (this._front - 1 & r - 1 ^ r) - r;
        return this[i] = e, this._length = t + 1, this._front = i, t + 1
    }, r.prototype.peekBack = function() {
        var e = this._length;
        if (0 !== e) return this[this._front + e - 1 & this._capacity - 1]
    }, r.prototype.peekFront = function() {
        if (0 !== this._length) return this[this._front]
    }, r.prototype.get = function(e) {
        var t = e;
        if (t === (0 | t)) {
            var n = this._length;
            if (t < 0 && (t += n), !(t < 0) && !(t >= n)) return this[this._front + t & this._capacity - 1]
        }
    }, r.prototype.isEmpty = function() {
        return 0 === this._length
    }, r.prototype.clear = function() {
        this._length = 0, this._front = 0, this._makeCapacity()
    }, r.prototype.toString = function() {
        return this.toArray().toString()
    }, r.prototype.valueOf = r.prototype.toString, r.prototype.removeFront = r.prototype.shift, r.prototype.removeBack = r.prototype.pop, r.prototype.insertFront = r.prototype.unshift, r.prototype.insertBack = r.prototype.push, r.prototype.enqueue = r.prototype.push, r.prototype.dequeue = r.prototype.shift, r.prototype.toJSON = r.prototype.toArray, Object.defineProperty(r.prototype, "length", {
        get: function() {
            return this._length
        },
        set: function() {
            throw RangeError("")
        }
    }), r.prototype._makeCapacity = function() {
        for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0
    }, r.prototype._checkCapacity = function(e) {
        this._capacity < e && this._resizeTo(s(1.5 * this._capacity + 16))
    }, r.prototype._resizeTo = function(e) {
        var t = this._front,
            n = this._capacity,
            r = Array(n),
            i = this._length;
        if (o(this, 0, r, 0, n), this._capacity = e, this._makeCapacity(), this._front = 0, t + i <= n) o(r, t, this, 0, i);
        else {
            var s = i - (t + i & n - 1);
            o(r, t, this, 0, s), o(r, 0, this, s, i - s)
        }
    };
    var i = Array.isArray;

    function o(e, t, n, r, i) {
        for (var o = 0; o < i; ++o) n[o + r] = e[o + t]
    }

    function s(e) {
        var t;
        if ("number" != typeof e) {
            if (!i(e)) return 16;
            e = e.length
        }
        return t = (Math.min(Math.max(16, e), 1073741824) >>> 0) - 1, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, (t |= t >> 16) + 1
    }
    e.exports = r
}