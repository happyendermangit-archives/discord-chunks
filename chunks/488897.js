function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Rect: function() {
            return a
        }
    }), n("222007"), n("424973"), n("884691");
    class r {
        copy() {
            return new r(this.x, this.y)
        }
        equals(e) {
            return this.x === e.x && this.y === e.y
        }
        isOrigin() {
            return 0 === this.x && 0 === this.y
        }
        constructor(e = 0, t = 0) {
            this.x = e, this.y = t
        }
    }
    class a {
        get maxX() {
            return this.x + this.width
        }
        get maxY() {
            return this.y + this.height
        }
        get area() {
            return this.width * this.height
        }
        get topLeft() {
            return new r(this.x, this.y)
        }
        get topRight() {
            return new r(this.maxX, this.y)
        }
        get bottomLeft() {
            return new r(this.x, this.maxY)
        }
        get bottomRight() {
            return new r(this.maxX, this.maxY)
        }
        intersects(e) {
            return this.x <= e.x + e.width && e.x <= this.x + this.width && this.y <= e.y + e.height && e.y <= this.y + this.height
        }
        containsRect(e) {
            return this.x <= e.x && this.y <= e.y && this.maxX >= e.maxX && this.maxY >= e.maxY
        }
        containsPoint(e) {
            return this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y
        }
        getCornerInRect(e) {
            for (let t of ["topLeft", "topRight", "bottomLeft", "bottomRight"])
                if (e.containsPoint(this[t])) return t;
            return null
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.width === this.width && e.height === this.height
        }
        pointEquals(e) {
            return this.x === e.x && this.y === e.y
        }
        sizeEquals(e) {
            return this.width === e.width && this.height === e.height
        }
        union(e) {
            let t = Math.min(this.x, e.x),
                n = Math.min(this.y, e.y),
                r = Math.max(this.maxX, e.maxX) - t,
                i = Math.max(this.maxY, e.maxY) - n;
            return new a(t, n, r, i)
        }
        intersection(e) {
            if (!this.intersects(e)) return new a(0, 0, 0, 0);
            let t = Math.max(this.x, e.x),
                n = Math.max(this.y, e.y);
            return new a(t, n, Math.min(this.maxX, e.maxX) - t, Math.min(this.maxY, e.maxY) - n)
        }
        copy() {
            return new a(this.x, this.y, this.width, this.height)
        }
        constructor(e = 0, t = 0, n = 0, r = 0) {
            this.x = e, this.y = t, this.width = n, this.height = r
        }
    }
    let i = "undefined" != typeof window ? window.performance : null,
        o = i && (i.now || i.webkitNow || i.msNow || i.mozNow);
    o && o.bind(i)
}