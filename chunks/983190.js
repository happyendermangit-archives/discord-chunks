function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("49657"),
        i = n("275373");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(_, e);
        var t, n, l, c, f, d = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = u(t);
            if (n) {
                var a = u(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function _() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), d.apply(this, arguments)
        }
        return l = _, c = [{
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.src,
                    n = e.fileSize,
                    a = e.fileName,
                    u = e.className,
                    s = e.playable,
                    l = e.volume,
                    c = e.renderLinkComponent,
                    f = e.onVolumeChange,
                    d = e.onVolumeShow,
                    _ = e.onVolumeHide,
                    E = e.autoMute,
                    p = e.onMute,
                    m = e.mimeType,
                    y = e.onPlay;
                return r.createElement(i.default, {
                    src: t,
                    fileName: a,
                    fileSize: (0, o.sizeString)(n),
                    fileSizeBytes: n,
                    type: i.default.Types.AUDIO,
                    className: u,
                    playable: s,
                    volume: l,
                    onMute: p,
                    autoMute: E,
                    onVolumeChange: f,
                    onVolumeShow: d,
                    onVolumeHide: _,
                    renderLinkComponent: c,
                    mimeType: m,
                    onPlay: y
                })
            }
        }], a(l.prototype, c), f && a(l, f), _
    }(r.PureComponent)
}