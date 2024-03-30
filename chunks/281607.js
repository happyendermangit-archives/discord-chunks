function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("585949"),
        u = n("550168"),
        s = n("650655"),
        l = n("235434"),
        c = n("839433"),
        f = n("575098"),
        d = n("433073"),
        _ = n("358425"),
        E = n("941504"),
        p = n("429851");

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function y(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function I() {
        var e = (0, o.useStateFromStores)([f.default], function() {
                return f.default.getBroadcast()
            }),
            t = (0, u.useGetOrFetchApplication)(null == e ? void 0 : e.applicationId);
        if (null == e) return null;
        var n = function() {
                (0, c.openBroadcastingPrivacySettingsModal)()
            },
            I = function() {
                (0, s.stopBroadcast)(), a.default.disconnect()
            };
        return r.createElement("div", {
            className: p.container
        }, null != t && r.createElement(d.default, {
            game: t,
            size: d.default.Sizes.LARGE
        }), r.createElement("div", {
            className: p.content
        }, r.createElement(i.Text, {
            variant: "text-md/semibold",
            color: "header-primary"
        }, E.default.Messages.BROADCASTING_CAPTURE_PAUSED), r.createElement(i.Text, {
            variant: "text-sm/medium",
            color: "header-secondary"
        }, E.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS), r.createElement("div", {
            className: p.actions
        }, r.createElement(i.Tooltip, {
            text: E.default.Messages.BROADCASTING_SETTINGS
        }, function(e) {
            return r.createElement(i.Clickable, y(m({}, e), {
                onClick: n
            }), r.createElement(_.default, {
                className: p.button,
                width: 20,
                height: 20
            }))
        }), r.createElement(i.Tooltip, {
            text: E.default.Messages.STOP_BROADCASTING
        }, function(e) {
            return r.createElement(i.Clickable, y(m({}, e), {
                onClick: I
            }), r.createElement(l.default, {
                className: p.button,
                width: 20,
                height: 20
            }))
        }))))
    }
}