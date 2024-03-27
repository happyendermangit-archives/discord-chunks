function(t) {
    var e, n, r, i = t.exports = {};

    function a() {
        throw Error("setTimeout has not been defined")
    }

    function o() {
        throw Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === a || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
            return e(t, 0)
        } catch (n) {
            try {
                return e.call(null, t, 0)
            } catch (n) {
                return e.call(this, t, 0)
            }
        }
    }! function() {
        try {
            e = "function" == typeof setTimeout ? setTimeout : a
        } catch (t) {
            e = a
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
            n = o
        }
    }();
    var u = [],
        c = !1,
        l = -1;

    function d() {
        c && r && (c = !1, r.length ? u = r.concat(u) : l = -1, u.length && f())
    }

    function f() {
        if (!c) {
            var t = s(d);
            c = !0;
            for (var e = u.length; e;) {
                for (r = u, u = []; ++l < e;) r && r[l].run();
                l = -1, e = u.length
            }
            r = null, c = !1, ! function(t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                try {
                    n(t)
                } catch (e) {
                    try {
                        return n.call(null, t)
                    } catch (e) {
                        return n.call(this, t)
                    }
                }
            }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function h() {}
    i.nextTick = function(t) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 === u.length && !c && s(f)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(t) {
        return []
    }, i.binding = function(t) {
        throw Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(t) {
        throw Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}