function(e, t, n) {
    n("781738");
    var r = n("559494"),
        i = n("43332"),
        o = n("285162"),
        s = n("6906"),
        a = /^\[object .+?Constructor\]$/,
        c = Object.prototype,
        u = Function.prototype.toString,
        d = c.hasOwnProperty,
        l = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function(e) {
        return !(!o(e) || i(e)) && (r(e) ? l : a).test(s(e))
    }
}