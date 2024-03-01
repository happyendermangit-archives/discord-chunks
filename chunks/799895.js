function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return M
        }
    }), E("222007"), E("860677");
    var t, o = E("917351"),
        n = E.n(o),
        r = E("597755"),
        i = E.n(r),
        a = E("49671"),
        I = E("385649"),
        s = E("102985"),
        T = E("599110"),
        S = E("773336"),
        N = E("709681"),
        O = E("50885"),
        A = E("49111");
    let R = S.isPlatformEmbedded && (0, S.isWindows)(),
        l = R && 10 > parseFloat(a.default.os.release),
        u = !0;
    if (R && !l) {
        let [e, , _] = a.default.os.release.split(".");
        u = parseInt(e) > 10 || parseInt(_) >= 15063
    }
    let L = R && u || "Chrome" === i.name && 47 > parseFloat(i.version) || "Firefox" === i.name && 52 > parseFloat(i.version),
        C = n.throttle(N.playSound, 1e3, {
            leading: !0
        });

    function D() {
        O.default.flashFrame(!1)
    }
    R && (window.addEventListener("focus", D), O.default.on("MAIN_WINDOW_FOCUS", D));
    let Notification = window.Notification;
    if (l) {
        let e = {};
        O.default.on("NOTIFICATION_CLICK", (_, E) => {
            let t = e[E];
            null != t && (t.onclick(), t.close())
        }), O.default.send("NOTIFICATIONS_CLEAR"), (t = class {
            static requestPermission(e) {
                e()
            }
            close() {
                null != e[this.id] && (delete e[this.id], O.default.send("NOTIFICATION_CLOSE", this.id), this.onclose())
            }
            constructor(_, {
                body: E,
                icon: t
            }) {
                this.id = Notification._id++, this.onshow = function() {}, this.onclick = function() {}, this.onclose = function() {}, this.title = _, this.body = E, this.icon = t, setImmediate(() => this.onshow()), e[this.id] = this, O.default.send("NOTIFICATION_SHOW", {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                })
            }
        }).permission = "granted", t._id = 0, Notification = t
    }

    function c() {
        return null != Notification && "granted" === Notification.permission
    }

    function d(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        e.includes("message") ? C(e, _) : (0, N.playSound)(e, _)
    }

    function U(e) {
        return s.default.disableNotifications && null == e.overrideStreamerMode || !c() || S.isPlatformEmbedded && !O.default.shouldDisplayNotifications()
    }
    var M = {
        hasPermission: c,
        requestPermission: function(e) {
            null != Notification && Notification.requestPermission(() => {
                null != e && e(c())
            })
        },
        showNotification: function(e, _, E, t, o) {
            var r, i, a, s;
            let N;
            if (U(o)) {
                null != o.sound && !1 !== o.playSoundIfDisabled && d(o.sound, null !== (i = o.volume) && void 0 !== i ? i : 1);
                return
            }
            null != o.sound && d(o.sound, null !== (a = o.volume) && void 0 !== a ? a : 1);
            let l = null !== (s = null == o ? void 0 : o.tag) && void 0 !== s ? s : null;
            (0, S.isLinux)() && (E = n.escape(E));
            let C = {
                icon: e,
                body: E,
                tag: l,
                silent: !0
            };
            R && I.default.taskbarFlash && O.default.flashFrame(!0);
            try {
                N = new Notification(_, C)
            } catch (e) {
                return null
            }
            return (null === (r = o.onShown) || void 0 === r || r.call(o), !o.omitViewTracking && T.default.track(A.AnalyticEvents.NOTIFICATION_VIEWED, t), N.onclick = () => {
                var e;
                S.isPlatformEmbedded ? O.default.focus() : (window.focus(), N.close()), !o.omitClickTracking && T.default.track(A.AnalyticEvents.NOTIFICATION_CLICKED, t), null === (e = o.onClick) || void 0 === e || e.call(o)
            }, L && setTimeout(() => N.close(), 5e3), u) ? N : {
                close() {
                    var e;
                    null == N || null === (e = N.onclose) || void 0 === e || e.call(N)
                }
            }
        },
        disabled: U
    }
}