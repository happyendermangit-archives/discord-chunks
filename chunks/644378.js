function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("525654"),
        a = n.n(i),
        u = n("517727"),
        s = n("335328"),
        l = n("930949"),
        c = n("870331"),
        f = n("374550"),
        d = n("423284"),
        _ = n("131900"),
        E = n("281767");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var I = f.isPlatformEmbedded && (0, f.isWindows)(),
        h = I && 10 > parseFloat(u.default.os.release),
        O = !0;
    if (I && !h) {
        var T, S, v = (T = u.default.os.release.split("."), S = 3, function(e) {
                if (Array.isArray(e)) return e
            }(T) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(T, S) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(T, S) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            g = v[0],
            A = v[2];
        O = parseInt(g) > 10 || parseInt(A) >= 15063
    }
    var b = I && O || "Chrome" === a().name && 47 > parseFloat(a().version) || "Firefox" === a().name && 52 > parseFloat(a().version),
        N = o().throttle(d.playSound, 1e3, {
            leading: !0
        });

    function R() {
        _.default.flashFrame(!1)
    }
    I && (window.addEventListener("focus", R), _.default.on("MAIN_WINDOW_FOCUS", R));
    var C = window.Notification;
    if (h) {
        var P, D = {};
        _.default.on("NOTIFICATION_CLICK", function(e, t) {
            var n = D[t];
            null != n && (n.onclick(), n.close())
        }), _.default.send("NOTIFICATIONS_CLEAR"), P = function() {
            var e, t, n;

            function r(e, t) {
                var n = this,
                    o = t.body,
                    i = t.icon;
                (function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                })(this, r), y(this, "id", C._id++), y(this, "title", void 0), y(this, "body", void 0), y(this, "icon", void 0), y(this, "onshow", function() {}), y(this, "onclick", function() {}), y(this, "onclose", function() {}), this.title = e, this.body = o, this.icon = i, setImmediate(function() {
                    return n.onshow()
                }), D[this.id] = this, _.default.send("NOTIFICATION_SHOW", {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                })
            }
            return e = r, t = [{
                key: "close",
                value: function() {
                    null != D[this.id] && (delete D[this.id], _.default.send("NOTIFICATION_CLOSE", this.id), this.onclose())
                }
            }], n = [{
                key: "requestPermission",
                value: function(e) {
                    e()
                }
            }], t && m(e.prototype, t), n && m(e, n), r
        }(), y(P, "permission", "granted"), y(P, "_id", 0), C = P
    }

    function L() {
        return null != C && "granted" === C.permission
    }

    function M(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        e.includes("message") ? N(e, t) : (0, d.playSound)(e, t)
    }

    function U(e) {
        return l.default.disableNotifications && null == e.overrideStreamerMode || !L() || f.isPlatformEmbedded && !_.default.shouldDisplayNotifications()
    }
    t.default = {
        hasPermission: L,
        requestPermission: function(e) {
            null != C && C.requestPermission(function() {
                null != e && e(L())
            })
        },
        showNotification: function(e, t, n, r, i) {
            if (U(i)) {
                null != i.sound && !1 !== i.playSoundIfDisabled && M(i.sound, null !== (u = i.volume) && void 0 !== u ? u : 1);
                return
            }
            null != i.sound && M(i.sound, null !== (l = i.volume) && void 0 !== l ? l : 1);
            var a, u, l, d, p, m = null !== (d = null == i ? void 0 : i.tag) && void 0 !== d ? d : null;
            (0, f.isLinux)() && (n = o().escape(n));
            var y = {
                icon: e,
                body: n,
                tag: m,
                silent: !0
            };
            I && s.default.taskbarFlash && _.default.flashFrame(!0);
            try {
                p = new C(t, y)
            } catch (e) {
                return null
            }
            return (null === (a = i.onShown) || void 0 === a || a.call(i), !i.omitViewTracking && c.default.track(E.AnalyticEvents.NOTIFICATION_VIEWED, r), p.onclick = function() {
                var e;
                f.isPlatformEmbedded ? _.default.focus() : (window.focus(), p.close()), !i.omitClickTracking && c.default.track(E.AnalyticEvents.NOTIFICATION_CLICKED, r), null === (e = i.onClick) || void 0 === e || e.call(i)
            }, b && setTimeout(function() {
                return p.close()
            }, 5e3), O) ? p : {
                close: function() {
                    var e;
                    null == p || null === (e = p.onclose) || void 0 === e || e.call(p)
                }
            }
        },
        disabled: U
    }
}