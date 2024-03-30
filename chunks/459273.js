function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComponentAction: function() {
            return _
        },
        ComponentDispatchGroupContext: function() {
            return l
        },
        ComponentDispatchGroupProvider: function() {
            return u
        },
        useComponentAction: function() {
            return d
        }
    }), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("836560"),
        a = n("585483");
    class o {
        subscribe(e, t) {
            a.ComponentDispatch.subscribe(e, t), this.emitter.on(e, t)
        }
        unsubscribe(e, t) {
            a.ComponentDispatch.unsubscribe(e, t), this.emitter.off(e, t)
        }
        bumpDispatchPriority() {
            for (let e of this.emitter.eventNames())
                for (let t of this.emitter.listeners(e)) a.ComponentDispatch.resubscribe(e, t)
        }
        constructor() {
            var e, t, n;
            e = this, t = "emitter", n = new s.EventEmitter, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
    let l = r.createContext(new class e {
            subscribe(e, t) {
                a.ComponentDispatch.subscribe(e, t)
            }
            unsubscribe(e, t) {
                a.ComponentDispatch.unsubscribe(e, t)
            }
            bumpDispatchPriority() {}
        }),
        u = r.forwardRef(function(e, t) {
            let {
                children: n
            } = e, s = r.useRef(null);

            function a() {
                return null === s.current && (s.current = new o), s.current
            }
            return r.useImperativeHandle(t, a), (0, i.jsx)(l.Provider, {
                value: a(),
                children: n
            })
        });

    function d(e) {
        let {
            event: t,
            handler: n
        } = e, i = r.useContext(l), s = r.useRef(n);
        r.useEffect(() => {
            s.current = n
        }, [n]);
        let a = null == n;
        return r.useEffect(() => {
            if (a) return;
            let e = function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                null === (e = s.current) || void 0 === e || e.call(s, ...n)
            };
            return i.subscribe(t, e), () => {
                i.unsubscribe(t, e)
            }
        }, [i, t, a]), null
    }

    function _(e) {
        return d(e), null
    }
}