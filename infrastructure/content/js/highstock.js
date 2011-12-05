/*
 Highstock JS v1.0.2 (2011-11-08)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function () {
    function aa(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }
    function Qb() {
        for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++) d[b[a++]] = b[a];
        return d
    }
    function ga(a, b) {
        return parseInt(a, b || 10)
    }
    function Fc(a) {
        return typeof a === "string"
    }
    function qc(a) {
        return typeof a === "object"
    }
    function rd(a) {
        return typeof a === "number"
    }
    function Qc(a) {
        return xa.log(a) / xa.LN10
    }
    function Rc(a, b) {
        for (var c = a.length; c--;) if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }
    function P(a) {
        return a !== la && a !== null
    }
    function Pa(a, b, c) {
        var d, e;
        if (Fc(b)) if (P(c)) a.setAttribute(b, c);
        else {
            if (a && a.getAttribute) e = a.getAttribute(b)
        } else if (P(b) && qc(b)) for (d in b) a.setAttribute(d, b[d]);
        return e
    }
    function rc(a) {
        return Object.prototype.toString.call(a) === "[object Array]" ? a : [a]
    }
    function A() {
        var a = arguments,
            b, c, d = a.length;
        for (b = 0; b < d; b++) {
            c = a[b];
            if (typeof c !== "undefined" && c !== null) return c
        }
    }
    function Ja(a, b) {
        if (sd) if (b && b.opacity !== la) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        aa(a.style, b)
    }
    function qb(a, b, c, d, e) {
        a = za.createElement(a);
        b && aa(a, b);
        e && Ja(a, {
            padding: 0,
            border: Ib,
            margin: 0
        });
        c && Ja(a, c);
        d && d.appendChild(a);
        return a
    }
    function Ab(a, b) {
        var c = function () {};
        c.prototype = new a;
        aa(c.prototype, b);
        return c
    }
    function td(a, b, c, d) {
        var e = cb.lang;
        a = a;
        var f = isNaN(b = rb(b)) ? 2 : b;
        b = c === undefined ? e.decimalPoint : c;
        d = d === undefined ? e.thousandsSep : d;
        e = a < 0 ? "-" : "";
        c = String(ga(a = rb(+a || 0).toFixed(f)));
        var g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + rb(a - c).toFixed(f).slice(2) : "")
    }
    function ge(a) {
        var b = {
            left: a.offsetLeft,
            top: a.offsetTop
        };
        for (a = a.offsetParent; a;) {
            b.left += a.offsetLeft;
            b.top += a.offsetTop;
            if (a !== za.body && a !== za.documentElement) {
                b.left -= a.scrollLeft;
                b.top -= a.scrollTop
            }
            a = a.offsetParent
        }
        return b
    }
    function he(a, b, c, d) {
        var e;
        c = A(c, 1);
        e = a / c;
        if (!b) {
            b = [1, 2, 2.5, 5, 10];
            if (d && (d.allowDecimals === false || d.type === "logarithmic")) if (c === 1) b = [1, 2, 5, 10];
            else if (c <= 0.1) b = [1 / c]
        }
        for (d = 0; d < b.length; d++) {
            a = b[d];
            if (e <= (b[d] + (b[d + 1] || b[d])) / 2) break
        }
        a *= c;
        return a
    }
    function ie(a, b, c, d, e) {
        var f = [],
            g = cb.global.useUTC,
            h = e || [
                [cd, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                [Sc, [1, 2, 5, 10, 15, 30]],
                [Gc, [1, 2, 5, 10, 15, 30]],
                [Hc, [1, 2, 3, 4, 6, 8, 12]],
                [Zb, [1, 2]],
                [sc, [1, 2]],
                [tc, [1, 2, 3, 4, 6]],
                [hc, null]
            ],
            k = h[h.length - 1],
            i = Ta[k[0]],
            j = k[1];
        for (e = 0; e < h.length; e++) {
            k = h[e];
            i = Ta[k[0]];
            j = k[1];
            if (h[e + 1]) if (a <= (i * j[j.length - 1] + Ta[h[e + 1][0]]) / 2) break
        }
        if (i === Ta[hc] && a < 5 * i) j = [1, 2, 5];
        a = he(a / i, j);
        var l;
        b = new Date(b);
        b.setMilliseconds(0);
        if (i >= Ta[Sc]) b.setSeconds(i >= Ta[Gc] ? 0 : a * Jb(b.getSeconds() / a));
        if (i >= Ta[Gc]) b[je](i >= Ta[Hc] ? 0 : a * Jb(b[Md]() / a));
        if (i >= Ta[Hc]) b[ke](i >= Ta[Zb] ? 0 : a * Jb(b[Nd]() / a));
        if (i >= Ta[Zb]) b[Od](i >= Ta[tc] ? 1 : a * Jb(b[dd]() / a));
        if (i >= Ta[tc]) {
            b[le](i >= Ta[hc] ? 0 : a * Jb(b[ud]() / a));
            l = b[vd]()
        }
        if (i >= Ta[hc]) {
            l -= l % a;
            b[me](l)
        }
        i === Ta[sc] && b[Od](b[dd]() - b[Pd]() + A(d, 1));
        e = 1;
        l = b[vd]();
        d = b.getTime();
        h = b[ud]();
        for (b = b[dd](); d < c;) {
            f.push(d);
            if (i === Ta[hc]) d = wd(l + e * a, 0);
            else if (i === Ta[tc]) d = wd(l, h + e * a);
            else if (!g && (i === Ta[Zb] || i === Ta[sc])) d = wd(l, h, b + e * a * (i === Ta[Zb] ? 1 : 7));
            else d += i * a;
            e++
        }
        f.push(d);
        f.info = {
            unitName: k[0],
            unitRange: i,
            count: a,
            totalRange: i * a
        };
        return f
    }
    function ne() {
        this.symbol = this.color = 0
    }
    function Le(a, b, c, d, e, f, g, h) {
        var k = g.x;
        g = g.y;
        var i = k - a + c - h,
            j = g - b + d + 15,
            l;
        if (i < 7) i = c + k + h;
        if (i + a > c + e) {
            i -= i + a - (c + e);
            j = g - b + d - h;
            l = true
        }
        if (j < d + 5) {
            j = d + 5;
            if (l && g >= j && g <= j + b) j = g + d + h
        } else if (j + b > d + f) j = d + f - b - h;
        return {
            x: i,
            y: j
        }
    }
    function Me(a, b) {
        var c = a.length,
            d;
        for (d = 0; d < c; d++) a[d].ss_i = d;
        a.sort(function (e, f) {
            var g = b(e, f);
            return g === 0 ? e.ss_i - f.ss_i : g
        });
        for (d = 0; d < c; d++) delete a[d].ss_i
    }
    function ed(a) {
        for (var b in a) {
            a[b] && a[b].destroy && a[b].destroy();
            delete a[b]
        }
    }
    function Tc(a, b) {
        fd = A(a, b.animation)
    }

    function oe() {
        var a = cb.global.useUTC;
        wd = a ? Date.UTC : function (b, c, d, e, f, g) {
            return (new Date(b, c, A(d, 1), A(e, 0), A(f, 0), A(g, 0))).getTime()
        };
        Md = a ? "getUTCMinutes" : "getMinutes";
        Nd = a ? "getUTCHours" : "getHours";
        Pd = a ? "getUTCDay" : "getDay";
        dd = a ? "getUTCDate" : "getDate";
        ud = a ? "getUTCMonth" : "getMonth";
        vd = a ? "getUTCFullYear" : "getFullYear";
        je = a ? "setUTCMinutes" : "setMinutes";
        ke = a ? "setUTCHours" : "setHours";
        Od = a ? "setUTCDate" : "setDate";
        le = a ? "setUTCMonth" : "setMonth";
        me = a ? "setUTCFullYear" : "setFullYear"
    }
    function xd(a) {
        yd || (yd = qb(uc));
        a && yd.appendChild(a);
        yd.innerHTML = ""
    }
    function gd() {}
    function zd(a, b) {
        function c(q) {
            function w(o, v) {
                this.pos = o;
                this.minor = v;
                this.isNew = true;
                v || this.addLabel()
            }
            function F(o) {
                if (o) {
                    this.options = o;
                    this.id = o.id
                }
                return this
            }
            function K(o, v, I, x) {
                this.isNegative = v;
                this.options = o;
                this.x = I;
                this.stack = x;
                this.alignOptions = {
                    align: o.align || (Ca ? v ? "left" : "right" : "center"),
                    verticalAlign: o.verticalAlign || (Ca ? "middle" : v ? "bottom" : "top"),
                    y: A(o.y, Ca ? 4 : v ? 14 : -6),
                    x: A(o.x, Ca ? v ? -6 : 6 : 0)
                };
                this.textAlign = o.textAlign || (Ca ? v ? "right" : "left" : "center")
            }
            function ea() {
                var o = [],
                    v = [],
                    I;
                Kb = Lb = null;
                y(r.series, function (x) {
                    if (x.visible || !n.ignoreHiddenSeries) {
                        var N = x.options,
                            R, ma, ia, Ea, ta, ua, ya, Ua, Ka, $b = N.threshold,
                            ac, gb = [],
                            Rb = 0;
                        if (Aa) {
                            ua = x.xData;
                            Kb = Ha(A(Kb, ua[0]), Ha.apply(xa, ua));
                            Lb = ca(A(Lb, ua[0]), ca.apply(xa, ua))
                        } else {
                            var Qd, Ad, Uc, Ne = x.cropped,
                                pe = x.xAxis.getExtremes(),
                                qe, hd, Oe = !! x.modifyValue;
                            N = N.stacking;
                            Bd = N === "percent";
                            if (N) {
                                Ea = x.options.stack;
                                ia = x.type + A(Ea, "");
                                ta = "-" + ia;
                                x.stackKey = ia;
                                R = o[ia] || [];
                                o[ia] = R;
                                ma = v[ta] || [];
                                v[ta] = ma
                            }
                            if (Bd) {
                                Kb = 0;
                                Lb = 99
                            }
                            x.processData();
                            qe = x.pointRange === null;
                            ua = x.processedXData;
                            ya = x.processedYData;
                            ac = ya.length;
                            for (I = 0; I < ac; I++) {
                                Ua = ua[I];
                                Ka = ya[I];
                                if (Ka !== null && Ka !== la && (Ne || (ua[I + 1] || Ua) >= pe.min && (ua[I + 1] || Ua) <= pe.max)) {
                                    if (N) {
                                        Ad = (Qd = Ka < 0) ? ma : R;
                                        Uc = Qd ? ta : ia;
                                        Ka = Ad[Ua] = P(Ad[Ua]) ? Ad[Ua] + Ka : Ka;
                                        va[Uc] || (va[Uc] = {});
                                        va[Uc][Ua] || (va[Uc][Ua] = new K(u.stackLabels, Qd, Ua, Ea));
                                        va[Uc][Ua].setTotal(Ka)
                                    } else if (Oe) Ka = x.modifyValue(Ka);
                                    if (Ua = Ka.length) for (; Ua--;) {
                                        if (Ka[Ua] !== null) gb[Rb++] = Ka[Ua]
                                    } else gb[Rb++] = Ka;
                                    if (I) {
                                        Ka = rb(ua[I] - ua[I - 1]);
                                        hd = hd === la ? Ka : Ha(Ka, hd)
                                    }
                                }
                            }
                            if (qe) x.pointRange = hd || 1;
                            x.closestPointRange = hd;
                            if (!Bd && gb.length) {
                                Kb = Ha(A(Kb, gb[0]), Ha.apply(xa, gb));
                                Lb = ca(A(Lb, gb[0]), ca.apply(xa, gb))
                            }
                            if (x.useThreshold && $b !== null) if (Kb >= $b) {
                                Kb = $b;
                                re = true
                            } else if (Lb < $b) {
                                Lb = $b;
                                se = true
                            }
                        }
                    }
                })
            }
            function S(o) {
                var v;
                v = o;
                Vc = A(Vc, xa.pow(10, Jb(xa.log(sb) / xa.LN10)));
                if (Vc < 1) {
                    v = Q(1 / Vc) * 10;
                    v = Q(o * v) / v
                }
                return v
            }
            function Ma(o) {
                var v, I, x = u.tickInterval,
                    N = u.tickPixelInterval;
                if (o) id = u.maxZoom || (Aa && !P(u.min) && !P(u.max) ? Ha(r.closestPointRange * 5, Lb - Kb) : null);
                if (ic) {
                    v = m[Aa ? "xAxis" : "yAxis"][u.linkedTo];
                    I = v.getExtremes();
                    ja = A(I.min, I.dataMin);
                    oa = A(I.max, I.dataMax)
                } else {
                    ja = A(vc, u.min, Kb);
                    oa = A(wc, u.max, Lb)
                }
                if (V) {
                    ja = Qc(ja);
                    oa = Qc(oa)
                }
                if (Rd) {
                    vc = ja = oa - Rd;
                    wc = oa;
                    if (o) Rd = null
                }
                if (oa - ja < id) {
                    o = (id - oa + ja) / 2;
                    ja = ca(ja - o, A(u.min, ja - o), Kb);
                    oa = Ha(ja + id, A(u.max, ja + id), Lb)
                }
                if (!Fb && !Bd && !ic && P(ja) && P(oa)) {
                    o = oa - ja || 1;
                    if (!P(u.min) && !P(vc) && te && (Kb < 0 || !re)) ja -= o * te;
                    if (!P(u.max) && !P(wc) && ue && (Lb > 0 || !se)) oa += o * ue
                }
                sb = ja === oa || ja === undefined || oa === undefined ? 1 : ic && !x && N === v.options.tickPixelInterval ? v.tickInterval : A(x, Fb ? 1 : (oa - ja) * N / (La || 1));
                if (!T) {
                    Vc = xa.pow(10, Jb(xa.log(sb) / xa.LN10));
                    P(u.tickInterval) || (sb = he(sb, null, Vc, u))
                }
                r.tickInterval = sb;
                Cd = u.minorTickInterval === "auto" && sb ? sb / 5 : u.minorTickInterval;
                if (T) {
                    Ba = ie(sb, ja, oa, u.startOfWeek);
                    Dd = u.dateTimeLabelFormats[Ba.info.unitName]
                } else {
                    x = S(Jb(ja / sb) * sb);
                    v = S(Ed(oa / sb) * sb);
                    Ba = [];
                    for (x = S(x); x <= v;) {
                        Ba.push(x);
                        x = S(x + sb)
                    }
                }
                if (!ic) {
                    v = Ba[0];
                    x = Ba[Ba.length - 1];
                    if (u.startOnTick) ja = v;
                    else ja > v && Ba.shift();
                    if (u.endOnTick) oa = x;
                    else oa < x && Ba.pop();
                    bc || (bc = {
                        x: 0,
                        y: 0
                    });
                    if (!T && Ba.length > bc[Fa] && u.alignTicks !== false) bc[Fa] = Ba.length
                }
            }
            function ha(o) {
                o = (new F(o)).render();
                jc.push(o);
                return o
            }
            function mb() {
                var o = u.title,
                    v = u.stackLabels,
                    I = u.alternateGridColor,
                    x = u.lineWidth,
                    N, R, ma = (N = m.hasRendered) && P(jd) && !isNaN(jd);
                if (r.series.length && P(ja) && P(oa) || ic) {
                    if (Cd && !Fb) for (R = ja + (Ba[0] - ja) % Cd; R <= oa; R += Cd) {
                        xc[R] || (xc[R] = new w(R, true));
                        ma && xc[R].isNew && xc[R].render(null, true);
                        xc[R].isActive = true;
                        xc[R].render()
                    }
                    y(Ba, function (ta, ua) {
                        if (!ic || ta >= ja && ta <= oa) {
                            ma && xb[ta].isNew && xb[ta].render(ua, true);
                            xb[ta].isActive = true;
                            xb[ta].render(ua)
                        }
                    });
                    I && y(Ba, function (ta, ua) {
                        if (ua % 2 === 0 && ta < oa) {
                            Ic[ta] || (Ic[ta] = new F);
                            Ic[ta].options = {
                                from: ta,
                                to: Ba[ua + 1] !== la ? Ba[ua + 1] : oa,
                                color: I
                            };
                            Ic[ta].render();
                            Ic[ta].isActive = true
                        }
                    });
                    N || y((u.plotLines || []).concat(u.plotBands || []), function (ta) {
                        jc.push((new F(ta)).render())
                    })
                }
                y([xb, xc, Ic], function (ta) {
                    for (var ua in ta) if (ta[ua].isActive) ta[ua].isActive = false;
                    else {
                        ta[ua].destroy();
                        delete ta[ua]
                    }
                });
                if (x) {
                    N = Bb + (Va ? pa : 0) + U;
                    R = Qa - Da - (Va ? ka : 0) + U;
                    N = qa.crispLine([Wa, $ ? Bb : N, $ ? R : O, Ia, $ ? Xa - db : N, $ ? R : Qa - Da], x);
                    if (cc) cc.animate({
                        d: N
                    });
                    else cc = qa.path(N).attr({
                        stroke: u.lineColor,
                        "stroke-width": x,
                        zIndex: 7
                    }).add()
                }
                if (t) {
                    N = $ ? Bb : O;
                    x = ga(o.style.fontSize || 12);
                    N = {
                        low: N + ($ ? 0 : La),
                        middle: N + La / 2,
                        high: N + ($ ? La : 0)
                    }[o.align];
                    x = ($ ? O + ka : Bb) + ($ ? 1 : -1) * (Va ? -1 : 1) * Sd + (Ra === 2 ? x : 0);
                    t[t.isNew ? "attr" : "animate"]({
                        x: $ ? N : x + (Va ? pa : 0) + U + (o.x || 0),
                        y: $ ? x - (Va ? ka : 0) + U : N + (o.y || 0)
                    });
                    t.isNew = false
                }
                if (v && v.enabled) {
                    var ia, Ea;
                    v = r.stackTotalGroup;
                    if (!v) r.stackTotalGroup = v = qa.g("stack-labels").attr({
                        visibility: Mb,
                        zIndex: 6
                    }).translate(fa, na).add();
                    for (ia in va) {
                        o = va[ia];
                        for (Ea in o) o[Ea].render(v)
                    }
                }
                r.isDirty = false
            }
            function Ya(o) {
                for (var v = jc.length; v--;) jc[v].id === o && jc[v].destroy()
            }
            var Aa = q.isX,
                Va = q.opposite,
                $ = Ca ? !Aa : Aa,
                Ra = $ ? Va ? 0 : 2 : Va ? 1 : 3,
                va = {},
                u = X(Aa ? Fd : Td, [Pe, Qe, ve, Re][Ra], q),
                r = this,
                t, M = u.type,
                T = M === "datetime",
                V = M === "logarithmic",
                U = u.offset || 0,
                Fa = Aa ? "x" : "y",
                La = 0,
                ib, Gb, kc, Gd, Bb, O, pa, ka, Da, db, Za, eb, lc, Jc, cc, Kb, Lb, id, Rd = u.range,
                vc, wc, we, xe, oa = null,
                ja = null,
                jd, ye, te = u.minPadding,
                ue = u.maxPadding,
                ze = 0,
                ic = P(u.linkedTo),
                re, se, Bd;
            M = u.events;
            var Ud, jc = [],
                sb, Cd, Vc, Ba, xb = {},
                xc = {},
                Ic = {},
                Wc, Xc, Sd, Dd, Fb = u.categories,
                Se = u.labels.formatter ||
            function () {
                var o = this.value;
                return Dd ? yc(Dd, o) : sb % 1E6 === 0 ? o / 1E6 + "M" : sb % 1E3 === 0 ? o / 1E3 + "k" : !Fb && o >= 1E3 ? td(o, 0) : o
            }, Hd = $ && u.labels.staggerLines, Kc = u.reversed, Lc = Fb && u.tickmarkPlacement === "between" ? 0.5 : 0;
            w.prototype = {
                attachLabel: function () {
                    var o = this.label;
                    if (o && !this.added) {
                        o.deferUpdateTransform = true;
                        o.add(lc)
                    }
                },
                updateTransformLabel: function () {
                    var o = this.label;
                    if (o) {
                        o.deferUpdateTransform = false;
                        o.updateTransform()
                    }
                },
                computeBBox: function () {
                    var o = this.label,
                        v;
                    if (o) {
                        v = o.getBBox();
                        o.elemWidth = v.width;
                        o.elemHeight = v.height
                    }
                },
                addLabel: function () {
                    var o = this.pos,
                        v = u.labels,
                        I = !(o === ja && !A(u.showFirstLabel, 1) || o === oa && !A(u.showLastLabel, 1)),
                        x = Fb && $ && Fb.length && !v.step && !v.staggerLines && !v.rotation && Ga / Fb.length || !$ && Ga / 2,
                        N = Fb && P(Fb[o]) ? Fb[o] : o,
                        R = this.label;
                    o = Se.call({
                        isFirst: o === Ba[0],
                        isLast: o === Ba[Ba.length - 1],
                        dateTimeLabelFormat: Dd,
                        value: V ? xa.pow(10, N) : N
                    });
                    x = x && {
                        width: ca(1, Q(x - 2 * (v.padding || 10))) + nb
                    };
                    x = aa(x, v.style);
                    if (P(R)) {
                        if (R) R.attr({
                            text: o,
                            visibility: I ? Mb : Cb
                        }).css(x)
                    } else this.label = P(o) && I && v.enabled ? qa.text(o, 0, 0, v.useHTML).attr({
                        align: v.align,
                        rotation: v.rotation
                    }).css(x) : null
                },
                getLabelSize: function () {
                    var o = this.label;
                    return o ? (this.labelBBox = o.getBBox())[$ ? "height" : "width"] : 0
                },
                render: function (o, v) {
                    var I = !this.minor,
                        x = this.label,
                        N = this.pos,
                        R = u.labels,
                        ma = this.gridLine,
                        ia = I ? u.gridLineWidth : u.minorGridLineWidth,
                        Ea = I ? u.gridLineColor : u.minorGridLineColor,
                        ta = I ? u.gridLineDashStyle : u.minorGridLineDashStyle,
                        ua = this.mark,
                        ya = I ? u.tickLength : u.minorTickLength,
                        Ua = I ? u.tickWidth : u.minorTickWidth || 0,
                        Ka = I ? u.tickColor : u.minorTickColor,
                        $b = I ? u.tickPosition : u.minorTickPosition,
                        ac = R.step,
                        gb = v && Mc || Qa,
                        Rb;
                    Rb = $ ? Za(N + Lc, null, null, v) + kc : Bb + U + (Va ? (v && Yc || Xa) - db - Bb : 0);
                    gb = $ ? gb - Da + U - (Va ? ka : 0) : gb - Za(N + Lc, null, null, v) - kc;
                    if (ia) {
                        N = eb(N + Lc, ia, v);
                        if (ma === la) {
                            ma = {
                                stroke: Ea,
                                "stroke-width": ia
                            };
                            if (ta) ma.dashstyle = ta;
                            if (I) ma.zIndex = 1;
                            this.gridLine = ma = ia ? qa.path(N).attr(ma).add(Jc) : null
                        }!v && ma && N && ma.animate({
                            d: N
                        })
                    }
                    if (Ua) {
                        if ($b === "inside") ya = -ya;
                        if (Va) ya = -ya;
                        I = qa.crispLine([Wa, Rb, gb, Ia, Rb + ($ ? 0 : -ya), gb + ($ ? ya : 0)], Ua);
                        if (ua) ua.animate({
                            d: I
                        });
                        else this.mark = qa.path(I).attr({
                            stroke: Ka,
                            "stroke-width": Ua
                        }).add(lc)
                    }
                    if (x && !isNaN(Rb)) {
                        Rb = Rb + R.x - (Lc && $ ? Lc * Gb * (Kc ? -1 : 1) : 0);
                        gb = gb + R.y - (Lc && !$ ? Lc * Gb * (Kc ? 1 : -1) : 0);
                        P(R.y) || (gb += ga(x.styles.lineHeight) * 0.9 - x.getBBox().height / 2);
                        if (Hd) gb += o / (ac || 1) % Hd * 16;
                        if (ac) x[o % ac ? "hide" : "show"]();
                        x[this.isNew ? "attr" : "animate"]({
                            x: Rb,
                            y: gb
                        })
                    }
                    this.isNew = false
                },
                destroy: function () {
                    ed(this)
                }
            };
            F.prototype = {
                render: function () {
                    var o = this,
                        v = o.options,
                        I = v.label,
                        x = o.label,
                        N = v.width,
                        R = v.to,
                        ma = v.from,
                        ia = v.value,
                        Ea, ta = v.dashStyle,
                        ua = o.svgElem,
                        ya = [],
                        Ua, Ka, $b = v.color;
                    Ka = v.zIndex;
                    var ac = v.events;
                    if (V) {
                        ma = Qc(ma);
                        R = Qc(R);
                        ia = Qc(ia)
                    }
                    if (N) {
                        ya = eb(ia, N);
                        v = {
                            stroke: $b,
                            "stroke-width": N
                        };
                        if (ta) v.dashstyle = ta
                    } else if (P(ma) && P(R)) {
                        ma = ca(ma, ja);
                        R = Ha(R, oa);
                        Ea = eb(R);
                        if ((ya = eb(ma)) && Ea) ya.push(Ea[4], Ea[5], Ea[1], Ea[2]);
                        else ya = null;
                        v = {
                            fill: $b
                        }
                    } else return;
                    if (P(Ka)) v.zIndex = Ka;
                    if (ua) if (ya) ua.animate({
                        d: ya
                    }, null, ua.onGetPath);
                    else {
                        ua.hide();
                        ua.onGetPath = function () {
                            ua.show()
                        }
                    } else if (ya && ya.length) {
                        o.svgElem = ua = qa.path(ya).attr(v).add();
                        if (ac) {
                            ta = function (gb) {
                                ua.on(gb, function (Rb) {
                                    ac[gb].apply(o, [Rb])
                                })
                            };
                            for (Ua in ac) ta(Ua)
                        }
                    }
                    if (I && P(I.text) && ya && ya.length && pa > 0 && ka > 0) {
                        I = X({
                            align: $ && Ea && "center",
                            x: $ ? !Ea && 4 : 10,
                            verticalAlign: !$ && Ea && "middle",
                            y: $ ? Ea ? 16 : 10 : Ea ? 6 : -4,
                            rotation: $ && !Ea && 90
                        }, I);
                        if (!x) o.label = x = qa.text(I.text, 0, 0).attr({
                            align: I.textAlign || I.align,
                            rotation: I.rotation,
                            zIndex: Ka
                        }).css(I.style).add();
                        Ea = [ya[1], ya[4], A(ya[6], ya[1])];
                        ya = [ya[2], ya[5], A(ya[7], ya[2])];
                        Ua = Ha.apply(xa, Ea);
                        Ka = Ha.apply(xa, ya);
                        x.align(I, false, {
                            x: Ua,
                            y: Ka,
                            width: ca.apply(xa, Ea) - Ua,
                            height: ca.apply(xa, ya) - Ka
                        });
                        x.show()
                    } else x && x.hide();
                    return o
                },
                destroy: function () {
                    ed(this);
                    Rc(jc, this)
                }
            };
            K.prototype = {
                destroy: function () {
                    ed(this)
                },
                setTotal: function (o) {
                    this.cum = this.total = o
                },
                render: function (o) {
                    var v = this.options.formatter.call(this);
                    if (this.label) this.label.attr({
                        text: v,
                        visibility: Cb
                    });
                    else this.label = m.renderer.text(v, 0, 0).css(this.options.style).attr({
                        align: this.textAlign,
                        rotation: this.options.rotation,
                        visibility: Cb
                    }).add(o)
                },
                setOffset: function (o, v) {
                    var I = this.isNegative,
                        x = r.translate(this.total),
                        N = r.translate(0);
                    N = rb(x - N);
                    var R = m.xAxis[0].translate(this.x) + o,
                        ma = m.plotHeight;
                    I = {
                        x: Ca ? I ? x : x - N : R,
                        y: Ca ? ma - R - v : I ? ma - x - N : ma - x,
                        width: Ca ? N : v,
                        height: Ca ? v : N
                    };
                    this.label && this.label.align(this.alignOptions, null, I).attr({
                        visibility: Mb
                    })
                }
            };
            Za = function (o, v, I, x, N) {
                var R = 1,
                    ma = 0,
                    ia = x ? Gd : Gb;
                x = x ? jd : ja;
                ia || (ia = Gb);
                if (I) {
                    R *= -1;
                    ma = La
                }
                if (Kc) {
                    R *= -1;
                    ma -= R * La
                }
                if (v) {
                    if (Kc) o = La - o;
                    o = o / ia + x;
                    if (V && N) o = xa.pow(10, o)
                } else {
                    if (V && N) o = Qc(o);
                    o = R * (o - x) * ia + ma + R * ze
                }
                return o
            };
            eb = function (o, v, I) {
                var x, N, R;
                o = Za(o, null, null, I);
                var ma = I && Mc || Qa,
                    ia = I && Yc || Xa,
                    Ea;
                I = N = Q(o + kc);
                x = R = Q(ma - o - kc);
                if (isNaN(o)) Ea = true;
                else if ($) {
                    x = O;
                    R = ma - Da;
                    if (I < Bb || I > Bb + pa) Ea = true
                } else {
                    I = Bb;
                    N = ia - db;
                    if (x < O || x > O + ka) Ea = true
                }
                return Ea ? null : qa.crispLine([Wa, I, x, Ia, N, R], v || 0)
            };
            ob.push(r);
            m[Aa ? "xAxis" : "yAxis"].push(r);
            if (Ca && Aa && Kc === la) Kc = true;
            aa(r, {
                addPlotBand: ha,
                addPlotLine: ha,
                adjustTickAmount: function () {
                    if (bc && bc[Fa] && !T && !Fb && !ic && u.alignTicks !== false) {
                        var o = Wc,
                            v = Ba.length;
                        Wc = bc[Fa];
                        if (v < Wc) {
                            for (; Ba.length < Wc;) Ba.push(S(Ba[Ba.length - 1] + sb));
                            Gb *= (v - 1) / (Wc - 1);
                            oa = Ba[Ba.length - 1]
                        }
                        if (P(o) && Wc !== o) r.isDirty = true
                    }
                },
                categories: Fb,
                getExtremes: function () {
                    return {
                        min: ja,
                        max: oa,
                        dataMin: Kb,
                        dataMax: Lb,
                        userMin: vc,
                        userMax: wc
                    }
                },
                getPlotLinePath: eb,
                getThreshold: function (o) {
                    if (ja > o || o === null) o = ja;
                    else if (oa < o) o = oa;
                    return Za(o, 0, 1)
                },
                isXAxis: Aa,
                options: u,
                plotLinesAndBands: jc,
                getOffset: function () {
                    var o = r.series.length && P(ja) && P(oa),
                        v = 0,
                        I = 0,
                        x = u.title,
                        N = u.labels,
                        R = [-1, 1, 1, -1][Ra],
                        ma;
                    if (!lc) {
                        lc = qa.g("axis").attr({
                            zIndex: 7
                        }).add();
                        Jc = qa.g("grid").attr({
                            zIndex: 1
                        }).add()
                    }
                    Xc = 0;
                    if (o || ic) {
                        y(Ba, function (ia) {
                            if (xb[ia]) xb[ia].addLabel();
                            else xb[ia] = new w(ia)
                        });
                        y(Ba, function (ia) {
                            xb[ia].attachLabel()
                        });
                        y(Ba, function (ia) {
                            xb[ia].computeBBox()
                        });
                        y(Ba, function (ia) {
                            xb[ia].updateTransformLabel()
                        });
                        y(Ba, function (ia) {
                            if (Ra === 0 || Ra === 2 || {
                                1: "left",
                                3: "right"
                            }[Ra] === N.align) Xc = ca(xb[ia].getLabelSize(), Xc)
                        });
                        if (Hd) Xc += (Hd - 1) * 16
                    } else for (ma in xb) {
                        xb[ma].destroy();
                        delete xb[ma]
                    }
                    if (x && x.text) {
                        if (!t) {
                            t = r.axisTitle = qa.text(x.text, 0, 0, x.useHTML).attr({
                                zIndex: 7,
                                rotation: x.rotation || 0,
                                align: x.textAlign || {
                                    low: "left",
                                    middle: "center",
                                    high: "right"
                                }[x.align]
                            }).css(x.style).add();
                            t.isNew = true
                        }
                        v = t.getBBox()[$ ? "height" : "width"];
                        I = A(x.margin, $ ? 5 : 10)
                    }
                    U = R * A(u.offset, pb[Ra]);
                    Sd = Xc + (Ra !== 2 && Xc && R * u.labels[$ ? "y" : "x"]) + I;
                    pb[Ra] = ca(pb[Ra], Sd + v + R * U)
                },
                render: mb,
                setAxisSize: function () {
                    var o = u.offsetLeft || 0,
                        v = u.offsetRight || 0,
                        I = oa - ja,
                        x = 0,
                        N;
                    Bb = A(u.left, fa + o);
                    O = A(u.top, na);
                    pa = A(u.width, Ga - o + v);
                    ka = A(u.height, $a);
                    Da = Qa - ka - O;
                    db = Xa - pa - Bb;
                    La = $ ? pa : ka;
                    if (Aa) {
                        y(r.series, function (R) {
                            x = ca(x, R.pointRange);
                            R.noSharedTooltip || (N = P(N) ? Ha(N, R.closestPointRange) : R.closestPointRange)
                        });
                        if ((P(vc) || P(wc)) && x > sb / 2) x = 0;
                        r.pointRange = x;
                        r.closestPointRange = N
                    }
                    Gb = La / (I + x || 1);
                    kc = $ ? Bb : Da;
                    ze = Gb * (x / 2);
                    r.left = Bb;
                    r.top = O;
                    r.len = La
                },
                setCategories: function (o, v) {
                    r.categories = q.categories = Fb = o;
                    y(r.series, function (I) {
                        I.translate();
                        I.setTooltipPoints(true)
                    });
                    r.isDirty = true;
                    A(v, true) && m.redraw()
                },
                setExtremes: function (o, v, I, x) {
                    I = A(I, true);
                    Na(r, "setExtremes", {
                        min: o,
                        max: v
                    }, function () {
                        vc = o;
                        wc = v;
                        I && m.redraw(x)
                    });
                    Na(r, "afterSetExtremes", {
                        min: ja,
                        max: oa
                    })
                },
                setScale: function () {
                    var o, v, I;
                    jd = ja;
                    ye = oa;
                    ib = La;
                    La = $ ? pa : ka;
                    y(r.series, function (x) {
                        if (x.isDirtyData || x.isDirty || x.xAxis.isDirty) I = true
                    });
                    if (La !== ib || I || ic || vc !== we || wc !== xe) {
                        ea();
                        Ma();
                        we = vc;
                        xe = wc;
                        Gd = Gb;
                        Gb = La / (oa - ja + (r.pointRange || 0) || 1);
                        if (!Aa) for (o in va) for (v in va[o]) va[o][v].cum = va[o][v].total;
                        if (!r.isDirty) r.isDirty = ja !== jd || oa !== ye
                    }
                },
                setTickPositions: Ma,
                translate: Za,
                redraw: function () {
                    Sb.resetTracker && Sb.resetTracker();
                    mb();
                    y(jc, function (o) {
                        o.render()
                    });
                    y(r.series, function (o) {
                        o.isDirty = true
                    })
                },
                removePlotBand: Ya,
                removePlotLine: Ya,
                reversed: Kc,
                series: [],
                stacks: va,
                destroy: function () {
                    var o;
                    Nb(r);
                    for (o in va) {
                        ed(va[o]);
                        va[o] = null
                    }
                    if (r.stackTotalGroup) r.stackTotalGroup = r.stackTotalGroup.destroy();
                    y([xb, xc, Ic, jc], function (v) {
                        ed(v)
                    });
                    y([cc, lc, Jc, t], function (v) {
                        v && v.destroy()
                    });
                    cc = lc = Jc = t = null
                }
            });
            for (Ud in M) ra(r, Ud, M[Ud])
        }
        function d() {
            var q = {};
            return {
                add: function (w, F, K, ea) {
                    if (!q[w]) {
                        F = qa.text(F, 0, 0).css(a.toolbar.itemStyle).align({
                            align: "right",
                            x: -vb - 20,
                            y: na + 30
                        }).on("click", ea).attr({
                            align: "right",
                            zIndex: 20
                        }).add();
                        q[w] = F
                    }
                },
                remove: function (w) {
                    xd(q[w].element);
                    q[w] = null
                }
            }
        }
        function e(q) {
            function w() {
                var u = this.points || rc(this),
                    r = u[0].series,
                    t;
                t = [r.tooltipHeaderFormatter(u[0].key)];
                y(u, function (M) {
                    r = M.series;
                    t.push(r.tooltipFormatter && r.tooltipFormatter(M) || M.point.tooltipFormatter(r.tooltipOptions.pointFormat))
                });
                return t.join("")
            }
            function F(u, r) {
                $ = Va ? u : (2 * $ + u) / 3;
                Ra = Va ? r : (Ra + r) / 2;
                va.attr({
                    x: $,
                    y: Ra
                });
                Vd = rb(u - $) > 1 || rb(r - Ra) > 1 ?
                function () {
                    F(u, r)
                } : null
            }
            function K() {
                if (!Va) {
                    var u = m.hoverPoints;
                    va.hide();
                    y(ha, function (r) {
                        r && r.hide()
                    });
                    u && y(u, function (r) {
                        r.setState()
                    });
                    m.hoverPoints = null;
                    Va = true
                }
            }
            var ea, S = q.borderWidth,
                Ma = q.crosshairs,
                ha = [],
                mb = q.style,
                Ya = q.shared,
                Aa = ga(mb.padding),
                Va = true,
                $ = 0,
                Ra = 0;
            mb.padding = 0;
            var va = qa.label("", 0, 0).attr({
                padding: Aa,
                fill: q.backgroundColor,
                "stroke-width": S,
                r: q.borderRadius,
                zIndex: 8
            }).css(mb).hide().add().shadow(q.shadow);
            return {
                shared: Ya,
                refresh: function (u) {
                    var r, t, M, T, V = {},
                        U = [];
                    M = u.tooltipPos;
                    r = q.formatter || w;
                    V = m.hoverPoints;
                    if (Ya && !(u.series && u.series.noSharedTooltip)) {
                        T = 0;
                        V && y(V, function (Fa) {
                            Fa.setState()
                        });
                        m.hoverPoints = u;
                        y(u, function (Fa) {
                            Fa.setState(Ub);
                            T += Fa.plotY;
                            U.push(Fa.getLabelConfig())
                        });
                        t = u[0].plotX;
                        T = Q(T) / u.length;
                        V = {
                            x: u[0].category
                        };
                        V.points = U;
                        u = u[0]
                    } else V = u.getLabelConfig();
                    V = r.call(V);
                    ea = u.series;
                    t = A(t, u.plotX);
                    T = A(T, u.plotY);
                    r = Q(M ? M[0] : Ca ? Ga - T : t);
                    t = Q(M ? M[1] : Ca ? $a - t : T);
                    M = Ya || !u.series.isCartesian || tb(r, t);
                    if (V === false || !M) K();
                    else {
                        if (Va) {
                            va.show();
                            Va = false
                        }
                        va.attr({
                            text: V
                        });
                        va.attr({
                            stroke: q.borderColor || u.color || ea.color || "#606060"
                        });
                        t = Le(va.width, va.height, fa, na, Ga, $a, {
                            x: r,
                            y: t
                        }, A(q.distance, 12));
                        F(Q(t.x), Q(t.y))
                    }
                    if (Ma) {
                        Ma = rc(Ma);
                        for (t = Ma.length; t--;) {
                            M = u.series[t ? "yAxis" : "xAxis"];
                            if (Ma[t] && M) {
                                M = M.getPlotLinePath(u[t ? "y" : "x"], 1);
                                if (ha[t]) ha[t].attr({
                                    d: M,
                                    visibility: Mb
                                });
                                else {
                                    r = {
                                        "stroke-width": Ma[t].width || 1,
                                        stroke: Ma[t].color || "#C0C0C0",
                                        zIndex: 2
                                    };
                                    if (Ma[t].dashStyle) r.dashstyle = Ma[t].dashStyle;
                                    ha[t] = qa.path(M).attr(r).add()
                                }
                            }
                        }
                    }
                },
                hide: K,
                destroy: function () {
                    y(ha, function (u) {
                        u && u.destroy()
                    });
                    if (va) va = va.destroy()
                }
            }
        }
        function f(q) {
            function w(r) {
                var t, M = Ae && za.width / za.body.scrollWidth - 1,
                    T, V, U;
                r = r || wb.event;
                if (!r.target) r.target = r.srcElement;
                if (r.originalEvent) r = r.originalEvent;
                if (r.event) r = r.event;
                t = r.touches ? r.touches.item(0) : r;
                if (r.type !== "mousemove" || wb.opera || M) {
                    Vb = ge(ba);
                    T = Vb.left;
                    V = Vb.top
                }
                if (sd) {
                    U = r.x;
                    t = r.y
                } else if (t.layerX === la) {
                    U = t.pageX - T;
                    t = t.pageY - V
                } else {
                    U = r.layerX;
                    t = r.layerY
                }
                if (M) {
                    U += Q((M + 1) * T - T);
                    t += Q((M + 1) * V - V)
                }
                return aa(r, {
                    chartX: U,
                    chartY: t
                })
            }
            function F(r) {
                var t = {
                    xAxis: [],
                    yAxis: []
                };
                y(ob, function (M) {
                    var T = M.translate,
                        V = M.isXAxis;
                    t[V ? "xAxis" : "yAxis"].push({
                        axis: M,
                        value: T((Ca ? !V : V) ? r.chartX - fa : $a - r.chartY + na, true)
                    })
                });
                return t
            }
            function K(r) {
                var t, M = m.hoverPoint,
                    T = m.hoverSeries,
                    V, U, Fa = Xa,
                    La = Ca ? r.chartY : r.chartX - fa;
                if (yb && q.shared && !(T && T.noSharedTooltip)) {
                    t = [];
                    V = Sa.length;
                    for (U = 0; U < V; U++) if (Sa[U].visible && Sa[U].options.enableMouseTracking !== false && !Sa[U].noSharedTooltip && Sa[U].tooltipPoints.length) {
                        r = Sa[U].tooltipPoints[La];
                        r._dist = rb(La - r.plotX);
                        Fa = Ha(Fa, r._dist);
                        t.push(r)
                    }
                    for (V = t.length; V--;) t[V]._dist > Fa && t.splice(V, 1);
                    if (t.length && t[0].plotX !== Wd) {
                        yb.refresh(t);
                        Wd = t[0].plotX
                    }
                }
                if (T && T.tracker)(r = T.tooltipPoints[La]) && r !== M && r.onMouseOver()
            }
            function ea() {
                var r = m.hoverSeries,
                    t = m.hoverPoint;
                t && t.onMouseOut();
                r && r.onMouseOut();
                yb && yb.hide();
                Wd = null
            }
            function S() {
                if (Aa) {
                    var r = {
                        xAxis: [],
                        yAxis: []
                    },
                        t = Aa.getBBox(),
                        M = t.x - fa,
                        T = t.y - na;
                    if (Ya) {
                        y(ob, function (V) {
                            if (V.options.zoomEnabled !== false) {
                                var U = V.translate,
                                    Fa = V.isXAxis,
                                    La = Ca ? !Fa : Fa,
                                    ib = U(La ? M : $a - T - t.height, true, 0, 0, 1);
                                U = U(La ? M + t.width : $a - T, true, 0, 0, 1);
                                r[Fa ? "xAxis" : "yAxis"].push({
                                    axis: V,
                                    min: Ha(ib, U),
                                    max: ca(ib, U)
                                })
                            }
                        });
                        Na(m, "selection", r, Xd)
                    }
                    Aa = Aa.destroy()
                }
                Ja(ba, {
                    cursor: "auto"
                });
                m.mouseIsDown = ub = Ya = false;
                Nb(za, Db ? "touchend" : "mouseup", S)
            }
            function Ma(r) {
                var t = P(r.pageX) ? r.pageX : r.page.x;
                r = P(r.pageX) ? r.pageY : r.page.y;
                Vb && !tb(t - Vb.left - fa, r - Vb.top - na) && ea()
            }
            var ha, mb, Ya, Aa, Va = n.zoomType,
                $ = /x/.test(Va),
                Ra = /y/.test(Va),
                va = $ && !Ca || Ra && Ca,
                u = Ra && !Ca || $ && Ca;
            mc = function () {
                if (dc) {
                    dc.translate(fa, na);
                    Ca && dc.attr({
                        width: m.plotWidth,
                        height: m.plotHeight
                    }).invert()
                } else m.trackerGroup = dc = qa.g("tracker").attr({
                    zIndex: 9
                }).add()
            };
            mc();
            if (q.enabled) m.tooltip = yb = e(q);
            (function () {
                ba.onmousedown = function (t) {
                    t = w(t);
                    !Db && t.preventDefault && t.preventDefault();
                    m.mouseIsDown = ub = true;
                    ha = t.chartX;
                    mb = t.chartY;
                    ra(za, Db ? "touchend" : "mouseup", S)
                };
                var r = function (t) {
                        if (!(t && t.touches && t.touches.length > 1)) {
                            t = w(t);
                            if (!Db) t.returnValue = false;
                            var M = t.chartX,
                                T = t.chartY,
                                V = !tb(M - fa, T - na);
                            Vb || (Vb = ge(ba));
                            if (Db && t.type === "touchstart") if (Pa(t.target, "isTracker")) m.runTrackerClick || t.preventDefault();
                            else!Tb && !V && t.preventDefault();
                            if (V) {
                                if (M < fa) M = fa;
                                else if (M > fa + Ga) M = fa + Ga;
                                if (T < na) T = na;
                                else if (T > na + $a) T = na + $a
                            }
                            if (ub && t.type !== "touchstart") {
                                Ya = Math.sqrt(Math.pow(ha - M, 2) + Math.pow(mb - T, 2));
                                if (Ya > 10) {
                                    var U = tb(ha - fa, mb - na);
                                    t = m.hoverPoints;
                                    if (Zc && ($ || Ra) && U) Aa || (Aa = qa.rect(fa, na, va ? 1 : Ga, u ? 1 : $a, 0).attr({
                                        fill: n.selectionMarkerFill || "rgba(69,114,167,0.25)",
                                        zIndex: 7
                                    }).add());
                                    if (Aa && va) {
                                        var Fa = M - ha;
                                        Aa.attr({
                                            width: rb(Fa),
                                            x: (Fa > 0 ? 0 : Fa) + ha
                                        })
                                    }
                                    if (Aa && u) {
                                        T = T - mb;
                                        Aa.attr({
                                            height: rb(T),
                                            y: (T > 0 ? 0 : T) + mb
                                        })
                                    }
                                    if (U && !Aa && n.panning) {
                                        T = m.xAxis[0];
                                        U = T.getExtremes();
                                        Fa = T.translate(ha - M, true);
                                        var La = T.translate(ha + Ga - M, true);
                                        t && y(t, function (ib) {
                                            ib.setState()
                                        });
                                        Fa > Ha(U.dataMin, U.min) && La < ca(U.dataMax, U.max) && T.setExtremes(Fa, La, true, false);
                                        ha = M;
                                        Ja(ba, {
                                            cursor: "move"
                                        })
                                    }
                                }
                            } else V || K(t);
                            return V || !Zc
                        }
                    };
                ba.onmousemove = r;
                ra(ba, "mouseleave", function () {
                    ea();
                    Vb = null
                });
                ra(za, "mousemove", Ma);
                ba.ontouchstart = function (t) {
                    if ($ || Ra) ba.onmousedown(t);
                    r(t)
                };
                ba.ontouchmove = r;
                ba.ontouchend = function () {
                    Ya && ea()
                };
                ba.onclick = function (t) {
                    var M = m.hoverPoint;
                    t = w(t);
                    t.cancelBubble = true;
                    if (!Ya) if (M && Pa(t.target, "isTracker")) {
                        var T = M.plotX,
                            V = M.plotY;
                        aa(M, {
                            pageX: Vb.left + fa + (Ca ? Ga - V : T),
                            pageY: Vb.top + na + (Ca ? $a - T : V)
                        });
                        Na(M.series, "click", aa(t, {
                            point: M
                        }));
                        M.firePointEvent("click", t)
                    } else {
                        aa(t, F(t));
                        tb(t.chartX - fa, t.chartY - na) && Na(m, "click", t)
                    }
                    Ya = false
                }
            })();
            Be = setInterval(function () {
                Vd && Vd()
            }, 32);
            aa(this, {
                zoomX: $,
                zoomY: Ra,
                resetTracker: ea,
                normalizeMouseEvent: w,
                destroy: function () {
                    if (m.trackerGroup) m.trackerGroup = dc = m.trackerGroup.destroy();
                    Nb(za, "mousemove", Ma);
                    ba.onclick = ba.onmousedown = ba.onmousemove = ba.ontouchstart = ba.ontouchend = ba.ontouchmove = null
                }
            })
        }
        function g(q) {
            var w = q.type || n.type || n.defaultSeriesType,
                F = jb[w],
                K = m.hasRendered;
            if (K) if (Ca && w === "column") F = jb.bar;
            else if (!Ca && w === "bar") F = jb.column;
            w = new F;
            w.init(m, q);
            if (!K && w.inverted) Ca = true;
            if (w.isCartesian) Zc = w.isCartesian;
            Sa.push(w);
            return w
        }
        function h() {
            n.alignTicks !== false && y(ob, function (q) {
                q.adjustTickAmount()
            });
            bc = null
        }
        function k(q) {
            var w = m.isDirtyLegend,
                F, K = m.isDirtyBox,
                ea = Sa.length,
                S = ea,
                Ma = m.clipRect;
            for (Tc(q, m); S--;) {
                q = Sa[S];
                if (q.isDirty && q.options.stacking) {
                    F = true;
                    break
                }
            }
            if (F) for (S = ea; S--;) {
                q = Sa[S];
                if (q.options.stacking) q.isDirty = true
            }
            y(Sa, function (ha) {
                if (ha.isDirty) if (ha.options.legendType === "point") w = true
            });
            if (w && zc.renderLegend) {
                zc.renderLegend();
                m.isDirtyLegend = false
            }
            if (Zc) {
                if (!Id) {
                    bc = null;
                    y(ob, function (ha) {
                        ha.setScale()
                    })
                }
                h();
                kd();
                y(ob, function (ha) {
                    ha.isDirty && ha.redraw()
                })
            }
            if (K) {
                Yd();
                mc();
                if (Ma) {
                    ld(Ma);
                    Ma.animate({
                        width: m.plotSizeX,
                        height: m.plotSizeY + 1
                    })
                }
            }
            y(Sa, function (ha) {
                if (ha.isDirty && ha.visible && (!ha.isCartesian || ha.xAxis)) ha.redraw()
            });
            Sb && Sb.resetTracker && Sb.resetTracker();
            Na(m, "redraw")
        }
        function i() {
            var q = a.xAxis || {},
                w = a.yAxis || {};
            q = rc(q);
            y(q, function (F, K) {
                F.index = K;
                F.isX = true
            });
            w = rc(w);
            y(w, function (F, K) {
                F.index = K
            });
            q = q.concat(w);
            y(q, function (F) {
                new c(F)
            });
            h()
        }
        function j(q, w) {
            da = X(a.title, q);
            nc = X(a.subtitle, w);
            y([
                ["title", q, da],
                ["subtitle", w, nc]
            ], function (F) {
                var K = F[0],
                    ea = m[K],
                    S = F[1];
                F = F[2];
                if (ea && S) ea = ea.destroy();
                if (F && F.text && !ea) m[K] = qa.text(F.text, 0, 0, F.useHTML).attr({
                    align: F.align,
                    "class": ec + K,
                    zIndex: 1
                }).css(F.style).add().align(F, false, Wb)
            })
        }
        function l() {
            fb = n.renderTo;
            md = ec + Zd++;
            if (Fc(fb)) fb = za.getElementById(fb);
            fb.innerHTML = "";
            if (!fb.offsetWidth) {
                Ob = fb.cloneNode(0);
                Ja(Ob, {
                    position: Nc,
                    top: "-9999px",
                    display: ""
                });
                za.body.appendChild(Ob)
            }
            Oc = (Ob || fb).offsetWidth;
            Ac = (Ob || fb).offsetHeight;
            m.chartWidth = Xa = n.width || Oc || 600;
            m.chartHeight = Qa = n.height || (Ac > 19 ? Ac : 400);
            m.container = ba = qb(uc, {
                className: ec + "container" + (n.className ? " " + n.className : ""),
                id: md
            }, aa({
                position: Ce,
                overflow: Cb,
                width: Xa + nb,
                height: Qa + nb,
                textAlign: "left"
            }, n.style), Ob || fb);
            m.renderer = qa = n.forExport ? new Jd(ba, Xa, Qa, true) : new nd(ba, Xa, Qa);
            var q, w;
            if (De && ba.getBoundingClientRect) {
                q = function () {
                    Ja(ba, {
                        left: 0,
                        top: 0
                    });
                    w = ba.getBoundingClientRect();
                    Ja(ba, {
                        left: -(w.left - ga(w.left)) + nb,
                        top: -(w.top - ga(w.top)) + nb
                    })
                };
                q();
                ra(wb, "resize", q);
                ra(m, "destroy", function () {
                    Nb(wb, "resize", q)
                })
            }
        }
        function p() {
            function q() {
                var F = n.width || fb.offsetWidth,
                    K = n.height || fb.offsetHeight;
                if (F && K) {
                    if (F !== Oc || K !== Ac) {
                        clearTimeout(w);
                        w = setTimeout(function () {
                            $d(F, K, false)
                        }, 100)
                    }
                    Oc = F;
                    Ac = K
                }
            }
            var w;
            ra(wb, "resize", q);
            ra(m, "destroy", function () {
                Nb(wb, "resize", q)
            })
        }
        function G() {
            Na(m, "endResize", null, function () {
                Id -= 1
            })
        }
        function B() {
            for (var q = Ca || n.inverted || n.type === "bar" || n.defaultSeriesType === "bar", w = a.series, F = w && w.length; !q && F--;) if (w[F].type === "bar") q = true;
            m.inverted = Ca = q
        }
        function E() {
            var q = a.labels,
                w = a.credits,
                F;
            j();
            zc = m.legend = new Te;
            y(ob, function (K) {
                K.setScale()
            });
            kd();
            y(ob, function (K) {
                K.setTickPositions(true)
            });
            h();
            kd();
            Yd();
            Zc && y(ob, function (K) {
                K.render()
            });
            if (!m.seriesGroup) m.seriesGroup = qa.g("series-group").attr({
                zIndex: 3
            }).add();
            y(Sa, function (K) {
                K.translate();
                K.setTooltipPoints();
                K.render()
            });
            q.items && y(q.items, function () {
                var K = aa(q.style, this.style),
                    ea = ga(K.left) + fa,
                    S = ga(K.top) + na + 12;
                delete K.left;
                delete K.top;
                qa.text(this.html, ea, S).attr({
                    zIndex: 2
                }).css(K).add()
            });
            if (!m.toolbar) m.toolbar = d();
            if (w.enabled && !m.credits) {
                F = w.href;
                m.credits = qa.text(w.text, 0, 0).on("click", function () {
                    if (F) location.href = F
                }).attr({
                    align: w.position.align,
                    zIndex: 8
                }).css(w.style).add().align(w.position)
            }
            mc();
            m.hasRendered = true;
            if (Ob) {
                fb.appendChild(ba);
                xd(Ob)
            }
        }
        function H() {
            var q, w = ba && ba.parentNode;
            if (m !== null) {
                Na(m, "destroy");
                Nb(wb, "unload", H);
                Nb(m);
                for (q = ob.length; q--;) ob[q] = ob[q].destroy();
                for (q = Sa.length; q--;) Sa[q] = Sa[q].destroy();
                y(["title", "subtitle", "seriesGroup", "clipRect", "credits", "tracker"], function (F) {
                    var K = m[F];
                    if (K) m[F] = K.destroy()
                });
                y([oc, zc, yb, qa, Sb], function (F) {
                    F && F.destroy && F.destroy()
                });
                oc = zc = yb = qa = Sb = null;
                if (ba) {
                    ba.innerHTML = "";
                    Nb(ba);
                    w && w.removeChild(ba);
                    ba = null
                }
                clearInterval(Be);
                for (q in m) delete m[q];
                m = null
            }
        }
        function J() {
            if (!od && wb == wb.top && za.readyState !== "complete") za.attachEvent("onreadystatechange", function () {
                za.detachEvent("onreadystatechange", J);
                za.readyState === "complete" && J()
            });
            else {
                l();
                Na(m, "init");
                if (Highcharts.RangeSelector && a.rangeSelector.enabled) m.rangeSelector = new Highcharts.RangeSelector(m);
                ae();
                be();
                B();
                i();
                y(a.series || [], function (q) {
                    g(q)
                });
                if (Highcharts.Scroller && (a.navigator.enabled || a.scrollbar.enabled)) m.scroller = new Highcharts.Scroller(m);
                m.render = E;
                m.tracker = Sb = new f(a.tooltip);
                E();
                b && b.apply(m, [m]);
                y(m.callbacks, function (q) {
                    q.apply(m, [m])
                });
                Na(m, "load")
            }
        }
        Fd = X(Fd, cb.xAxis);
        Td = X(Td, cb.yAxis);
        cb.xAxis = cb.yAxis = null;
        var D = a.series;
        a.series = null;
        a = X(cb, a);
        a.series = D;
        var n = a.chart;
        D = n.margin;
        D = qc(D) ? D : [D, D, D, D];
        var s = A(n.marginTop, D[0]),
            z = A(n.marginRight, D[1]),
            Z = A(n.marginBottom, D[2]),
            C = A(n.marginLeft, D[3]),
            L = n.spacingTop,
            sa = n.spacingRight,
            ab = n.spacingBottom,
            Oa = n.spacingLeft,
            Wb, da, nc, na, vb, Eb, fa, pb, fb, Ob, ba, md, Oc, Ac, Xa, Qa, Yc, Mc, oc, Bc, W, wa, m = this,
            Tb = (D = n.events) && !! D.click,
            kb, tb, yb, ub, lb, pc, Xb, $a, Ga, Sb, dc, mc, zc, fc, Cc, Vb, Zc = n.showAxes,
            Id = 0,
            ob = [],
            bc, Sa = [],
            Ca, qa, Vd, Be, Wd, Yd, kd, ae, be, $d, Xd, Ee, Te = function () {
                function q(O, pa) {
                    var ka = O.legendItem,
                        Da = O.legendLine,
                        db = O.legendSymbol,
                        Za = Ra.color,
                        eb = pa ? S.itemStyle.color : Za;
                    Za = pa ? O.color : Za;
                    ka && ka.css({
                        fill: eb
                    });
                    Da && Da.attr({
                        stroke: Za
                    });
                    db && db.attr({
                        stroke: Za,
                        fill: Za
                    })
                }
                function w(O, pa, ka) {
                    var Da = O.legendItem,
                        db = O.legendLine,
                        Za = O.legendSymbol;
                    O = O.checkbox;
                    Da && Da.attr({
                        x: pa,
                        y: ka
                    });
                    db && db.translate(pa, ka - 4);
                    Za && Za.attr({
                        x: pa + Za.xOff,
                        y: ka + Za.yOff
                    });
                    if (O) {
                        O.x = pa;
                        O.y = ka
                    }
                }
                function F() {
                    y(Ya, function (O) {
                        var pa = O.checkbox,
                            ka = ib.alignAttr;
                        pa && Ja(pa, {
                            left: ka.translateX + O.legendItemWidth + pa.x - 40 + nb,
                            top: ka.translateY + pa.y - 11 + nb
                        })
                    })
                }
                function K(O) {
                    var pa, ka, Da, db, Za = O.legendItem;
                    db = O.series || O;
                    var eb = db.options,
                        lc = eb && eb.borderWidth || 0;
                    if (!Za) {
                        db = /^(bar|pie|area|column)$/.test(db.type);
                        O.legendItem = Za = qa.text(S.labelFormatter.call(O), 0, 0).css(O.visible ? Va : Ra).on("mouseover", function () {
                            O.setState(Ub);
                            Za.css($)
                        }).on("mouseout", function () {
                            Za.css(O.visible ? Va : Ra);
                            O.setState()
                        }).on("click", function () {
                            var cc = function () {
                                    O.setVisible()
                                };
                            O.firePointEvent ? O.firePointEvent("legendItemClick", null, cc) : Na(O, "legendItemClick", null, cc)
                        }).attr({
                            zIndex: 2
                        }).add(ib);
                        if (!db && eb && eb.lineWidth) {
                            var Jc = {
                                "stroke-width": eb.lineWidth,
                                zIndex: 2
                            };
                            if (eb.dashStyle) Jc.dashstyle = eb.dashStyle;
                            O.legendLine = qa.path([Wa, -ha - mb, 0, Ia, -mb, 0]).attr(Jc).add(ib)
                        }
                        if (db) Da = qa.rect(pa = -ha - mb, ka = -11, ha, 12, 2).attr({
                            zIndex: 3
                        }).add(ib);
                        else if (eb && eb.marker && eb.marker.enabled) {
                            Da = eb.marker.radius;
                            Da = qa.symbol(O.symbol, pa = -ha / 2 - mb - Da, ka = -4 - Da, 2 * Da, 2 * Da).attr(O.pointAttr[Hb]).attr({
                                zIndex: 3
                            }).add(ib)
                        }
                        if (Da) {
                            Da.xOff = pa + lc % 2 / 2;
                            Da.yOff = ka + lc % 2 / 2
                        }
                        O.legendSymbol = Da;
                        q(O, O.visible);
                        if (eb && eb.showCheckbox) {
                            O.checkbox = qb("input", {
                                type: "checkbox",
                                checked: O.selected,
                                defaultChecked: O.selected
                            }, S.itemCheckboxStyle, ba);
                            ra(O.checkbox, "click", function (cc) {
                                Na(O, "checkboxClick", {
                                    checked: cc.target.checked
                                }, function () {
                                    O.select()
                                })
                            })
                        }
                    }
                    pa = Za.getBBox();
                    ka = O.legendItemWidth = S.itemWidth || ha + mb + pa.width + va;
                    V = pa.height;
                    if (Ma && t - r + ka > (kc || Xa - 2 * va - r)) {
                        t = r;
                        M += V
                    }
                    T = M;
                    w(O, t, M);
                    if (Ma) t += ka;
                    else M += V;
                    Gb = kc || ca(Ma ? t - r : ka, Gb)
                }
                function ea() {
                    t = r;
                    M = u;
                    T = Gb = 0;
                    ib || (ib = qa.g("legend").attr({
                        zIndex: 10
                    }).add());
                    Ya = [];
                    y(Gd, function (Da) {
                        var db = Da.options;
                        if (db.showInLegend) Ya = Ya.concat(db.legendType === "point" ? Da.data : Da)
                    });
                    Me(Ya, function (Da, db) {
                        return (Da.options.legendIndex || 0) - (db.options.legendIndex || 0)
                    });
                    Bb && Ya.reverse();
                    y(Ya, K);
                    fc = kc || Gb;
                    Cc = T - u + V;
                    if (Fa || La) {
                        fc += 2 * va;
                        Cc += 2 * va;
                        if (U) {
                            if (fc > 0 && Cc > 0) {
                                U[U.isNew ? "attr" : "animate"](U.crisp(null, null, null, fc, Cc));
                                U.isNew = false
                            }
                        } else {
                            U = qa.rect(0, 0, fc, Cc, S.borderRadius, Fa || 0).attr({
                                stroke: S.borderColor,
                                "stroke-width": Fa || 0,
                                fill: La || Ib
                            }).add(ib).shadow(S.shadow);
                            U.isNew = true
                        }
                        U[Ya.length ? "show" : "hide"]()
                    }
                    for (var O = ["left", "right", "top", "bottom"], pa, ka = 4; ka--;) {
                        pa = O[ka];
                        if (Aa[pa] && Aa[pa] !== "auto") {
                            S[ka < 2 ? "align" : "verticalAlign"] = pa;
                            S[ka < 2 ? "x" : "y"] = ga(Aa[pa]) * (ka % 2 ? -1 : 1)
                        }
                    }
                    Ya.length && ib.align(aa(S, {
                        width: fc,
                        height: Cc
                    }), true, Wb);
                    Id || F()
                }
                var S = m.options.legend;
                if (S.enabled) {
                    var Ma = S.layout === "horizontal",
                        ha = S.symbolWidth,
                        mb = S.symbolPadding,
                        Ya, Aa = S.style,
                        Va = S.itemStyle,
                        $ = S.itemHoverStyle,
                        Ra = X(Va, S.itemHiddenStyle),
                        va = ga(Aa.padding),
                        u = 18,
                        r = 4 + va + ha + mb,
                        t, M, T, V = 0,
                        U, Fa = S.borderWidth,
                        La = S.backgroundColor,
                        ib, Gb, kc = S.width,
                        Gd = m.series,
                        Bb = S.reversed;
                    ea();
                    ra(m, "endResize", F);
                    return {
                        colorizeItem: q,
                        destroyItem: function (O) {
                            var pa = O.checkbox;
                            y(["legendItem", "legendLine", "legendSymbol"], function (ka) {
                                O[ka] && O[ka].destroy()
                            });
                            pa && xd(O.checkbox)
                        },
                        renderLegend: ea,
                        destroy: function () {
                            if (U) U = U.destroy();
                            if (ib) ib = ib.destroy()
                        }
                    }
                }
            };
        tb = function (q, w) {
            return q >= 0 && q <= Ga && w >= 0 && w <= $a
        };
        Ee = function () {
            Na(m, "selection", {
                resetSelection: true
            }, Xd);
            m.toolbar.remove("zoom")
        };
        Xd = function (q) {
            var w = cb.lang,
                F = m.pointCount < 100;
            m.resetZoomEnabled !== false && m.toolbar.add("zoom", w.resetZoom, w.resetZoomTitle, Ee);
            !q || q.resetSelection ? y(ob, function (K) {
                K.options.zoomEnabled !== false && K.setExtremes(null, null, true, F)
            }) : y(q.xAxis.concat(q.yAxis), function (K) {
                var ea = K.axis;
                if (m.tracker[ea.isXAxis ? "zoomX" : "zoomY"]) ea.setExtremes(K.min, K.max, true, F)
            })
        };
        kd = function () {
            var q = a.legend,
                w = A(q.margin, 10),
                F = q.x,
                K = q.y,
                ea = q.align,
                S = q.verticalAlign,
                Ma;
            ae();
            if ((m.title || m.subtitle) && !P(s)) if (Ma = ca(m.title && !da.floating && !da.verticalAlign && da.y || 0, m.subtitle && !nc.floating && !nc.verticalAlign && nc.y || 0)) na = ca(na, Ma + A(da.margin, 15) + L);
            if (q.enabled && !q.floating) if (ea === "right") P(z) || (vb = ca(vb, fc - F + w + sa));
            else if (ea === "left") P(C) || (fa = ca(fa, fc + F + w + Oa));
            else if (S === "top") P(s) || (na = ca(na, Cc + K + w + L));
            else if (S === "bottom") P(Z) || (Eb = ca(Eb, Cc - K + w + ab));
            if (m.extraBottomMargin) Eb += m.extraBottomMargin;
            if (m.extraTopMargin) na += m.extraTopMargin;
            Zc && y(ob, function (ha) {
                ha.getOffset()
            });
            P(C) || (fa += pb[3]);
            P(s) || (na += pb[0]);
            P(Z) || (Eb += pb[2]);
            P(z) || (vb += pb[1]);
            be()
        };
        $d = function (q, w, F) {
            var K = m.title,
                ea = m.subtitle;
            Id += 1;
            Tc(F, m);
            Mc = Qa;
            Yc = Xa;
            if (P(q)) m.chartWidth = Xa = Q(q);
            if (P(w)) m.chartHeight = Qa = Q(w);
            Ja(ba, {
                width: Xa + nb,
                height: Qa + nb
            });
            qa.setSize(Xa, Qa, F);
            Ga = Xa - fa - vb;
            $a = Qa - na - Eb;
            bc = null;
            y(ob, function (S) {
                S.isDirty = true;
                S.setScale()
            });
            y(Sa, function (S) {
                S.isDirty = true
            });
            m.isDirtyLegend = true;
            m.isDirtyBox = true;
            kd();
            K && K.align(null, null, Wb);
            ea && ea.align(null, null, Wb);
            k(F);
            Mc = null;
            Na(m, "resize");
            fd === false ? G() : setTimeout(G, fd && fd.duration || 500)
        };
        be = function () {
            m.plotLeft = fa = Q(fa);
            m.plotTop = na = Q(na);
            m.plotWidth = Ga = Q(Xa - fa - vb);
            m.plotHeight = $a = Q(Qa - na - Eb);
            m.plotSizeX = Ca ? $a : Ga;
            m.plotSizeY = Ca ? Ga : $a;
            Wb = {
                x: Oa,
                y: L,
                width: Xa - Oa - sa,
                height: Qa - L - ab
            };
            y(ob, function (q) {
                q.isDirty && q.setAxisSize()
            })
        };
        ae = function () {
            na = A(s, L);
            vb = A(z, sa);
            Eb = A(Z, ab);
            fa = A(C, Oa);
            pb = [0, 0, 0, 0]
        };
        Yd = function () {
            var q = n.borderWidth || 0,
                w = n.backgroundColor,
                F = n.plotBackgroundColor,
                K = n.plotBackgroundImage,
                ea, S = {
                    x: fa,
                    y: na,
                    width: Ga,
                    height: $a
                };
            ea = q + (n.shadow ? 8 : 0);
            if (q || w) if (oc) oc.animate(oc.crisp(null, null, null, Xa - ea, Qa - ea));
            else oc = qa.rect(ea / 2, ea / 2, Xa - ea, Qa - ea, n.borderRadius, q).attr({
                stroke: n.borderColor,
                "stroke-width": q,
                fill: w || Ib
            }).add().shadow(n.shadow);
            if (F) if (Bc) Bc.animate(S);
            else Bc = qa.rect(fa, na, Ga, $a, 0).attr({
                fill: F
            }).add().shadow(n.plotShadow);
            if (K) if (W) W.animate(S);
            else W = qa.image(K, fa, na, Ga, $a).add();
            if (n.plotBorderWidth) if (wa) wa.animate(wa.crisp(null, fa, na, Ga, $a));
            else wa = qa.rect(fa, na, Ga, $a, 0, n.plotBorderWidth).attr({
                stroke: n.plotBorderColor,
                "stroke-width": n.plotBorderWidth,
                zIndex: 4
            }).add();
            m.isDirtyBox = false
        };
        ra(wb, "unload", H);
        n.reflow !== false && ra(m, "load", p);
        if (D) for (kb in D) ra(m, kb, D[kb]);
        m.options = a;
        m.series = Sa;
        m.xAxis = [];
        m.yAxis = [];
        m.addSeries = function (q, w, F) {
            var K;
            if (q) {
                Tc(F, m);
                w = A(w, true);
                Na(m, "addSeries", {
                    options: q
                }, function () {
                    K = g(q);
                    K.isDirty = true;
                    m.isDirtyLegend = true;
                    w && m.redraw()
                })
            }
            return K
        };
        m.animation = A(n.animation, true);
        m.Axis = c;
        m.destroy = H;
        m.get = function (q) {
            var w, F, K;
            for (w = 0; w < ob.length; w++) if (ob[w].options.id === q) return ob[w];
            for (w = 0; w < Sa.length; w++) if (Sa[w].options.id === q) return Sa[w];
            for (w = 0; w < Sa.length; w++) {
                K = Sa[w].points;
                for (F = 0; F < K.length; F++) if (K[F].id === q) return K[F]
            }
            return null
        };
        m.getSelectedPoints = function () {
            var q = [];
            y(Sa, function (w) {
                q = q.concat(ce(w.points, function (F) {
                    return F.selected
                }))
            });
            return q
        };
        m.getSelectedSeries = function () {
            return ce(Sa, function (q) {
                return q.selected
            })
        };
        m.hideLoading = function () {
            Kd(lb, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function () {
                    Ja(lb, {
                        display: Ib
                    })
                }
            });
            Xb = false
        };
        m.initSeries = g;
        m.isInsidePlot = tb;
        m.redraw = k;
        m.setSize = $d;
        m.setTitle = j;
        m.showLoading = function (q) {
            var w = a.loading;
            if (!lb) {
                lb = qb(uc, {
                    className: ec + "loading"
                }, aa(w.style, {
                    left: fa + nb,
                    top: na + nb,
                    width: Ga + nb,
                    height: $a + nb,
                    zIndex: 10,
                    display: Ib
                }), ba);
                pc = qb("span", null, w.labelStyle, lb)
            }
            pc.innerHTML = q || a.lang.loading;
            if (!Xb) {
                Ja(lb, {
                    opacity: 0,
                    display: ""
                });
                Kd(lb, {
                    opacity: w.style.opacity
                }, {
                    duration: w.showDuration || 0
                });
                Xb = true
            }
        };
        m.pointCount = 0;
        m.counters = new ne;
        J()
    }
    var za = document,
        wb = window,
        xa = Math,
        Q = xa.round,
        Jb = xa.floor,
        Ed = xa.ceil,
        ca = xa.max,
        Ha = xa.min,
        rb = xa.abs,
        Pb = xa.cos,
        Yb = xa.sin,
        Pc = xa.PI,
        Fe = Pc * 2 / 360,
        $c = navigator.userAgent,
        sd = /msie/i.test($c) && !wb.opera,
        pd = za.documentMode === 8,
        Ae = /AppleWebKit/.test($c),
        De = /Firefox/.test($c),
        od = !! za.createElementNS && !! za.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        Ue = De && parseInt($c.split("Firefox/")[1], 10) < 4,
        nd, Db = za.documentElement.ontouchstart !== undefined,
        Ge = {},
        Zd = 0,
        yd, cb, yc, fd, qd, Ta, la, uc = "div",
        Nc = "absolute",
        Ce = "relative",
        Cb = "hidden",
        ec = "highcharts-",
        Mb = "visible",
        nb = "px",
        Ib = "none",
        Wa = "M",
        Ia = "L",
        He = "rgba(192,192,192," + (od ? 1.0E-6 : 0.0020) + ")",
        Hb = "",
        Ub = "hover",
        cd = "millisecond",
        Sc = "second",
        Gc = "minute",
        Hc = "hour",
        Zb = "day",
        sc = "week",
        tc = "month",
        hc = "year",
        wd, Md, Nd, Pd, dd, ud, vd, je, ke, Od, le, me, Y = wb.HighchartsAdapter,
        hb = Y || {},
        y = hb.each,
        ce = hb.grep,
        ad = hb.map,
        X = hb.merge,
        ra = hb.addEvent,
        Nb = hb.removeEvent,
        Na = hb.fireEvent,
        Kd = hb.animate,
        ld = hb.stop,
        jb = {};
    wb.Highcharts = {};
    yc = function (a, b, c) {
        function d(G, B) {
            G = G.toString().replace(/^([0-9])$/, "0$1");
            if (B === 3) G = G.toString().replace(/^([0-9]{2})$/, "0$1");
            return G
        }
        if (!P(b) || isNaN(b)) return "Invalid date";
        a = A(a, "%Y-%m-%d %H:%M:%S");
        var e = new Date(b),
            f, g = e[Nd](),
            h = e[Pd](),
            k = e[dd](),
            i = e[ud](),
            j = e[vd](),
            l = cb.lang,
            p = l.weekdays;
        b = {
            a: p[h].substr(0, 3),
            A: p[h],
            d: d(k),
            e: k,
            b: l.shortMonths[i],
            B: l.months[i],
            m: d(i + 1),
            y: j.toString().substr(2, 2),
            Y: j,
            H: d(g),
            I: d(g % 12 || 12),
            l: g % 12 || 12,
            M: d(e[Md]()),
            p: g < 12 ? "AM" : "PM",
            P: g < 12 ? "am" : "pm",
            S: d(e.getSeconds()),
            L: d(b % 1E3, 3)
        };
        for (f in b) a = a.replace("%" + f, b[f]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    ne.prototype = {
        wrapColor: function (a) {
            if (this.color >= a) this.color = 0
        },
        wrapSymbol: function (a) {
            if (this.symbol >= a) this.symbol = 0
        }
    };
    Ta = Qb(cd, 1, Sc, 1E3, Gc, 6E4, Hc, 36E5, Zb, 864E5, sc, 6048E5, tc, 2592E6, hc, 31556952E3);
    qd = {
        init: function (a, b, c) {
            b = b || "";
            var d = a.shift,
                e = b.indexOf("C") > -1,
                f = e ? 7 : 3,
                g;
            b = b.split(" ");
            c = [].concat(c);
            var h, k, i = function (j) {
                    for (g = j.length; g--;) j[g] === Wa && j.splice(g + 1, 0, j[g + 1], j[g + 2], j[g + 1], j[g + 2])
                };
            if (e) {
                i(b);
                i(c)
            }
            if (a.isArea) {
                h = b.splice(b.length - 6, 6);
                k = c.splice(c.length - 6, 6)
            }
            if (d === 1) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length) for (a = c.length; b.length < a;) {
                d = [].concat(b).splice(b.length - f, f);
                if (e) {
                    d[f - 6] = d[f - 2];
                    d[f - 5] = d[f - 1]
                }
                b = b.concat(d)
            }
            if (h) {
                b = b.concat(h);
                c = c.concat(k)
            }
            return [b, c]
        },
        step: function (a, b, c, d) {
            var e = [],
                f = a.length;
            if (c === 1) e = d;
            else if (f === b.length && c < 1) for (; f--;) {
                d = parseFloat(a[f]);
                e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d
            } else e = b;
            return e
        }
    };
    Y && Y.init && Y.init(qd);
    if (!Y && wb.jQuery) {
        var gc = jQuery;
        y = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (b.call(a[c], a[c], c, a) === false) return c
        };
        ce = gc.grep;
        ad = function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a);
            return c
        };
        X = function () {
            var a = arguments;
            return gc.extend(true, null, a[0], a[1], a[2], a[3])
        };
        ra = function (a, b, c) {
            gc(a).bind(b, c)
        };
        Nb = function (a, b, c) {
            var d = za.removeEventListener ? "removeEventListener" : "detachEvent";
            if (za[d] && !a[d]) a[d] = function () {};
            gc(a).unbind(b, c)
        };
        Na = function (a, b, c, d) {
            var e = gc.Event(b),
                f = "detached" + b;
            aa(e, c);
            if (a[b]) {
                a[f] = a[b];
                a[b] = null
            }
            gc(a).trigger(e);
            if (a[f]) {
                a[b] = a[f];
                a[f] = null
            }
            d && !e.isDefaultPrevented() && d(e)
        };
        Kd = function (a, b, c) {
            var d = gc(a);
            if (b.d) {
                a.toD = b.d;
                b.d = 1
            }
            d.stop();
            d.animate(b, c)
        };
        ld = function (a) {
            gc(a).stop()
        };
        gc.extend(gc.easing, {
            easeOutQuad: function (a, b, c, d, e) {
                return -d * (b /= e) * (b - 2) + c
            }
        });
        var Ie = jQuery.fx,
            Je = Ie.step;
        y(["cur", "_default", "width", "height"], function (a, b) {
            var c = b ? Je : Ie.prototype,
                d = c[a],
                e;
            if (d) c[a] = function (f) {
                f = b ? f : this;
                e = f.elem;
                return e.attr ? e.attr(f.prop, f.now) : d.apply(this, arguments)
            }
        });
        Je.d = function (a) {
            var b = a.elem;
            if (!a.started) {
                var c = qd.init(b, b.d, b.toD);
                a.start = c[0];
                a.end = c[1];
                a.started = true
            }
            b.attr("d", qd.step(a.start, a.end, a.pos, b.toD))
        }
    }
    Y = {
        enabled: true,
        align: "center",
        x: 0,
        y: 15,
        style: {
            color: "#666",
            fontSize: "11px",
            lineHeight: "14px"
        }
    };
    cb = {
        colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            decimalPoint: ".",
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: true
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: true,
            spacingTop: 10,
            spacingRight: 10,
            spacingBottom: 15,
            spacingLeft: 10,
            style: {
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0"
        },
        title: {
            text: "Chart title",
            align: "center",
            y: 15,
            style: {
                color: "#3E576F",
                fontSize: "16px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            y: 30,
            style: {
                color: "#6D869F"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: false,
                showCheckbox: false,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                shadow: true,
                marker: {
                    enabled: true,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {},
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: X(Y, {
                    enabled: false,
                    y: -6,
                    formatter: function () {
                        return this.y
                    }
                }),
                cropThreshold: 300,
                pointRange: 0,
                showInLegend: true,
                states: {
                    hover: {
                        marker: {}
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: true
            }
        },
        labels: {
            style: {
                position: Nc,
                color: "#3E576F"
            }
        },
        legend: {
            enabled: true,
            align: "center",
            layout: "horizontal",
            labelFormatter: function () {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            shadow: false,
            style: {
                padding: "5px"
            },
            itemStyle: {
                cursor: "pointer",
                color: "#3E576F"
            },
            itemHoverStyle: {
                cursor: "pointer",
                color: "#000000"
            },
            itemHiddenStyle: {
                color: "#C0C0C0"
            },
            itemCheckboxStyle: {
                position: Nc,
                width: "13px",
                height: "13px"
            },
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: Ce,
                top: "1em"
            },
            style: {
                position: Nc,
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: true,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 2,
            borderRadius: 5,
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shadow: true,
            snap: Db ? 25 : 10,
            style: {
                color: "#333333",
                fontSize: "12px",
                padding: "5px",
                whiteSpace: "nowrap"
            }
        },
        toolbar: {
            itemStyle: {
                color: "#4572A7",
                cursor: "pointer"
            }
        },
        credits: {
            enabled: true,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "10px"
            }
        }
    };
    var Fd = {
        dateTimeLabelFormats: Qb(cd, "%H:%M:%S.%L", Sc, "%H:%M:%S", Gc, "%H:%M", Hc, "%H:%M", Zb, "%e. %b", sc, "%e. %b", tc, "%b '%y", hc, "%Y"),
        endOnTick: false,
        gridLineColor: "#C0C0C0",
        labels: Y,
        lineColor: "#C0D0E0",
        lineWidth: 1,
        max: null,
        min: null,
        minPadding: 0.01,
        maxPadding: 0.01,
        minorGridLineColor: "#E0E0E0",
        minorGridLineWidth: 1,
        minorTickColor: "#A0A0A0",
        minorTickLength: 2,
        minorTickPosition: "outside",
        startOfWeek: 1,
        startOnTick: false,
        tickColor: "#C0D0E0",
        tickLength: 5,
        tickmarkPlacement: "between",
        tickPixelInterval: 100,
        tickPosition: "outside",
        tickWidth: 1,
        title: {
            align: "middle",
            style: {
                color: "#6D869F",
                fontWeight: "bold"
            }
        },
        type: "linear"
    },
        Td = X(Fd, {
            endOnTick: true,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: true,
            labels: {
                align: "right",
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: true,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Y-values"
            },
            stackLabels: {
                enabled: false,
                formatter: function () {
                    return this.total
                },
                style: Y.style
            }
        }),
        Re = {
            labels: {
                align: "right",
                x: -8,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        Qe = {
            labels: {
                align: "left",
                x: 8,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        ve = {
            labels: {
                align: "center",
                x: 0,
                y: 14
            },
            title: {
                rotation: 0
            }
        },
        Pe = X(ve, {
            labels: {
                y: -5
            }
        }),
        bb = cb.plotOptions;
    Y = bb.line;
    bb.spline = X(Y);
    bb.scatter = X(Y, {
        lineWidth: 0,
        states: {
            hover: {
                lineWidth: 0
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    bb.area = X(Y, {
        threshold: 0
    });
    bb.areaspline = X(bb.area);
    bb.column = X(Y, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: 0.1,
                shadow: false
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: false
            }
        },
        dataLabels: {
            y: null,
            verticalAlign: null
        },
        threshold: 0
    });
    bb.bar = X(bb.column, {
        dataLabels: {
            align: "left",
            x: 5,
            y: 0
        }
    });
    bb.pie = X(Y, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: ["50%", "50%"],
        colorByPoint: true,
        dataLabels: {
            distance: 30,
            enabled: true,
            formatter: function () {
                return this.point.name
            },
            y: 5
        },
        legendType: "point",
        marker: null,
        size: "75%",
        showInLegend: false,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: 0.1,
                shadow: false
            }
        }
    });
    oe();
    var Dc = function (a) {
            var b = [],
                c;
            (function (d) {
                if (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d)) b = [ga(c[1]), ga(c[2]), ga(c[3]), parseFloat(c[4], 10)];
                else if (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d)) b = [ga(c[1], 16), ga(c[2], 16), ga(c[3], 16), 1]
            })(a);
            return {
                get: function (d) {
                    return b && !isNaN(b[0]) ? d === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : d === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a
                },
                brighten: function (d) {
                    if (rd(d) && d !== 0) {
                        var e;
                        for (e = 0; e < 3; e++) {
                            b[e] += ga(d * 255);
                            if (b[e] < 0) b[e] = 0;
                            if (b[e] > 255) b[e] = 255
                        }
                    }
                    return this
                },
                setOpacity: function (d) {
                    b[3] = d;
                    return this
                }
            }
        };
    gd.prototype = {
        init: function (a, b) {
            this.element = za.createElementNS("http://www.w3.org/2000/svg", b);
            this.renderer = a;
            this.attrSetters = {}
        },
        animate: function (a, b, c) {
            if (b = A(b, fd, true)) {
                b = X(b);
                if (c) b.complete = c;
                Kd(this, a, b)
            } else {
                this.attr(a);
                c && c()
            }
        },
        attr: function (a, b) {
            var c, d, e, f, g = this.element,
                h = g.nodeName,
                k = this.renderer,
                i, j = this.attrSetters,
                l = this.shadows,
                p = this.htmlNode,
                G, B = this;
            if (Fc(a) && P(b)) {
                c = a;
                a = {};
                a[c] = b
            }
            if (Fc(a)) {
                c = a;
                if (h === "circle") c = {
                    x: "cx",
                    y: "cy"
                }[c] || c;
                else if (c === "strokeWidth") c = "stroke-width";
                B = Pa(g, c) || this[c] || 0;
                if (c !== "d" && c !== "visibility") B = parseFloat(B)
            } else for (c in a) {
                i = false;
                d = a[c];
                e = j[c] && j[c](d, c);
                if (e !== false) {
                    if (e !== la) d = e;
                    if (c === "d") {
                        if (d && d.join) d = d.join(" ");
                        if (/(NaN| {2}|^$)/.test(d)) d = "M 0 0";
                        this.d = d
                    } else if (c === "x" && h === "text") {
                        for (e = 0; e < g.childNodes.length; e++) {
                            f = g.childNodes[e];
                            Pa(f, "x") === Pa(g, "x") && Pa(f, "x", d)
                        }
                        if (this.rotation) Pa(g, "transform", "rotate(" + this.rotation + " " + d + " " + ga(a.y || Pa(g, "y")) + ")")
                    } else if (c === "fill") d = k.color(d, g, c);
                    else if (h === "circle" && (c === "x" || c === "y")) c = {
                        x: "cx",
                        y: "cy"
                    }[c] || c;
                    else if (h === "rect" && c === "r") {
                        Pa(g, {
                            rx: d,
                            ry: d
                        });
                        i = true
                    } else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign") {
                        this[c] = d;
                        this.updateTransform();
                        i = true
                    } else if (c === "stroke") d = k.color(d, g, c);
                    else if (c === "dashstyle") {
                        c = "stroke-dasharray";
                        d = d && d.toLowerCase();
                        if (d === "solid") d = Ib;
                        else if (d) {
                            d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                            for (e = d.length; e--;) d[e] = ga(d[e]) * a["stroke-width"];
                            d = d.join(",")
                        }
                    } else if (c === "isTracker") this[c] = d;
                    else if (c === "width") d = ga(d);
                    else if (c === "align") {
                        c = "text-anchor";
                        d = {
                            left: "start",
                            center: "middle",
                            right: "end"
                        }[d]
                    } else if (c === "title") {
                        e = za.createElementNS("http://www.w3.org/2000/svg", "title");
                        e.appendChild(za.createTextNode(d));
                        g.appendChild(e)
                    }
                    if (c === "strokeWidth") c = "stroke-width";
                    if (Ae && c === "stroke-width" && d === 0) d = 1.0E-6;
                    if (this.symbolName && /^(x|y|r|start|end|innerR|anchorX|anchorY)/.test(c)) {
                        if (!G) {
                            this.symbolAttr(a);
                            G = true
                        }
                        i = true
                    }
                    if (l && /^(width|height|visibility|x|y|d|transform)$/.test(c)) for (e = l.length; e--;) Pa(l[e], c, d);
                    if ((c === "width" || c === "height") && h === "rect" && d < 0) d = 0;
                    if (c === "text") {
                        this.textStr = d;
                        this.added && k.buildText(this)
                    } else i || Pa(g, c, d)
                }
                if (p && (c === "x" || c === "y" || c === "translateX" || c === "translateY" || c === "visibility")) {
                    e = p.length ? p : [this];
                    f = e.length;
                    var E;
                    for (E = 0; E < f; E++) {
                        p = e[E];
                        i = p.getBBox();
                        p = p.htmlNode;
                        Ja(p, aa(this.styles, {
                            left: i.x + (this.translateX || 0) + nb,
                            top: i.y + (this.translateY || 0) + nb
                        }));
                        c === "visibility" && Ja(p, {
                            visibility: d
                        })
                    }
                }
            }
            return B
        },
        symbolAttr: function (a) {
            var b = this;
            y(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"], function (c) {
                b[c] = A(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            })
        },
        clip: function (a) {
            return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")")
        },
        crisp: function (a, b, c, d, e) {
            var f, g = {},
                h = {},
                k;
            a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            k = Q(a) % 2 / 2;
            h.x = Jb(b || this.x || 0) + k;
            h.y = Jb(c || this.y || 0) + k;
            h.width = Jb((d || this.width || 0) - 2 * k);
            h.height = Jb((e || this.height || 0) - 2 * k);
            h.strokeWidth = a;
            for (f in h) if (this[f] !== h[f]) this[f] = g[f] = h[f];
            return g
        },
        css: function (a) {
            var b = this.element;
            b = a && a.width && b.nodeName === "text";
            var c, d = "",
                e = function (f, g) {
                    return "-" + g.toLowerCase()
                };
            if (a && a.color) a.fill = a.color;
            this.styles = a = aa(this.styles, a);
            if (sd && !od) {
                b && delete a.width;
                Ja(this.element, a)
            } else {
                for (c in a) d += c.replace(/([A-Z])/g, e) + ":" + a[c] + ";";
                this.attr({
                    style: d
                })
            }
            b && this.added && this.renderer.buildText(this);
            return this
        },
        on: function (a, b) {
            var c = b;
            if (Db && a === "click") {
                a = "touchstart";
                c = function (d) {
                    d.preventDefault();
                    b()
                }
            }
            this.element["on" + a] = c;
            return this
        },
        translate: function (a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function () {
            this.inverted = true;
            this.updateTransform();
            return this
        },
        updateTransform: function () {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.inverted,
                d = this.rotation,
                e = [];
            if (c) {
                a += this.attr("width");
                b += this.attr("height")
            }
            if (a || b) e.push("translate(" + a + "," + b + ")");
            if (c) e.push("rotate(90) scale(-1,1)");
            else d && e.push("rotate(" + d + " " + this.x + " " + this.y + ")");
            e.length && Pa(this.element, "transform", e.join(" "))
        },
        toFront: function () {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function (a, b, c) {
            if (a) {
                this.alignOptions = a;
                this.alignByTranslate = b;
                c || this.renderer.alignedObjects.push(this)
            } else {
                a = this.alignOptions;
                b = this.alignByTranslate
            }
            c = A(c, this.renderer);
            var d = a.align,
                e = a.verticalAlign,
                f = (c.x || 0) + (a.x || 0),
                g = (c.y || 0) + (a.y || 0),
                h = {};
            if (/^(right|center)$/.test(d)) f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = Q(f);
            if (/^(bottom|middle)$/.test(e)) g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1);
            h[b ? "translateY" : "y"] = Q(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = true;
            this.alignAttr = h;
            return this
        },
        getBBox: function () {
            var a, b, c, d = this.rotation,
                e = d * Fe;
            try {
                a = aa({}, this.element.getBBox())
            } catch (f) {
                a = {
                    width: 0,
                    height: 0
                }
            }
            b = a.width;
            c = a.height;
            if (d) {
                a.width = rb(c * Yb(e)) + rb(b * Pb(e));
                a.height = rb(c * Pb(e)) + rb(b * Yb(e))
            }
            return a
        },
        show: function () {
            return this.attr({
                visibility: Mb
            })
        },
        hide: function () {
            return this.attr({
                visibility: Cb
            })
        },
        add: function (a) {
            var b = this.renderer,
                c = a || b,
                d = c.element || b.box,
                e = d.childNodes,
                f = this.element,
                g = Pa(f, "zIndex"),
                h;
            this.parentInverted = a && a.inverted;
            this.textStr !== undefined && b.buildText(this);
            if (a && this.htmlNode) {
                if (!a.htmlNode) a.htmlNode = [];
                a.htmlNode.push(this)
            }
            if (g) {
                c.handleZ = true;
                g = ga(g)
            }
            if (c.handleZ) for (c = 0; c < e.length; c++) {
                a = e[c];
                b = Pa(a, "zIndex");
                if (a !== f && (ga(b) > g || !P(g) && P(b))) {
                    d.insertBefore(f, a);
                    h = true;
                    break
                }
            }
            h || d.appendChild(f);
            this.added = true;
            Na(this, "add");
            return this
        },
        destroy: function () {
            var a = this.element || {},
                b = this.shadows,
                c = this.box,
                d = a.parentNode,
                e, f;
            a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = null;
            ld(this);
            if (this.clipPath) this.clipPath = this.clipPath.destroy();
            if (this.stops) {
                for (f = 0; f < this.stops.length; f++) this.stops[f] = this.stops[f].destroy();
                this.stops = null
            }
            d && d.removeChild(a);
            b && y(b, function (g) {
                (d = g.parentNode) && d.removeChild(g)
            });
            c && c.destroy();
            Rc(this.renderer.alignedObjects, this);
            for (e in this) delete this[e];
            return null
        },
        empty: function () {
            for (var a = this.element, b = a.childNodes, c = b.length; c--;) a.removeChild(b[c])
        },
        shadow: function (a, b) {
            var c = [],
                d, e, f = this.element,
                g = this.parentInverted ? "(-1,-1)" : "(1,1)";
            if (a) {
                for (d = 1; d <= 3; d++) {
                    e = f.cloneNode(0);
                    Pa(e, {
                        isShadow: "true",
                        stroke: "rgb(0, 0, 0)",
                        "stroke-opacity": 0.05 * d,
                        "stroke-width": 7 - 2 * d,
                        transform: "translate" + g,
                        fill: Ib
                    });
                    b ? b.element.appendChild(e) : f.parentNode.insertBefore(e, f);
                    c.push(e)
                }
                this.shadows = c
            }
            return this
        }
    };
    var Jd = function () {
            this.init.apply(this, arguments)
        };
    Jd.prototype = {
        Element: gd,
        init: function (a, b, c, d) {
            var e = location,
                f;
            f = this.createElement("svg").attr({
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1"
            });
            a.appendChild(f.element);
            this.box = f.element;
            this.boxWrapper = f;
            this.alignedObjects = [];
            this.url = sd ? "" : e.href.replace(/#.*?$/, "");
            this.defs = this.createElement("defs").add();
            this.forExport = d;
            this.gradients = [];
            this.setSize(b, c, false)
        },
        destroy: function () {
            var a, b = this.gradients,
                c = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            if (b) {
                for (a = 0; a < b.length; a++) this.gradients[a] = b[a].destroy();
                this.gradients = null
            }
            if (c) this.defs = c.destroy();
            return this.alignedObjects = null
        },
        createElement: function (a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        buildText: function (a) {
            for (var b = a.element, c = A(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), d = b.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = Pa(b, "x"), h = a.styles, k = h && a.useHTML && !this.forExport, i = a.htmlNode, j = h && ga(h.width), l = h && h.lineHeight, p, G = d.length; G--;) b.removeChild(d[G]);
            j && !a.added && this.box.appendChild(b);
            c[c.length - 1] === "" && c.pop();
            y(c, function (B, E) {
                var H, J = 0,
                    D;
                B = B.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                H = B.split("|||");
                y(H, function (n) {
                    if (n !== "" || H.length === 1) {
                        var s = {},
                            z = za.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        e.test(n) && Pa(z, "style", n.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
                        if (f.test(n)) {
                            Pa(z, "onclick", 'location.href="' + n.match(f)[1] + '"');
                            Ja(z, {
                                cursor: "pointer"
                            })
                        }
                        n = (n.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        z.appendChild(za.createTextNode(n));
                        if (J) s.dx = 3;
                        else s.x = g;
                        if (!J) {
                            if (E) {
                                !od && a.renderer.forExport && Ja(z, {
                                    display: "block"
                                });
                                D = wb.getComputedStyle && ga(wb.getComputedStyle(p, null).getPropertyValue("line-height"));
                                if (!D || isNaN(D)) D = l || p.offsetHeight || 18;
                                Pa(z, "dy", D)
                            }
                            p = z
                        }
                        Pa(z, s);
                        b.appendChild(z);
                        J++;
                        if (j) {
                            n = n.replace(/-/g, "- ").split(" ");
                            for (var Z, C = []; n.length || C.length;) {
                                Z = a.getBBox().width;
                                s = Z > j;
                                if (!s || n.length === 1) {
                                    n = C;
                                    C = [];
                                    if (n.length) {
                                        z = za.createElementNS("http://www.w3.org/2000/svg", "tspan");
                                        Pa(z, {
                                            dy: l || 16,
                                            x: g
                                        });
                                        b.appendChild(z);
                                        if (Z > j) j = Z
                                    }
                                } else {
                                    z.removeChild(z.firstChild);
                                    C.unshift(n.pop())
                                }
                                n.length && z.appendChild(za.createTextNode(n.join(" ").replace(/- /g, "-")))
                            }
                        }
                    }
                })
            });
            if (k) {
                if (!i) i = a.htmlNode = qb("span", null, aa(h, {
                    position: Nc,
                    top: 0,
                    left: 0
                }), this.box.parentNode);
                i.innerHTML = a.textStr;
                for (G = d.length; G--;) d[G].style.visibility = Cb
            }
        },
        button: function (a, b, c, d, e, f, g) {
            var h = this.label(a, b, c),
                k = 0,
                i, j, l, p, G;
            a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            };
            e = X(Qb("stroke-width", 1, "stroke", "#999", "fill", Qb("linearGradient", a, "stops", [
                [0, "#FFF"],
                [1, "#DDD"]
            ]), "r", 3, "padding", 3, "style", Qb("color", "black")), e);
            l = e.style;
            delete e.style;
            f = X(e, Qb("stroke", "#68A", "fill", Qb("linearGradient", a, "stops", [
                [0, "#FFF"],
                [1, "#ACF"]
            ])), f);
            p = f.style;
            delete f.style;
            g = X(e, Qb("stroke", "#68A", "fill", Qb("linearGradient", a, "stops", [
                [0, "#9BD"],
                [1, "#CDF"]
            ])), g);
            G = g.style;
            delete g.style;
            ra(h.element, "mouseenter", function () {
                h.attr(f).css(p)
            });
            ra(h.element, "mouseleave", function () {
                i = [e, f, g][k];
                j = [l, p, G][k];
                h.attr(i).css(j)
            });
            h.setState = function (B) {
                if (k = B) B === 2 && h.attr(g).css(G);
                else h.attr(e).css(l)
            };
            return h.on("click", function () {
                d.call(h)
            }).attr(e).css(aa({
                cursor: "default"
            }, l))
        },
        crispLine: function (a, b) {
            if (a[1] === a[4]) a[1] = a[4] = Q(a[1]) + b % 2 / 2;
            if (a[2] === a[5]) a[2] = a[5] = Q(a[2]) + b % 2 / 2;
            return a
        },
        path: function (a) {
            return this.createElement("path").attr({
                d: a,
                fill: Ib
            })
        },
        circle: function (a, b, c) {
            a = qc(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            return this.createElement("circle").attr(a)
        },
        arc: function (a, b, c, d, e, f) {
            if (qc(a)) {
                b = a.y;
                c = a.r;
                d = a.innerR;
                e = a.start;
                f = a.end;
                a = a.x
            }
            return this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            })
        },
        rect: function (a, b, c, d, e, f) {
            if (qc(a)) {
                b = a.y;
                c = a.width;
                d = a.height;
                e = a.r;
                f = a.strokeWidth;
                a = a.x
            }
            e = this.createElement("rect").attr({
                rx: e,
                ry: e,
                fill: Ib
            });
            return e.attr(e.crisp(f, a, b, ca(c, 0), ca(d, 0)))
        },
        setSize: function (a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[A(c, true) ? "animate" : "attr"]({
                width: a,
                height: b
            }); e--;) d[e].align()
        },
        g: function (a) {
            var b = this.createElement("g");
            return P(a) ? b.attr({
                "class": ec + a
            }) : b
        },
        image: function (a, b, c, d, e) {
            var f = {
                preserveAspectRatio: Ib
            };
            arguments.length > 1 && aa(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function (a, b, c, d, e, f) {
            var g, h = this.symbols[a];
            h = h && h(Q(b), Q(c), d, e, f);
            var k = /^url\((.*?)\)$/,
                i;
            if (h) {
                g = this.path(h);
                aa(g, {
                    symbolName: a,
                    x: b,
                    y: c,
                    width: d,
                    height: e
                });
                f && aa(g, f)
            } else if (k.test(a)) {
                var j = function (l, p) {
                        l.attr({
                            width: p[0],
                            height: p[1]
                        }).translate(-Q(p[0] / 2), -Q(p[1] / 2))
                    };
                i = a.match(k)[1];
                a = Ge[i];
                g = this.image(i).attr({
                    x: b,
                    y: c
                });
                if (a) j(g, a);
                else {
                    g.attr({
                        width: 0,
                        height: 0
                    });
                    qb("img", {
                        onload: function () {
                            j(g, Ge[i] = [this.width, this.height])
                        },
                        src: i
                    })
                }
            }
            return g
        },
        symbols: {
            circle: function (a, b, c, d) {
                var e = 0.166 * c;
                return [Wa, a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function (a, b, c, d) {
                return [Wa, a, b, Ia, a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function (a, b, c, d) {
                return [Wa, a + c / 2, b, Ia, a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function (a, b, c, d) {
                return [Wa, a, b, Ia, a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function (a, b, c, d) {
                return [Wa, a + c / 2, b, Ia, a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function (a, b, c, d, e) {
                var f = e.start;
                c = c || d;
                var g = e.end - 1.0E-6;
                d = e.innerR;
                var h = Pb(f),
                    k = Yb(f),
                    i = Pb(g);
                g = Yb(g);
                e = e.end - f < Pc ? 0 : 1;
                return [Wa, a + c * h, b + c * k, "A", c, c, 0, e, 1, a + c * i, b + c * g, Ia, a + d * i, b + d * g, "A", d, d, 0, e, 0, a + d * h, b + d * k, "Z"]
            }
        },
        clipRect: function (a, b, c, d) {
            var e = ec + Zd++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        },
        color: function (a, b, c) {
            var d, e = /^rgba/;
            if (a && a.linearGradient) {
                var f = this;
                b = a.linearGradient;
                c = !b.length;
                var g = ec + Zd++,
                    h, k, i;
                h = f.createElement("linearGradient").attr(aa({
                    id: g,
                    x1: b.x1 || b[0] || 0,
                    y1: b.y1 || b[1] || 0,
                    x2: b.x2 || b[2] || 0,
                    y2: b.y2 || b[3] || 0
                }, c ? null : {
                    gradientUnits: "userSpaceOnUse"
                })).add(f.defs);
                f.gradients.push(h);
                h.stops = [];
                y(a.stops, function (j) {
                    if (e.test(j[1])) {
                        d = Dc(j[1]);
                        k = d.get("rgb");
                        i = d.get("a")
                    } else {
                        k = j[1];
                        i = 1
                    }
                    j = f.createElement("stop").attr({
                        offset: j[0],
                        "stop-color": k,
                        "stop-opacity": i
                    }).add(h);
                    h.stops.push(j)
                });
                return "url(" + this.url + "#" + g + ")"
            } else if (e.test(a)) {
                d = Dc(a);
                Pa(b, c + "-opacity", d.get("a"));
                return d.get("rgb")
            } else {
                b.removeAttribute(c + "-opacity");
                return a
            }
        },
        text: function (a, b, c, d) {
            var e = cb.chart.style;
            b = Q(A(b, 0));
            c = Q(A(c, 0));
            a = this.createElement("text").attr({
                x: b,
                y: c,
                text: a
            }).css({
                fontFamily: e.fontFamily,
                fontSize: e.fontSize
            });
            a.x = b;
            a.y = c;
            a.useHTML = d;
            return a
        },
        label: function (a, b, c, d, e, f) {
            function g() {
                var C = i.styles;
                C = C && C.textAlign;
                var L = B,
                    sa = B + Q(ga(i.element.style.fontSize || 11) * 1.2);
                if (P(E) && (C === "center" || C === "right")) L += {
                    center: 0.5,
                    right: 1
                }[C] * (E - p.width);
                if (L !== j.x || sa !== j.y) j.attr({
                    x: L,
                    y: sa
                });
                j.x = L;
                j.y = sa
            }
            function h(C, L) {
                if (l) l.attr(C, L);
                else s[C] = L
            }
            var k = this,
                i = k.g(),
                j = k.text().attr({
                    zIndex: 1
                }).add(i),
                l, p, G = "left",
                B = 3,
                E, H, J, D, n = 0,
                s = {},
                z = i.attrSetters;
            ra(i, "add", function () {
                i.attr({
                    text: a,
                    x: b,
                    y: c,
                    anchorX: e,
                    anchorY: f
                })
            });
            z.width = function (C) {
                E = C;
                return false
            };
            z.height = function (C) {
                H = C;
                return false
            };
            z.padding = function (C) {
                B = C;
                g();
                return false
            };
            z.align = function (C) {
                G = C;
                return false
            };
            z.text = function (C, L) {
                j.attr(L, C);
                p = (E === undefined || H === undefined || i.styles.textAlign) && j.getBBox(true);
                i.width = (E || p.width) + 2 * B;
                i.height = (H || p.height) + 2 * B;
                if (!l) {
                    i.box = l = d ? k.symbol(d, 0, 0, i.width, i.height) : k.rect(0, 0, i.width, i.height, 0, s["stroke-width"]);
                    l.add(i)
                }
                l.attr(X({
                    width: i.width,
                    height: i.height
                }, s));
                s = null;
                g();
                return false
            };
            z["stroke-width"] = function (C, L) {
                n = C % 2 / 2;
                h(L, C);
                return false
            };
            z.stroke = z.fill = z.r = function (C, L) {
                h(L, C);
                return false
            };
            z.anchorX = function (C, L) {
                e = C;
                h(L, C + n - J);
                return false
            };
            z.anchorY = function (C, L) {
                f = C;
                h(L, C - D);
                return false
            };
            z.x = function (C) {
                J = C;
                J -= {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[G] * ((E || p.width) + B);
                i.attr("translateX", Q(J));
                return false
            };
            z.y = function (C) {
                D = C;
                i.attr("translateY", Q(C));
                return false
            };
            var Z = i.css;
            return aa(i, {
                css: function (C) {
                    if (C) {
                        var L = {};
                        y(["fontSize", "fontWeight", "fontFamily", "color", "lineHeight"], function (sa) {
                            if (C[sa] !== la) {
                                L[sa] = C[sa];
                                delete C[sa]
                            }
                        });
                        j.css(L)
                    }
                    return Z.call(i, C)
                },
                getBBox: function () {
                    return l.getBBox()
                },
                shadow: function (C) {
                    l.shadow(C);
                    return i
                },
                destroy: function () {
                    if (j) j = j.destroy();
                    gd.prototype.destroy.call(i)
                }
            })
        }
    };
    nd = Jd;
    if (!od) {
        hb = Ab(gd, {
            init: function (a, b) {
                var c = ["<", b, ' filled="f" stroked="f"'],
                    d = ["position: ", Nc, ";"];
                if (b === "shape" || b === uc) d.push("left:0;top:0;width:10px;height:10px;");
                if (pd) d.push("visibility: ", b === uc ? Cb : Mb);
                c.push(' style="', d.join(""), '"/>');
                if (b) {
                    c = b === uc || b === "span" || b === "img" ? c.join("") : a.prepVML(c);
                    this.element = qb(c)
                }
                this.renderer = a;
                this.attrSetters = {}
            },
            add: function (a) {
                var b = this.renderer,
                    c = this.element,
                    d = b.box;
                d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                pd && d.gVis === Cb && Ja(c, {
                    visibility: Cb
                });
                d.appendChild(c);
                this.added = true;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                Na(this, "add");
                return this
            },
            attr: function (a, b) {
                var c, d, e, f = this.element || {},
                    g = f.style,
                    h = f.nodeName,
                    k = this.renderer,
                    i = this.symbolName,
                    j, l, p = this.shadows,
                    G = this.attrSetters,
                    B = this;
                if (Fc(a) && P(b)) {
                    c = a;
                    a = {};
                    a[c] = b
                }
                if (Fc(a)) {
                    c = a;
                    B = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c]
                } else for (c in a) {
                    d = a[c];
                    j = false;
                    e = G[c] && G[c](d, c);
                    if (e !== false) {
                        if (e !== la) d = e;
                        if (i && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c)) {
                            if (!l) {
                                this.symbolAttr(a);
                                l = true
                            }
                            j = true
                        } else if (c === "d") {
                            d = d || [];
                            this.d = d.join(" ");
                            e = d.length;
                            for (j = []; e--;) j[e] = rd(d[e]) ? Q(d[e] * 10) - 5 : d[e] === "Z" ? "x" : d[e];
                            d = j.join(" ") || "x";
                            f.path = d;
                            if (p) for (e = p.length; e--;) p[e].path = d;
                            j = true
                        } else if (c === "zIndex" || c === "visibility") {
                            if (pd && c === "visibility" && h === "DIV") {
                                f.gVis = d;
                                j = f.childNodes;
                                for (e = j.length; e--;) Ja(j[e], {
                                    visibility: d
                                });
                                if (d === Mb) d = null
                            }
                            if (d) g[c] = d;
                            j = true
                        } else if (c === "width" || c === "height") {
                            this[c] = d;
                            if (this.updateClipping) {
                                this[c] = d;
                                this.updateClipping()
                            } else g[c] = d;
                            j = true
                        } else if (/^(x|y)$/.test(c)) {
                            this[c] = d;
                            if (f.tagName === "SPAN") this.updateTransform();
                            else g[{
                                x: "left",
                                y: "top"
                            }[c]] = d
                        } else if (c === "class") f.className = d;
                        else if (c === "stroke") {
                            d = k.color(d, f, c);
                            c = "strokecolor"
                        } else if (c === "stroke-width" || c === "strokeWidth") {
                            f.stroked = d ? true : false;
                            c = "strokeweight";
                            this[c] = d;
                            if (rd(d)) d += nb
                        } else if (c === "dashstyle") {
                            (f.getElementsByTagName("stroke")[0] || qb(k.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid";
                            this.dashstyle = d;
                            j = true
                        } else if (c === "fill") if (h === "SPAN") g.color = d;
                        else {
                            f.filled = d !== Ib ? true : false;
                            d = k.color(d, f, c);
                            c = "fillcolor"
                        } else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "align") {
                            if (c === "align") c = "textAlign";
                            this[c] = d;
                            this.updateTransform();
                            j = true
                        } else if (c === "text") {
                            this.bBox = null;
                            f.innerHTML = d;
                            j = true
                        }
                        if (p && c === "visibility") for (e = p.length; e--;) p[e].style[c] = d;
                        if (!j) if (pd) f[c] = d;
                        else Pa(f, c, d)
                    }
                }
                return B
            },
            clip: function (a) {
                var b = this,
                    c = a.members;
                c.push(b);
                b.destroyClip = function () {
                    Rc(c, b)
                };
                return b.css(a.getCSS(b.inverted))
            },
            css: function (a) {
                var b = this.element;
                if (b = a && b.tagName === "SPAN" && a.width) {
                    delete a.width;
                    this.textWidth = b;
                    this.updateTransform()
                }
                this.styles = aa(this.styles, a);
                Ja(this.element, a);
                return this
            },
            destroy: function () {
                this.destroyClip && this.destroyClip();
                return gd.prototype.destroy.apply(this)
            },
            empty: function () {
                for (var a = this.element.childNodes, b = a.length, c; b--;) {
                    c = a[b];
                    c.parentNode.removeChild(c)
                }
            },
            getBBox: function (a) {
                var b = this.element,
                    c = this.bBox;
                if (!c || a) {
                    if (b.nodeName === "text") b.style.position = Nc;
                    c = this.bBox = {
                        x: b.offsetLeft,
                        y: b.offsetTop,
                        width: b.offsetWidth,
                        height: b.offsetHeight
                    }
                }
                return c
            },
            on: function (a, b) {
                this.element["on" + a] = function () {
                    var c = wb.event;
                    c.target = c.srcElement;
                    b(c)
                };
                return this
            },
            updateTransform: function () {
                if (this.added) {
                    var a = this,
                        b = a.element,
                        c = a.translateX || 0,
                        d = a.translateY || 0,
                        e = a.x || 0,
                        f = a.y || 0,
                        g = a.textAlign || "left",
                        h = {
                            left: 0,
                            center: 0.5,
                            right: 1
                        }[g],
                        k = g && g !== "left",
                        i = a.shadows;
                    if (c || d) {
                        Ja(b, {
                            marginLeft: c,
                            marginTop: d
                        });
                        i && y(i, function (n) {
                            Ja(n, {
                                marginLeft: c + 1,
                                marginTop: d + 1
                            })
                        })
                    }
                    a.inverted && y(b.childNodes, function (n) {
                        a.renderer.invertChild(n, b)
                    });
                    if (b.tagName === "SPAN") {
                        var j, l;
                        i = a.rotation;
                        var p;
                        j = 0;
                        var G = 1,
                            B = 0,
                            E;
                        p = ga(a.textWidth);
                        var H = a.xCorr || 0,
                            J = a.yCorr || 0,
                            D = [i, g, b.innerHTML, a.textWidth].join(",");
                        if (D !== a.cTT) {
                            if (P(i)) {
                                j = i * Fe;
                                G = Pb(j);
                                B = Yb(j);
                                Ja(b, {
                                    filter: i ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", G, ", M12=", -B, ", M21=", B, ", M22=", G, ", sizingMethod='auto expand')"].join("") : Ib
                                })
                            }
                            j = A(a.elemWidth, b.offsetWidth);
                            l = A(a.elemHeight, b.offsetHeight);
                            if (j > p) {
                                Ja(b, {
                                    width: p + nb,
                                    display: "block",
                                    whiteSpace: "normal"
                                });
                                j = p
                            }
                            p = Q((ga(b.style.fontSize) || 12) * 1.2);
                            H = G < 0 && -j;
                            J = B < 0 && -l;
                            E = G * B < 0;
                            H += B * p * (E ? 1 - h : h);
                            J -= G * p * (i ? E ? h : 1 - h : 1);
                            if (k) {
                                H -= j * h * (G < 0 ? -1 : 1);
                                if (i) J -= l * h * (B < 0 ? -1 : 1);
                                Ja(b, {
                                    textAlign: g
                                })
                            }
                            a.xCorr = H;
                            a.yCorr = J
                        }
                        Ja(b, {
                            left: e + H,
                            top: f + J
                        });
                        a.cTT = D
                    }
                } else this.alignOnAdd = true
            },
            shadow: function (a, b) {
                var c = [],
                    d, e = this.element,
                    f = this.renderer,
                    g, h = e.style,
                    k, i = e.path;
                if (i && typeof i.value !== "string") i = "x";
                if (a) {
                    for (d = 1; d <= 3; d++) {
                        k = ['<shape isShadow="true" strokeweight="', 7 - 2 * d, '" filled="false" path="', i, '" coordsize="100,100" style="', e.style.cssText, '" />'];
                        g = qb(f.prepVML(k), null, {
                            left: ga(h.left) + 1,
                            top: ga(h.top) + 1
                        });
                        k = ['<stroke color="black" opacity="', 0.05 * d, '"/>'];
                        qb(f.prepVML(k), null, null, g);
                        b ? b.element.appendChild(g) : e.parentNode.insertBefore(g, e);
                        c.push(g)
                    }
                    this.shadows = c
                }
                return this
            }
        });
        Y = function () {
            this.init.apply(this, arguments)
        };
        Y.prototype = X(Jd.prototype, {
            Element: hb,
            isIE8: $c.indexOf("MSIE 8.0") > -1,
            init: function (a, b, c) {
                var d;
                this.alignedObjects = [];
                d = this.createElement(uc);
                a.appendChild(d.element);
                this.box = d.element;
                this.boxWrapper = d;
                this.setSize(b, c, false);
                if (!za.namespaces.hcv) {
                    za.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    za.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                }
            },
            clipRect: function (a, b, c, d) {
                var e = this.createElement();
                return aa(e, {
                    members: [],
                    left: a,
                    top: b,
                    width: c,
                    height: d,
                    getCSS: function (f) {
                        var g = this.top,
                            h = this.left,
                            k = h + this.width,
                            i = g + this.height;
                        g = {
                            clip: "rect(" + Q(f ? h : g) + "px," + Q(f ? i : k) + "px," + Q(f ? k : i) + "px," + Q(f ? g : h) + "px)"
                        };
                        !f && pd && aa(g, {
                            width: k + nb,
                            height: i + nb
                        });
                        return g
                    },
                    updateClipping: function () {
                        y(e.members, function (f) {
                            f.css(e.getCSS(f.inverted))
                        })
                    }
                })
            },
            color: function (a, b, c) {
                var d, e = /^rgba/;
                if (a && a.linearGradient) {
                    var f, g, h = a.linearGradient,
                        k = h.x1 || h[0] || 0,
                        i = h.y1 || h[1] || 0,
                        j = h.x2 || h[2] || 0;
                    h = h.y2 || h[3] || 0;
                    var l, p, G, B;
                    y(a.stops, function (E, H) {
                        if (e.test(E[1])) {
                            d = Dc(E[1]);
                            f = d.get("rgb");
                            g = d.get("a")
                        } else {
                            f = E[1];
                            g = 1
                        }
                        if (H) {
                            G = f;
                            B = g
                        } else {
                            l = f;
                            p = g
                        }
                    });
                    a = 90 - xa.atan((h - i) / (j - k)) * 180 / Pc;
                    a = ["<", c, ' colors="0% ', l, ",100% ", G, '" angle="', a, '" opacity="', B, '" o:opacity2="', p, '" type="gradient" focus="100%" method="any" />'];
                    qb(this.prepVML(a), null, null, b)
                } else if (e.test(a) && b.tagName !== "IMG") {
                    d = Dc(a);
                    a = ["<", c, ' opacity="', d.get("a"), '"/>'];
                    qb(this.prepVML(a), null, null, b);
                    return d.get("rgb")
                } else {
                    b = b.getElementsByTagName(c);
                    if (b.length) b[0].opacity = 1;
                    return a
                }
            },
            prepVML: function (a) {
                var b = this.isIE8;
                a = a.join("");
                if (b) {
                    a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />');
                    a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')
                } else a = a.replace("<", "<hcv:");
                return a
            },
            text: function (a, b, c) {
                var d = cb.chart.style;
                return this.createElement("span").attr({
                    text: a,
                    x: Q(b),
                    y: Q(c)
                }).css({
                    whiteSpace: "nowrap",
                    fontFamily: d.fontFamily,
                    fontSize: d.fontSize
                })
            },
            path: function (a) {
                return this.createElement("shape").attr({
                    coordsize: "100 100",
                    d: a
                })
            },
            circle: function (a, b, c) {
                return this.symbol("circle").attr({
                    x: a,
                    y: b,
                    r: c
                })
            },
            g: function (a) {
                var b;
                if (a) b = {
                    className: ec + a,
                    "class": ec + a
                };
                return this.createElement(uc).attr(b)
            },
            image: function (a, b, c, d, e) {
                var f = this.createElement("img").attr({
                    src: a
                });
                arguments.length > 1 && f.css({
                    left: b,
                    top: c,
                    width: d,
                    height: e
                });
                return f
            },
            rect: function (a, b, c, d, e, f) {
                if (qc(a)) {
                    b = a.y;
                    c = a.width;
                    d = a.height;
                    f = a.strokeWidth;
                    a = a.x
                }
                var g = this.symbol("rect");
                g.r = e;
                return g.attr(g.crisp(f, a, b, ca(c, 0), ca(d, 0)))
            },
            invertChild: function (a, b) {
                var c = b.style;
                Ja(a, {
                    flip: "x",
                    left: ga(c.width) - 10,
                    top: ga(c.height) - 10,
                    rotation: -90
                })
            },
            symbols: {
                arc: function (a, b, c, d, e) {
                    var f = e.start,
                        g = e.end;
                    c = c || d;
                    d = Pb(f);
                    var h = Yb(f),
                        k = Pb(g),
                        i = Yb(g);
                    e = e.innerR;
                    var j = 0.07 / c,
                        l = e && 0.1 / e || 0;
                    if (g - f === 0) return ["x"];
                    else if (2 * Pc - g + f < j) k = -j;
                    else if (g - f < l) k = Pb(f + l);
                    return ["wa", a - c, b - c, a + c, b + c, a + c * d, b + c * h, a + c * k, b + c * i, "at", a - e, b - e, a + e, b + e, a + e * k, b + e * i, a + e * d, b + e * h, "x", "e"]
                },
                circle: function (a, b, c, d) {
                    return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                },
                rect: function (a, b, c, d, e) {
                    if (!P(e)) return [];
                    var f = a + c,
                        g = b + d;
                    c = Ha(e.r || 0, c, d);
                    return [Wa, a + c, b, Ia, f - c, b, "wa", f - 2 * c, b, f, b + 2 * c, f - c, b, f, b + c, Ia, f, g - c, "wa", f - 2 * c, g - 2 * c, f, g, f, g - c, f - c, g, Ia, a + c, g, "wa", a, g - 2 * c, a + 2 * c, g, a + c, g, a, g - c, Ia, a, b + c, "wa", a, b, a + 2 * c, b + 2 * c, a, b + c, a + c, b, "x", "e"]
                }
            }
        });
        nd = Y
    }
    zd.prototype.callbacks = [];
    var Ec = function () {};
    Ec.prototype = {
        init: function (a, b, c) {
            var d = a.chart.counters;
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint) {
                b = a.chart.options.colors;
                if (!this.options) this.options = {};
                this.color = this.options.color = this.color || b[d.color++];
                d.wrapColor(b.length)
            }
            a.chart.pointCount++;
            return this
        },
        applyOptions: function (a, b) {
            var c = this.series,
                d = typeof a;
            this.config = a;
            if (d === "number" || a === null) this.y = a;
            else if (typeof a[0] === "number") {
                this.x = a[0];
                this.y = a[1]
            } else if (d === "object" && typeof a.length !== "number") {
                aa(this, a);
                this.options = a
            } else if (typeof a[0] === "string") {
                this.name = a[0];
                this.y = a[1]
            }
            if (this.x === la) this.x = b === la ? c.autoIncrement() : b
        },
        destroy: function () {
            var a = this.series,
                b = a.chart.hoverPoints,
                c;
            a.chart.pointCount--;
            if (b) {
                this.setState();
                Rc(b, this)
            }
            this === a.chart.hoverPoint && this.onMouseOut();
            a.chart.hoverPoints = null;
            if (this.graphic || this.dataLabel) {
                Nb(this);
                this.destroyElements()
            }
            this.legendItem && this.series.chart.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function () {
            for (var a = ["graphic", "tracker", "dataLabel", "group", "connector", "shadowGroup"], b, c = 6; c--;) {
                b = a[c];
                if (this[b]) this[b] = this[b].destroy()
            }
        },
        getLabelConfig: function () {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        select: function (a, b) {
            var c = this,
                d = c.series.chart;
            a = A(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function () {
                c.selected = a;
                c.setState(a && "select");
                b || y(d.getSelectedPoints(), function (e) {
                    if (e.selected && e !== c) {
                        e.selected = false;
                        e.setState(Hb);
                        e.firePointEvent("unselect")
                    }
                })
            })
        },
        onMouseOver: function () {
            var a = this.series,
                b = a.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            d && d !== this && d.onMouseOut();
            this.firePointEvent("mouseOver");
            if (c && (!c.shared || a.noSharedTooltip)) c.refresh(this);
            this.setState(Ub);
            b.hoverPoint = this
        },
        onMouseOut: function () {
            this.firePointEvent("mouseOut");
            this.setState();
            this.series.chart.hoverPoint = null
        },
        tooltipFormatter: function (a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = String(this.y).split(".");
            d = d[1] ? d[1].length : 0;
            var e = a.match(/\{(series|point)\.[a-zA-Z]+\}/g),
                f = /[\.}]/,
                g, h, k;
            for (k in e) {
                h = e[k];
                if (Fc(h) && h !== a) {
                    g = h.indexOf("point") === 1 ? this : b;
                    g = h === "{point.y}" ? (c.yPrefix || "") + td(this.y, A(c.yDecimals, d)) + (c.ySuffix || "") : g[e[k].split(f)[1]];
                    a = a.replace(e[k], g)
                }
            }
            return a
        },
        update: function (a, b, c) {
            var d = this,
                e = d.series,
                f = d.graphic,
                g, h = e.data,
                k = h.length,
                i = e.chart;
            b = A(b, true);
            d.firePointEvent("update", {
                options: a
            }, function () {
                d.applyOptions(a);
                if (qc(a)) {
                    e.getAttribs();
                    f && f.attr(d.pointAttr[e.state])
                }
                for (g = 0; g < k; g++) if (h[g] === d) {
                    e.xData[g] = d.x;
                    e.yData[g] = d.y;
                    e.options.data[g] = a;
                    break
                }
                e.isDirty = true;
                e.isDirtyData = true;
                b && i.redraw(c)
            })
        },
        remove: function (a, b) {
            var c = this,
                d = c.series,
                e = d.chart,
                f, g = d.data,
                h = g.length;
            Tc(b, e);
            a = A(a, true);
            c.firePointEvent("remove", null, function () {
                for (f = 0; f < h; f++) if (g[f] === c) {
                    g.splice(f, 1);
                    d.options.data.splice(f, 1);
                    d.xData.splice(f, 1);
                    d.yData.splice(f, 1);
                    break
                }
                c.destroy();
                d.isDirty = true;
                d.isDirtyData = true;
                a && e.redraw()
            })
        },
        firePointEvent: function (a, b, c) {
            var d = this,
                e = this.series.options;
            if (e.point.events[a] || d.options && d.options.events && d.options.events[a]) this.importEvents();
            if (a === "click" && e.allowPointSelect) c = function (f) {
                d.select(null, f.ctrlKey || f.metaKey || f.shiftKey)
            };
            Na(this, a, b, c)
        },
        importEvents: function () {
            if (!this.hasImportedEvents) {
                var a = X(this.series.options.point, this.options).events,
                    b;
                this.events = a;
                for (b in a) ra(this, b, a[b]);
                this.hasImportedEvents = true
            }
        },
        setState: function (a) {
            var b = this.plotX,
                c = this.plotY,
                d = this.series,
                e = d.options.states,
                f = bb[d.type].marker && d.options.marker,
                g = f && !f.enabled,
                h = f && f.states[a],
                k = h && h.enabled === false,
                i = d.stateMarkerGraphic,
                j = d.chart,
                l = this.pointAttr;
            a = a || Hb;
            if (!(a === this.state || this.selected && a !== "select" || e[a] && e[a].enabled === false || a && (k || g && !h.enabled))) {
                if (this.graphic) {
                    e = l[a].r;
                    this.graphic.attr(X(l[a], e ? aa({
                        x: b - e,
                        y: c - e
                    }, this.graphic.symbolName ? {
                        width: 2 * e,
                        height: 2 * e
                    } : {}) : {}))
                } else {
                    if (a) {
                        if (!i) {
                            e = f.radius;
                            d.stateMarkerGraphic = i = j.renderer.symbol(d.symbol, -e, -e, 2 * e, 2 * e).attr(l[a]).add(d.group)
                        }
                        i.translate(b, c)
                    }
                    if (i) i[a ? "show" : "hide"]()
                }
                this.state = a
            }
        }
    };
    var zb = function () {};
    zb.prototype = {
        isCartesian: true,
        type: "line",
        pointClass: Ec,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        init: function (a, b) {
            var c, d;
            d = a.series.length;
            this.chart = a;
            this.options = b = this.setOptions(b);
            this.bindAxes();
            aa(this, {
                index: d,
                name: b.name || "Series " + (d + 1),
                state: Hb,
                pointAttr: {},
                visible: b.visible !== false,
                selected: b.selected === true
            });
            d = b.events;
            for (c in d) ra(this, c, d[c]);
            if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = true;
            this.getColor();
            this.getSymbol();
            this.setData(b.data, false)
        },
        bindAxes: function () {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            a.isCartesian && y(["xAxis", "yAxis"], function (e) {
                y(c[e], function (f) {
                    d = f.options;
                    if (b[e] === d.index || b[e] === la && d.index === 0) {
                        f.series.push(a);
                        a[e] = f;
                        f.isDirty = true
                    }
                })
            })
        },
        autoIncrement: function () {
            var a = this.options,
                b = this.xIncrement;
            b = A(b, a.pointStart, 0);
            this.pointInterval = A(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        },
        getSegments: function () {
            var a = -1,
                b = [],
                c = this.points;
            y(c, function (d, e) {
                if (d.y === null) {
                    e > a + 1 && b.push(c.slice(a + 1, e));
                    a = e
                } else e === c.length - 1 && b.push(c.slice(a + 1, e + 1))
            });
            this.segments = b
        },
        setOptions: function (a) {
            var b = this.chart.options,
                c = b.plotOptions,
                d = a.data;
            a.data = null;
            a = X(c[this.type], c.series, a);
            a.data = d;
            this.tooltipOptions = X(b.tooltip, a.tooltip);
            return a
        },
        getColor: function () {
            var a = this.chart.options.colors,
                b = this.chart.counters;
            this.color = this.options.color || a[b.color++] || "#0000ff";
            b.wrapColor(a.length)
        },
        getSymbol: function () {
            var a = this.chart.options.symbols,
                b = this.chart.counters;
            this.symbol = this.options.marker.symbol || a[b.symbol++];
            b.wrapSymbol(a.length)
        },
        addPoint: function (a, b, c, d) {
            var e = this.data,
                f = this.graph,
                g = this.area,
                h = this.chart,
                k = this.xData,
                i = this.yData,
                j = f && f.shift || 0,
                l = this.options.data;
            Tc(d, h);
            if (f && c) f.shift = j + 1;
            if (g) {
                g.shift = j + 1;
                g.isArea = true
            }
            b = A(b, true);
            d = {
                series: this
            };
            this.pointClass.prototype.applyOptions.apply(d, [a]);
            k.push(d.x);
            i.push(d.y);
            l.push(a);
            if (c) if (e[0]) e[0].remove(false);
            else {
                e.shift();
                k.shift();
                i.shift();
                l.shift()
            }
            this.getAttribs();
            this.isDirtyData = this.isDirty = true;
            b && h.redraw()
        },
        setData: function (a, b) {
            var c = this.points,
                d = this.options,
                e = this.initialColor,
                f = this.chart,
                g = null;
            this.xIncrement = null;
            this.pointRange = this.xAxis && this.xAxis.categories && 1 || d.pointRange;
            if (P(e)) f.counters.color = e;
            var h = [],
                k = [],
                i = a.length,
                j = this.valueCount === 4;
            if (i > (d.turboThreshold || 1E3)) {
                for (e = 0; g === null && e < i;) {
                    g = a[e];
                    e++
                }
                if (rd(g)) {
                    g = A(d.pointStart, 0);
                    d = A(d.pointInterval, 1);
                    for (e = 0; e < i; e++) {
                        h[e] = g;
                        k[e] = a[e];
                        g += d
                    }
                    this.xIncrement = g
                } else if (Object.prototype.toString.call(g) === "[object Array]") if (j) for (e = 0; e < i; e++) {
                    d = a[e];
                    h[e] = d[0];
                    k[e] = d.slice(1, 5)
                } else for (e = 0; e < i; e++) {
                    d = a[e];
                    h[e] = d[0];
                    k[e] = d[1]
                }
            } else for (e = 0; e < i; e++) {
                d = {
                    series: this
                };
                this.pointClass.prototype.applyOptions.apply(d, [a[e]]);
                h[e] = d.x;
                k[e] = j ? [d.open, d.high, d.low, d.close] : d.y
            }
            this.data = [];
            this.options.data = a;
            this.xData = h;
            this.yData = k;
            for (e = c && c.length || 0; e--;) c[e] && c[e].destroy && c[e].destroy();
            this.isDirty = this.isDirtyData = f.isDirtyBox = true;
            A(b, true) && f.redraw(false)
        },
        remove: function (a, b) {
            var c = this,
                d = c.chart;
            a = A(a, true);
            if (!c.isRemoving) {
                c.isRemoving = true;
                Na(c, "remove", null, function () {
                    c.destroy();
                    d.isDirtyLegend = d.isDirtyBox = true;
                    a && d.redraw(b)
                })
            }
            c.isRemoving = false
        },
        processData: function () {
            var a = this.xData,
                b = this.yData,
                c = a.length,
                d = 0,
                e = c,
                f, g = this.options.cropThreshold;
            if (this.isCartesian && !this.isDirty && !this.xAxis.isDirty && !this.yAxis.isDirty) return false;
            if (!g || c > g || this.forceCrop) {
                var h = this.xAxis.getExtremes();
                g = h.min;
                h = h.max;
                if (a[c - 1] < g || a[0] > h) {
                    a = [];
                    b = []
                } else if (a[0] < g || a[c - 1] > h) {
                    for (f = 0; f < c; f++) if (a[f] >= g) {
                        d = ca(0, f - 1);
                        break
                    }
                    for (; f < c; f++) if (a[f] > h) {
                        e = f + 1;
                        break
                    }
                    a = a.slice(d, e);
                    b = b.slice(d, e);
                    f = true
                }
            }
            this.cropped = f;
            this.cropStart = d;
            this.processedXData = a;
            this.processedYData = b
        },
        generatePoints: function () {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                k, i = this.hasGroupedData,
                j = [],
                l;
            if (!b && !i) {
                b = [];
                b.length = a.length;
                b = this.data = b
            }
            for (l = 0; l < g; l++) {
                k = h + l;
                if (i) j[l] = (new f).init(this, [d[l]].concat(rc(e[l])));
                else {
                    if (b[k]) k = b[k];
                    else b[k] = k = (new f).init(this, a[k], d[l]);
                    j[l] = k
                }
            }
            if (b && g !== (c = b.length)) for (l = 0; l < c; l++) {
                if (l === h && !i) l += g;
                b[l] && b[l].destroyElements()
            }
            this.data = b;
            this.points = j
        },
        translate: function () {
            this.processedXData || this.processData();
            this.generatePoints();
            var a = this.chart,
                b = this.options.stacking,
                c = this.xAxis.categories,
                d = this.yAxis,
                e = this.points,
                f = e.length,
                g = !! this.modifyValue,
                h;
            for (h = 0; h < f; h++) {
                var k = e[h],
                    i = k.x,
                    j = k.y,
                    l = k.low,
                    p = d.stacks[(j < 0 ? "-" : "") + this.stackKey];
                k.plotX = this.xAxis.translate(i);
                if (b && this.visible && p && p[i]) {
                    l = p[i];
                    i = l.total;
                    l.cum = l = l.cum - j;
                    j = l + j;
                    if (b === "percent") {
                        l = i ? l * 100 / i : 0;
                        j = i ? j * 100 / i : 0
                    }
                    k.percentage = i ? k.y * 100 / i : 0;
                    k.stackTotal = i
                }
                if (P(l)) k.yBottom = d.translate(l, 0, 1, 0, 1);
                if (g) j = this.modifyValue(j, k);
                if (j !== null) k.plotY = d.translate(j, 0, 1, 0, 1);
                k.clientX = a.inverted ? a.plotHeight - k.plotX : k.plotX;
                k.category = c && c[k.x] !== la ? c[k.x] : k.x
            }
            this.getSegments()
        },
        setTooltipPoints: function (a) {
            var b = this.chart,
                c = b.inverted,
                d = [];
            b = Q((c ? b.plotTop : b.plotLeft) + b.plotSizeX);
            var e, f;
            e = this.xAxis;
            var g, h, k = [];
            if (this.options.enableMouseTracking !== false) {
                if (a) this.tooltipPoints = null;
                y(this.segments || this.points, function (i) {
                    d = d.concat(i)
                });
                if (e && e.reversed) d = d.reverse();
                a = d.length;
                for (h = 0; h < a; h++) {
                    g = d[h];
                    e = d[h - 1] ? d[h - 1]._high + 1 : 0;
                    for (f = g._high = d[h + 1] ? Jb((g.plotX + (d[h + 1] ? d[h + 1].plotX : b)) / 2) : b; e <= f;) k[c ? b - e++ : e++] = g
                }
                this.tooltipPoints = k
            }
        },
        tooltipHeaderFormatter: function (a) {
            var b = this.tooltipOptions,
                c = b.xDateFormat || "%A, %b %e, %Y",
                d = this.xAxis;
            return b.headerFormat.replace("{point.key}", d && d.options.type === "datetime" ? yc(c, a) : a).replace("{series.name}", this.name).replace("{series.color}", this.color)
        },
        onMouseOver: function () {
            var a = this.chart,
                b = a.hoverSeries;
            if (!(!Db && a.mouseIsDown)) {
                b && b !== this && b.onMouseOut();
                this.options.events.mouseOver && Na(this, "mouseOver");
                this.setState(Ub);
                a.hoverSeries = this
            }
        },
        onMouseOut: function () {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            d && d.onMouseOut();
            this && a.events.mouseOut && Na(this, "mouseOut");
            c && !a.stickyTracking && c.hide();
            this.setState();
            b.hoverSeries = null
        },
        animate: function (a) {
            var b = this.chart,
                c = this.clipRect,
                d = this.options.animation;
            if (d && !qc(d)) d = {};
            if (a) {
                if (!c.isAnimating) {
                    c.attr("width", 0);
                    c.isAnimating = true
                }
            } else {
                c.animate({
                    width: b.plotSizeX
                }, d);
                this.animate = null
            }
        },
        drawPoints: function () {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, k;
            if (this.options.marker.enabled) for (f = b.length; f--;) {
                g = b[f];
                d = g.plotX;
                e = g.plotY;
                k = g.graphic;
                if (e !== la && !isNaN(e)) {
                    a = g.pointAttr[g.selected ? "select" : Hb];
                    h = a.r;
                    if (k) k.animate(aa({
                        x: d - h,
                        y: e - h
                    }, k.symbolName ? {
                        width: 2 * h,
                        height: 2 * h
                    } : {}));
                    else g.graphic = c.renderer.symbol(A(g.marker && g.marker.symbol, this.symbol), d - h, e - h, 2 * h, 2 * h).attr(a).add(this.group)
                }
            }
        },
        convertAttribs: function (a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) {
                g = e[f];
                h[f] = A(a[g], b[f], c[f], d[f])
            }
            return h
        },
        getAttribs: function () {
            var a = this,
                b = bb[a.type].marker ? a.options.marker : a.options,
                c = b.states,
                d = c[Ub],
                e, f = a.color,
                g = {
                    stroke: f,
                    fill: f
                },
                h = a.points,
                k = [],
                i, j = a.pointAttrToOptions,
                l;
            if (a.options.marker) {
                d.radius = d.radius || b.radius + 2;
                d.lineWidth = d.lineWidth || b.lineWidth + 1
            } else d.color = d.color || Dc(d.color || f).brighten(d.brightness).get();
            k[Hb] = a.convertAttribs(b, g);
            y([Ub, "select"], function (p) {
                k[p] = a.convertAttribs(c[p], k[Hb])
            });
            a.pointAttr = k;
            for (f = h.length; f--;) {
                g = h[f];
                if ((b = g.options && g.options.marker || g.options) && b.enabled === false) b.radius = 0;
                e = false;
                if (g.options) for (l in j) if (P(b[j[l]])) e = true;
                if (e) {
                    i = [];
                    c = b.states || {};
                    e = c[Ub] = c[Ub] || {};
                    if (!a.options.marker) e.color = Dc(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
                    i[Hb] = a.convertAttribs(b, k[Hb]);
                    i[Ub] = a.convertAttribs(c[Ub], k[Ub], i[Hb]);
                    i.select = a.convertAttribs(c.select, k.select, i[Hb])
                } else i = k;
                g.pointAttr = i
            }
        },
        destroy: function () {
            var a = this,
                b = a.chart,
                c = a.clipRect,
                d = /\/5[0-9\.]+ (Safari|Mobile)\//.test($c),
                e, f, g = a.data || [],
                h, k, i;
            Na(a, "destroy");
            Nb(a);
            y(["xAxis", "yAxis"], function (j) {
                if (i = a[j]) {
                    Rc(i.series, a);
                    i.isDirty = true
                }
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (f = g.length; f--;)(h = g[f]) && h.destroy && h.destroy();
            a.points = null;
            if (c && c !== b.clipRect) a.clipRect = c.destroy();
            y(["area", "graph", "dataLabelsGroup", "group", "tracker"], function (j) {
                if (a[j]) {
                    e = d && j === "group" ? "hide" : "destroy";
                    a[j][e]()
                }
            });
            if (b.hoverSeries === a) b.hoverSeries = null;
            Rc(b.series, a);
            for (k in a) delete a[k]
        },
        drawDataLabels: function () {
            if (this.options.dataLabels.enabled) {
                var a, b, c = this.points,
                    d = this.options,
                    e = d.dataLabels,
                    f, g = this.dataLabelsGroup,
                    h = this.chart,
                    k = h.renderer,
                    i = h.inverted,
                    j = this.type,
                    l;
                l = d.stacking;
                var p = j === "column" || j === "bar",
                    G = e.verticalAlign === null,
                    B = e.y === null;
                if (p) if (l) {
                    if (G) e = X(e, {
                        verticalAlign: "middle"
                    });
                    if (B) e = X(e, {
                        y: {
                            top: 14,
                            middle: 4,
                            bottom: -6
                        }[e.verticalAlign]
                    })
                } else if (G) e = X(e, {
                    verticalAlign: "top"
                });
                if (g) g.translate(h.plotLeft, h.plotTop);
                else g = this.dataLabelsGroup = k.g("data-labels").attr({
                    visibility: this.visible ? Mb : Cb,
                    zIndex: 6
                }).translate(h.plotLeft, h.plotTop).add();
                l = e.color;
                if (l === "auto") l = null;
                e.style.color = A(l, this.color, "black");
                y(c, function (E) {
                    var H = E.barX,
                        J = H && H + E.barW / 2 || E.plotX || -999,
                        D = A(E.plotY, -999),
                        n = E.dataLabel,
                        s = e.align,
                        z = B ? E.y >= 0 ? -6 : 12 : e.y;
                    f = e.formatter.call(E.getLabelConfig());
                    a = (i ? h.plotWidth - D : J) + e.x;
                    b = (i ? h.plotHeight - J : D) + z;
                    if (j === "column") a += {
                        left: -1,
                        right: 1
                    }[s] * E.barW / 2 || 0;
                    if (i && E.y < 0) {
                        s = "right";
                        a -= 10
                    }
                    if (n) {
                        if (i && !e.y) b = b + ga(n.styles.lineHeight) * 0.9 - n.getBBox().height / 2;
                        n.attr({
                            text: f
                        }).animate({
                            x: a,
                            y: b
                        })
                    } else if (P(f)) {
                        n = E.dataLabel = k.text(f, a, b).attr({
                            align: s,
                            rotation: e.rotation,
                            zIndex: 1
                        }).css(e.style).add(g);
                        i && !e.y && n.attr({
                            y: b + ga(n.styles.lineHeight) * 0.9 - n.getBBox().height / 2
                        })
                    }
                    if (p && d.stacking && n) {
                        J = E.barY;
                        D = E.barW;
                        E = E.barH;
                        n.align(e, null, {
                            x: i ? h.plotWidth - J - E : H,
                            y: i ? h.plotHeight - H - D : J,
                            width: i ? E : D,
                            height: i ? D : E
                        })
                    }
                })
            }
        },
        drawGraph: function () {
            var a = this,
                b = a.options,
                c = a.graph,
                d = [],
                e, f = a.area,
                g = a.group,
                h = b.lineColor || a.color,
                k = b.lineWidth,
                i = b.dashStyle,
                j, l = a.chart.renderer,
                p = a.yAxis.getThreshold(b.threshold),
                G = /^area/.test(a.type),
                B = [],
                E = [];
            y(a.segments, function (H) {
                j = [];
                y(H, function (s, z) {
                    if (a.getPointSpline) j.push.apply(j, a.getPointSpline(H, s, z));
                    else {
                        j.push(z ? Ia : Wa);
                        z && b.step && j.push(s.plotX, H[z - 1].plotY);
                        j.push(s.plotX, s.plotY)
                    }
                });
                if (H.length > 1) d = d.concat(j);
                else B.push(H[0]);
                if (G) {
                    var J = [],
                        D, n = j.length;
                    for (D = 0; D < n; D++) J.push(j[D]);
                    n === 3 && J.push(Ia, j[1], j[2]);
                    if (b.stacking && a.type !== "areaspline") for (D = H.length - 1; D >= 0; D--) J.push(H[D].plotX, H[D].yBottom);
                    else J.push(Ia, H[H.length - 1].plotX, p, Ia, H[0].plotX, p);
                    E = E.concat(J)
                }
            });
            a.graphPath = d;
            a.singlePoints = B;
            if (G) {
                e = A(b.fillColor, Dc(a.color).setOpacity(b.fillOpacity || 0.75).get());
                if (f) f.animate({
                    d: E
                });
                else a.area = a.chart.renderer.path(E).attr({
                    fill: e
                }).add(g)
            }
            if (c) {
                ld(c);
                c.animate({
                    d: d
                })
            } else if (k) {
                c = {
                    stroke: h,
                    "stroke-width": k
                };
                if (i) c.dashstyle = i;
                a.graph = l.path(d).attr(c).add(g).shadow(b.shadow)
            }
        },
        render: function () {
            var a = this,
                b = a.chart,
                c, d, e = a.options,
                f = e.clip !== false,
                g = e.animation,
                h = g && a.animate;
            g = h ? g && g.duration || 500 : 0;
            var k = a.clipRect,
                i = b.renderer;
            if (!k) {
                k = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : i.clipRect(0, 0, b.plotSizeX, b.plotSizeY + 1);
                if (!b.clipRect) b.clipRect = k
            }
            if (!a.group) {
                c = a.group = i.g("series");
                if (b.inverted) {
                    d = function () {
                        c.attr({
                            width: b.plotWidth,
                            height: b.plotHeight
                        }).invert()
                    };
                    d();
                    ra(b, "resize", d);
                    ra(a, "destroy", function () {
                        Nb(b, "resize", d)
                    })
                }
                f && c.clip(a.clipRect);
                c.attr({
                    visibility: a.visible ? Mb : Cb,
                    zIndex: e.zIndex
                }).translate(a.xAxis.left, a.yAxis.top).add(b.seriesGroup)
            }
            a.drawDataLabels();
            h && a.animate(true);
            a.getAttribs();
            a.drawGraph && a.drawGraph();
            a.drawPoints();
            a.options.enableMouseTracking !== false && a.drawTracker();
            h && a.animate();
            setTimeout(function () {
                k.isAnimating = false;
                if ((c = a.group) && k !== b.clipRect && k.renderer) {
                    if (f) c.clip(a.clipRect = b.clipRect);
                    k.destroy()
                }
            }, g);
            a.isDirty = a.isDirtyData = false
        },
        redraw: function () {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.group;
            if (c) {
                a.inverted && c.attr({
                    width: a.plotWidth,
                    height: a.plotHeight
                });
                c.animate({
                    translateX: this.xAxis.left,
                    translateY: this.yAxis.top
                })
            }
            this.translate();
            this.setTooltipPoints(true);
            this.render();
            b && Na(this, "updatedData")
        },
        setState: function (a) {
            var b = this.options,
                c = this.graph,
                d = b.states;
            b = b.lineWidth;
            a = a || Hb;
            if (this.state !== a) {
                this.state = a;
                if (!(d[a] && d[a].enabled === false)) {
                    if (a) b = d[a].lineWidth || b + 1;
                    if (c && !c.dashstyle) c.attr({
                        "stroke-width": b
                    }, a ? 0 : 500)
                }
            }
        },
        setVisible: function (a, b) {
            var c = this.chart,
                d = this.legendItem,
                e = this.group,
                f = this.tracker,
                g = this.dataLabelsGroup,
                h, k = this.points,
                i = c.options.chart.ignoreHiddenSeries;
            h = this.visible;
            h = (this.visible = a = a === la ? !h : a) ? "show" : "hide";
            e && e[h]();
            if (f) f[h]();
            else if (k) for (e = k.length; e--;) {
                f = k[e];
                f.tracker && f.tracker[h]()
            }
            g && g[h]();
            d && c.legend.colorizeItem(this, a);
            this.isDirty = true;
            this.options.stacking && y(c.series, function (j) {
                if (j.options.stacking && j.visible) j.isDirty = true
            });
            if (i) c.isDirtyBox = true;
            b !== false && c.redraw();
            Na(this, h)
        },
        show: function () {
            this.setVisible(true)
        },
        hide: function () {
            this.setVisible(false)
        },
        select: function (a) {
            this.selected = a = a === la ? !this.selected : a;
            if (this.checkbox) this.checkbox.checked = a;
            Na(this, a ? "select" : "unselect")
        },
        drawTracker: function () {
            var a = this,
                b = a.options,
                c = [].concat(a.graphPath),
                d = c.length,
                e = a.chart,
                f = e.options.tooltip.snap,
                g = a.tracker,
                h = b.cursor;
            h = h && {
                cursor: h
            };
            var k = a.singlePoints,
                i;
            if (d) for (i = d + 1; i--;) {
                c[i] === Wa && c.splice(i + 1, 0, c[i + 1] - f, c[i + 2], Ia);
                if (i && c[i] === Wa || i === d) c.splice(i, 0, Ia, c[i - 2] + f, c[i - 1])
            }
            for (i = 0; i < k.length; i++) {
                d = k[i];
                c.push(Wa, d.plotX - f, d.plotY, Ia, d.plotX + f, d.plotY)
            }
            if (g) g.attr({
                d: c
            });
            else a.tracker = e.renderer.path(c).attr({
                isTracker: true,
                stroke: He,
                fill: Ib,
                "stroke-width": b.lineWidth + 2 * f,
                visibility: a.visible ? Mb : Cb,
                zIndex: b.zIndex || 1
            }).on(Db ? "touchstart" : "mouseover", function () {
                e.hoverSeries !== a && a.onMouseOver()
            }).on("mouseout", function () {
                b.stickyTracking || a.onMouseOut()
            }).css(h).add(e.trackerGroup)
        }
    };
    Y = Ab(zb);
    jb.line = Y;
    Y = Ab(zb, {
        type: "area",
        useThreshold: true
    });
    jb.area = Y;
    Y = Ab(zb, {
        type: "spline",
        getPointSpline: function (a, b, c) {
            var d = b.plotX,
                e = b.plotY,
                f = a[c - 1],
                g = a[c + 1],
                h, k, i, j;
            if (c && c < a.length - 1) {
                a = f.plotY;
                i = g.plotX;
                g = g.plotY;
                var l;
                h = (1.5 * d + f.plotX) / 2.5;
                k = (1.5 * e + a) / 2.5;
                i = (1.5 * d + i) / 2.5;
                j = (1.5 * e + g) / 2.5;
                l = (j - k) * (i - d) / (i - h) + e - j;
                k += l;
                j += l;
                if (k > a && k > e) {
                    k = ca(a, e);
                    j = 2 * e - k
                } else if (k < a && k < e) {
                    k = Ha(a, e);
                    j = 2 * e - k
                }
                if (j > g && j > e) {
                    j = ca(g, e);
                    k = 2 * e - j
                } else if (j < g && j < e) {
                    j = Ha(g, e);
                    k = 2 * e - j
                }
                b.rightContX = i;
                b.rightContY = j
            }
            if (c) {
                b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, k || e, d, e];
                f.rightContX = f.rightContY = null
            } else b = [Wa, d, e];
            return b
        }
    });
    jb.spline = Y;
    Y = Ab(Y, {
        type: "areaspline",
        useThreshold: true
    });
    jb.areaspline = Y;
    var Ld = Ab(zb, {
        type: "column",
        useThreshold: true,
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color",
            r: "borderRadius"
        },
        init: function () {
            zb.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && y(b.series, function (c) {
                if (c.type === a.type) c.isDirty = true
            })
        },
        translate: function () {
            var a = this,
                b = a.chart,
                c = a.options,
                d = c.stacking,
                e = c.borderWidth,
                f = 0,
                g = a.xAxis,
                h = g.reversed,
                k = {},
                i, j;
            zb.prototype.translate.apply(a);
            y(b.series, function (s) {
                if (s.type === a.type && s.visible && a.options.group === s.options.group) {
                    if (s.options.stacking) {
                        i = s.stackKey;
                        if (k[i] === la) k[i] = f++;
                        j = k[i]
                    } else j = f++;
                    s.columnIndex = j
                }
            });
            var l = a.points,
                p = A(a.pointRange, g.pointRange);
            g = rb(g.translate(0) - g.translate(p));
            p = g * c.groupPadding;
            var G = (g - 2 * p) / f,
                B = c.pointWidth,
                E = P(B) ? (G - B) / 2 : G * c.pointPadding,
                H = Ed(ca(A(B, G - 2 * E), 1)),
                J = E + (p + ((h ? f - a.columnIndex : a.columnIndex) || 0) * G - g / 2) * (h ? -1 : 1),
                D = a.yAxis.getThreshold(c.threshold),
                n = A(c.minPointLength, 5);
            y(l, function (s) {
                var z = s.plotY,
                    Z = s.yBottom || D,
                    C = s.plotX + J,
                    L = Ed(Ha(z, Z)),
                    sa = Ed(ca(z, Z) - L),
                    ab = a.yAxis.stacks[(s.y < 0 ? "-" : "") + a.stackKey],
                    Oa;
                d && a.visible && ab && ab[s.x] && ab[s.x].setOffset(J, H);
                if (rb(sa) < n) {
                    if (n) {
                        sa = n;
                        L = rb(L - D) > n ? Z - n : D - (z <= D ? n : 0)
                    }
                    Oa = L - 3
                }
                aa(s, {
                    barX: C,
                    barY: L,
                    barW: H,
                    barH: sa
                });
                s.shapeType = "rect";
                z = aa(b.renderer.Element.prototype.crisp.apply({}, [e, C, L, H, sa]), {
                    r: c.borderRadius
                });
                if (e % 2) {
                    z.y -= 1;
                    z.height += 1
                }
                s.shapeArgs = z;
                s.trackerArgs = P(Oa) && X(s.shapeArgs, {
                    height: ca(6, sa + 3),
                    y: Oa
                })
            })
        },
        getSymbol: function () {},
        drawGraph: function () {},
        drawPoints: function () {
            var a = this,
                b = a.options,
                c = a.chart.renderer,
                d, e;
            y(a.points, function (f) {
                var g = f.plotY;
                if (g !== la && !isNaN(g) && f.y !== null) {
                    d = f.graphic;
                    e = f.shapeArgs;
                    if (d) {
                        ld(d);
                        d.animate(e)
                    } else f.graphic = d = c[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : Hb]).add(a.group).shadow(b.shadow)
                }
            })
        },
        drawTracker: function () {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d, e, f = +new Date,
                g = a.options,
                h = g.cursor,
                k = h && {
                    cursor: h
                },
                i;
            y(a.points, function (j) {
                e = j.tracker;
                d = j.trackerArgs || j.shapeArgs;
                delete d.strokeWidth;
                if (j.y !== null) if (e) e.attr(d);
                else j.tracker = c[j.shapeType](d).attr({
                    isTracker: f,
                    fill: He,
                    visibility: a.visible ? Mb : Cb,
                    zIndex: g.zIndex || 1
                }).on(Db ? "touchstart" : "mouseover", function (l) {
                    i = l.relatedTarget || l.fromElement;
                    b.hoverSeries !== a && Pa(i, "isTracker") !== f && a.onMouseOver();
                    j.onMouseOver()
                }).on("mouseout", function (l) {
                    if (!g.stickyTracking) {
                        i = l.relatedTarget || l.toElement;
                        Pa(i, "isTracker") !== f && a.onMouseOut()
                    }
                }).css(k).add(j.group || b.trackerGroup)
            })
        },
        animate: function (a) {
            var b = this,
                c = b.points;
            if (!a) {
                y(c, function (d) {
                    var e = d.graphic;
                    d = d.shapeArgs;
                    if (e) {
                        e.attr({
                            height: 0,
                            y: b.yAxis.translate(0, 0, 1)
                        });
                        e.animate({
                            height: d.height,
                            y: d.y
                        }, b.options.animation)
                    }
                });
                b.animate = null
            }
        },
        remove: function () {
            var a = this,
                b = a.chart;
            b.hasRendered && y(b.series, function (c) {
                if (c.type === a.type) c.isDirty = true
            });
            zb.prototype.remove.apply(a, arguments)
        }
    });
    jb.column = Ld;
    Y = Ab(Ld, {
        type: "bar",
        init: function () {
            this.inverted = true;
            Ld.prototype.init.apply(this, arguments)
        }
    });
    jb.bar = Y;
    Y = Ab(zb, {
        type: "scatter",
        translate: function () {
            var a = this;
            zb.prototype.translate.apply(a);
            y(a.points, function (b) {
                b.shapeType = "circle";
                b.shapeArgs = {
                    x: b.plotX,
                    y: b.plotY,
                    r: a.chart.options.tooltip.snap
                }
            })
        },
        drawTracker: function () {
            var a = this,
                b = a.options.cursor,
                c = b && {
                    cursor: b
                },
                d;
            y(a.points, function (e) {
                (d = e.graphic) && d.attr({
                    isTracker: true
                }).on("mouseover", function () {
                    a.onMouseOver();
                    e.onMouseOver()
                }).on("mouseout", function () {
                    a.options.stickyTracking || a.onMouseOut()
                }).css(c)
            })
        }
    });
    jb.scatter = Y;
    Y = Ab(Ec, {
        init: function () {
            Ec.prototype.init.apply(this, arguments);
            var a = this,
                b;
            aa(a, {
                visible: a.visible !== false,
                name: A(a.name, "Slice")
            });
            b = function () {
                a.slice()
            };
            ra(a, "select", b);
            ra(a, "unselect", b);
            return a
        },
        setVisible: function (a) {
            var b = this.series.chart,
                c = this.tracker,
                d = this.dataLabel,
                e = this.connector,
                f = this.shadowGroup,
                g;
            g = (this.visible = a = a === la ? !this.visible : a) ? "show" : "hide";
            this.group[g]();
            c && c[g]();
            d && d[g]();
            e && e[g]();
            f && f[g]();
            this.legendItem && b.legend.colorizeItem(this, a)
        },
        slice: function (a, b, c) {
            var d = this.series.chart,
                e = this.slicedTranslation;
            Tc(c, d);
            A(b, true);
            a = this.sliced = P(a) ? a : !this.sliced;
            a = {
                translateX: a ? e[0] : d.plotLeft,
                translateY: a ? e[1] : d.plotTop
            };
            this.group.animate(a);
            this.shadowGroup && this.shadowGroup.animate(a)
        }
    });
    Y = Ab(zb, {
        type: "pie",
        isCartesian: false,
        pointClass: Y,
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        getColor: function () {
            this.initialColor = this.chart.counters.color
        },
        animate: function () {
            var a = this;
            y(a.points, function (b) {
                var c = b.graphic;
                b = b.shapeArgs;
                var d = -Pc / 2;
                if (c) {
                    c.attr({
                        r: 0,
                        start: d,
                        end: d
                    });
                    c.animate({
                        r: b.r,
                        start: b.start,
                        end: b.end
                    }, a.options.animation)
                }
            });
            a.animate = null
        },
        setData: function () {
            zb.prototype.setData.apply(this, arguments);
            this.processData();
            this.generatePoints()
        },
        translate: function () {
            this.generatePoints();
            var a = 0,
                b = -0.25,
                c = this.options,
                d = c.slicedOffset,
                e = d + c.borderWidth,
                f = c.center.concat([c.size, c.innerSize || 0]),
                g = this.chart,
                h = g.plotWidth,
                k = g.plotHeight,
                i, j, l, p = this.points,
                G = 2 * Pc,
                B, E = Ha(h, k),
                H, J, D, n = c.dataLabels.distance;
            f = ad(f, function (s, z) {
                return (H = /%$/.test(s)) ? [h, k, E, E][z] * ga(s) / 100 : s
            });
            this.getX = function (s, z) {
                l = xa.asin((s - f[1]) / (f[2] / 2 + n));
                return f[0] + (z ? -1 : 1) * Pb(l) * (f[2] / 2 + n)
            };
            this.center = f;
            y(p, function (s) {
                a += s.y
            });
            y(p, function (s) {
                B = a ? s.y / a : 0;
                i = Q(b * G * 1E3) / 1E3;
                b += B;
                j = Q(b * G * 1E3) / 1E3;
                s.shapeType = "arc";
                s.shapeArgs = {
                    x: f[0],
                    y: f[1],
                    r: f[2] / 2,
                    innerR: f[3] / 2,
                    start: i,
                    end: j
                };
                l = (j + i) / 2;
                s.slicedTranslation = ad([Pb(l) * d + g.plotLeft, Yb(l) * d + g.plotTop], Q);
                J = Pb(l) * f[2] / 2;
                D = Yb(l) * f[2] / 2;
                s.tooltipPos = [f[0] + J * 0.7, f[1] + D * 0.7];
                s.labelPos = [f[0] + J + Pb(l) * n, f[1] + D + Yb(l) * n, f[0] + J + Pb(l) * e, f[1] + D + Yb(l) * e, f[0] + J, f[1] + D, n < 0 ? "center" : l < G / 4 ? "left" : "right", l];
                s.percentage = B * 100;
                s.total = a
            });
            this.setTooltipPoints()
        },
        render: function () {
            this.getAttribs();
            this.drawPoints();
            this.options.enableMouseTracking !== false && this.drawTracker();
            this.drawDataLabels();
            this.options.animation && this.animate && this.animate();
            this.isDirty = false
        },
        drawPoints: function () {
            var a = this.chart,
                b = a.renderer,
                c, d, e, f = this.options.shadow,
                g, h;
            y(this.points, function (k) {
                d = k.graphic;
                h = k.shapeArgs;
                e = k.group;
                g = k.shadowGroup;
                if (f && !g) g = k.shadowGroup = b.g("shadow").attr({
                    zIndex: 4
                }).add();
                if (!e) e = k.group = b.g("point").attr({
                    zIndex: 5
                }).add();
                c = k.sliced ? k.slicedTranslation : [a.plotLeft, a.plotTop];
                e.translate(c[0], c[1]);
                g && g.translate(c[0], c[1]);
                if (d) d.animate(h);
                else k.graphic = b.arc(h).attr(aa(k.pointAttr[Hb], {
                    "stroke-linejoin": "round"
                })).add(k.group).shadow(f, g);
                k.visible === false && k.setVisible(false)
            })
        },
        drawDataLabels: function () {
            var a = this.data,
                b, c = this.chart,
                d = this.options.dataLabels,
                e = A(d.connectorPadding, 10),
                f = A(d.connectorWidth, 1),
                g, h, k = A(d.softConnector, true),
                i = d.distance,
                j = this.center,
                l = j[2] / 2;
            j = j[1];
            var p = i > 0,
                G = [
                    [],
                    []
                ],
                B, E, H, J, D = 2,
                n;
            if (d.enabled) {
                zb.prototype.drawDataLabels.apply(this);
                y(a, function (sa) {
                    if (sa.dataLabel) G[sa.labelPos[7] < Pc / 2 ? 0 : 1].push(sa)
                });
                G[1].reverse();
                J = function (sa, ab) {
                    return ab.y - sa.y
                };
                for (a = G[0][0] && G[0][0].dataLabel && ga(G[0][0].dataLabel.styles.lineHeight); D--;) {
                    var s = [],
                        z = [],
                        Z = G[D],
                        C = Z.length,
                        L;
                    for (n = j - l - i; n <= j + l + i; n += a) s.push(n);
                    H = s.length;
                    if (C > H) {
                        h = [].concat(Z);
                        h.sort(J);
                        for (n = C; n--;) h[n].rank = n;
                        for (n = C; n--;) Z[n].rank >= H && Z.splice(n, 1);
                        C = Z.length
                    }
                    for (n = 0; n < C; n++) {
                        b = Z[n];
                        h = b.labelPos;
                        b = 9999;
                        for (E = 0; E < H; E++) {
                            g = rb(s[E] - h[1]);
                            if (g < b) {
                                b = g;
                                L = E
                            }
                        }
                        if (L < n && s[n] !== null) L = n;
                        else {
                            if (H < C - n + L && s[n] !== null) L = H - C + n;
                            for (; s[L] === null;) L++
                        }
                        z.push({
                            i: L,
                            y: s[L]
                        });
                        s[L] = null
                    }
                    z.sort(J);
                    for (n = 0; n < C; n++) {
                        b = Z[n];
                        h = b.labelPos;
                        g = b.dataLabel;
                        E = z.pop();
                        B = h[1];
                        H = b.visible === false ? Cb : Mb;
                        L = E.i;
                        E = E.y;
                        if (B > E && s[L + 1] !== null || B < E && s[L - 1] !== null) E = B;
                        B = this.getX(L === 0 || L === s.length - 1 ? B : E, D);
                        g.attr({
                            visibility: H,
                            align: h[6]
                        })[g.moved ? "animate" : "attr"]({
                            x: B + d.x + ({
                                left: e,
                                right: -e
                            }[h[6]] || 0),
                            y: E + d.y
                        });
                        g.moved = true;
                        if (p && f) {
                            g = b.connector;
                            h = k ? [Wa, B + (h[6] === "left" ? 5 : -5), E, "C", B, E, 2 * h[2] - h[4], 2 * h[3] - h[5], h[2], h[3], Ia, h[4], h[5]] : [Wa, B + (h[6] === "left" ? 5 : -5), E, Ia, h[2], h[3], Ia, h[4], h[5]];
                            if (g) {
                                g.animate({
                                    d: h
                                });
                                g.attr("visibility", H)
                            } else b.connector = g = this.chart.renderer.path(h).attr({
                                "stroke-width": f,
                                stroke: d.connectorColor || b.color || "#606060",
                                visibility: H,
                                zIndex: 3
                            }).translate(c.plotLeft, c.plotTop).add()
                        }
                    }
                }
            }
        },
        drawTracker: Ld.prototype.drawTracker,
        getSymbol: function () {}
    });
    jb.pie = Y;
    Y = zb.prototype;
    var Ve = Y.processData,
        We = Y.generatePoints,
        Xe = Y.destroy,
        Ye = Y.tooltipHeaderFormatter,
        bd = {
            sum: function (a) {
                var b = a.length,
                    c;
                if (!b && a.hasNulls) c = null;
                else if (b) for (c = 0; b--;) c += a[b];
                return c
            },
            average: function (a) {
                var b = a.length;
                a = bd.sum(a);
                if (typeof a === "number" && b) a /= b;
                return a
            },
            open: function (a) {
                return a.length ? a[0] : a.hasNulls ? null : la
            },
            high: function (a) {
                return a.length ? ca.apply(0, a) : a.hasNulls ? null : la
            },
            low: function (a) {
                return a.length ? Ha.apply(0, a) : a.hasNulls ? null : la
            },
            close: function (a) {
                return a.length ? a[a.length - 1] : a.hasNulls ? null : la
            },
            ohlc: function (a, b, c, d) {
                a = bd.open(a);
                b = bd.high(b);
                c = bd.low(c);
                d = bd.close(d);
                if (typeof a === "number" || typeof b === "number" || typeof c === "number" || typeof d === "number") return [a, b, c, d]
            }
        };
    Y.groupData = function (a, b, c, d) {
        var e = this.data,
            f = this.options.data,
            g = [],
            h = [],
            k = a.length,
            i, j;
        j = [];
        var l = [],
            p = [],
            G = [],
            B;
        for (B = 0; B <= k; B++) {
            for (; c[1] !== la && a[B] >= c[1] || B === k;) {
                i = c.shift();
                j = typeof d === "function" ? d(j, l, p, G) : bd[d](j, l, p, G);
                if (j !== la) {
                    g.push(i);
                    h.push(j)
                }
                j = [];
                l = [];
                p = [];
                G = [];
                if (B === k) break
            }
            if (B === k) break;
            i = b[B];
            if (d === "ohlc") {
                i = this.cropStart + B;
                var E = e && e[i] || this.pointClass.prototype.applyOptions.apply({}, [f[i]]);
                i = E.open;
                var H = E.high,
                    J = E.low;
                E = E.close;
                if (typeof i === "number") j.push(i);
                else if (i === null) j.hasNulls = true;
                if (typeof H === "number") l.push(H);
                else if (H === null) l.hasNulls = true;
                if (typeof J === "number") p.push(J);
                else if (J === null) p.hasNulls = true;
                if (typeof E === "number") G.push(E);
                else if (E === null) G.hasNulls = true
            } else if (typeof i === "number") j.push(i);
            else if (i === null) j.hasNulls = true
        }
        return [g, h]
    };
    Y.processData = function () {
        var a = this.options,
            b = a.dataGrouping,
            c = b && b.enabled;
        this.forceCrop = c;
        if (!(Ve.apply(this) === false || !c)) {
            c = this.chart;
            var d = this.processedXData,
                e = this.processedYData,
                f = c.plotSizeX,
                g = this.xAxis,
                h = A(g.groupPixelWidth, b.groupPixelWidth),
                k = f / h,
                i = d.length,
                j = this.groupedData,
                l = c.series;
            if (!g.groupPixelWidth) {
                for (c = l.length; c--;) if (l[c].xAxis === g && l[c].options.dataGrouping) h = ca(h, l[c].options.dataGrouping.groupPixelWidth);
                g.groupPixelWidth = h
            }
            y(j || [], function (p, G) {
                if (p) j[G] = p.destroy ? p.destroy() : null
            });
            if (i > k || b.forced) {
                this.hasGroupedData = true;
                this.points = null;
                c = g.getExtremes();
                g = c.min;
                k = c.max;
                f = h * (k - g) / f;
                h = ie(f, g, k, null, b.units);
                c = this.groupData(d, e, h, b.approximation);
                d = c[0];
                e = c[1];
                if (b.smoothed) {
                    c = d.length - 1;
                    for (d[c] = k; c-- && c > 0;) d[c] += f / 2;
                    d[0] = g
                }
                this.currentDataGrouping = h.info;
                if (a.pointRange === null) this.pointRange = h.info.totalRange;
                this.processedXData = d;
                this.processedYData = e
            } else {
                this.currentDataGrouping = null;
                this.pointRange = a.pointRange
            }
        }
    };
    Y.generatePoints = function () {
        We.apply(this);
        this.groupedData = this.hasGroupedData ? this.points : null
    };
    Y.tooltipHeaderFormatter = function (a) {
        var b = this.tooltipOptions,
            c = this.options.dataGrouping,
            d = b.xDateFormat,
            e, f = this.xAxis,
            g, h;
        if (f.options.type === "datetime" && c) {
            g = this.currentDataGrouping;
            c = c.dateTimeLabelFormats;
            if (g) {
                f = c[g.unitName];
                if (g.count === 1) d = f[0];
                else {
                    d = f[1];
                    e = f[2]
                }
            } else if (!d) for (h in Ta) if (Ta[h] >= f.closestPointRange) {
                d = c[h][0];
                break
            }
            d = yc(d, a);
            if (e) d += yc(e, a + g.totalRange - 1);
            a = b.headerFormat.replace("{point.key}", d)
        } else a = Ye.apply(this, [a]);
        return a
    };
    Y.destroy = function () {
        for (var a = this.groupedData || [], b = a.length; b--;) a[b] && a[b].destroy();
        Xe.apply(this)
    };
    hb = {
        approximation: "average",
        groupPixelWidth: 2,
        dateTimeLabelFormats: Qb(cd, ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], Sc, ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], Gc, ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], Hc, ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], Zb, ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], sc, ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], tc, ["%B %Y", "%B", "-%B %Y"], hc, ["%Y", "%Y", "-%Y"]),
        units: [
            [cd, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            [Sc, [1, 2, 5, 10, 15, 30]],
            [Gc, [1, 2, 5, 10, 15, 30]],
            [Hc, [1, 2, 3, 4, 6, 8, 12]],
            [Zb, [1]],
            [sc, [1]],
            [tc, [1, 3, 6]],
            [hc, null]
        ]
    };
    bb.line.dataGrouping = bb.spline.dataGrouping = bb.area.dataGrouping = bb.areaspline.dataGrouping = hb;
    bb.column.dataGrouping = X(hb, {
        approximation: "sum",
        groupPixelWidth: 10
    });
    bb.ohlc = X(bb.column, {
        lineWidth: 1,
        dataGrouping: {
            approximation: "ohlc",
            enabled: true,
            groupPixelWidth: 5
        },
        states: {
            hover: {
                lineWidth: 3
            }
        }
    });
    hb = Ab(Ec, {
        applyOptions: function (a) {
            var b = this.series,
                c = 0;
            if (typeof a === "object" && typeof a.length !== "number") {
                aa(this, a);
                this.options = a
            } else if (a.length) {
                if (a.length === 5) {
                    if (typeof a[0] === "string") this.name = a[0];
                    else if (typeof a[0] === "number") this.x = a[0];
                    c++
                }
                this.open = a[c++];
                this.high = a[c++];
                this.low = a[c++];
                this.close = a[c++]
            }
            this.y = this.high;
            if (this.x === la && b) this.x = b.autoIncrement();
            return this
        },
        tooltipFormatter: function () {
            var a = this.series;
            return ['<span style="color:' + a.color + ';font-weight:bold">', this.name || a.name, "</span><br/>Open: ", this.open, "<br/>High: ", this.high, "<br/>Low: ", this.low, "<br/>Close: ", this.close, "<br/>"].join("")
        }
    });
    var de = Ab(jb.column, {
        type: "ohlc",
        valueCount: 4,
        pointClass: hb,
        useThreshold: false,
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        translate: function () {
            var a = this.yAxis;
            jb.column.prototype.translate.apply(this);
            y(this.points, function (b) {
                if (b.open !== null) b.plotOpen = a.translate(b.open, 0, 1);
                if (b.close !== null) b.plotClose = a.translate(b.close, 0, 1)
            })
        },
        drawPoints: function () {
            var a = this,
                b = a.chart,
                c, d, e, f, g, h, k, i;
            y(a.points, function (j) {
                if (j.plotY !== la) {
                    k = j.graphic;
                    c = j.pointAttr[j.selected ? "selected" : ""];
                    f = c["stroke-width"] % 2 / 2;
                    i = Q(j.plotX) + f;
                    g = Q(j.barW / 2);
                    h = ["M", i, Q(j.yBottom), "L", i, Q(j.plotY)];
                    if (j.open !== null) {
                        d = Q(j.plotOpen) + f;
                        h.push("M", i, d, "L", i - g, d)
                    }
                    if (j.close !== null) {
                        e = Q(j.plotClose) + f;
                        h.push("M", i, e, "L", i + g, e)
                    }
                    if (k) k.animate({
                        d: h
                    });
                    else j.graphic = b.renderer.path(h).attr(c).add(a.group)
                }
            })
        },
        animate: null
    });
    jb.ohlc = de;
    bb.candlestick = X(bb.column, {
        dataGrouping: {
            approximation: "ohlc",
            enabled: true
        },
        lineColor: "black",
        lineWidth: 1,
        upColor: "white",
        states: {
            hover: {
                lineWidth: 2
            }
        }
    });
    hb = Ab(de, {
        type: "candlestick",
        pointAttrToOptions: {
            fill: "color",
            stroke: "lineColor",
            "stroke-width": "lineWidth"
        },
        getAttribs: function () {
            de.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states;
            a = a.upColor;
            var c = X(this.pointAttr);
            c[""].fill = a;
            c.hover.fill = b.hover.upColor || a;
            c.select.fill = b.select.upColor || a;
            y(this.points, function (d) {
                if (d.open < d.close) d.pointAttr = c
            })
        },
        drawPoints: function () {
            var a = this,
                b = a.chart,
                c, d, e, f, g, h, k, i, j, l;
            y(a.points, function (p) {
                i = p.graphic;
                if (p.plotY !== la) {
                    c = p.pointAttr[p.selected ? "selected" : ""];
                    h = c["stroke-width"] % 2 / 2;
                    k = Q(p.plotX) + h;
                    d = Q(p.plotOpen) + h;
                    e = Q(p.plotClose) + h;
                    f = xa.min(d, e);
                    g = xa.max(d, e);
                    l = Q(p.barW / 2);
                    j = ["M", k - l, g, "L", k - l, f, "L", k + l, f, "L", k + l, g, "L", k - l, g, "M", k, g, "L", k, Q(p.yBottom), "M", k, f, "L", k, Q(p.plotY), "Z"];
                    if (i) i.animate({
                        d: j
                    });
                    else p.graphic = b.renderer.path(j).attr(c).add(a.group)
                }
            })
        }
    });
    jb.candlestick = hb;
    var ee = nd.prototype.symbols;
    bb.flags = X(bb.column, {
        fillColor: "white",
        lineWidth: 1,
        shape: "flag",
        stackDistance: 7,
        states: {
            hover: {
                lineColor: "black",
                fillColor: "#FCFFC5"
            }
        },
        style: {
            fontSize: "11px",
            fontWeight: "bold",
            textAlign: "center"
        },
        y: -30
    });
    jb.flags = Ab(jb.column, {
        type: "flags",
        noSharedTooltip: true,
        useThreshold: false,
        init: zb.prototype.init,
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth",
            r: "radius"
        },
        translate: function () {
            jb.column.prototype.translate.apply(this);
            var a = this.chart,
                b = this.points,
                c = b.length - 1,
                d, e, f, g = (d = this.options.onSeries) && a.get(d),
                h, k;
            if (g) {
                h = g.points;
                d = h.length;
                for (b.sort(function (i, j) {
                    return i.x - j.x
                }); d-- && b[c];) {
                    e = b[c];
                    k = h[d];
                    if (k.x <= e.x) {
                        e.plotY = k.plotY;
                        c--;
                        d++;
                        if (c < 0) break
                    }
                }
            }
            y(b, function (i, j) {
                if (!g) i.plotY = i.y === la ? a.plotHeight : i.plotY;
                if ((f = b[j - 1]) && f.plotX === i.plotX) {
                    if (f.stackIndex === la) f.stackIndex = 0;
                    i.stackIndex = f.stackIndex + 1
                }
            })
        },
        drawPoints: function () {
            var a, b = this.points,
                c = this.chart.renderer,
                d, e, f = this.options,
                g = f.y,
                h = f.shape,
                k, i, j, l, p = f.lineWidth % 2 / 2,
                G;
            for (i = b.length; i--;) {
                j = b[i];
                d = j.plotX + p;
                a = j.stackIndex;
                e = j.plotY + g + p - (a !== la && a * f.stackDistance);
                if (isNaN(e)) e = 0;
                k = a ? la : j.plotX + p;
                G = a ? la : j.plotY;
                l = j.graphic;
                if (e !== la) {
                    a = j.pointAttr[j.selected ? "select" : ""];
                    if (l) l.attr({
                        x: d,
                        y: e,
                        r: a.r,
                        anchorX: k,
                        anchorY: G
                    });
                    else l = j.graphic = c.label(j.options.title || f.title || "A", d, e, h, k, G).css(X(f.style, j.style)).attr(a).attr({
                        align: h === "flag" ? "left" : "center",
                        width: f.width,
                        height: f.height
                    }).add(this.group).shadow(f.shadow);
                    k = l.box;
                    a = k.getBBox();
                    j.shapeArgs = aa(a, {
                        x: d - (h === "flag" ? 0 : k.attr("width") / 2),
                        y: e
                    })
                }
            }
        },
        drawTracker: function () {
            jb.column.prototype.drawTracker.apply(this);
            y(this.points, function (a) {
                ra(a.tracker.element, "mouseover", function () {
                    a.graphic.toFront()
                })
            })
        },
        tooltipFormatter: function (a) {
            return a.point.text
        },
        animate: function () {}
    });
    ee.flag = function (a, b, c, d, e) {
        var f = e && e.anchorX || a;
        e = e && e.anchorY || b;
        return ["M", f, e, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "M", f, e, "Z"]
    };
    y(["circle", "square"], function (a) {
        ee[a + "pin"] = function (b, c, d, e, f) {
            var g = f && f.anchorX;
            f = f && f.anchorY;
            b = ee[a](b, c, d, e);
            g && f && b.push("M", g, c + e, "L", g, f);
            return b
        }
    });
    var Ke = Db ? "touchstart" : "mousedown",
        Ze = Db ? "touchmove" : "mousemove",
        $e = Db ? "touchend" : "mouseup";
    hb = Qb("linearGradient", {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
    }, "stops", [
        [0, "#FFF"],
        [1, "#CCC"]
    ]);
    var fe = [].concat(bb.line.dataGrouping.units);
    fe[4] = [Zb, [1, 2, 3, 4]];
    fe[5] = [sc, [1, 2, 3]];
    aa(cb, {
        navigator: {
            handles: {
                backgroundColor: "#FFF",
                borderColor: "#666"
            },
            height: 40,
            margin: 10,
            maskFill: "rgba(255, 255, 255, 0.75)",
            outlineColor: "#444",
            outlineWidth: 1,
            series: {
                type: "areaspline",
                color: "#4572A7",
                compare: null,
                fillOpacity: 0.4,
                dataGrouping: {
                    approximation: "average",
                    smoothed: true,
                    units: fe
                },
                dataLabels: {
                    enabled: false
                },
                lineWidth: 1,
                marker: {
                    enabled: false
                },
                pointRange: 0,
                shadow: false
            },
            xAxis: {
                tickWidth: 0,
                lineWidth: 0,
                gridLineWidth: 1,
                tickPixelInterval: 200,
                labels: {
                    align: "left",
                    x: 3,
                    y: -4
                }
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: false,
                endOnTick: false,
                minPadding: 0.1,
                maxPadding: 0.1,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickWidth: 0
            }
        },
        scrollbar: {
            height: Db ? 20 : 14,
            barBackgroundColor: hb,
            barBorderRadius: 2,
            barBorderWidth: 1,
            barBorderColor: "#666",
            buttonArrowColor: "#666",
            buttonBackgroundColor: hb,
            buttonBorderColor: "#666",
            buttonBorderRadius: 2,
            buttonBorderWidth: 1,
            rifleColor: "#666",
            trackBackgroundColor: Qb("linearGradient", {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, "stops", [
                [0, "#EEE"],
                [1, "#FFF"]
            ]),
            trackBorderColor: "#CCC",
            trackBorderWidth: 1
        }
    });
    Highcharts.Scroller = function (a) {
        function b(W, wa) {
            var m = {
                fill: ab.backgroundColor,
                stroke: ab.borderColor,
                "stroke-width": 1
            };
            if (!Ob) {
                Xa[wa] = f.g().css({
                    cursor: "e-resize"
                }).attr({
                    zIndex: 3
                }).add();
                f.rect(-4.5, 0, 9, 16, 3, 1).attr(m).add(Xa[wa]);
                f.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(m).add(Xa[wa])
            }
            Xa[wa].translate(pb + da + parseInt(W, 10), vb + Oa / 2 - 8)
        }
        function c(W) {
            if (!Ob) {
                Bc[W] = f.g().add(Qa);
                f.rect(-0.5, -0.5, da + 1, da + 1, p.buttonBorderRadius, p.buttonBorderWidth).attr({
                    stroke: p.buttonBorderColor,
                    "stroke-width": p.buttonBorderWidth,
                    fill: p.buttonBackgroundColor
                }).add(Bc[W]);
                f.path(["M", da / 2 + (W ? -1 : 1), da / 2 - 3, "L", da / 2 + (W ? -1 : 1), da / 2 + 3, da / 2 + (W ? 2 : -2), da / 2]).attr({
                    fill: p.buttonArrowColor
                }).add(Bc[W])
            }
            W && Bc[W].attr({
                translateX: fb - da
            })
        }
        function d(W, wa, m, Tb) {
            if (!isNaN(W)) {
                var kb = p.barBorderWidth;
                fa = vb + Eb;
                i = A(s.left, a.plotLeft + da);
                j = A(s.len, a.plotWidth - 2 * da);
                pb = i - da;
                fb = j + 2 * da;
                if (s.getExtremes) {
                    var tb = a.xAxis[0].getExtremes(),
                        yb = tb.dataMin === null,
                        ub = s.getExtremes(),
                        lb = Ha(tb.dataMin, ub.dataMin);
                    tb = ca(tb.dataMax, ub.dataMax);
                    if (!yb && (lb !== ub.min || tb !== ub.max)) s.setExtremes(lb, tb, true, false)
                }
                m = A(m, s.translate(W));
                Tb = A(Tb, s.translate(wa));
                z = ga(Ha(m, Tb));
                Z = ga(ca(m, Tb));
                C = Z - z;
                if (!Ob) {
                    if (k) {
                        md = f.rect().attr({
                            fill: h.maskFill,
                            zIndex: 3
                        }).add();
                        Oc = f.rect().attr({
                            fill: h.maskFill,
                            zIndex: 3
                        }).add();
                        Ac = f.path().attr({
                            "stroke-width": Wb,
                            stroke: h.outlineColor,
                            zIndex: 3
                        }).add()
                    }
                    if (G) {
                        Qa = f.g().add();
                        W = p.trackBorderWidth;
                        Yc = f.rect().attr({
                            y: -W % 2 / 2,
                            fill: p.trackBackgroundColor,
                            stroke: p.trackBorderColor,
                            "stroke-width": W,
                            r: p.trackBorderRadius || 0,
                            height: da
                        }).add(Qa);
                        Mc = f.rect().attr({
                            y: -kb % 2 / 2,
                            height: da,
                            fill: p.barBackgroundColor,
                            stroke: p.barBorderColor,
                            "stroke-width": kb,
                            r: na
                        }).add(Qa);
                        oc = f.path().attr({
                            stroke: p.rifleColor,
                            "stroke-width": 1
                        }).add(Qa)
                    }
                }
                if (k) {
                    md.attr({
                        x: i,
                        y: vb,
                        width: z,
                        height: Oa
                    });
                    Oc.attr({
                        x: i + Z,
                        y: vb,
                        width: j - Z,
                        height: Oa
                    });
                    Ac.attr({
                        d: [Wa, pb, fa, Ia, i + z + Eb, fa, i + z + Eb, fa + nc - da, Wa, i + Z - Eb, fa + nc - da, Ia, i + Z - Eb, fa, pb + fb, fa]
                    });
                    b(z + Eb, 0);
                    b(Z + Eb, 1)
                }
                if (G) {
                    c(0);
                    c(1);
                    Qa.translate(pb, Q(fa + Oa));
                    Yc.attr({
                        width: fb
                    });
                    Mc.attr({
                        x: Q(da + z) + kb % 2 / 2,
                        width: C - kb
                    });
                    kb = da + z + C / 2 - 0.5;
                    oc.attr({
                        d: [Wa, kb - 3, da / 4, Ia, kb - 3, 2 * da / 3, Wa, kb, da / 4, Ia, kb, 2 * da / 3, Wa, kb + 3, da / 4, Ia, kb + 3, 2 * da / 3],
                        visibility: C > 12 ? Mb : Cb
                    })
                }
                Ob = true
            }
        }
        function e() {
            ra(a.container, Ke, function (W) {
                W = a.tracker.normalizeMouseEvent(W);
                var wa = W.chartX,
                    m = W.chartY,
                    Tb = Db ? 10 : 7;
                if (m > vb && m < vb + Oa + da) if ((m = !G || m < vb + Oa) && xa.abs(wa - z - i) < Tb) {
                    B = true;
                    J = Z
                } else if (m && xa.abs(wa - Z - i) < Tb) {
                    E = true;
                    J = z
                } else if (wa > i + z && wa < i + Z) {
                    H = wa;
                    sa = L.cursor;
                    L.cursor = "ew-resize";
                    D = wa - z
                } else if (wa > pb && wa < pb + fb) {
                    wa = m ? wa - i - C / 2 : wa < i ? z - Ha(10, C) : wa > pb + fb - da ? z + Ha(10, C) : wa < i + z ? z - C : Z;
                    if (wa < 0) wa = 0;
                    else if (wa + C > j) wa = j - C;
                    wa !== z && a.xAxis[0].setExtremes(s.translate(wa, true), s.translate(wa + C, true), true, false)
                }
                W.preventDefault && W.preventDefault()
            });
            ra(a.container, Ze, function (W) {
                W = a.tracker.normalizeMouseEvent(W);
                W = W.chartX;
                if (W < i) W = i;
                else if (W > pb + fb - da) W = pb + fb - da;
                if (B) {
                    n = true;
                    d(0, 0, W - i, J)
                } else if (E) {
                    n = true;
                    d(0, 0, J, W - i)
                } else if (H) {
                    n = true;
                    if (W < D) W = D;
                    else if (W > j + D - C) W = j + D - C;
                    d(0, 0, W - D, W - D + C)
                }
            });
            ra(document, $e, function () {
                n && a.xAxis[0].setExtremes(s.translate(z, true), s.translate(Z, true), true, false);
                B = E = H = n = D = null;
                L.cursor = sa
            })
        }
        var f = a.renderer,
            g = a.options,
            h = g.navigator,
            k = h.enabled,
            i, j, l, p = g.scrollbar,
            G = p.enabled,
            B, E, H, J, D, n, s, z, Z, C, L = document.body.style,
            sa, ab = h.handles,
            Oa = k ? h.height : 0,
            Wb = h.outlineWidth,
            da = G ? p.height : 0,
            nc = Oa + da,
            na = p.barBorderRadius,
            vb = h.top || a.chartHeight - Oa - da - g.chart.spacingBottom,
            Eb = Wb / 2,
            fa, pb, fb, Ob;
        g = h.baseSeries;
        var ba = a.series[g] || typeof g === "string" && a.get(g) || a.series[0],
            md, Oc, Ac, Xa = [],
            Qa, Yc, Mc, oc, Bc = [];
        a.resetZoomEnabled = false;
        (function () {
            var W = a.xAxis.length,
                wa = a.yAxis.length;
            a.extraBottomMargin = nc + h.margin;
            if (k) {
                var m = ba.options,
                    Tb = m.data,
                    kb = h.series,
                    tb = kb.data;
                m.data = kb.data = null;
                s = new a.Axis(X(h.xAxis, {
                    isX: true,
                    type: "datetime",
                    index: W,
                    height: Oa,
                    top: vb,
                    offset: 0,
                    offsetLeft: da,
                    offsetRight: -da,
                    startOnTick: false,
                    endOnTick: false,
                    minPadding: 0,
                    maxPadding: 0,
                    zoomEnabled: false
                }));
                new a.Axis(X(h.yAxis, {
                    alignTicks: false,
                    height: Oa,
                    top: vb,
                    offset: 0,
                    index: wa,
                    zoomEnabled: false
                }));
                W = X(ba.options, kb, {
                    threshold: null,
                    clip: false,
                    enableMouseTracking: false,
                    group: "nav",
                    padXAxis: false,
                    xAxis: W,
                    yAxis: wa,
                    name: "Navigator",
                    showInLegend: false,
                    isInternal: true,
                    visible: true
                });
                m.data = Tb;
                kb.data = tb;
                W.data = tb || Tb;
                l = a.initSeries(W);
                ra(ba, "updatedData", function () {
                    var yb = ba.xAxis,
                        ub = yb.getExtremes(),
                        lb = ub.min,
                        pc = ub.max,
                        Xb = ub.dataMin;
                    ub = ub.dataMax;
                    var $a = pc - lb,
                        Ga, Sb, dc, mc, zc;
                    Ga = l.xData;
                    var fc = !! yb.setExtremes;
                    Sb = pc >= Ga[Ga.length - 1];
                    Ga = lb <= Xb;
                    if (!tb) {
                        l.options.pointStart = ba.xData[0];
                        l.setData(ba.options.data, false);
                        zc = true
                    }
                    if (Ga) {
                        mc = Xb;
                        dc = mc + $a
                    }
                    if (Sb) {
                        dc = ub;
                        Ga || (mc = ca(dc - $a, l.xData[0]))
                    }
                    if (fc && (Ga || Sb)) yb.setExtremes(mc, dc, true, false);
                    else {
                        zc && a.redraw(false);
                        d(ca(lb, Xb), Ha(pc, ub))
                    }
                })
            } else s = {
                translate: function (yb, ub) {
                    var lb = ba.xAxis.getExtremes(),
                        pc = a.plotWidth - 2 * da,
                        Xb = lb.dataMin;
                    lb = lb.dataMax - Xb;
                    return ub ? yb * lb / pc + Xb : pc * (yb - Xb) / lb
                }
            };
            e()
        })();
        return {
            render: d
        }
    };
    aa(cb, {
        rangeSelector: {
            buttonTheme: {
                width: 28,
                height: 16,
                padding: 1,
                r: 0,
                zIndex: 10
            }
        }
    });
    cb.lang = X(cb.lang, {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "From:",
        rangeSelectorTo: "To:"
    });
    Highcharts.RangeSelector = function (a) {
        function b(H, J, D) {
            var n = a.xAxis[0],
                s = n && n.getExtremes(),
                z, Z = s && s.dataMin,
                C = s && s.dataMax,
                L, sa = n && Ha(s.max, C);
            s = new Date(sa);
            z = J.type;
            J = J.count;
            var ab, Oa, Wb = {
                millisecond: 1,
                second: 1E3,
                minute: 6E4,
                hour: 36E5,
                day: 864E5,
                week: 6048E5
            };
            if (!(Z === null || C === null || H === l)) {
                if (Wb[z]) {
                    ab = Wb[z] * J;
                    L = ca(sa - ab, Z)
                } else if (z === "month") {
                    s.setMonth(s.getMonth() - J);
                    L = ca(s.getTime(), Z);
                    ab = 2592E6 * J
                } else if (z === "ytd") {
                    s = new Date(0);
                    z = new Date;
                    Oa = z.getFullYear();
                    s.setFullYear(Oa);
                    String(Oa) !== yc("%Y", s) && s.setFullYear(Oa - 1);
                    L = Oa = ca(Z || 0, s.getTime());
                    z = z.getTime();
                    sa = Ha(C || z, z)
                } else if (z === "year") {
                    s.setFullYear(s.getFullYear() - J);
                    L = ca(Z, s.getTime());
                    ab = 31536E6 * J
                } else if (z === "all" && n) {
                    L = Z;
                    sa = C
                }
                p[H] && p[H].setState(2);
                if (n) setTimeout(function () {
                    n.setExtremes(L, sa, A(D, 1), 0);
                    l = H
                }, 1);
                else {
                    Z = a.options.xAxis;
                    Z[0] = X(Z[0], {
                        range: ab,
                        min: Oa
                    });
                    l = H
                }
            }
        }
        function c(H, J) {
            var D = H.hasFocus ? B.inputEditDateFormat || "%Y-%m-%d" : B.inputDateFormat || "%b %e, %Y";
            if (J) H.HCTime = J;
            H.value = yc(D, H.HCTime)
        }
        function d(H) {
            var J = H === "min",
                D;
            qb("span", {
                innerHTML: h[J ? "rangeSelectorFrom" : "rangeSelectorTo"]
            }, B.labelStyle, k);
            D = qb("input", {
                name: H,
                className: ec + "range-selector",
                type: "text"
            }, aa({
                width: "80px",
                height: "16px",
                border: "1px solid silver",
                marginLeft: "5px",
                marginRight: J ? "5px" : "0",
                textAlign: "center"
            }, B.inputStyle), k);
            D.onfocus = D.onblur = function (n) {
                n = n || window.event;
                D.hasFocus = n.type === "focus";
                c(D)
            };
            D.onchange = function () {
                var n = D.value,
                    s = Date.parse(n),
                    z = a.xAxis[0].getExtremes();
                if (isNaN(s)) {
                    s = n.split("-");
                    s = Date.UTC(ga(s[0]), ga(s[1]) - 1, ga(s[2]))
                }
                if (!isNaN(s) && (J && s > z.dataMin && s < j.HCTime || !J && s < z.dataMax && s > i.HCTime)) a.xAxis[0].setExtremes(J ? s : z.min, J ? z.max : s)
            };
            return D
        }
        var e = a.renderer,
            f, g = a.container,
            h = cb.lang,
            k, i, j, l, p = [],
            G, B, E = [{
                type: "month",
                count: 1,
                text: "1m"
            }, {
                type: "month",
                count: 3,
                text: "3m"
            }, {
                type: "month",
                count: 6,
                text: "6m"
            }, {
                type: "ytd",
                text: "YTD"
            }, {
                type: "year",
                count: 1,
                text: "1y"
            }, {
                type: "all",
                text: "All"
            }];
        a.resetZoomEnabled = false;
        (function () {
            a.extraTopMargin = 25;
            B = a.options.rangeSelector;
            G = B.buttons || E;
            var H = B.selected;
            ra(g, Ke, function () {
                i && i.blur();
                j && j.blur()
            });
            H !== la && G[H] && b(H, G[H], false);
            ra(a, "load", function () {
                ra(a.xAxis[0], "afterSetExtremes", function () {
                    p[l] && p[l].setState(0);
                    l = null
                })
            })
        })();
        return {
            render: function (H, J) {
                var D = a.options.chart.style,
                    n = B.buttonTheme,
                    s = B.inputEnabled !== false,
                    z = n && n.states,
                    Z = a.plotLeft,
                    C, L;
                if (!f) {
                    L = e.text(h.rangeSelectorZoom, Z, a.plotTop - 10).css(B.labelStyle).add();
                    C = Z + L.getBBox().width + 5;
                    y(G, function (sa, ab) {
                        p[ab] = e.button(sa.text, C, a.plotTop - 25, function () {
                            b(ab, sa);
                            this.isActive = true
                        }, n, z && z.hover, z && z.select).css({
                            textAlign: "center"
                        }).add();
                        C += p[ab].width + (B.buttonSpacing || 0);
                        l === ab && p[ab].setState(2)
                    });
                    if (s) {
                        k = qb("div", null, {
                            position: "relative",
                            height: 0,
                            fontFamily: D.fontFamily,
                            fontSize: D.fontSize,
                            zIndex: 1
                        });
                        g.parentNode.insertBefore(k, g);
                        k = qb("div", null, aa({
                            position: "absolute",
                            top: a.plotTop - 25 + "px",
                            right: a.chartWidth - a.plotLeft - a.plotWidth + "px"
                        }, B.inputBoxStyle), k);
                        i = d("min");
                        j = d("max")
                    }
                }
                if (s) {
                    c(i, H);
                    c(j, J)
                }
                f = true
            }
        }
    };
    zd.prototype.callbacks.push(function (a) {
        function b() {
            d = a.xAxis[0].getExtremes();
            e.render(ca(d.min, d.dataMin), Ha(d.max, d.dataMax))
        }
        function c() {
            d = a.xAxis[0].getExtremes();
            f.render(d.min, d.max)
        }
        var d, e = a.scroller,
            f = a.rangeSelector;
        if (e) {
            ra(a.xAxis[0], "afterSetExtremes", function (g) {
                e.render(g.min, g.max)
            });
            ra(a, "resize", b);
            b()
        }
        if (f) {
            ra(a.xAxis[0], "afterSetExtremes", function (g) {
                f.render(g.min, g.max)
            });
            ra(a, "resize", c);
            c()
        }
    });
    Highcharts.StockChart = function (a, b) {
        var c = a.series,
            d, e = {
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: true,
                            radius: 5
                        }
                    }
                },
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                dataGrouping: {
                    enabled: true
                }
            };
        a.xAxis = ad(rc(a.xAxis || {}), function (f) {
            return X({
                minPadding: 0,
                maxPadding: 0,
                title: {
                    text: null
                },
                showLastLabel: true
            }, f, {
                type: "datetime",
                categories: null
            })
        });
        a.yAxis = ad(rc(a.yAxis || {}), function (f) {
            d = f.opposite;
            return X({
                labels: {
                    align: d ? "right" : "left",
                    x: d ? -2 : 2,
                    y: -2
                },
                showLastLabel: false,
                title: {
                    text: null
                }
            }, f)
        });
        a.series = null;
        a = X({
            chart: {
                panning: true
            },
            navigator: {
                enabled: true
            },
            scrollbar: {
                enabled: true
            },
            rangeSelector: {
                enabled: true
            },
            title: {
                text: null
            },
            tooltip: {
                shared: true,
                crosshairs: true
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                line: e,
                spline: e,
                area: e,
                areaspline: e,
                column: {
                    shadow: false,
                    borderWidth: 0,
                    dataGrouping: {
                        enabled: true
                    }
                }
            }
        }, a, {
            chart: {
                inverted: false
            }
        });
        a.series = c;
        return new zd(a, b)
    };
    var af = Y.init,
        bf = Y.processData,
        cf = Ec.prototype.tooltipFormatter;
    Y.init = function () {
        af.apply(this, arguments);
        var a = this.options.compare;
        if (a) this.modifyValue = function (b, c) {
            var d = this.compareValue;
            b = a === "value" ? b - d : b = 100 * (b / d) - 100;
            if (c) c.change = b;
            return b
        }
    };
    Y.processData = function () {
        bf.apply(this);
        if (this.options.compare) for (var a = 0, b = this.processedXData, c = this.processedYData, d = c.length, e = this.xAxis.getExtremes().min; a < d; a++) if (typeof c[a] === "number" && b[a] >= e) {
            this.compareValue = c[a];
            break
        }
    };
    Ec.prototype.tooltipFormatter = function (a) {
        a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + td(this.change, this.series.tooltipOptions.changeDecimals || 2));
        return cf.apply(this, [a])
    };
    aa(Highcharts, {
        Chart: zd,
        dateFormat: yc,
        pathAnim: qd,
        getOptions: function () {
            return cb
        },
        hasRtlBug: Ue,
        numberFormat: td,
        Point: Ec,
        Color: Dc,
        Renderer: nd,
        seriesTypes: jb,
        setOptions: function (a) {
            cb = X(cb, a);
            oe();
            return cb
        },
        Series: zb,
        addEvent: ra,
        removeEvent: Nb,
        createElement: qb,
        discardElement: xd,
        css: Ja,
        each: y,
        extend: aa,
        map: ad,
        merge: X,
        pick: A,
        splat: rc,
        extendClass: Ab,
        product: "Highstock",
        version: "1.0.2"
    })
})();