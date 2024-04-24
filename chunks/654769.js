function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("177593");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("525654"),
        o = n.n(a),
        l = n("579806"),
        u = n("292959"),
        d = n("246946"),
        _ = n("626135"),
        c = n("358085"),
        E = n("557177"),
        I = n("998502"),
        T = n("981631");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = c.isPlatformEmbedded && (0, c.isWindows)(),
        h = S && 10 > parseFloat(l.default.os.release),
        A = !0;
    if (S && !h) {
        let [e, , t] = l.default.os.release.split(".");
        A = parseInt(e) > 10 || parseInt(t) >= 15063
    }
    let m = S && A || "Chrome" === o().name && 47 > parseFloat(o().version) || "Firefox" === o().name && 52 > parseFloat(o().version),
        N = s().throttle(E.playSound, 1e3, {
            leading: !0
        });

    function p() {
        I.default.flashFrame(!1)
    }
    S && (window.addEventListener("focus", p), I.default.on("MAIN_WINDOW_FOCUS", p));
    let O = window.Notification;
    if (h) {
        let e = {};
        I.default.on("NOTIFICATION_CLICK", (t, n) => {
            let i = e[n];
            null != i && (i.onclick(), i.close())
        }), I.default.send("NOTIFICATIONS_CLEAR"), i = class {
            static requestPermission(e) {
                e()
            }
            close() {
                null != e[this.id] && (delete e[this.id], I.default.send("NOTIFICATION_CLOSE", this.id), this.onclose())
            }
            constructor(t, {
                body: n,
                icon: i
            }) {
                f(this, "id", O._id++), f(this, "title", void 0), f(this, "body", void 0), f(this, "icon", void 0), f(this, "onshow", function() {}), f(this, "onclick", function() {}), f(this, "onclose", function() {}), this.title = t, this.body = n, this.icon = i, setImmediate(() => this.onshow()), e[this.id] = this, I.default.send("NOTIFICATION_SHOW", {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                })
            }
        }, f(i, "permission", "granted"), f(i, "_id", 0), O = i
    }

    function R() {
        return null != O && "granted" === O.permission
    }

    function C(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? N(e, t, void 0, n) : (0, E.playSound)(e, t)
    }

    function g(e) {
        return d.default.disableNotifications && null == e.overrideStreamerMode || !R() || c.isPlatformEmbedded && !I.default.shouldDisplayNotifications()
    }
    t.default = {
        hasPermission: R,
        requestPermission: function(e) {
            null != O && O.requestPermission(() => {
                null != e && e(R())
            })
        },
        showNotification: function(e, t, n, i, r) {
            var a, o, l, d;
            let E;
            if (g(r)) {
                null != r.sound && !1 !== r.playSoundIfDisabled && C(r.sound, null !== (o = r.volume) && void 0 !== o ? o : 1, r.soundpack);
                return
            }
            null != r.sound && C(r.sound, null !== (l = r.volume) && void 0 !== l ? l : 1, r.soundpack);
            let f = null !== (d = null == r ? void 0 : r.tag) && void 0 !== d ? d : null;
            (0, c.isLinux)() && (n = s().escape(n));
            let h = {
                icon: e,
                body: n,
                tag: f,
                silent: !0
            };
            S && u.default.taskbarFlash && I.default.flashFrame(!0);
            try {
                E = new O(t, h)
            } catch (e) {
                return null
            }
            return (null === (a = r.onShown) || void 0 === a || a.call(r), !r.omitViewTracking && _.default.track(T.AnalyticEvents.NOTIFICATION_VIEWED, i), E.onclick = () => {
                var e;
                c.isPlatformEmbedded ? I.default.focus() : (window.focus(), E.close()), !r.omitClickTracking && _.default.track(T.AnalyticEvents.NOTIFICATION_CLICKED, i), null === (e = r.onClick) || void 0 === e || e.call(r)
            }, m && setTimeout(() => E.close(), 5e3), A) ? E : {
                close() {
                    var e;
                    null == E || null === (e = E.onclose) || void 0 === e || e.call(E)
                }
            }
        },
        disabled: g
    }
}