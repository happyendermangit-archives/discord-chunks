function(e, t, n) {
    "use strict";
    n("70102"), n("854508");
    var r = n("912065").Buffer,
        i = r.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        };

    function o(e) {
        var t;
        switch (this.encoding = function(e) {
                var t = function(e) {
                    var t;
                    if (!e) return "utf8";
                    for (;;) switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase(), t = !0
                    }
                }(e);
                if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw Error("Unknown encoding: " + e);
                return t || e
            }(e), this.encoding) {
            case "utf16le":
                this.text = c, this.end = u, t = 4;
                break;
            case "utf8":
                this.fillLast = a, t = 4;
                break;
            case "base64":
                this.text = d, this.end = l, t = 3;
                break;
            default:
                this.write = f, this.end = p;
                return
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
    }

    function s(e) {
        if (e <= 127) return 0;
        if (e >> 5 == 6) return 2;
        if (e >> 4 == 14) return 3;
        else if (e >> 3 == 30) return 4;
        return e >> 6 == 2 ? -1 : -2
    }
    t.StringDecoder = o, o.prototype.write = function(e) {
        var t, n;
        if (0 === e.length) return "";
        if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return "";
            n = this.lastNeed, this.lastNeed = 0
        } else n = 0;
        return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
    }, o.prototype.end = function(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t
    }, o.prototype.text = function(e, t) {
        var n = function(e, t, n) {
            var r = t.length - 1;
            if (r < n) return 0;
            var i = s(t[r]);
            return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --r < n || -2 === i ? 0 : (i = s(t[r])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --r < n || -2 === i ? 0 : (i = s(t[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
        }(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n;
        var r = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
    }, o.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
    };

    function a(e) {
        var t = this.lastTotal - this.lastNeed,
            n = function(e, t, n) {
                if ((192 & t[0]) != 128) return e.lastNeed = 0, "�";
                if (e.lastNeed > 1 && t.length > 1) {
                    if ((192 & t[1]) != 128) return e.lastNeed = 1, "�";
                    if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return e.lastNeed = 2, "�"
                }
            }(this, e, 0);
        return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length)
    }

    function c(e, t) {
        if ((e.length - t) % 2 == 0) {
            var n = e.toString("utf16le", t);
            if (n) {
                var r = n.charCodeAt(n.length - 1);
                if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
            }
            return n
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
    }

    function u(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
            var n = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString("utf16le", 0, n)
        }
        return t
    }

    function d(e, t) {
        var n = (e.length - t) % 3;
        return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
    }

    function l(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
    }

    function f(e) {
        return e.toString(this.encoding)
    }

    function p(e) {
        return e && e.length ? this.write(e) : ""
    }
}