function(e, t, n) {
    var r = n("867996"),
        i = n("350780"),
        a = n("661233"),
        o = n("785775"),
        s = /^\[object .+?Constructor\]$/,
        u = Object.prototype,
        c = Function.prototype.toString,
        l = u.hasOwnProperty,
        d = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function(e) {
        return !(!a(e) || i(e)) && (r(e) ? d : s).test(o(e))
    }
}