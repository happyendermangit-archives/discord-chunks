function(e, t, n) {
    "use strict";
    n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("115278"), n("70102"), n("222007"), n("370692"), n("667500"), n("453061"), n("477315"), n("527135"), n("426094"), n("332822"), n("659510"), n("990131"), n("781738");
    var r = n("561207"),
        a = n("260842"),
        o = n("290619"),
        i = n("692432"),
        s = n("344769"),
        u = n("103861"),
        l = n("290134"),
        c = Function,
        d = function(e) {
            try {
                return c('"use strict"; return (' + e + ").constructor;")()
            } catch (e) {}
        },
        f = Object.getOwnPropertyDescriptor;
    if (f) try {
        f({}, "")
    } catch (e) {
        f = null
    }
    var p = function() {
            throw new u
        },
        m = f ? function() {
            try {
                return arguments.callee, p
            } catch (e) {
                try {
                    return f(arguments, "callee").get
                } catch (e) {
                    return p
                }
            }
        }() : p,
        h = n("923771")(),
        y = n("306858")(),
        _ = Object.getPrototypeOf || (y ? function(e) {
            return e.__proto__
        } : null),
        g = {},
        v = "undefined" != typeof Uint8Array && _ ? _(Uint8Array) : void 0,
        b = {
            __proto__: null,
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": h && _ ? _([][Symbol.iterator]()) : void 0,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": g,
            "%AsyncGenerator%": g,
            "%AsyncGeneratorFunction%": g,
            "%AsyncIteratorPrototype%": g,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array,
            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": r,
            "%eval%": eval,
            "%EvalError%": a,
            "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
            "%Function%": c,
            "%GeneratorFunction%": g,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": h && _ ? _(_([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && h && _ ? _(new Map()[Symbol.iterator]()) : void 0,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": o,
            "%ReferenceError%": i,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && h && _ ? _(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": h && _ ? _("" [Symbol.iterator]()) : void 0,
            "%Symbol%": h ? Symbol : void 0,
            "%SyntaxError%": s,
            "%ThrowTypeError%": m,
            "%TypedArray%": v,
            "%TypeError%": u,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%URIError%": l,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
        };
    if (_) try {
        null.error
    } catch (e) {
        var M = _(_(e));
        b["%Error.prototype%"] = M
    }
    var w = function e(t) {
            var n;
            if ("%AsyncFunction%" === t) n = d("async function () {}");
            else if ("%GeneratorFunction%" === t) n = d("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t) n = d("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype)
            } else if ("%AsyncIteratorPrototype%" === t) {
                var a = e("%AsyncGenerator%");
                a && _ && (n = _(a.prototype))
            }
            return b[t] = n, n
        },
        k = {
            __proto__: null,
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        L = n("459078"),
        D = n("386208"),
        T = L.call(Function.call, Array.prototype.concat),
        S = L.call(Function.apply, Array.prototype.splice),
        Y = L.call(Function.call, String.prototype.replace),
        x = L.call(Function.call, String.prototype.slice),
        O = L.call(Function.call, RegExp.prototype.exec),
        E = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        P = /\\(\\)?/g,
        j = function(e) {
            var t = x(e, 0, 1),
                n = x(e, -1);
            if ("%" === t && "%" !== n) throw new s("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t) throw new s("invalid intrinsic syntax, expected opening `%`");
            var r = [];
            return Y(e, E, function(e, t, n, a) {
                r[r.length] = n ? Y(a, P, "$1") : t || e
            }), r
        },
        C = function(e, t) {
            var n, r = e;
            if (D(k, r) && (r = "%" + (n = k[r])[0] + "%"), D(b, r)) {
                var a = b[r];
                if (a === g && (a = w(r)), void 0 === a && !t) throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: n,
                    name: r,
                    value: a
                }
            }
            throw new s("intrinsic " + e + " does not exist!")
        };
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new u("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new u('"allowMissing" argument must be a boolean');
        if (null === O(/^%?[^%]*%?$/, e)) throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = j(e),
            r = n.length > 0 ? n[0] : "",
            a = C("%" + r + "%", t),
            o = a.name,
            i = a.value,
            l = !1,
            c = a.alias;
        c && (r = c[0], S(n, T([0, 1], c)));
        for (var d = 1, p = !0; d < n.length; d += 1) {
            var m = n[d],
                h = x(m, 0, 1),
                y = x(m, -1);
            if (('"' === h || "'" === h || "`" === h || '"' === y || "'" === y || "`" === y) && h !== y) throw new s("property names with quotes must have matching quotes");
            if (("constructor" === m || !p) && (l = !0), r += "." + m, D(b, o = "%" + r + "%")) i = b[o];
            else if (null != i) {
                if (!(m in i)) {
                    if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (f && d + 1 >= n.length) {
                    var _ = f(i, m);
                    i = (p = !!_) && "get" in _ && !("originalValue" in _.get) ? _.get : i[m]
                } else p = D(i, m), i = i[m];
                p && !l && (b[o] = i)
            }
        }
        return i
    }
}