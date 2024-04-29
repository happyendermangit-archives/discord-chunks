function(e, t, n) {
    var r = n("138089"),
        i = n("21358");

    function a(t, n, o) {
        return i() ? e.exports = a = Reflect.construct.bind() : e.exports = a = function(e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var a = new(Function.bind.apply(e, i));
            return n && r(a, n.prototype), a
        }, e.exports.__esModule = !0, e.exports.default = e.exports, a.apply(null, arguments)
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
}