function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("898511"),
        a = n("547819"),
        u = n("632142"),
        s = n("224680"),
        l = n("276757"),
        c = n("423731"),
        f = n("798206"),
        d = n("444665"),
        _ = n("935741"),
        E = n("640305"),
        p = n("290976"),
        m = n("830863"),
        y = n("162677"),
        I = n("281767"),
        h = n("698007");

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var A = (S(r = {}, I.PictureInPictureComponents.VIDEO, d.default), S(r, I.PictureInPictureComponents.EMBED_IFRAME, l.default), r),
        b = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && g(e, t)
            }(l, e);
            var t, n, r, i, u, s = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = v(t);
                if (n) {
                    var a = v(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : O(e)
            });

            function l() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), e = s.apply(this, arguments), S(O(e), "handleWindowMove", function(e, t) {
                    a.moveTo(e, t)
                }), e
            }
            return r = l, i = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.selectedPIPWindow,
                        n = e.pipWindows,
                        r = e.maxX,
                        i = e.maxY,
                        a = e.theme,
                        u = e.dockedRect,
                        s = e.appContext,
                        l = e.roundCorners;
                    return o.createElement(m.default, {
                        pictureInPictureComponents: A,
                        selectedPIPWindow: t,
                        pipWindows: n,
                        maxX: r,
                        maxY: i,
                        dockedRect: u,
                        theme: a,
                        onWindowMove: this.handleWindowMove,
                        appContext: s,
                        roundCorners: l
                    })
                }
            }], T(r.prototype, i), u && T(r, u), l
        }(o.PureComponent);
    t.default = i.default.connectStores([c.default, u.default, p.default, f.default, _.default, E.default], function(e) {
        var t, n, r, o, i = e.showInPopoutWindow,
            a = void 0 !== i && i,
            l = e.disallowTextActivity,
            d = void 0 !== l && l,
            m = c.default.getWindowOpen(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
            O = u.default.getCurrentEmbeddedActivity(),
            T = null != O && !(0, s.default)(O.channelId, _.default),
            S = u.default.getActivityPanelMode(),
            v = null != O && T && S === h.ActivityPanelModes.PANEL,
            g = p.default.windowSize();
        if (m && (d && v || !v)) {
            var A = c.default.getWindow(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
            g = null == A ? g : {
                width: A.innerWidth,
                height: A.innerHeight
            }
        }
        var b = void 0;
        !d && v ? b = I.AppContext.APP : a && (b = I.AppContext.POPOUT), t = d && T ? null : T || !m || a ? null != O && S === h.ActivityPanelModes.PANEL && T ? null !== (n = E.default.pipActivityWindow) && void 0 !== n ? n : E.default.pipVideoWindow : null !== (r = E.default.pipVideoWindow) && void 0 !== r ? r : E.default.pipActivityWindow : null;
        var N = Array.from(E.default.pipWindows.values());
        return {
            selectedPIPWindow: t,
            pipWindows: [N.find(function(e) {
                return e.component === I.PictureInPictureComponents.VIDEO
            }), N.find(function(e) {
                return e.component === I.PictureInPictureComponents.EMBED_IFRAME
            })].filter(y.isNotNullish),
            maxX: g.width,
            maxY: g.height,
            theme: f.default.theme,
            dockedRect: E.default.getDockedRect(null !== (o = null == t ? void 0 : t.id) && void 0 !== o ? o : ""),
            appContext: b,
            roundCorners: !0
        }
    })(b)
}