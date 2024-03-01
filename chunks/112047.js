function(t, r, n) {
    n("781738");
    var e = n("559494"),
        o = n("43332"),
        i = n("285162"),
        u = n("6906"),
        c = /^\[object .+?Constructor\]$/,
        a = Object.prototype,
        f = Function.prototype.toString,
        s = a.hasOwnProperty,
        p = RegExp("^" + f.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!i(t) || o(t)) && (e(t) ? p : c).test(u(t))
    }
}