function(t, e, s) {
    "use strict";
    s("70102"), s("781738");
    var r = {};

    function i(t, e, s) {
        !s && (s = Error);
        var i = function(t) {
            var s, r;

            function i(s, r, i) {
                var n, c, o;
                return t.call(this, (n = s, c = r, o = i, "string" == typeof e ? e : e(n, c, o))) || this
            }
            return s = i, r = t, s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.__proto__ = r, i
        }(s);
        i.prototype.name = s.name, i.prototype.code = t, r[t] = i
    }

    function n(t, e) {
        if (!Array.isArray(t)) return "of ".concat(e, " ").concat(String(t));
        var s = t.length;
        return (t = t.map(function(t) {
            return String(t)
        }), s > 2) ? "one of ".concat(e, " ").concat(t.slice(0, s - 1).join(", "), ", or ") + t[s - 1] : 2 === s ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
    }
    i("ERR_INVALID_OPT_VALUE", function(t, e) {
        return 'The value "' + e + '" is invalid for option "' + t + '"'
    }, TypeError), i("ERR_INVALID_ARG_TYPE", function(t, e, s) {
        if ("string" == typeof e && (r = "not ", e.substr(!i || i < 0 ? 0 : +i, r.length) === r)) p = "must not be", e = e.replace(/^not /, "");
        else p = "must be";
        if (c = t, o = " argument", (void 0 === f || f > c.length) && (f = c.length), c.substring(f - o.length, f) === o) b = "The ".concat(t, " ").concat(p, " ").concat(n(e, "type"));
        else {
            var r, i, c, o, f, u, a, d, p, b, h = (u = t, a = ".", "number" != typeof d && (d = 0), d + a.length > u.length || -1 === u.indexOf(a, d)) ? "argument" : "property";
            b = 'The "'.concat(t, '" ').concat(h, " ").concat(p, " ").concat(n(e, "type"))
        }
        return b += ". Received type ".concat(typeof s)
    }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
        return "The " + t + " method is not implemented"
    }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(t) {
        return "Cannot call " + t + " after a stream was destroyed"
    }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function(t) {
        return "Unknown encoding: " + t
    }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = r
}