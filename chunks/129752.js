function(e, t, n) {
    "use strict";
    n("70102"), n("781738");
    var r = {};

    function i(e, t, n) {
        !n && (n = Error);
        var i = function(e) {
            var n, r;

            function i(n, r, i) {
                var o, s, a;
                return e.call(this, (o = n, s = r, a = i, "string" == typeof t ? t : t(o, s, a))) || this
            }
            return n = i, r = e, n.prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, i
        }(n);
        i.prototype.name = n.name, i.prototype.code = e, r[e] = i
    }

    function o(e, t) {
        if (!Array.isArray(e)) return "of ".concat(t, " ").concat(String(e));
        var n = e.length;
        return (e = e.map(function(e) {
            return String(e)
        }), n > 2) ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : 2 === n ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
    }
    i("ERR_INVALID_OPT_VALUE", function(e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"'
    }, TypeError), i("ERR_INVALID_ARG_TYPE", function(e, t, n) {
        if ("string" == typeof t && (r = "not ", t.substr(!i || i < 0 ? 0 : +i, r.length) === r)) f = "must not be", t = t.replace(/^not /, "");
        else f = "must be";
        if (s = e, a = " argument", (void 0 === c || c > s.length) && (c = s.length), s.substring(c - a.length, c) === a) p = "The ".concat(e, " ").concat(f, " ").concat(o(t, "type"));
        else {
            var r, i, s, a, c, u, d, l, f, p, h = (u = e, d = ".", "number" != typeof l && (l = 0), l + d.length > u.length || -1 === u.indexOf(d, l)) ? "argument" : "property";
            p = 'The "'.concat(e, '" ').concat(h, " ").concat(f, " ").concat(o(t, "type"))
        }
        return p += ". Received type ".concat(typeof n)
    }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
        return "The " + e + " method is not implemented"
    }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(e) {
        return "Cannot call " + e + " after a stream was destroyed"
    }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function(e) {
        return "Unknown encoding: " + e
    }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = r
}