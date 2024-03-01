function(t, e, n) {
    n("70102"), n("424973");
    var r, i, o, a = t.exports = {};

    function u() {
        throw Error("setTimeout has not been defined")
    }

    function s() {
        throw Error("clearTimeout has not been defined")
    }

    function c(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === u || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
        try {
            return r(t, 0)
        } catch (e) {
            try {
                return r.call(null, t, 0)
            } catch (e) {
                return r.call(this, t, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : u
        } catch (t) {
            r = u
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            i = s
        }
    }();
    var l = [],
        f = !1,
        h = -1;

    function p() {
        f && o && (f = !1, o.length ? l = o.concat(l) : h = -1, l.length && d())
    }

    function d() {
        if (!f) {
            var t = c(p);
            f = !0;
            for (var e = l.length; e;) {
                for (o = l, l = []; ++h < e;) o && o[h].run();
                h = -1, e = l.length
            }
            o = null, f = !1, ! function(t) {
                if (i === clearTimeout) return clearTimeout(t);
                if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                try {
                    i(t)
                } catch (e) {
                    try {
                        return i.call(null, t)
                    } catch (e) {
                        return i.call(this, t)
                    }
                }
            }(t)
        }
    }

    function v(t, e) {
        this.fun = t, this.array = e
    }

    function y() {}
    a.nextTick = function(t) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new v(t, e)), 1 === l.length && !f && c(d)
    }, v.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = y, a.addListener = y, a.once = y, a.off = y, a.removeListener = y, a.removeAllListeners = y, a.emit = y, a.prependListener = y, a.prependOnceListener = y, a.listeners = function(t) {
        return []
    }, a.binding = function(t) {
        throw Error("process.binding is not supported")
    }, a.cwd = function() {
        return "/"
    }, a.chdir = function(t) {
        throw Error("process.chdir is not supported")
    }, a.umask = function() {
        return 0
    }
}