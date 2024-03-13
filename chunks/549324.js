function(t, r, e) {
    e("781738");
    var n = e("600506"),
        o = e("235677"),
        i = e("952133"),
        a = e("521532"),
        u = /^\[object .+?Constructor\]$/,
        s = Object.prototype,
        f = Function.prototype.toString,
        c = s.hasOwnProperty,
        l = RegExp("^" + f.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!i(t) || o(t)) && (n(t) ? l : u).test(a(t))
    }
}