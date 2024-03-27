function(e, t, n) {
    var r = n("444675");
    ! function(e, t) {
        "use strict";
        if (!e.setImmediate) {
            var n, i = 1,
                a = {},
                o = !1,
                s = e.document,
                u = Object.getPrototypeOf && Object.getPrototypeOf(e);
            u = u && u.setTimeout ? u : e, "[object process]" === ({}).toString.call(e.process) ? function() {
                n = function(e) {
                    r.nextTick(function() {
                        l(e)
                    })
                }
            }() : function() {
                if (e.postMessage && !e.importScripts) {
                    var t = !0,
                        n = e.onmessage;
                    return e.onmessage = function() {
                        t = !1
                    }, e.postMessage("", "*"), e.onmessage = n, t
                }
            }() ? function() {
                var t = "setImmediate$" + Math.random() + "$",
                    r = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && l(+n.data.slice(t.length))
                    };
                e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), n = function(n) {
                    e.postMessage(t + n, "*")
                }
            }() : e.MessageChannel ? function() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                    l(e.data)
                }, n = function(t) {
                    e.port2.postMessage(t)
                }
            }() : s && "onreadystatechange" in s.createElement("script") ? function() {
                var e = s.documentElement;
                n = function(t) {
                    var n = s.createElement("script");
                    n.onreadystatechange = function() {
                        l(t), n.onreadystatechange = null, e.removeChild(n), n = null
                    }, e.appendChild(n)
                }
            }() : function() {
                n = function(e) {
                    setTimeout(l, 0, e)
                }
            }(), u.setImmediate = function(e) {
                "function" != typeof e && (e = Function("" + e));
                for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                var o = {
                    callback: e,
                    args: t
                };
                return a[i] = o, n(i), i++
            }, u.clearImmediate = c
        }

        function c(e) {
            delete a[e]
        }

        function l(e) {
            if (o) setTimeout(l, 0, e);
            else {
                var t = a[e];
                if (t) {
                    o = !0;
                    try {
                        ! function(e) {
                            var t = e.callback,
                                n = e.args;
                            switch (n.length) {
                                case 0:
                                    t();
                                    break;
                                case 1:
                                    t(n[0]);
                                    break;
                                case 2:
                                    t(n[0], n[1]);
                                    break;
                                case 3:
                                    t(n[0], n[1], n[2]);
                                    break;
                                default:
                                    t.apply(void 0, n)
                            }
                        }(t)
                    } finally {
                        c(e), o = !1
                    }
                }
            }
        }
    }("undefined" == typeof self ? void 0 === n.g ? this : n.g : self)
}