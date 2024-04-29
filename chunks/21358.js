function(e) {
    e.exports = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (e) {
            return !1
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}