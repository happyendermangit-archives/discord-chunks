function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    "undefined" != typeof window ? i = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), i = void 0) : i = self;
    var i, a = n("606419"),
        o = n("164390"),
        s = n("993588"),
        u = n("50844"),
        c = n("5919"),
        l = n("526239");

    function d() {}
    e.exports = function(e, n) {
        return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
    };
    var f = t = e.exports;
    t.Request = b, f.getXHR = function() {
        if (i.XMLHttpRequest && (!i.location || "file:" !== i.location.protocol || !i.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        throw Error("Browser-only version of superagent could not find XHR")
    };
    var p = "".trim ? function(e) {
        return e.trim()
    } : function(e) {
        return e.replace(/(^\s*|\s*$)/g, "")
    };

    function h(e) {
        if (!u(e)) return e;
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && function e(t, n, r) {
            if (void 0 !== r) {
                if (null === r) {
                    t.push(encodeURIComponent(n));
                    return
                }
                if (Array.isArray(r)) r.forEach(function(r) {
                    e(t, n, r)
                });
                else if (u(r))
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && e(t, "".concat(n, "[").concat(i, "]"), r[i]);
                else t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r))
            }
        }(t, n, e[n]);
        return t.join("&")
    }

    function m(e) {
        for (var t, n, r = {}, i = e.split("&"), a = 0, o = i.length; a < o; ++a) - 1 === (n = (t = i[a]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
        return r
    }
    f.serializeObject = h, f.parseString = m, f.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, f.serialize = {
        "application/x-www-form-urlencoded": h,
        "application/json": o
    }, f.parse = {
        "application/x-www-form-urlencoded": m,
        "application/json": JSON.parse
    };

    function g(e) {
        return /[/+]json($|[^-\w])/.test(e)
    }

    function _(e) {
        this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
        var t = this.xhr.status;
        1223 === t && (t = 204), this._setStatusProperties(t), this.headers = function(e) {
            for (var t, n, r, i, a = e.split(/\r?\n/), o = {}, s = 0, u = a.length; s < u; ++s) - 1 !== (t = (n = a[s]).indexOf(":")) && (r = n.slice(0, t).toLowerCase(), i = p(n.slice(t + 1)), o[r] = i);
            return o
        }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
    }

    function b(e, t) {
        var n = this;
        this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
            var e, t = null,
                r = null;
            try {
                r = new _(n)
            } catch (e) {
                return (t = Error("Parser is unable to parse the response")).parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
            }
            n.emit("response", r);
            try {
                !n._isResponseOK(r) && (e = Error(r.statusText || "Unsuccessful HTTP response"))
            } catch (t) {
                e = t
            }
            e ? (e.original = t, e.response = r, e.status = r.status, n.callback(e, r)) : n.callback(null, r)
        })
    }

    function v(e, t, n) {
        var r = f("DELETE", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
    c(_.prototype), _.prototype._parseBody = function(e) {
        var t = f.parse[this.type];
        return this.req._parser ? this.req._parser(this, e) : (!t && g(this.type) && (t = f.parse["application/json"]), t && e && (e.length > 0 || e instanceof Object) ? t(e) : null)
    }, _.prototype.toError = function() {
        var e = this.req,
            t = e.method,
            n = e.url,
            r = Error("cannot ".concat(t, " ").concat(n, " (").concat(this.status, ")"));
        return r.status = this.status, r.method = t, r.url = n, r
    }, f.Response = _, a(b.prototype), s(b.prototype), b.prototype.type = function(e) {
        return this.set("Content-Type", f.types[e] || e), this
    }, b.prototype.accept = function(e) {
        return this.set("Accept", f.types[e] || e), this
    }, b.prototype.auth = function(e, t, n) {
        return 1 == arguments.length && (t = ""), "object" === r(t) && null !== t && (n = t, t = ""), !n && (n = {
            type: "function" == typeof btoa ? "basic" : "auto"
        }), this._auth(e, t, n, function(e) {
            if ("function" == typeof btoa) return btoa(e);
            throw Error("Cannot use basic auth, btoa is not a function")
        })
    }, b.prototype.query = function(e) {
        return "string" != typeof e && (e = h(e)), e && this._query.push(e), this
    }, b.prototype.attach = function(e, t, n) {
        if (t) {
            if (this._data) throw Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, t, n || t.name)
        }
        return this
    }, b.prototype._getFormData = function() {
        return !this._formData && (this._formData = new i.FormData), this._formData
    }, b.prototype.callback = function(e, t) {
        if (this._shouldRetry(e, t)) return this._retry();
        var n = this._callback;
        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
    }, b.prototype.crossDomainError = function() {
        var e = Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
    }, b.prototype.agent = function() {
        return console.warn("This is not supported in browser version of superagent"), this
    }, b.prototype.buffer = b.prototype.ca, b.prototype.ca = b.prototype.agent, b.prototype.write = function() {
        throw Error("Streaming is not supported in browser version of superagent")
    }, b.prototype.pipe = b.prototype.write, b.prototype._isHost = function(e) {
        return e && "object" === r(e) && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
    }, b.prototype.end = function(e) {
        this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || d, this._finalizeQueryString(), this._end()
    }, b.prototype._setUploadTimeout = function() {
        var e = this;
        this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(function() {
            e._timeoutError("Upload timeout of ", e._uploadTimeout, "ETIMEDOUT")
        }, this._uploadTimeout))
    }, b.prototype._end = function() {
        if (this._aborted) return this.callback(Error("The request has been aborted even before .end() was called"));
        var e = this;
        this.xhr = f.getXHR();
        var t = this.xhr,
            n = this._formData || this._data;
        this._setTimeouts(), t.onreadystatechange = function() {
            var n, r = t.readyState;
            if (r >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === r) {
                try {
                    n = t.status
                } catch (e) {
                    n = 0
                }
                if (!n) {
                    if (e.timedout || e._aborted) return;
                    return e.crossDomainError()
                }
                e.emit("end")
            }
        };
        var r = function(t, n) {
            n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)), n.direction = t, e.emit("progress", n)
        };
        if (this.hasListeners("progress")) try {
            t.addEventListener("progress", r.bind(null, "download")), t.upload && t.upload.addEventListener("progress", r.bind(null, "upload"))
        } catch (e) {}
        t.upload && this._setUploadTimeout();
        try {
            this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
        } catch (e) {
            return this.callback(e)
        }
        if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
            var i = this._header["content-type"],
                a = this._serializer || f.serialize[i ? i.split(";")[0] : ""];
            !a && g(i) && (a = f.serialize["application/json"]), a && (n = a(n))
        }
        for (var o in this.header) null !== this.header[o] && Object.prototype.hasOwnProperty.call(this.header, o) && t.setRequestHeader(o, this.header[o]);
        this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 === n ? null : n)
    }, f.agent = function() {
        return new l
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(e) {
        l.prototype[e.toLowerCase()] = function(t, n) {
            var r = new f.Request(e, t);
            return this._setDefaults(r), n && r.end(n), r
        }
    }), l.prototype.del = l.prototype.delete, f.get = function(e, t, n) {
        var r = f("GET", e);
        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, f.head = function(e, t, n) {
        var r = f("HEAD", e);
        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, f.options = function(e, t, n) {
        var r = f("OPTIONS", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, f.del = v, f.delete = v, f.patch = function(e, t, n) {
        var r = f("PATCH", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, f.post = function(e, t, n) {
        var r = f("POST", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, f.put = function(e, t, n) {
        var r = f("PUT", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
}