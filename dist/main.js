'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.G() : $objectClone(arg0));
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.c1();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.h(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.h.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.l();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.l.call(instance);
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__RTLong(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__RTLong__O__D(arg0, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.l = (function() {
  return $systemIdentityHashCode(this);
});
$p.h = (function(that) {
  return (this === that);
});
$p.i = (function() {
  var i = this.l();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.i();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.e[i] = null;
    }
  } else {
    this.e = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.Q = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
});
$p.G = (function() {
  return new $ac_O(this.e.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.e[i] = false;
    }
  } else {
    this.e = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.Q = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
});
$p.G = (function() {
  return new $ac_Z(this.e.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Uint16Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.Q = (function(srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.G = (function() {
  return new $ac_C(this.e.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Int8Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.Q = (function(srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.G = (function() {
  return new $ac_B(this.e.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Int16Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.Q = (function(srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.G = (function() {
  return new $ac_S(this.e.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Int32Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.Q = (function(srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.G = (function() {
  return new $ac_I(this.e.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.e[i] = $L0;
    }
  } else {
    this.e = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.Q = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
});
$p.G = (function() {
  return new $ac_J(this.e.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Float32Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.Q = (function(srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.G = (function() {
  return new $ac_F(this.e.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.e = new Float64Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.Q = (function(srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.G = (function() {
  return new $ac_D(this.e.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    y: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.e = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.e[i] = null;
      }
    } else {
      this.e = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.Q = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
  });
  $p.G = (function() {
    return new ArrayClass(this.e.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    y: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Lbufferdata_ZeroCostValidation$() {
}
$p = $c_Lbufferdata_ZeroCostValidation$.prototype = new $h_O();
$p.constructor = $c_Lbufferdata_ZeroCostValidation$;
/** @constructor */
function $h_Lbufferdata_ZeroCostValidation$() {
}
$h_Lbufferdata_ZeroCostValidation$.prototype = $p;
$p.aY = (function() {
  var buffer = new ArrayBuffer(20);
  var view = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var baseOffset = Math.imul(5, i);
    view.setFloat32(baseOffset, Math.fround((2.0 * Math.fround(i))), true);
    view.setUint8(((4 + baseOffset) | 0), ((Math.imul(10, i) << 16) >> 16));
    i = ((1 + i) | 0);
  }
  var value = Math.fround(view.getFloat32(0, true));
  var value$1 = (view.getUint8(4) | 0);
  var first = ({
    "f32": value,
    "u8": value$1
  });
  var value$2 = Math.fround(view.getFloat32(15, true));
  var value$3 = (view.getUint8(19) | 0);
  var last = ({
    "f32": value$2,
    "u8": value$3
  });
  return ({
    "first": first,
    "last": last
  });
});
$p.b8 = (function() {
  var buffer = new ArrayBuffer(20);
  var view = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var baseOffset = Math.imul(5, i);
    var offset$proxy2 = ((4 + baseOffset) | 0);
    var value$proxy1 = Math.fround((2.0 * Math.fround(i)));
    view.setFloat32(baseOffset, value$proxy1, true);
    var value$proxy2 = ((Math.imul(10, i) << 16) >> 16);
    view.setUint8(offset$proxy2, value$proxy2);
    i = ((1 + i) | 0);
  }
  var value = Math.fround(view.getFloat32(0, true));
  var value$1 = (view.getUint8(4) | 0);
  var _2 = ({
    "f32": value,
    "u8": value$1
  });
  var value$2 = Math.fround(view.getFloat32(15, true));
  var value$3 = (view.getUint8(19) | 0);
  var _2$1 = ({
    "f32": value$2,
    "u8": value$3
  });
  return ({
    "first": _2,
    "last": _2$1
  });
});
$p.bd = (function() {
  var buffer = new ArrayBuffer(20);
  var _1 = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var index$proxy1 = i;
    var _2 = Math.imul(5, index$proxy1);
    var value$proxy3 = Math.fround((2.0 * Math.fround(i)));
    _1.setFloat32(_2, value$proxy3, true);
    var index$proxy2 = i;
    var _2$1 = Math.imul(5, index$proxy2);
    var offset$proxy6 = ((4 + _2$1) | 0);
    var value$proxy4 = ((Math.imul(10, i) << 16) >> 16);
    _1.setUint8(offset$proxy6, value$proxy4);
    i = ((1 + i) | 0);
  }
  var value = Math.fround(_1.getFloat32(0, true));
  var value$1 = (_1.getUint8(4) | 0);
  var _2$2 = ({
    "f32": value,
    "u8": value$1
  });
  var value$2 = Math.fround(_1.getFloat32(15, true));
  var value$3 = (_1.getUint8(19) | 0);
  var _2$3 = ({
    "f32": value$2,
    "u8": value$3
  });
  return ({
    "first": _2$2,
    "last": _2$3
  });
});
$p.b3 = (function() {
  var buffer = new ArrayBuffer(36);
  var _1 = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var index$proxy3 = i;
    var _2 = Math.imul(9, index$proxy3);
    var value$proxy5 = Math.fround((10.0 * Math.fround(i)));
    _1.setFloat32(_2, value$proxy5, true);
    var index$proxy4 = i;
    var _2$1 = Math.imul(9, index$proxy4);
    var offset$proxy14 = ((4 + _2$1) | 0);
    var value$proxy6 = Math.fround((20.0 * Math.fround(i)));
    _1.setFloat32(offset$proxy14, value$proxy6, true);
    var index$proxy5 = i;
    var _2$2 = Math.imul(9, index$proxy5);
    var offset$proxy15 = ((8 + _2$2) | 0);
    var value$proxy7 = ((Math.imul(25, i) << 16) >> 16);
    _1.setUint8(offset$proxy15, value$proxy7);
    i = ((1 + i) | 0);
  }
  var value = Math.fround(_1.getFloat32(0, true));
  var value$1 = Math.fround(_1.getFloat32(4, true));
  var value$2 = (_1.getUint8(8) | 0);
  var _2$3 = ({
    "x": value,
    "y": value$1,
    "life": value$2
  });
  var value$3 = Math.fround(_1.getFloat32(27, true));
  var value$4 = Math.fround(_1.getFloat32(31, true));
  var value$5 = (_1.getUint8(35) | 0);
  var _2$4 = ({
    "x": value$3,
    "y": value$4,
    "life": value$5
  });
  return ({
    "first": _2$3,
    "last": _2$4
  });
});
$p.b4 = (function() {
  var buffer = new ArrayBuffer(36);
  var _1 = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var index$proxy6 = i;
    var _2 = Math.imul(9, index$proxy6);
    var _1$1 = Math.fround((10.0 * Math.fround(i)));
    var _2$1 = Math.fround((20.0 * Math.fround(i)));
    var _2$2 = ((Math.imul(25, i) << 16) >> 16);
    var nestedValues___1;
    var nestedValues___2;
    var nestedValues___1 = _1$1;
    var nestedValues___2 = _2$1;
    var value;
    var value = nestedValues___1;
    _1.setFloat32(_2, Math.fround(value), true);
    var tailOffset = ((4 + _2) | 0);
    var value$2;
    var value$2 = nestedValues___2;
    _1.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$3 = ((8 + _2) | 0);
    var value$3;
    var value$3 = _2$2;
    _1.setUint8(tailOffset$3, value$3);
    i = ((1 + i) | 0);
  }
  var value$1 = Math.fround(_1.getFloat32(0, true));
  var value$4 = Math.fround(_1.getFloat32(4, true));
  var value$5 = (_1.getUint8(8) | 0);
  var _2$3 = ({
    "x": value$1,
    "y": value$4,
    "life": value$5
  });
  var value$6 = Math.fround(_1.getFloat32(27, true));
  var value$7 = Math.fround(_1.getFloat32(31, true));
  var value$8 = (_1.getUint8(35) | 0);
  var _2$4 = ({
    "x": value$6,
    "y": value$7,
    "life": value$8
  });
  return ({
    "first": _2$3,
    "last": _2$4
  });
});
$p.aZ = (function() {
  var buffer = new ArrayBuffer(36);
  var view = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var baseOffset = Math.imul(9, i);
    view.setFloat32(baseOffset, Math.fround((10.0 * Math.fround(i))), true);
    view.setFloat32(((4 + baseOffset) | 0), Math.fround((20.0 * Math.fround(i))), true);
    view.setUint8(((8 + baseOffset) | 0), ((Math.imul(25, i) << 16) >> 16));
    i = ((1 + i) | 0);
  }
  var value = Math.fround(view.getFloat32(0, true));
  var value$1 = Math.fround(view.getFloat32(4, true));
  var value$2 = (view.getUint8(8) | 0);
  var _2 = ({
    "x": value,
    "y": value$1,
    "life": value$2
  });
  var value$3 = Math.fround(view.getFloat32(27, true));
  var value$4 = Math.fround(view.getFloat32(31, true));
  var value$5 = (view.getUint8(35) | 0);
  var _2$1 = ({
    "x": value$3,
    "y": value$4,
    "life": value$5
  });
  return ({
    "first": _2,
    "last": _2$1
  });
});
$p.bU = (function() {
  var direct = this.aY();
  var primitive = this.b8();
  var struct = this.bd();
  var directNested = this.aZ();
  var namedNested = this.b3();
  var tupleSetNested = this.b4();
  var value = ((((((($m_sr_BoxesRunTime$().j(direct.first.f32, primitive.first.f32) && $m_sr_BoxesRunTime$().j(direct.first.u8, primitive.first.u8)) && $m_sr_BoxesRunTime$().j(direct.last.f32, primitive.last.f32)) && $m_sr_BoxesRunTime$().j(direct.last.u8, primitive.last.u8)) && $m_sr_BoxesRunTime$().j(primitive.first.f32, struct.first.f32)) && $m_sr_BoxesRunTime$().j(primitive.first.u8, struct.first.u8)) && $m_sr_BoxesRunTime$().j(primitive.last.f32, struct.last.f32)) && $m_sr_BoxesRunTime$().j(primitive.last.u8, struct.last.u8));
  var value$1 = ((((($m_sr_BoxesRunTime$().j(directNested.first.x, namedNested.first.x) && $m_sr_BoxesRunTime$().j(directNested.first.y, namedNested.first.y)) && $m_sr_BoxesRunTime$().j(directNested.first.life, namedNested.first.life)) && $m_sr_BoxesRunTime$().j(directNested.last.x, namedNested.last.x)) && $m_sr_BoxesRunTime$().j(directNested.last.y, namedNested.last.y)) && $m_sr_BoxesRunTime$().j(directNested.last.life, namedNested.last.life));
  var value$2 = ((((($m_sr_BoxesRunTime$().j(directNested.first.x, tupleSetNested.first.x) && $m_sr_BoxesRunTime$().j(directNested.first.y, tupleSetNested.first.y)) && $m_sr_BoxesRunTime$().j(directNested.first.life, tupleSetNested.first.life)) && $m_sr_BoxesRunTime$().j(directNested.last.x, tupleSetNested.last.x)) && $m_sr_BoxesRunTime$().j(directNested.last.y, tupleSetNested.last.y)) && $m_sr_BoxesRunTime$().j(directNested.last.life, tupleSetNested.last.life));
  return ({
    "direct": direct,
    "primitive": primitive,
    "struct": struct,
    "directNested": directNested,
    "namedNested": namedNested,
    "tupleSetNested": tupleSetNested,
    "primitiveEqual": value,
    "nestedEqual": value$1,
    "tupleSetEqual": value$2
  });
});
var $d_Lbufferdata_ZeroCostValidation$ = new $TypeData().i($c_Lbufferdata_ZeroCostValidation$, "bufferdata.ZeroCostValidation$", ({
  aj: 1
}));
var $n_Lbufferdata_ZeroCostValidation$;
function $m_Lbufferdata_ZeroCostValidation$() {
  if ((!$n_Lbufferdata_ZeroCostValidation$)) {
    $n_Lbufferdata_ZeroCostValidation$ = new $c_Lbufferdata_ZeroCostValidation$();
  }
  return $n_Lbufferdata_ZeroCostValidation$;
}
/** @constructor */
function $c_Lexample_BufferDataDemo$() {
}
$p = $c_Lexample_BufferDataDemo$.prototype = new $h_O();
$p.constructor = $c_Lexample_BufferDataDemo$;
/** @constructor */
function $h_Lexample_BufferDataDemo$() {
}
$h_Lexample_BufferDataDemo$.prototype = $p;
$p.bO = (function() {
  $m_s_Console$().A().z("Creating array of 10 structs (F32, U8)\n");
  var buffer = new ArrayBuffer(50);
  var _1 = new DataView(buffer);
  $m_s_Console$().A().z("Array length: 10\n");
  $m_s_Console$().A().z("Struct size: 5 bytes\n");
  var i = 0;
  while (true) {
    var x0 = i;
    var _2 = Math.imul(5, x0);
    var value$proxy1 = Math.fround((1.5 * Math.fround(x0)));
    _1.setFloat32(_2, value$proxy1, true);
    var _2$1 = Math.imul(5, x0);
    var offset$proxy2 = ((4 + _2$1) | 0);
    var value$proxy2 = ((Math.imul(10, x0) << 16) >> 16);
    _1.setUint8(offset$proxy2, value$proxy2);
    if ((i === 9)) {
      break;
    }
    i = ((1 + i) | 0);
  }
  $m_s_Console$().A().z("\nReading back values:\n");
  var i$1 = 0;
  while (true) {
    var x0$1 = i$1;
    var _2$2 = Math.imul(5, x0$1);
    var f32Val = Math.fround(_1.getFloat32(_2$2, true));
    var _2$3 = Math.imul(5, x0$1);
    var offset$proxy4 = ((4 + _2$3) | 0);
    var u8Val = (_1.getUint8(offset$proxy4) | 0);
    var x = ((((("  particles(" + x0$1) + "): F32=") + f32Val) + ", U8=") + u8Val);
    $m_s_Console$().A().z((x + "\n"));
    if ((i$1 === 9)) {
      break;
    }
    i$1 = ((1 + i$1) | 0);
  }
});
$p.aX = (function(count) {
  var buffer = new ArrayBuffer(Math.imul(5, count));
  var _1 = new DataView(buffer);
  var isEmpty = (count <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + count) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var _2 = Math.imul(5, x0);
      var value$proxy3 = Math.fround(x0);
      _1.setFloat32(_2, value$proxy3, true);
      var _2$1 = Math.imul(5, x0);
      var offset$proxy6 = ((4 + _2$1) | 0);
      var value$proxy4 = ((((x0 % 256) | 0) << 16) >> 16);
      _1.setUint8(offset$proxy6, value$proxy4);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var value = Math.imul(5, count);
  var value$1 = Math.fround(_1.getFloat32(0, true));
  var value$2 = (_1.getUint8(4) | 0);
  var _2$2 = ({
    "f32": value$1,
    "u8": value$2
  });
  var index$proxy1 = (((-1) + count) | 0);
  var _2$3 = Math.imul(5, index$proxy1);
  var value$3 = Math.fround(_1.getFloat32(_2$3, true));
  var index$proxy2 = (((-1) + count) | 0);
  var _2$4 = Math.imul(5, index$proxy2);
  var offset$proxy10 = ((4 + _2$4) | 0);
  var value$4 = (_1.getUint8(offset$proxy10) | 0);
  var _2$5 = ({
    "f32": value$3,
    "u8": value$4
  });
  return ({
    "count": count,
    "structSize": 5,
    "totalBytes": value,
    "firstElement": _2$2,
    "lastElement": _2$5
  });
});
var $d_Lexample_BufferDataDemo$ = new $TypeData().i($c_Lexample_BufferDataDemo$, "example.BufferDataDemo$", ({
  am: 1
}));
var $n_Lexample_BufferDataDemo$;
function $m_Lexample_BufferDataDemo$() {
  if ((!$n_Lexample_BufferDataDemo$)) {
    $n_Lexample_BufferDataDemo$ = new $c_Lexample_BufferDataDemo$();
  }
  return $n_Lexample_BufferDataDemo$;
}
/** @constructor */
function $c_Lexample_Main$package$() {
}
$p = $c_Lexample_Main$package$.prototype = new $h_O();
$p.constructor = $c_Lexample_Main$package$;
/** @constructor */
function $h_Lexample_Main$package$() {
}
$h_Lexample_Main$package$.prototype = $p;
$p.bf = (function() {
  $m_s_Console$().A().z("Hello from Scala.js!\n");
  $m_s_Console$().A().z("Running on: Scala.js on Node.js\n");
  var x = ("" + $m_Lexample_Utils$().bw("Developer"));
  $m_s_Console$().A().z((x + "\n"));
  var x$1 = ("Current timestamp: " + $m_Lexample_Utils$().bS());
  $m_s_Console$().A().z((x$1 + "\n"));
  $m_s_Console$().A().z("\n--- BufferData Demo ---\n");
  $m_Lexample_BufferDataDemo$().bO();
  $m_s_Console$().A().z("\n--- BufferData createParticles ---\n");
  var jsData = $m_Lexample_BufferDataDemo$().aX(5);
  $m_s_Console$().A().z("Created particle buffer:\n");
  var x$2 = JSON.stringify(jsData, (void 0), 2);
  $m_s_Console$().A().z((x$2 + "\n"));
});
$p.bM = (function(width, height) {
  var scene = $m_Lraytracer_scene_scene$package$().bl();
  var pixels = $m_Lraytracer_render_Renderer$().bK(scene.a7, width, height, 100, 20, new $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray($m_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$()));
  return pixels.a.buffer;
});
$p.bN = (function(width, height) {
  return $m_Lraytracer\uff3fraw_Render$().bL($m_Lraytracer\uff3fraw_Scene$().bm(), width, height, 1.9, new $c_Lraytracer\uff3fraw_Vec3(0.0, 0.0, 1.0), 100, 20);
});
var $d_Lexample_Main$package$ = new $TypeData().i($c_Lexample_Main$package$, "example.Main$package$", ({
  an: 1
}));
var $n_Lexample_Main$package$;
function $m_Lexample_Main$package$() {
  if ((!$n_Lexample_Main$package$)) {
    $n_Lexample_Main$package$ = new $c_Lexample_Main$package$();
  }
  return $n_Lexample_Main$package$;
}
/** @constructor */
function $c_Lexample_Utils$() {
}
$p = $c_Lexample_Utils$.prototype = new $h_O();
$p.constructor = $c_Lexample_Utils$;
/** @constructor */
function $h_Lexample_Utils$() {
}
$h_Lexample_Utils$.prototype = $p;
$p.bw = (function(name) {
  return (("Hello, " + name) + "!");
});
$p.bS = (function() {
  return (+Date.now());
});
var $d_Lexample_Utils$ = new $TypeData().i($c_Lexample_Utils$, "example.Utils$", ({
  ao: 1
}));
var $n_Lexample_Utils$;
function $m_Lexample_Utils$() {
  if ((!$n_Lexample_Utils$)) {
    $n_Lexample_Utils$ = new $c_Lexample_Utils$();
  }
  return $n_Lexample_Utils$;
}
function $s_Lexample_app__main__AT__V(args) {
  try {
    $m_Lexample_Main$package$().bf();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().bQ(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.aG = null;
  this.be = null;
  $n_jl_System$Streams$ = this;
  this.aG = new $c_jl_JSConsoleBasedPrintStream(false);
  this.be = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  aE: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  aG: 1
}), ((x) => (x === (void 0))));
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.bJ(a.b, a.c, b.b, b.c), this$1.g);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.bI(a.b, a.c, b.b, b.c), this$1.g);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.bo(a.b, a.c, b.b, b.c), this$1.g);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.bn(a.b, a.c, b.b, b.c), this$1.g);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong((fpBitsDataView.getInt32(0, true) | 0), (fpBitsDataView.getInt32(4, true) | 0));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.b6(value), this$1.g);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = a.c;
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(a.b)) | 0));
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = a.b;
  var hi = a.c;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = a.b;
  return ((4.294967296E9 * a.c) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return a.b;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, a.b, true);
  fpBitsDataView.setInt32(4, a.c, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = a.b;
  var blo = b.b;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.c) + Math.imul(a.c, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = a.b;
  var blo = b.b;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, ((((a.c - b.c) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = a.b;
  var blo = b.b;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, ((((a.c + b.c) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = a.c;
  return new $c_RTLong((((32 & n) === 0) ? (((a.b >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = a.c;
  return new $c_RTLong((((32 & n) === 0) ? (((a.b >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = a.b;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (a.c << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.b ^ b.b), (a.c ^ b.c));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.b & b.b), (a.c & b.c));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.b | b.b), (a.c | b.c));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) >= (b.b >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) > (b.b >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) <= (b.b >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) < (b.b >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) >= (b.b >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) > (b.b >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) <= (b.b >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = a.c;
  var bhi = b.c;
  return ((ahi === bhi) ? ((a.b >>> 0) < (b.b >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!((a.b === b.b) && (a.c === b.c)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return ((a.b === b.b) && (a.c === b.c));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.b = 0;
  this.c = 0;
  this.b = lo;
  this.c = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.h = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.b === that.b) && (this.c === that.c)));
});
$p.l = (function() {
  return (this.b ^ this.c);
});
$p.i = (function() {
  return $m_RTLong$().b7(this.b, this.c);
});
$p.bW = (function() {
  return ((this.b << 24) >> 24);
});
$p.c5 = (function() {
  return ((this.b << 16) >> 16);
});
$p.c2 = (function() {
  return this.b;
});
$p.c3 = (function() {
  return this;
});
$p.c0 = (function() {
  var lo = this.b;
  var hi = this.c;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
});
$p.bZ = (function() {
  var lo = this.b;
  return ((4.294967296E9 * this.c) + (lo >>> 0.0));
});
$p.bY = (function(that) {
  return $m_RTLong$().b5(this.b, this.c, that.b, that.c);
});
$p.bX = (function(that) {
  return $m_RTLong$().b5(this.b, this.c, that.b, that.c);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  N: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      $thiz.g = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.g = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.g = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.g = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, true);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble % bDouble);
      $thiz.g = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.g = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.g = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.g = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, false);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, askQuotient) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var b = shift;
  var lo = (((32 & b) === 0) ? (blo << b) : 0);
  var hi = (((32 & b) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - b) | 0)) | 0) | (bhi << b)) : (blo << b));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? ((alo$1 >>> 0) >= (blo$1 >>> 0)) : ((ahi$1 >>> 0) >= (bhi$1 >>> 0)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((hi$1 - hi$2) | 0) + ((((~lo$1) & lo$2) | ((~(lo$1 ^ lo$2)) & lo$3)) >> 31)) | 0);
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? ((alo$2 >>> 0) >= (blo >>> 0)) : ((ahi$2 >>> 0) >= (bhi >>> 0)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (lo$6 >>> 0.0));
    var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
    if (askQuotient) {
      var x = (remDouble / bDouble);
      var lo$7 = (x | 0.0);
      var hi$7 = ((x / 4.294967296E9) | 0.0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((hi$8 + hi$7) | 0) + ((((lo$8 & lo$7) | ((lo$8 | lo$7) & (~lo$9))) >>> 31) | 0)) | 0);
      $thiz.g = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      $thiz.g = ((rem_mod_bDouble / 4.294967296E9) | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.g = quotHi;
    return quotLo;
  } else {
    $thiz.g = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.g = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.b7 = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = (((-1000000000) + approxRem) | 0);
    }
    var this$4 = approxRem;
    var remStr = ("" + this$4);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.b6 = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.g = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.g = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((value / 4.294967296E9) | 0.0);
    this.g = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.b5 = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.bn = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.g = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.g = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.g = (-1);
      return (-1);
    } else {
      this.g = 0;
      return 0;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi = this.g;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.g = hi$1;
      return lo$1;
    }
  }
});
$p.bo = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.g = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.g = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$p.bI = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.g = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.g = 0;
      return 0;
    } else {
      this.g = ahi;
      return alo;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if ((ahi < 0)) {
      var hi = this.g;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.g = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$p.bJ = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.g = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.g = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  aI: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_Lraytracer_hit_hit$package$() {
}
$p = $c_Lraytracer_hit_hit$package$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_hit_hit$package$;
/** @constructor */
function $h_Lraytracer_hit_hit$package$() {
}
$h_Lraytracer_hit_hit$package$.prototype = $p;
$p.bk = (function(h, other) {
  var offset$proxy1 = (h.d | 0);
  var _1 = h.a;
  var offset$proxy2 = (other.d | 0);
  var _1$1 = other.a;
  var value$proxy1 = (+_1$1.getFloat64(offset$proxy2, true));
  _1.setFloat64(offset$proxy1, value$proxy1, true);
  var offset$proxy3 = ((8 + (h.d | 0)) | 0);
  var _1$2 = h.a;
  var offset$proxy4 = ((8 + (other.d | 0)) | 0);
  var _1$3 = other.a;
  var value$proxy2 = (+_1$3.getFloat64(offset$proxy4, true));
  _1$2.setFloat64(offset$proxy3, value$proxy2, true);
  var offset$proxy7 = ((8 + offset$proxy3) | 0);
  var offset$proxy8 = ((8 + offset$proxy4) | 0);
  var value$proxy3 = (+_1$3.getFloat64(offset$proxy8, true));
  _1$2.setFloat64(offset$proxy7, value$proxy3, true);
  var offset$proxy9 = ((16 + offset$proxy3) | 0);
  var offset$proxy10 = ((16 + offset$proxy4) | 0);
  var value$proxy4 = (+_1$3.getFloat64(offset$proxy10, true));
  _1$2.setFloat64(offset$proxy9, value$proxy4, true);
  var offset$proxy11 = ((32 + (h.d | 0)) | 0);
  var _1$4 = h.a;
  var offset$proxy12 = ((32 + (other.d | 0)) | 0);
  var _1$5 = other.a;
  var value$proxy5 = (+_1$5.getFloat64(offset$proxy12, true));
  _1$4.setFloat64(offset$proxy11, value$proxy5, true);
  var offset$proxy15 = ((8 + offset$proxy11) | 0);
  var offset$proxy16 = ((8 + offset$proxy12) | 0);
  var value$proxy6 = (+_1$5.getFloat64(offset$proxy16, true));
  _1$4.setFloat64(offset$proxy15, value$proxy6, true);
  var offset$proxy17 = ((16 + offset$proxy11) | 0);
  var offset$proxy18 = ((16 + offset$proxy12) | 0);
  var value$proxy7 = (+_1$5.getFloat64(offset$proxy18, true));
  _1$4.setFloat64(offset$proxy17, value$proxy7, true);
  var offset$proxy19 = ((56 + (h.d | 0)) | 0);
  var _1$6 = h.a;
  var offset$proxy20 = ((56 + (other.d | 0)) | 0);
  var _1$7 = other.a;
  var value$proxy8 = (_1$7.getUint8(offset$proxy20) | 0);
  _1$6.setUint8(offset$proxy19, value$proxy8);
  var offset$proxy21 = ((57 + (other.d | 0)) | 0);
  var _1$8 = other.a;
  var offset$proxy22 = ((57 + (h.d | 0)) | 0);
  var _1$9 = h.a;
  var value$proxy9 = (_1$8.getUint8(offset$proxy21) | 0);
  _1$9.setUint8(offset$proxy22, value$proxy9);
  var offset$proxy25 = ((1 + offset$proxy22) | 0);
  var offset$proxy26 = ((1 + offset$proxy21) | 0);
  var value$proxy10 = (+_1$8.getFloat64(offset$proxy26, true));
  _1$9.setFloat64(offset$proxy25, value$proxy10, true);
  var offset$proxy29 = ((8 + offset$proxy25) | 0);
  var offset$proxy30 = ((8 + offset$proxy26) | 0);
  var value$proxy11 = (+_1$8.getFloat64(offset$proxy30, true));
  _1$9.setFloat64(offset$proxy29, value$proxy11, true);
  var offset$proxy31 = ((16 + offset$proxy25) | 0);
  var offset$proxy32 = ((16 + offset$proxy26) | 0);
  var value$proxy12 = (+_1$8.getFloat64(offset$proxy32, true));
  _1$9.setFloat64(offset$proxy31, value$proxy12, true);
  var offset$proxy33 = ((25 + offset$proxy22) | 0);
  var offset$proxy34 = ((25 + offset$proxy21) | 0);
  var value$proxy13 = (+_1$8.getFloat64(offset$proxy34, true));
  _1$9.setFloat64(offset$proxy33, value$proxy13, true);
});
var $d_Lraytracer_hit_hit$package$ = new $TypeData().i($c_Lraytracer_hit_hit$package$, "raytracer.hit.hit$package$", ({
  aJ: 1
}));
var $n_Lraytracer_hit_hit$package$;
function $m_Lraytracer_hit_hit$package$() {
  if ((!$n_Lraytracer_hit_hit$package$)) {
    $n_Lraytracer_hit_hit$package$ = new $c_Lraytracer_hit_hit$package$();
  }
  return $n_Lraytracer_hit_hit$package$;
}
/** @constructor */
function $c_Lraytracer_render_Renderer$() {
  this.k = null;
  $n_Lraytracer_render_Renderer$ = this;
  var buffer = new ArrayBuffer(402);
  this.k = new $c_T2(new DataView(buffer), 0);
  var s$proxy1 = this.k;
  var offset$proxy1 = ((48 + (s$proxy1.d | 0)) | 0);
  var _1$1 = s$proxy1.a;
  _1$1.setFloat64(offset$proxy1, 0.5, true);
  var offset$proxy3 = ((8 + offset$proxy1) | 0);
  _1$1.setFloat64(offset$proxy3, 0.7, true);
  var offset$proxy4 = ((16 + offset$proxy1) | 0);
  _1$1.setFloat64(offset$proxy4, 1.0, true);
  var s$proxy5 = this.k;
  var offset$proxy5 = ((72 + (s$proxy5.d | 0)) | 0);
  var _1$2 = s$proxy5.a;
  _1$2.setFloat64(offset$proxy5, 1.0, true);
  var offset$proxy7 = ((8 + offset$proxy5) | 0);
  _1$2.setFloat64(offset$proxy7, 1.0, true);
  var offset$proxy8 = ((16 + offset$proxy5) | 0);
  _1$2.setFloat64(offset$proxy8, 1.0, true);
}
$p = $c_Lraytracer_render_Renderer$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_render_Renderer$;
/** @constructor */
function $h_Lraytracer_render_Renderer$() {
}
$h_Lraytracer_render_Renderer$.prototype = $p;
$p.bK = (function(world, width, height, samplesPerPixel, maxDepth, evidence$1) {
  var count$proxy1 = Math.imul(width, height);
  var buffer = new ArrayBuffer((count$proxy1 << 2));
  var pixels = new $c_T2(new DataView(buffer), count$proxy1);
  var s$proxy298 = this.k;
  var offset$proxy298 = ((96 + (s$proxy298.d | 0)) | 0);
  var _1$1 = s$proxy298.a;
  var buffer$2 = new ArrayBuffer(24);
  var _1$2 = new DataView(buffer$2);
  var y = 0;
  while ((y < height)) {
    console.log(("Rendering image row " + ((1 + y) | 0)));
    var x = 0;
    while ((x < width)) {
      _1$2.setFloat64(0, 0.0, true);
      _1$2.setFloat64(8, 0.0, true);
      _1$2.setFloat64(16, 0.0, true);
      var s$1 = 0;
      while ((s$1 < samplesPerPixel)) {
        var u = ((x + (+Math.random())) / width);
        var v = (((((-1) + ((height - y) | 0)) | 0) + (+Math.random())) / height);
        var s$proxy302 = this.k;
        var offset$proxy302 = ((306 + (s$proxy302.d | 0)) | 0);
        var _1$3 = s$proxy302.a;
        var value$proxy79 = (+_1$3.getFloat64(offset$proxy302, true));
        _1$1.setFloat64(offset$proxy298, value$proxy79, true);
        var offset$proxy307 = ((8 + offset$proxy298) | 0);
        var offset$proxy308 = ((8 + offset$proxy302) | 0);
        var value$proxy80 = (+_1$3.getFloat64(offset$proxy308, true));
        _1$1.setFloat64(offset$proxy307, value$proxy80, true);
        var offset$proxy309 = ((16 + offset$proxy298) | 0);
        var offset$proxy310 = ((16 + offset$proxy302) | 0);
        var value$proxy81 = (+_1$3.getFloat64(offset$proxy310, true));
        _1$1.setFloat64(offset$proxy309, value$proxy81, true);
        var s$proxy311 = this.k;
        var offset$proxy311 = (s$proxy311.d | 0);
        var _1$4 = s$proxy311.a;
        var s$proxy312 = this.k;
        var offset$proxy312 = ((24 + (s$proxy312.d | 0)) | 0);
        var _1$5 = s$proxy312.a;
        var offset$proxy313 = ((24 + offset$proxy302) | 0);
        var value$proxy82 = (+_1$3.getFloat64(offset$proxy313, true));
        _1$4.setFloat64(offset$proxy311, value$proxy82, true);
        var offset$proxy316 = ((8 + offset$proxy311) | 0);
        var offset$proxy317 = ((8 + offset$proxy313) | 0);
        var value$proxy83 = (+_1$3.getFloat64(offset$proxy317, true));
        _1$4.setFloat64(offset$proxy316, value$proxy83, true);
        var offset$proxy318 = ((16 + offset$proxy311) | 0);
        var offset$proxy319 = ((16 + offset$proxy313) | 0);
        var value$proxy84 = (+_1$3.getFloat64(offset$proxy319, true));
        _1$4.setFloat64(offset$proxy318, value$proxy84, true);
        var offset$proxy320 = ((48 + offset$proxy302) | 0);
        var value$proxy85 = (+_1$3.getFloat64(offset$proxy320, true));
        _1$5.setFloat64(offset$proxy312, value$proxy85, true);
        var offset$proxy323 = ((8 + offset$proxy312) | 0);
        var offset$proxy324 = ((8 + offset$proxy320) | 0);
        var value$proxy86 = (+_1$3.getFloat64(offset$proxy324, true));
        _1$5.setFloat64(offset$proxy323, value$proxy86, true);
        var offset$proxy325 = ((16 + offset$proxy312) | 0);
        var offset$proxy326 = ((16 + offset$proxy320) | 0);
        var value$proxy87 = (+_1$3.getFloat64(offset$proxy326, true));
        _1$5.setFloat64(offset$proxy325, value$proxy87, true);
        var value$proxy88 = ((+_1$5.getFloat64(offset$proxy312, true)) * u);
        _1$5.setFloat64(offset$proxy312, value$proxy88, true);
        var offset$proxy329 = ((8 + offset$proxy312) | 0);
        var offset$proxy330 = ((8 + offset$proxy312) | 0);
        var value$proxy89 = ((+_1$5.getFloat64(offset$proxy330, true)) * u);
        _1$5.setFloat64(offset$proxy329, value$proxy89, true);
        var offset$proxy331 = ((16 + offset$proxy312) | 0);
        var offset$proxy332 = ((16 + offset$proxy312) | 0);
        var value$proxy90 = ((+_1$5.getFloat64(offset$proxy332, true)) * u);
        _1$5.setFloat64(offset$proxy331, value$proxy90, true);
        var value$proxy91 = ((+_1$4.getFloat64(offset$proxy311, true)) + (+_1$5.getFloat64(offset$proxy312, true)));
        _1$4.setFloat64(offset$proxy311, value$proxy91, true);
        var offset$proxy336 = ((8 + offset$proxy311) | 0);
        var offset$proxy337 = ((8 + offset$proxy311) | 0);
        var $x_1 = _1$4.getFloat64(offset$proxy337, true);
        var offset$proxy338 = ((8 + offset$proxy312) | 0);
        var value$proxy92 = ((+$x_1) + (+_1$5.getFloat64(offset$proxy338, true)));
        _1$4.setFloat64(offset$proxy336, value$proxy92, true);
        var offset$proxy339 = ((16 + offset$proxy311) | 0);
        var offset$proxy340 = ((16 + offset$proxy311) | 0);
        var $x_2 = _1$4.getFloat64(offset$proxy340, true);
        var offset$proxy341 = ((16 + offset$proxy312) | 0);
        var value$proxy93 = ((+$x_2) + (+_1$5.getFloat64(offset$proxy341, true)));
        _1$4.setFloat64(offset$proxy339, value$proxy93, true);
        var offset$proxy342 = ((72 + offset$proxy302) | 0);
        var value$proxy94 = (+_1$3.getFloat64(offset$proxy342, true));
        _1$5.setFloat64(offset$proxy312, value$proxy94, true);
        var offset$proxy345 = ((8 + offset$proxy312) | 0);
        var offset$proxy346 = ((8 + offset$proxy342) | 0);
        var value$proxy95 = (+_1$3.getFloat64(offset$proxy346, true));
        _1$5.setFloat64(offset$proxy345, value$proxy95, true);
        var offset$proxy347 = ((16 + offset$proxy312) | 0);
        var offset$proxy348 = ((16 + offset$proxy342) | 0);
        var value$proxy96 = (+_1$3.getFloat64(offset$proxy348, true));
        _1$5.setFloat64(offset$proxy347, value$proxy96, true);
        var value$proxy97 = ((+_1$5.getFloat64(offset$proxy312, true)) * v);
        _1$5.setFloat64(offset$proxy312, value$proxy97, true);
        var offset$proxy351 = ((8 + offset$proxy312) | 0);
        var offset$proxy352 = ((8 + offset$proxy312) | 0);
        var value$proxy98 = ((+_1$5.getFloat64(offset$proxy352, true)) * v);
        _1$5.setFloat64(offset$proxy351, value$proxy98, true);
        var offset$proxy353 = ((16 + offset$proxy312) | 0);
        var offset$proxy354 = ((16 + offset$proxy312) | 0);
        var value$proxy99 = ((+_1$5.getFloat64(offset$proxy354, true)) * v);
        _1$5.setFloat64(offset$proxy353, value$proxy99, true);
        var value$proxy100 = ((+_1$4.getFloat64(offset$proxy311, true)) + (+_1$5.getFloat64(offset$proxy312, true)));
        _1$4.setFloat64(offset$proxy311, value$proxy100, true);
        var offset$proxy358 = ((8 + offset$proxy311) | 0);
        var offset$proxy359 = ((8 + offset$proxy311) | 0);
        var $x_3 = _1$4.getFloat64(offset$proxy359, true);
        var offset$proxy360 = ((8 + offset$proxy312) | 0);
        var value$proxy101 = ((+$x_3) + (+_1$5.getFloat64(offset$proxy360, true)));
        _1$4.setFloat64(offset$proxy358, value$proxy101, true);
        var offset$proxy361 = ((16 + offset$proxy311) | 0);
        var offset$proxy362 = ((16 + offset$proxy311) | 0);
        var $x_4 = _1$4.getFloat64(offset$proxy362, true);
        var offset$proxy363 = ((16 + offset$proxy312) | 0);
        var value$proxy102 = ((+$x_4) + (+_1$5.getFloat64(offset$proxy363, true)));
        _1$4.setFloat64(offset$proxy361, value$proxy102, true);
        var value$proxy103 = ((+_1$4.getFloat64(offset$proxy311, true)) - (+_1$3.getFloat64(offset$proxy302, true)));
        _1$4.setFloat64(offset$proxy311, value$proxy103, true);
        var offset$proxy368 = ((8 + offset$proxy311) | 0);
        var offset$proxy369 = ((8 + offset$proxy311) | 0);
        var $x_5 = _1$4.getFloat64(offset$proxy369, true);
        var offset$proxy370 = ((8 + offset$proxy302) | 0);
        var value$proxy104 = ((+$x_5) - (+_1$3.getFloat64(offset$proxy370, true)));
        _1$4.setFloat64(offset$proxy368, value$proxy104, true);
        var offset$proxy371 = ((16 + offset$proxy311) | 0);
        var offset$proxy372 = ((16 + offset$proxy311) | 0);
        var $x_6 = _1$4.getFloat64(offset$proxy372, true);
        var offset$proxy373 = ((16 + offset$proxy302) | 0);
        var value$proxy105 = ((+$x_6) - (+_1$3.getFloat64(offset$proxy373, true)));
        _1$4.setFloat64(offset$proxy371, value$proxy105, true);
        var offset$proxy374 = ((24 + offset$proxy298) | 0);
        var value$proxy106 = (+_1$4.getFloat64(offset$proxy311, true));
        _1$1.setFloat64(offset$proxy374, value$proxy106, true);
        var offset$proxy377 = ((8 + offset$proxy374) | 0);
        var offset$proxy378 = ((8 + offset$proxy311) | 0);
        var value$proxy107 = (+_1$4.getFloat64(offset$proxy378, true));
        _1$1.setFloat64(offset$proxy377, value$proxy107, true);
        var offset$proxy379 = ((16 + offset$proxy374) | 0);
        var offset$proxy380 = ((16 + offset$proxy311) | 0);
        var value$proxy108 = (+_1$4.getFloat64(offset$proxy380, true));
        _1$1.setFloat64(offset$proxy379, value$proxy108, true);
        _return: {
          var s$proxy82 = this.k;
          var offset$proxy82 = ((192 + (s$proxy82.d | 0)) | 0);
          var hit = new $c_T2(s$proxy82.a, offset$proxy82);
          var s$proxy83 = this.k;
          var offset$proxy83 = ((96 + (s$proxy83.d | 0)) | 0);
          var currentRay = new $c_T2(s$proxy83.a, offset$proxy83);
          var s$proxy84 = this.k;
          var offset$proxy84 = ((144 + (s$proxy84.d | 0)) | 0);
          var _1$8 = s$proxy84.a;
          var s$proxy85 = this.k;
          var s$proxy86 = this.k;
          var offset$proxy86 = ((282 + (s$proxy86.d | 0)) | 0);
          var _1$10 = s$proxy86.a;
          var offset$proxy87 = (currentRay.d | 0);
          var _1$11 = currentRay.a;
          var value$proxy22 = (+_1$1.getFloat64(offset$proxy298, true));
          _1$11.setFloat64(offset$proxy87, value$proxy22, true);
          var offset$proxy91 = ((8 + offset$proxy87) | 0);
          var offset$proxy92 = ((8 + offset$proxy298) | 0);
          var value$proxy23 = (+_1$1.getFloat64(offset$proxy92, true));
          _1$11.setFloat64(offset$proxy91, value$proxy23, true);
          var offset$proxy93 = ((16 + offset$proxy87) | 0);
          var offset$proxy94 = ((16 + offset$proxy298) | 0);
          var value$proxy24 = (+_1$1.getFloat64(offset$proxy94, true));
          _1$11.setFloat64(offset$proxy93, value$proxy24, true);
          var offset$proxy95 = ((24 + (currentRay.d | 0)) | 0);
          var _1$12 = currentRay.a;
          var offset$proxy96 = ((24 + offset$proxy298) | 0);
          var value$proxy25 = (+_1$1.getFloat64(offset$proxy96, true));
          _1$12.setFloat64(offset$proxy95, value$proxy25, true);
          var offset$proxy99 = ((8 + offset$proxy95) | 0);
          var offset$proxy100 = ((8 + offset$proxy96) | 0);
          var value$proxy26 = (+_1$1.getFloat64(offset$proxy100, true));
          _1$12.setFloat64(offset$proxy99, value$proxy26, true);
          var offset$proxy101 = ((16 + offset$proxy95) | 0);
          var offset$proxy102 = ((16 + offset$proxy96) | 0);
          var value$proxy27 = (+_1$1.getFloat64(offset$proxy102, true));
          _1$12.setFloat64(offset$proxy101, value$proxy27, true);
          _1$10.setFloat64(offset$proxy86, 1.0, true);
          var offset$proxy104 = ((8 + offset$proxy86) | 0);
          _1$10.setFloat64(offset$proxy104, 1.0, true);
          var offset$proxy105 = ((16 + offset$proxy86) | 0);
          _1$10.setFloat64(offset$proxy105, 1.0, true);
          var depth = 0;
          while ((depth < maxDepth)) {
            if (evidence$1.as(world, currentRay, 0.001, 100000.0, hit)) {
              var s$proxy106 = this.k;
              var offset$proxy106 = (s$proxy106.d | 0);
              var _1$13 = s$proxy106.a;
              var s$proxy107 = this.k;
              var offset$proxy107 = ((96 + (s$proxy107.d | 0)) | 0);
              var _1$14 = s$proxy107.a;
              var s$proxy108 = this.k;
              var offset$proxy108 = ((144 + (s$proxy108.d | 0)) | 0);
              var _1$15 = s$proxy108.a;
              var s$proxy109 = this.k;
              var offset$proxy109 = ((192 + (s$proxy109.d | 0)) | 0);
              var _1$16 = s$proxy109.a;
              var offset$proxy110 = ((57 + offset$proxy109) | 0);
              var code$proxy1 = (_1$16.getUint8(offset$proxy110) | 0);
              matchResult1: {
                var matType;
                if ((code$proxy1 === 0)) {
                  var matType = $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType();
                  break matchResult1;
                }
                if ((code$proxy1 === 1)) {
                  var matType = $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType();
                  break matchResult1;
                }
                throw new $c_jl_IllegalArgumentException(("Unknown MaterialType code: " + code$proxy1));
              }
              var x$2 = $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType();
              if ((matType === x$2)) {
                var l = 2.0;
                while ((l >= 1.0)) {
                  var d$proxy1 = (+Math.random());
                  var x$proxy1 = ((2.0 * d$proxy1) - 1.0);
                  var d$proxy2 = (+Math.random());
                  var y$proxy1 = ((2.0 * d$proxy2) - 1.0);
                  var d$proxy3 = (+Math.random());
                  var z$proxy1 = ((2.0 * d$proxy3) - 1.0);
                  _1$13.setFloat64(offset$proxy106, x$proxy1, true);
                  var offset$proxy2 = ((8 + offset$proxy106) | 0);
                  _1$13.setFloat64(offset$proxy2, y$proxy1, true);
                  var offset$proxy3 = ((16 + offset$proxy106) | 0);
                  _1$13.setFloat64(offset$proxy3, z$proxy1, true);
                  var $x_12 = _1$13.getFloat64(offset$proxy106, true);
                  var $x_11 = _1$13.getFloat64(offset$proxy106, true);
                  var offset$proxy6 = ((8 + offset$proxy106) | 0);
                  var $x_10 = _1$13.getFloat64(offset$proxy6, true);
                  var offset$proxy7 = ((8 + offset$proxy106) | 0);
                  var $x_9 = _1$13.getFloat64(offset$proxy7, true);
                  var offset$proxy8 = ((16 + offset$proxy106) | 0);
                  var $x_8 = _1$13.getFloat64(offset$proxy8, true);
                  var offset$proxy9 = ((16 + offset$proxy106) | 0);
                  l = ((((+$x_12) * (+$x_11)) + ((+$x_10) * (+$x_9))) + ((+$x_8) * (+_1$13.getFloat64(offset$proxy9, true))));
                }
                var $x_17 = _1$13.getFloat64(offset$proxy106, true);
                var $x_16 = _1$13.getFloat64(offset$proxy106, true);
                var offset$proxy12 = ((8 + offset$proxy106) | 0);
                var $x_15 = _1$13.getFloat64(offset$proxy12, true);
                var offset$proxy13 = ((8 + offset$proxy106) | 0);
                var $x_14 = _1$13.getFloat64(offset$proxy13, true);
                var offset$proxy14 = ((16 + offset$proxy106) | 0);
                var $x_13 = _1$13.getFloat64(offset$proxy14, true);
                var offset$proxy15 = ((16 + offset$proxy106) | 0);
                var a = ((((+$x_17) * (+$x_16)) + ((+$x_15) * (+$x_14))) + ((+$x_13) * (+_1$13.getFloat64(offset$proxy15, true))));
                var scalar$proxy1 = (+Math.sqrt(a));
                var scalar$proxy2 = (1.0 / scalar$proxy1);
                var value$proxy1 = ((+_1$13.getFloat64(offset$proxy106, true)) * scalar$proxy2);
                _1$13.setFloat64(offset$proxy106, value$proxy1, true);
                var offset$proxy18 = ((8 + offset$proxy106) | 0);
                var offset$proxy19 = ((8 + offset$proxy106) | 0);
                var value$proxy2 = ((+_1$13.getFloat64(offset$proxy19, true)) * scalar$proxy2);
                _1$13.setFloat64(offset$proxy18, value$proxy2, true);
                var offset$proxy20 = ((16 + offset$proxy106) | 0);
                var offset$proxy21 = ((16 + offset$proxy106) | 0);
                var value$proxy3 = ((+_1$13.getFloat64(offset$proxy21, true)) * scalar$proxy2);
                _1$13.setFloat64(offset$proxy20, value$proxy3, true);
                var $x_22 = _1$13.getFloat64(offset$proxy106, true);
                var $x_21 = _1$13.getFloat64(offset$proxy106, true);
                var offset$proxy114 = ((8 + offset$proxy106) | 0);
                var $x_20 = _1$13.getFloat64(offset$proxy114, true);
                var offset$proxy115 = ((8 + offset$proxy106) | 0);
                var $x_19 = _1$13.getFloat64(offset$proxy115, true);
                var offset$proxy116 = ((16 + offset$proxy106) | 0);
                var $x_18 = _1$13.getFloat64(offset$proxy116, true);
                var offset$proxy117 = ((16 + offset$proxy106) | 0);
                if ((((((+$x_22) * (+$x_21)) + ((+$x_20) * (+$x_19))) + ((+$x_18) * (+_1$13.getFloat64(offset$proxy117, true)))) < 1.0E-6)) {
                  var offset$proxy118 = ((32 + offset$proxy109) | 0);
                  var value$proxy28 = (+_1$16.getFloat64(offset$proxy118, true));
                  _1$13.setFloat64(offset$proxy106, value$proxy28, true);
                  var offset$proxy121 = ((8 + offset$proxy106) | 0);
                  var offset$proxy122 = ((8 + offset$proxy118) | 0);
                  var value$proxy29 = (+_1$16.getFloat64(offset$proxy122, true));
                  _1$13.setFloat64(offset$proxy121, value$proxy29, true);
                  var offset$proxy123 = ((16 + offset$proxy106) | 0);
                  var offset$proxy124 = ((16 + offset$proxy118) | 0);
                  var value$proxy30 = (+_1$16.getFloat64(offset$proxy124, true));
                  _1$13.setFloat64(offset$proxy123, value$proxy30, true);
                }
                var offset$proxy126 = ((8 + offset$proxy109) | 0);
                var value$proxy31 = (+_1$16.getFloat64(offset$proxy126, true));
                _1$15.setFloat64(offset$proxy108, value$proxy31, true);
                var offset$proxy129 = ((8 + offset$proxy108) | 0);
                var offset$proxy130 = ((8 + offset$proxy126) | 0);
                var value$proxy32 = (+_1$16.getFloat64(offset$proxy130, true));
                _1$15.setFloat64(offset$proxy129, value$proxy32, true);
                var offset$proxy131 = ((16 + offset$proxy108) | 0);
                var offset$proxy132 = ((16 + offset$proxy126) | 0);
                var value$proxy33 = (+_1$16.getFloat64(offset$proxy132, true));
                _1$15.setFloat64(offset$proxy131, value$proxy33, true);
                var offset$proxy133 = ((32 + offset$proxy109) | 0);
                var offset$proxy134 = ((24 + offset$proxy108) | 0);
                var value$proxy34 = ((+_1$16.getFloat64(offset$proxy133, true)) + (+_1$13.getFloat64(offset$proxy106, true)));
                _1$15.setFloat64(offset$proxy134, value$proxy34, true);
                var offset$proxy138 = ((8 + offset$proxy134) | 0);
                var offset$proxy139 = ((8 + offset$proxy133) | 0);
                var $x_23 = _1$16.getFloat64(offset$proxy139, true);
                var offset$proxy140 = ((8 + offset$proxy106) | 0);
                var value$proxy35 = ((+$x_23) + (+_1$13.getFloat64(offset$proxy140, true)));
                _1$15.setFloat64(offset$proxy138, value$proxy35, true);
                var offset$proxy141 = ((16 + offset$proxy134) | 0);
                var offset$proxy142 = ((16 + offset$proxy133) | 0);
                var $x_24 = _1$16.getFloat64(offset$proxy142, true);
                var offset$proxy143 = ((16 + offset$proxy106) | 0);
                var value$proxy36 = ((+$x_24) + (+_1$13.getFloat64(offset$proxy143, true)));
                _1$15.setFloat64(offset$proxy141, value$proxy36, true);
                var $x_7 = true;
              } else {
                var x$4 = $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType();
                if ((matType === x$4)) {
                  var offset$proxy144 = ((24 + offset$proxy107) | 0);
                  var $x_29 = _1$14.getFloat64(offset$proxy144, true);
                  var $x_28 = _1$14.getFloat64(offset$proxy144, true);
                  var offset$proxy147 = ((8 + offset$proxy144) | 0);
                  var $x_27 = _1$14.getFloat64(offset$proxy147, true);
                  var offset$proxy148 = ((8 + offset$proxy144) | 0);
                  var $x_26 = _1$14.getFloat64(offset$proxy148, true);
                  var offset$proxy149 = ((16 + offset$proxy144) | 0);
                  var $x_25 = _1$14.getFloat64(offset$proxy149, true);
                  var offset$proxy150 = ((16 + offset$proxy144) | 0);
                  var a$1 = ((((+$x_29) * (+$x_28)) + ((+$x_27) * (+$x_26))) + ((+$x_25) * (+_1$14.getFloat64(offset$proxy150, true))));
                  var scalar$proxy1$1 = (+Math.sqrt(a$1));
                  var scalar$proxy2$1 = (1.0 / scalar$proxy1$1);
                  var value$proxy37 = ((+_1$14.getFloat64(offset$proxy144, true)) * scalar$proxy2$1);
                  _1$13.setFloat64(offset$proxy106, value$proxy37, true);
                  var offset$proxy153 = ((8 + offset$proxy106) | 0);
                  var offset$proxy154 = ((8 + offset$proxy144) | 0);
                  var value$proxy38 = ((+_1$14.getFloat64(offset$proxy154, true)) * scalar$proxy2$1);
                  _1$13.setFloat64(offset$proxy153, value$proxy38, true);
                  var offset$proxy155 = ((16 + offset$proxy106) | 0);
                  var offset$proxy156 = ((16 + offset$proxy144) | 0);
                  var value$proxy39 = ((+_1$14.getFloat64(offset$proxy156, true)) * scalar$proxy2$1);
                  _1$13.setFloat64(offset$proxy155, value$proxy39, true);
                  var offset$proxy157 = ((32 + offset$proxy109) | 0);
                  var offset$proxy158 = ((24 + offset$proxy108) | 0);
                  var $x_34 = _1$13.getFloat64(offset$proxy106, true);
                  var $x_33 = _1$16.getFloat64(offset$proxy157, true);
                  var offset$proxy161 = ((8 + offset$proxy106) | 0);
                  var $x_32 = _1$13.getFloat64(offset$proxy161, true);
                  var offset$proxy162 = ((8 + offset$proxy157) | 0);
                  var $x_31 = _1$16.getFloat64(offset$proxy162, true);
                  var offset$proxy163 = ((16 + offset$proxy106) | 0);
                  var $x_30 = _1$13.getFloat64(offset$proxy163, true);
                  var offset$proxy164 = ((16 + offset$proxy157) | 0);
                  var d = (2.0 * ((((+$x_34) * (+$x_33)) + ((+$x_32) * (+$x_31))) + ((+$x_30) * (+_1$16.getFloat64(offset$proxy164, true)))));
                  var value$proxy40 = ((+_1$16.getFloat64(offset$proxy157, true)) * d);
                  _1$15.setFloat64(offset$proxy158, value$proxy40, true);
                  var offset$proxy167 = ((8 + offset$proxy158) | 0);
                  var offset$proxy168 = ((8 + offset$proxy157) | 0);
                  var value$proxy41 = ((+_1$16.getFloat64(offset$proxy168, true)) * d);
                  _1$15.setFloat64(offset$proxy167, value$proxy41, true);
                  var offset$proxy169 = ((16 + offset$proxy158) | 0);
                  var offset$proxy170 = ((16 + offset$proxy157) | 0);
                  var value$proxy42 = ((+_1$16.getFloat64(offset$proxy170, true)) * d);
                  _1$15.setFloat64(offset$proxy169, value$proxy42, true);
                  var value$proxy43 = ((+_1$13.getFloat64(offset$proxy106, true)) - (+_1$15.getFloat64(offset$proxy158, true)));
                  _1$15.setFloat64(offset$proxy158, value$proxy43, true);
                  var offset$proxy174 = ((8 + offset$proxy158) | 0);
                  var offset$proxy175 = ((8 + offset$proxy106) | 0);
                  var $x_35 = _1$13.getFloat64(offset$proxy175, true);
                  var offset$proxy176 = ((8 + offset$proxy158) | 0);
                  var value$proxy44 = ((+$x_35) - (+_1$15.getFloat64(offset$proxy176, true)));
                  _1$15.setFloat64(offset$proxy174, value$proxy44, true);
                  var offset$proxy177 = ((16 + offset$proxy158) | 0);
                  var offset$proxy178 = ((16 + offset$proxy106) | 0);
                  var $x_36 = _1$13.getFloat64(offset$proxy178, true);
                  var offset$proxy179 = ((16 + offset$proxy158) | 0);
                  var value$proxy45 = ((+$x_36) - (+_1$15.getFloat64(offset$proxy179, true)));
                  _1$15.setFloat64(offset$proxy177, value$proxy45, true);
                  var offset$proxy180 = ((57 + offset$proxy109) | 0);
                  var offset$proxy181 = ((25 + offset$proxy180) | 0);
                  if (((+_1$16.getFloat64(offset$proxy181, true)) > 0.0)) {
                    var l$1 = 2.0;
                    while ((l$1 >= 1.0)) {
                      var d$proxy1$1 = (+Math.random());
                      var x$proxy1$1 = ((2.0 * d$proxy1$1) - 1.0);
                      var d$proxy2$1 = (+Math.random());
                      var y$proxy1$1 = ((2.0 * d$proxy2$1) - 1.0);
                      var d$proxy3$1 = (+Math.random());
                      var z$proxy1$1 = ((2.0 * d$proxy3$1) - 1.0);
                      _1$13.setFloat64(offset$proxy106, x$proxy1$1, true);
                      var offset$proxy2$1 = ((8 + offset$proxy106) | 0);
                      _1$13.setFloat64(offset$proxy2$1, y$proxy1$1, true);
                      var offset$proxy3$1 = ((16 + offset$proxy106) | 0);
                      _1$13.setFloat64(offset$proxy3$1, z$proxy1$1, true);
                      var $x_41 = _1$13.getFloat64(offset$proxy106, true);
                      var $x_40 = _1$13.getFloat64(offset$proxy106, true);
                      var offset$proxy6$1 = ((8 + offset$proxy106) | 0);
                      var $x_39 = _1$13.getFloat64(offset$proxy6$1, true);
                      var offset$proxy7$1 = ((8 + offset$proxy106) | 0);
                      var $x_38 = _1$13.getFloat64(offset$proxy7$1, true);
                      var offset$proxy8$1 = ((16 + offset$proxy106) | 0);
                      var $x_37 = _1$13.getFloat64(offset$proxy8$1, true);
                      var offset$proxy9$1 = ((16 + offset$proxy106) | 0);
                      l$1 = ((((+$x_41) * (+$x_40)) + ((+$x_39) * (+$x_38))) + ((+$x_37) * (+_1$13.getFloat64(offset$proxy9$1, true))));
                    }
                    var offset$proxy182 = ((57 + offset$proxy109) | 0);
                    var offset$proxy183 = ((25 + offset$proxy182) | 0);
                    var scalar$proxy3 = (+_1$16.getFloat64(offset$proxy183, true));
                    var value$proxy46 = ((+_1$13.getFloat64(offset$proxy106, true)) * scalar$proxy3);
                    _1$13.setFloat64(offset$proxy106, value$proxy46, true);
                    var offset$proxy186 = ((8 + offset$proxy106) | 0);
                    var offset$proxy187 = ((8 + offset$proxy106) | 0);
                    var value$proxy47 = ((+_1$13.getFloat64(offset$proxy187, true)) * scalar$proxy3);
                    _1$13.setFloat64(offset$proxy186, value$proxy47, true);
                    var offset$proxy188 = ((16 + offset$proxy106) | 0);
                    var offset$proxy189 = ((16 + offset$proxy106) | 0);
                    var value$proxy48 = ((+_1$13.getFloat64(offset$proxy189, true)) * scalar$proxy3);
                    _1$13.setFloat64(offset$proxy188, value$proxy48, true);
                    var offset$proxy190 = ((24 + offset$proxy108) | 0);
                    var value$proxy49 = ((+_1$15.getFloat64(offset$proxy190, true)) + (+_1$13.getFloat64(offset$proxy106, true)));
                    _1$15.setFloat64(offset$proxy190, value$proxy49, true);
                    var offset$proxy194 = ((8 + offset$proxy190) | 0);
                    var offset$proxy195 = ((8 + offset$proxy190) | 0);
                    var $x_42 = _1$15.getFloat64(offset$proxy195, true);
                    var offset$proxy196 = ((8 + offset$proxy106) | 0);
                    var value$proxy50 = ((+$x_42) + (+_1$13.getFloat64(offset$proxy196, true)));
                    _1$15.setFloat64(offset$proxy194, value$proxy50, true);
                    var offset$proxy197 = ((16 + offset$proxy190) | 0);
                    var offset$proxy198 = ((16 + offset$proxy190) | 0);
                    var $x_43 = _1$15.getFloat64(offset$proxy198, true);
                    var offset$proxy199 = ((16 + offset$proxy106) | 0);
                    var value$proxy51 = ((+$x_43) + (+_1$13.getFloat64(offset$proxy199, true)));
                    _1$15.setFloat64(offset$proxy197, value$proxy51, true);
                  }
                  var offset$proxy201 = ((8 + offset$proxy109) | 0);
                  var value$proxy52 = (+_1$16.getFloat64(offset$proxy201, true));
                  _1$15.setFloat64(offset$proxy108, value$proxy52, true);
                  var offset$proxy204 = ((8 + offset$proxy108) | 0);
                  var offset$proxy205 = ((8 + offset$proxy201) | 0);
                  var value$proxy53 = (+_1$16.getFloat64(offset$proxy205, true));
                  _1$15.setFloat64(offset$proxy204, value$proxy53, true);
                  var offset$proxy206 = ((16 + offset$proxy108) | 0);
                  var offset$proxy207 = ((16 + offset$proxy201) | 0);
                  var value$proxy54 = (+_1$16.getFloat64(offset$proxy207, true));
                  _1$15.setFloat64(offset$proxy206, value$proxy54, true);
                  var offset$proxy208 = ((24 + offset$proxy108) | 0);
                  var offset$proxy209 = ((32 + offset$proxy109) | 0);
                  var $x_48 = _1$15.getFloat64(offset$proxy208, true);
                  var $x_47 = _1$16.getFloat64(offset$proxy209, true);
                  var offset$proxy212 = ((8 + offset$proxy208) | 0);
                  var $x_46 = _1$15.getFloat64(offset$proxy212, true);
                  var offset$proxy213 = ((8 + offset$proxy209) | 0);
                  var $x_45 = _1$16.getFloat64(offset$proxy213, true);
                  var offset$proxy214 = ((16 + offset$proxy208) | 0);
                  var $x_44 = _1$15.getFloat64(offset$proxy214, true);
                  var offset$proxy215 = ((16 + offset$proxy209) | 0);
                  var $x_7 = (((((+$x_48) * (+$x_47)) + ((+$x_46) * (+$x_45))) + ((+$x_44) * (+_1$16.getFloat64(offset$proxy215, true)))) > 0.0);
                } else {
                  var $x_7 = false;
                }
              }
              if ($x_7) {
                var offset$proxy216 = ((57 + (hit.d | 0)) | 0);
                var _1$17 = hit.a;
                var offset$proxy217 = ((1 + offset$proxy216) | 0);
                var value$proxy55 = ((+_1$10.getFloat64(offset$proxy86, true)) * (+_1$17.getFloat64(offset$proxy217, true)));
                _1$10.setFloat64(offset$proxy86, value$proxy55, true);
                var offset$proxy221 = ((8 + offset$proxy86) | 0);
                var offset$proxy222 = ((8 + offset$proxy86) | 0);
                var $x_49 = _1$10.getFloat64(offset$proxy222, true);
                var offset$proxy223 = ((8 + offset$proxy217) | 0);
                var value$proxy56 = ((+$x_49) * (+_1$17.getFloat64(offset$proxy223, true)));
                _1$10.setFloat64(offset$proxy221, value$proxy56, true);
                var offset$proxy224 = ((16 + offset$proxy86) | 0);
                var offset$proxy225 = ((16 + offset$proxy86) | 0);
                var $x_50 = _1$10.getFloat64(offset$proxy225, true);
                var offset$proxy226 = ((16 + offset$proxy217) | 0);
                var value$proxy57 = ((+$x_50) * (+_1$17.getFloat64(offset$proxy226, true)));
                _1$10.setFloat64(offset$proxy224, value$proxy57, true);
                var offset$proxy227 = (currentRay.d | 0);
                var _1$18 = currentRay.a;
                var value$proxy58 = (+_1$8.getFloat64(offset$proxy84, true));
                _1$18.setFloat64(offset$proxy227, value$proxy58, true);
                var offset$proxy231 = ((8 + offset$proxy227) | 0);
                var offset$proxy232 = ((8 + offset$proxy84) | 0);
                var value$proxy59 = (+_1$8.getFloat64(offset$proxy232, true));
                _1$18.setFloat64(offset$proxy231, value$proxy59, true);
                var offset$proxy233 = ((16 + offset$proxy227) | 0);
                var offset$proxy234 = ((16 + offset$proxy84) | 0);
                var value$proxy60 = (+_1$8.getFloat64(offset$proxy234, true));
                _1$18.setFloat64(offset$proxy233, value$proxy60, true);
                var offset$proxy235 = ((24 + (currentRay.d | 0)) | 0);
                var _1$19 = currentRay.a;
                var offset$proxy236 = ((24 + offset$proxy84) | 0);
                var value$proxy61 = (+_1$8.getFloat64(offset$proxy236, true));
                _1$19.setFloat64(offset$proxy235, value$proxy61, true);
                var offset$proxy239 = ((8 + offset$proxy235) | 0);
                var offset$proxy240 = ((8 + offset$proxy236) | 0);
                var value$proxy62 = (+_1$8.getFloat64(offset$proxy240, true));
                _1$19.setFloat64(offset$proxy239, value$proxy62, true);
                var offset$proxy241 = ((16 + offset$proxy235) | 0);
                var offset$proxy242 = ((16 + offset$proxy236) | 0);
                var value$proxy63 = (+_1$8.getFloat64(offset$proxy242, true));
                _1$19.setFloat64(offset$proxy241, value$proxy63, true);
              } else {
                var offset$proxy243 = ((57 + (hit.d | 0)) | 0);
                var _1$20 = hit.a;
                var offset$proxy244 = ((1 + offset$proxy243) | 0);
                var value$proxy64 = (+_1$20.getFloat64(offset$proxy244, true));
                _1$2.setFloat64(0, value$proxy64, true);
                var offset$proxy248 = ((8 + offset$proxy244) | 0);
                var value$proxy65 = (+_1$20.getFloat64(offset$proxy248, true));
                _1$2.setFloat64(8, value$proxy65, true);
                var offset$proxy250 = ((16 + offset$proxy244) | 0);
                var value$proxy66 = (+_1$20.getFloat64(offset$proxy250, true));
                _1$2.setFloat64(16, value$proxy66, true);
                var value$proxy67 = ((+_1$2.getFloat64(0, true)) * (+_1$10.getFloat64(offset$proxy86, true)));
                _1$2.setFloat64(0, value$proxy67, true);
                var $x_51 = _1$2.getFloat64(8, true);
                var offset$proxy256 = ((8 + offset$proxy86) | 0);
                var value$proxy68 = ((+$x_51) * (+_1$10.getFloat64(offset$proxy256, true)));
                _1$2.setFloat64(8, value$proxy68, true);
                var $x_52 = _1$2.getFloat64(16, true);
                var offset$proxy259 = ((16 + offset$proxy86) | 0);
                var value$proxy69 = ((+$x_52) * (+_1$10.getFloat64(offset$proxy259, true)));
                _1$2.setFloat64(16, value$proxy69, true);
                break _return;
              }
            } else {
              var offset$proxy260 = ((24 + (currentRay.d | 0)) | 0);
              var _1$21 = currentRay.a;
              var s$proxy261 = this.k;
              var offset$proxy261 = (s$proxy261.d | 0);
              var _1$22 = s$proxy261.a;
              var $x_57 = _1$21.getFloat64(offset$proxy260, true);
              var $x_56 = _1$21.getFloat64(offset$proxy260, true);
              var offset$proxy264 = ((8 + offset$proxy260) | 0);
              var $x_55 = _1$21.getFloat64(offset$proxy264, true);
              var offset$proxy265 = ((8 + offset$proxy260) | 0);
              var $x_54 = _1$21.getFloat64(offset$proxy265, true);
              var offset$proxy266 = ((16 + offset$proxy260) | 0);
              var $x_53 = _1$21.getFloat64(offset$proxy266, true);
              var offset$proxy267 = ((16 + offset$proxy260) | 0);
              var a$2 = ((((+$x_57) * (+$x_56)) + ((+$x_55) * (+$x_54))) + ((+$x_53) * (+_1$21.getFloat64(offset$proxy267, true))));
              var scalar$proxy4 = (+Math.sqrt(a$2));
              var scalar$proxy5 = (1.0 / scalar$proxy4);
              var value$proxy70 = ((+_1$21.getFloat64(offset$proxy260, true)) * scalar$proxy5);
              _1$22.setFloat64(offset$proxy261, value$proxy70, true);
              var offset$proxy270 = ((8 + offset$proxy261) | 0);
              var offset$proxy271 = ((8 + offset$proxy260) | 0);
              var value$proxy71 = ((+_1$21.getFloat64(offset$proxy271, true)) * scalar$proxy5);
              _1$22.setFloat64(offset$proxy270, value$proxy71, true);
              var offset$proxy272 = ((16 + offset$proxy261) | 0);
              var offset$proxy273 = ((16 + offset$proxy260) | 0);
              var value$proxy72 = ((+_1$21.getFloat64(offset$proxy273, true)) * scalar$proxy5);
              _1$22.setFloat64(offset$proxy272, value$proxy72, true);
              var offset$proxy274 = ((8 + offset$proxy261) | 0);
              var t = (0.5 * ((+_1$22.getFloat64(offset$proxy274, true)) + 1.0));
              var s$proxy275 = this.k;
              var offset$proxy275 = ((72 + (s$proxy275.d | 0)) | 0);
              var _1$23 = s$proxy275.a;
              var s$proxy276 = this.k;
              var offset$proxy276 = ((48 + (s$proxy276.d | 0)) | 0);
              var _1$24 = s$proxy276.a;
              var oneMinusT = (1.0 - t);
              var value$proxy73 = (((+_1$23.getFloat64(offset$proxy275, true)) * oneMinusT) + ((+_1$24.getFloat64(offset$proxy276, true)) * t));
              _1$2.setFloat64(0, value$proxy73, true);
              var offset$proxy281 = ((8 + offset$proxy275) | 0);
              var $x_58 = _1$23.getFloat64(offset$proxy281, true);
              var offset$proxy282 = ((8 + offset$proxy276) | 0);
              var value$proxy74 = (((+$x_58) * oneMinusT) + ((+_1$24.getFloat64(offset$proxy282, true)) * t));
              _1$2.setFloat64(8, value$proxy74, true);
              var offset$proxy284 = ((16 + offset$proxy275) | 0);
              var $x_59 = _1$23.getFloat64(offset$proxy284, true);
              var offset$proxy285 = ((16 + offset$proxy276) | 0);
              var value$proxy75 = (((+$x_59) * oneMinusT) + ((+_1$24.getFloat64(offset$proxy285, true)) * t));
              _1$2.setFloat64(16, value$proxy75, true);
              var value$proxy76 = ((+_1$2.getFloat64(0, true)) * (+_1$10.getFloat64(offset$proxy86, true)));
              _1$2.setFloat64(0, value$proxy76, true);
              var $x_60 = _1$2.getFloat64(8, true);
              var offset$proxy291 = ((8 + offset$proxy86) | 0);
              var value$proxy77 = ((+$x_60) * (+_1$10.getFloat64(offset$proxy291, true)));
              _1$2.setFloat64(8, value$proxy77, true);
              var $x_61 = _1$2.getFloat64(16, true);
              var offset$proxy294 = ((16 + offset$proxy86) | 0);
              var value$proxy78 = ((+$x_61) * (+_1$10.getFloat64(offset$proxy294, true)));
              _1$2.setFloat64(16, value$proxy78, true);
              break _return;
            }
            depth = ((1 + depth) | 0);
          }
          _1$2.setFloat64(0, 0.0, true);
          _1$2.setFloat64(8, 0.0, true);
          _1$2.setFloat64(16, 0.0, true);
        }
        s$1 = ((1 + s$1) | 0);
      }
      var scalar$proxy6 = samplesPerPixel;
      var scalar$proxy7 = (1.0 / scalar$proxy6);
      var value$proxy109 = ((+_1$2.getFloat64(0, true)) * scalar$proxy7);
      _1$2.setFloat64(0, value$proxy109, true);
      var value$proxy110 = ((+_1$2.getFloat64(8, true)) * scalar$proxy7);
      _1$2.setFloat64(8, value$proxy110, true);
      var value$proxy111 = ((+_1$2.getFloat64(16, true)) * scalar$proxy7);
      _1$2.setFloat64(16, value$proxy111, true);
      var a$3 = (+_1$2.getFloat64(0, true));
      var value$proxy112 = (+Math.pow(a$3, 0.7));
      _1$2.setFloat64(0, value$proxy112, true);
      var a$4 = (+_1$2.getFloat64(8, true));
      var value$proxy113 = (+Math.pow(a$4, 0.7));
      _1$2.setFloat64(8, value$proxy113, true);
      var a$5 = (+_1$2.getFloat64(16, true));
      var value$proxy114 = (+Math.pow(a$5, 0.7));
      _1$2.setFloat64(16, value$proxy114, true);
      var index$proxy1 = ((Math.imul(y, width) + x) | 0);
      var _1$25 = pixels.a;
      var _2 = (index$proxy1 << 2);
      var d$proxy1$2 = (+_1$2.getFloat64(0, true));
      var rF = (($doubleToInt((256.0 * ((d$proxy1$2 < 0.0) ? 0.0 : ((d$proxy1$2 > 0.999) ? 0.999 : d$proxy1$2)))) << 16) >> 16);
      var d$proxy2$2 = (+_1$2.getFloat64(8, true));
      var gF = (($doubleToInt((256.0 * ((d$proxy2$2 < 0.0) ? 0.0 : ((d$proxy2$2 > 0.999) ? 0.999 : d$proxy2$2)))) << 16) >> 16);
      var d$proxy3$2 = (+_1$2.getFloat64(16, true));
      var bF = (($doubleToInt((256.0 * ((d$proxy3$2 < 0.0) ? 0.0 : ((d$proxy3$2 > 0.999) ? 0.999 : d$proxy3$2)))) << 16) >> 16);
      _1$25.setUint8(_2, rF);
      var offset$proxy397 = ((1 + _2) | 0);
      _1$25.setUint8(offset$proxy397, gF);
      var offset$proxy398 = ((2 + _2) | 0);
      _1$25.setUint8(offset$proxy398, bF);
      var offset$proxy399 = ((3 + _2) | 0);
      _1$25.setUint8(offset$proxy399, 255);
      x = ((1 + x) | 0);
    }
    y = ((1 + y) | 0);
  }
  return pixels;
});
var $d_Lraytracer_render_Renderer$ = new $TypeData().i($c_Lraytracer_render_Renderer$, "raytracer.render.Renderer$", ({
  aQ: 1
}));
var $n_Lraytracer_render_Renderer$;
function $m_Lraytracer_render_Renderer$() {
  if ((!$n_Lraytracer_render_Renderer$)) {
    $n_Lraytracer_render_Renderer$ = new $c_Lraytracer_render_Renderer$();
  }
  return $n_Lraytracer_render_Renderer$;
}
/** @constructor */
function $c_Lraytracer_scene_scene$package$() {
}
$p = $c_Lraytracer_scene_scene$package$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_scene_scene$package$;
/** @constructor */
function $h_Lraytracer_scene_scene$package$() {
}
$h_Lraytracer_scene_scene$package$.prototype = $p;
$p.bl = (function() {
  var buffer = new ArrayBuffer(260);
  var spheres = new $c_T2(new DataView(buffer), 4);
  var _1$1 = spheres.a;
  _1$1.setFloat64(0, 0.0, true);
  _1$1.setFloat64(8, 0.0, true);
  _1$1.setFloat64(16, (-1.0), true);
  var _1$2 = spheres.a;
  _1$2.setFloat64(24, 0.5, true);
  var _1$3 = spheres.a;
  var value$proxy1 = $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType().T;
  _1$3.setUint8(32, value$proxy1);
  var _1$4 = spheres.a;
  _1$4.setFloat64(33, 0.8, true);
  _1$4.setFloat64(41, 0.2, true);
  _1$4.setFloat64(49, 0.2, true);
  var _1$5 = spheres.a;
  _1$5.setFloat64(57, 0.0, true);
  var _1$6 = spheres.a;
  _1$6.setFloat64(65, (-1.0), true);
  _1$6.setFloat64(73, 0.0, true);
  _1$6.setFloat64(81, (-1.0), true);
  var _1$7 = spheres.a;
  _1$7.setFloat64(89, 0.5, true);
  var _1$8 = spheres.a;
  var value$proxy2 = $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType().T;
  _1$8.setUint8(97, value$proxy2);
  var _1$9 = spheres.a;
  _1$9.setFloat64(98, 0.6, true);
  _1$9.setFloat64(106, 0.8, true);
  _1$9.setFloat64(114, 0.2, true);
  var _1$10 = spheres.a;
  _1$10.setFloat64(122, 0.0, true);
  var _1$11 = spheres.a;
  _1$11.setFloat64(130, 1.0, true);
  _1$11.setFloat64(138, 0.0, true);
  _1$11.setFloat64(146, (-1.0), true);
  var _1$12 = spheres.a;
  _1$12.setFloat64(154, 0.5, true);
  var _1$13 = spheres.a;
  var value$proxy3 = $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType().T;
  _1$13.setUint8(162, value$proxy3);
  var _1$14 = spheres.a;
  _1$14.setFloat64(163, 0.2, true);
  _1$14.setFloat64(171, 0.5, true);
  _1$14.setFloat64(179, 0.8, true);
  var _1$15 = spheres.a;
  _1$15.setFloat64(187, 0.3, true);
  var _1$16 = spheres.a;
  _1$16.setFloat64(195, 0.0, true);
  _1$16.setFloat64(203, (-100.5), true);
  _1$16.setFloat64(211, (-1.0), true);
  var _1$17 = spheres.a;
  _1$17.setFloat64(219, 100.0, true);
  var _1$18 = spheres.a;
  var value$proxy4 = $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType().T;
  _1$18.setUint8(227, value$proxy4);
  var _1$19 = spheres.a;
  _1$19.setFloat64(228, 0.5, true);
  _1$19.setFloat64(236, 0.5, true);
  _1$19.setFloat64(244, 0.5, true);
  var _1$20 = spheres.a;
  _1$20.setFloat64(252, 0.0, true);
  var this$79 = $m_Lraytracer_render_Renderer$();
  var s$proxy9 = this$79.k;
  var offset$proxy9 = ((306 + (s$proxy9.d | 0)) | 0);
  var _1$21 = s$proxy9.a;
  _1$21.setFloat64(offset$proxy9, 0.0, true);
  var offset$proxy12 = ((8 + offset$proxy9) | 0);
  _1$21.setFloat64(offset$proxy12, 0.0, true);
  var offset$proxy13 = ((16 + offset$proxy9) | 0);
  _1$21.setFloat64(offset$proxy13, 1.0, true);
  var offset$proxy14 = ((48 + offset$proxy9) | 0);
  _1$21.setFloat64(offset$proxy14, 2.6666666666666665, true);
  var offset$proxy16 = ((8 + offset$proxy14) | 0);
  _1$21.setFloat64(offset$proxy16, 0.0, true);
  var offset$proxy17 = ((16 + offset$proxy14) | 0);
  _1$21.setFloat64(offset$proxy17, 0.0, true);
  var offset$proxy18 = ((72 + offset$proxy9) | 0);
  _1$21.setFloat64(offset$proxy18, 0.0, true);
  var offset$proxy20 = ((8 + offset$proxy18) | 0);
  _1$21.setFloat64(offset$proxy20, 2.0, true);
  var offset$proxy21 = ((16 + offset$proxy18) | 0);
  _1$21.setFloat64(offset$proxy21, 0.0, true);
  var s$proxy22 = this$79.k;
  var offset$proxy22 = (s$proxy22.d | 0);
  var _1$22 = s$proxy22.a;
  var s$proxy23 = this$79.k;
  var offset$proxy23 = ((24 + (s$proxy23.d | 0)) | 0);
  var _1$23 = s$proxy23.a;
  var value$proxy1$1 = (+_1$21.getFloat64(offset$proxy9, true));
  _1$22.setFloat64(offset$proxy22, value$proxy1$1, true);
  var offset$proxy27 = ((8 + offset$proxy22) | 0);
  var offset$proxy28 = ((8 + offset$proxy9) | 0);
  var value$proxy2$1 = (+_1$21.getFloat64(offset$proxy28, true));
  _1$22.setFloat64(offset$proxy27, value$proxy2$1, true);
  var offset$proxy29 = ((16 + offset$proxy22) | 0);
  var offset$proxy30 = ((16 + offset$proxy9) | 0);
  var value$proxy3$1 = (+_1$21.getFloat64(offset$proxy30, true));
  _1$22.setFloat64(offset$proxy29, value$proxy3$1, true);
  var offset$proxy31 = ((48 + offset$proxy9) | 0);
  var value$proxy4$1 = (0.5 * (+_1$21.getFloat64(offset$proxy31, true)));
  _1$23.setFloat64(offset$proxy23, value$proxy4$1, true);
  var offset$proxy34 = ((8 + offset$proxy23) | 0);
  var offset$proxy35 = ((8 + offset$proxy31) | 0);
  var value$proxy5 = (0.5 * (+_1$21.getFloat64(offset$proxy35, true)));
  _1$23.setFloat64(offset$proxy34, value$proxy5, true);
  var offset$proxy36 = ((16 + offset$proxy23) | 0);
  var offset$proxy37 = ((16 + offset$proxy31) | 0);
  var value$proxy6 = (0.5 * (+_1$21.getFloat64(offset$proxy37, true)));
  _1$23.setFloat64(offset$proxy36, value$proxy6, true);
  var value$proxy7 = ((+_1$22.getFloat64(offset$proxy22, true)) - (+_1$23.getFloat64(offset$proxy23, true)));
  _1$22.setFloat64(offset$proxy22, value$proxy7, true);
  var offset$proxy41 = ((8 + offset$proxy22) | 0);
  var offset$proxy42 = ((8 + offset$proxy22) | 0);
  var $x_1 = _1$22.getFloat64(offset$proxy42, true);
  var offset$proxy43 = ((8 + offset$proxy23) | 0);
  var value$proxy8 = ((+$x_1) - (+_1$23.getFloat64(offset$proxy43, true)));
  _1$22.setFloat64(offset$proxy41, value$proxy8, true);
  var offset$proxy44 = ((16 + offset$proxy22) | 0);
  var offset$proxy45 = ((16 + offset$proxy22) | 0);
  var $x_2 = _1$22.getFloat64(offset$proxy45, true);
  var offset$proxy46 = ((16 + offset$proxy23) | 0);
  var value$proxy9 = ((+$x_2) - (+_1$23.getFloat64(offset$proxy46, true)));
  _1$22.setFloat64(offset$proxy44, value$proxy9, true);
  var offset$proxy47 = ((72 + offset$proxy9) | 0);
  var value$proxy10 = (0.5 * (+_1$21.getFloat64(offset$proxy47, true)));
  _1$23.setFloat64(offset$proxy23, value$proxy10, true);
  var offset$proxy50 = ((8 + offset$proxy23) | 0);
  var offset$proxy51 = ((8 + offset$proxy47) | 0);
  var value$proxy11 = (0.5 * (+_1$21.getFloat64(offset$proxy51, true)));
  _1$23.setFloat64(offset$proxy50, value$proxy11, true);
  var offset$proxy52 = ((16 + offset$proxy23) | 0);
  var offset$proxy53 = ((16 + offset$proxy47) | 0);
  var value$proxy12 = (0.5 * (+_1$21.getFloat64(offset$proxy53, true)));
  _1$23.setFloat64(offset$proxy52, value$proxy12, true);
  var value$proxy13 = ((+_1$22.getFloat64(offset$proxy22, true)) - (+_1$23.getFloat64(offset$proxy23, true)));
  _1$22.setFloat64(offset$proxy22, value$proxy13, true);
  var offset$proxy57 = ((8 + offset$proxy22) | 0);
  var offset$proxy58 = ((8 + offset$proxy22) | 0);
  var $x_3 = _1$22.getFloat64(offset$proxy58, true);
  var offset$proxy59 = ((8 + offset$proxy23) | 0);
  var value$proxy14 = ((+$x_3) - (+_1$23.getFloat64(offset$proxy59, true)));
  _1$22.setFloat64(offset$proxy57, value$proxy14, true);
  var offset$proxy60 = ((16 + offset$proxy22) | 0);
  var offset$proxy61 = ((16 + offset$proxy22) | 0);
  var $x_4 = _1$22.getFloat64(offset$proxy61, true);
  var offset$proxy62 = ((16 + offset$proxy23) | 0);
  var value$proxy15 = ((+$x_4) - (+_1$23.getFloat64(offset$proxy62, true)));
  _1$22.setFloat64(offset$proxy60, value$proxy15, true);
  _1$23.setFloat64(offset$proxy23, 0.0, true);
  var offset$proxy64 = ((8 + offset$proxy23) | 0);
  _1$23.setFloat64(offset$proxy64, 0.0, true);
  var offset$proxy65 = ((16 + offset$proxy23) | 0);
  _1$23.setFloat64(offset$proxy65, 1.9, true);
  var value$proxy16 = ((+_1$22.getFloat64(offset$proxy22, true)) - (+_1$23.getFloat64(offset$proxy23, true)));
  _1$22.setFloat64(offset$proxy22, value$proxy16, true);
  var offset$proxy69 = ((8 + offset$proxy22) | 0);
  var offset$proxy70 = ((8 + offset$proxy22) | 0);
  var $x_5 = _1$22.getFloat64(offset$proxy70, true);
  var offset$proxy71 = ((8 + offset$proxy23) | 0);
  var value$proxy17 = ((+$x_5) - (+_1$23.getFloat64(offset$proxy71, true)));
  _1$22.setFloat64(offset$proxy69, value$proxy17, true);
  var offset$proxy72 = ((16 + offset$proxy22) | 0);
  var offset$proxy73 = ((16 + offset$proxy22) | 0);
  var $x_6 = _1$22.getFloat64(offset$proxy73, true);
  var offset$proxy74 = ((16 + offset$proxy23) | 0);
  var value$proxy18 = ((+$x_6) - (+_1$23.getFloat64(offset$proxy74, true)));
  _1$22.setFloat64(offset$proxy72, value$proxy18, true);
  var offset$proxy75 = ((24 + offset$proxy9) | 0);
  var value$proxy19 = (+_1$22.getFloat64(offset$proxy22, true));
  _1$21.setFloat64(offset$proxy75, value$proxy19, true);
  var offset$proxy78 = ((8 + offset$proxy75) | 0);
  var offset$proxy79 = ((8 + offset$proxy22) | 0);
  var value$proxy20 = (+_1$22.getFloat64(offset$proxy79, true));
  _1$21.setFloat64(offset$proxy78, value$proxy20, true);
  var offset$proxy80 = ((16 + offset$proxy75) | 0);
  var offset$proxy81 = ((16 + offset$proxy22) | 0);
  var value$proxy21 = (+_1$22.getFloat64(offset$proxy81, true));
  _1$21.setFloat64(offset$proxy80, value$proxy21, true);
  return new $c_Lraytracer_scene_Scene(spheres);
});
var $d_Lraytracer_scene_scene$package$ = new $TypeData().i($c_Lraytracer_scene_scene$package$, "raytracer.scene.scene$package$", ({
  aR: 1
}));
var $n_Lraytracer_scene_scene$package$;
function $m_Lraytracer_scene_scene$package$() {
  if ((!$n_Lraytracer_scene_scene$package$)) {
    $n_Lraytracer_scene_scene$package$ = new $c_Lraytracer_scene_scene$package$();
  }
  return $n_Lraytracer_scene_scene$package$;
}
/** @constructor */
function $c_Lraytracer\uff3fraw_Render$() {
}
$p = $c_Lraytracer\uff3fraw_Render$.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Render$;
/** @constructor */
function $h_Lraytracer\uff3fraw_Render$() {
}
$h_Lraytracer\uff3fraw_Render$.prototype = $p;
$p.bG = (function(ray, world, depth) {
  var currentRay = ray;
  var attenuation = new $c_Lraytracer\uff3fraw_Vec3(1.0, 1.0, 1.0);
  var bounce = 0;
  while ((bounce < depth)) {
    var hit = world.aB(currentRay, 0.001, 100000.0);
    matchResult2: {
      if ((hit instanceof $c_s_Some)) {
        var h = hit.S;
        var materialResult = h.Y.bc(currentRay, h);
        attenuation = attenuation.b2(materialResult.ab);
        var x1 = materialResult.ac;
        if ((x1 instanceof $c_s_Some)) {
          var scatteredRay = x1.S;
          currentRay = scatteredRay;
          break matchResult2;
        }
        if (($m_s_None$() === x1)) {
          return attenuation;
        }
        throw new $c_s_MatchError(x1);
      }
      if (($m_s_None$() === hit)) {
        return new $c_Lraytracer\uff3fraw_Vec3(1.0, 1.0, 1.0).bz(new $c_Lraytracer\uff3fraw_Vec3(0.5, 0.7, 1.0), (0.5 * (currentRay.L.q + 1.0))).b2(attenuation);
      }
      throw new $c_s_MatchError(hit);
    }
    bounce = ((1 + bounce) | 0);
  }
  return new $c_Lraytracer\uff3fraw_Vec3(0.0, 0.0, 0.0);
});
$p.bL = (function(world, width, height, focalLength, origin, samplesPerPixel, maxRayBounces) {
  var aspectRatio = (width / height);
  var viewportWidth = (2.0 * aspectRatio);
  var viewportU = new $c_Lraytracer\uff3fraw_Vec3(viewportWidth, 0.0, 0.0);
  var viewportV = new $c_Lraytracer\uff3fraw_Vec3(0.0, (-2.0), 0.0);
  var pixelDeltaU = viewportU.H(width);
  var pixelDeltaV = viewportV.H(height);
  var viewportTopLeft = origin.X(viewportU.H(2.0)).X(viewportV.H(2.0)).X(new $c_Lraytracer\uff3fraw_Vec3(0.0, 0.0, focalLength));
  var pixel00Loc = viewportTopLeft.F(pixelDeltaU.E(0.5)).F(pixelDeltaV.E(0.5));
  var buffer = new Float64Array((Math.imul(width, height) << 2));
  var y = 0;
  while ((y < height)) {
    console.log(("Rendering image row " + ((1 + y) | 0)));
    var x = 0;
    while ((x < width)) {
      var i = (((x + Math.imul(y, width)) | 0) << 2);
      var pixelCenter = pixel00Loc.F(pixelDeltaU.E(x)).F(pixelDeltaV.E(y));
      var color = new $c_Lraytracer\uff3fraw_Vec3(0.0, 0.0, 0.0);
      var sample = 0;
      while ((sample < samplesPerPixel)) {
        var jitter = new $c_Lraytracer\uff3fraw_Vec3((((+Math.random()) - 0.5) * pixelDeltaU.t), (((+Math.random()) - 0.5) * pixelDeltaV.q), 0.0);
        var sampleCenter = pixelCenter.F(jitter);
        var this$9 = sampleCenter.X(origin);
        var a = this$9.D(this$9);
        var sampleDirection = this$9.H((+Math.sqrt(a)));
        var sampleRay = new $c_Lraytracer\uff3fraw_Ray(origin, sampleDirection);
        color = color.F(this.bG(sampleRay, world, maxRayBounces));
        sample = ((1 + sample) | 0);
      }
      color = color.H(samplesPerPixel);
      buffer[i] = color.t;
      buffer[((1 + i) | 0)] = color.q;
      buffer[((2 + i) | 0)] = color.w;
      buffer[((3 + i) | 0)] = 1.0;
      x = ((1 + x) | 0);
    }
    y = ((1 + y) | 0);
  }
  var i$2 = 0;
  while ((i$2 < (buffer.length | 0))) {
    var $x_1 = i$2;
    var a$1 = (+buffer[i$2]);
    buffer[$x_1] = (+Math.pow(a$1, 0.7));
    i$2 = ((1 + i$2) | 0);
  }
  return buffer;
});
var $d_Lraytracer\uff3fraw_Render$ = new $TypeData().i($c_Lraytracer\uff3fraw_Render$, "raytracer_raw.Render$", ({
  aS: 1
}));
var $n_Lraytracer\uff3fraw_Render$;
function $m_Lraytracer\uff3fraw_Render$() {
  if ((!$n_Lraytracer\uff3fraw_Render$)) {
    $n_Lraytracer\uff3fraw_Render$ = new $c_Lraytracer\uff3fraw_Render$();
  }
  return $n_Lraytracer\uff3fraw_Render$;
}
/** @constructor */
function $c_Lraytracer\uff3fraw_Scene$() {
}
$p = $c_Lraytracer\uff3fraw_Scene$.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Scene$;
/** @constructor */
function $h_Lraytracer\uff3fraw_Scene$() {
}
$h_Lraytracer\uff3fraw_Scene$.prototype = $p;
$p.bm = (function() {
  var grayMaterial = new $c_Lraytracer\uff3fraw_Lambertian(new $c_Lraytracer\uff3fraw_Vec3(0.5, 0.5, 0.5));
  return new $c_Lraytracer\uff3fraw_HittableList(new $c_sci_$colon$colon(new $c_Lraytracer\uff3fraw_Sphere(new $c_Lraytracer\uff3fraw_Vec3(0.0, 0.0, (-1.0)), 0.5, new $c_Lraytracer\uff3fraw_Lambertian(new $c_Lraytracer\uff3fraw_Vec3(0.8, 0.2, 0.2))), new $c_sci_$colon$colon(new $c_Lraytracer\uff3fraw_Sphere(new $c_Lraytracer\uff3fraw_Vec3((-1.0), 0.0, (-1.0)), 0.5, new $c_Lraytracer\uff3fraw_Metal(new $c_Lraytracer\uff3fraw_Vec3(0.6, 0.8, 0.2), 0.0)), new $c_sci_$colon$colon(new $c_Lraytracer\uff3fraw_Sphere(new $c_Lraytracer\uff3fraw_Vec3(1.0, 0.0, (-1.0)), 0.5, new $c_Lraytracer\uff3fraw_Metal(new $c_Lraytracer\uff3fraw_Vec3(0.2, 0.5, 0.8), 0.3)), new $c_sci_$colon$colon(new $c_Lraytracer\uff3fraw_Sphere(new $c_Lraytracer\uff3fraw_Vec3(0.0, (-100.5), (-1.0)), 100.0, grayMaterial), $m_sci_Nil$())))));
});
var $d_Lraytracer\uff3fraw_Scene$ = new $TypeData().i($c_Lraytracer\uff3fraw_Scene$, "raytracer_raw.Scene$", ({
  aT: 1
}));
var $n_Lraytracer\uff3fraw_Scene$;
function $m_Lraytracer\uff3fraw_Scene$() {
  if ((!$n_Lraytracer\uff3fraw_Scene$)) {
    $n_Lraytracer\uff3fraw_Scene$ = new $c_Lraytracer\uff3fraw_Scene$();
  }
  return $n_Lraytracer\uff3fraw_Scene$;
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.C() === 0) ? (("" + start) + end) : $thiz.aq($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).M.v);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.M;
  if ((start.length !== 0)) {
    jsb.v = (("" + jsb.v) + start);
  }
  var it = $thiz.y();
  if (it.u()) {
    var obj = it.s();
    jsb.v = (("" + jsb.v) + obj);
    while (it.u()) {
      if ((sep.length !== 0)) {
        jsb.v = (("" + jsb.v) + sep);
      }
      var obj$1 = it.s();
      jsb.v = (("" + jsb.v) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.v = (("" + jsb.v) + end);
  }
  return b;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.j = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.bs(x, y) : ((x instanceof $Char) ? this.bq(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.bs = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.br(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.b;
      var hi = t.c;
      var value = y.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.br = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.b;
      return (x2 === ((4.294967296E9 * t.c) + (lo >>> 0.0)));
    } else {
      return (false && yn.h(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.b;
    var hi$1 = t$1.c;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.b;
      var hi$2 = t$2.c;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else {
      return (false && yn.h(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.bq = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.b;
      var hi = t.c;
      var value = xc.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  bw: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.N = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.B(), (x.p() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  bz: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.f = (function(hash, data) {
  var h = this.ar(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.ar = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.x = (function(hash, length) {
  return this.bh((hash ^ length));
});
$p.bh = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.bB = (function(lv) {
  var lo = lv.b;
  var hi = lv.c;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.W = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.b6(dv);
    var hi = this$1.g;
    if ((((4.294967296E9 * hi) + (lo >>> 0.0)) === dv)) {
      return (lo ^ hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.m = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.W((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.bB(new $c_RTLong(t.b, t.c));
  } else {
    return $dp_hashCode__I(x);
  }
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  bB: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.bQ = (function(err) {
  var where = ((err.b1() === 0) ? "" : ((err.b1() === 1) ? " after first argument" : ((" after " + err.b1()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.c4());
  $m_s_Console$().A().z((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  bD: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.ax = null;
  this.ax = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.i = (function() {
  return (("DynamicVariable(" + this.ax) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  bF: 1
}));
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.f = (function(hash, data) {
  var h = this.ar(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.ar = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.x = (function(hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length));
});
$p.a4 = (function(x, seed, ignorePrefix) {
  var arr = x.n();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.p()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.f(h, $f_T__hashCode__I(x.p()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.f(h, $m_sr_Statics$().m(x.o(i)));
      i = ((1 + i) | 0);
    }
    return this.x(h, arr);
  }
});
$p.bj = (function(x, seed, caseClassName) {
  var arr = x.n();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.p()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.f(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.f(h, $m_sr_Statics$().m(x.o(i)));
      i = ((1 + i) | 0);
    }
    return this.x(h, arr);
  }
});
$p.bT = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.y();
  while (iterator.u()) {
    var x = iterator.s();
    var h = $m_sr_Statics$().m(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.f(h$2, a);
  h$2 = this.f(h$2, b);
  h$2 = this.ar(h$2, c);
  return this.x(h$2, n);
});
$p.bE = (function(xs, seed) {
  var it = xs.y();
  var h = seed;
  if ((!it.u())) {
    return this.x(h, 0);
  }
  var x0 = it.s();
  if ((!it.u())) {
    return this.x(this.f(h, $m_sr_Statics$().m(x0)), 1);
  }
  var x1 = it.s();
  var initial = $m_sr_Statics$().m(x0);
  h = this.f(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().m(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.u()) {
    h = this.f(h, prev);
    var hash = $m_sr_Statics$().m(it.s());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.f(h, hash);
      i = ((1 + i) | 0);
      while (it.u()) {
        h = this.f(h, $m_sr_Statics$().m(it.s()));
        i = ((1 + i) | 0);
      }
      return this.x(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, this.f(this.f(h0, rangeDiff), prev));
});
$p.bF = (function(start, step, last, seed) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, this.f(this.f(this.f(seed, start), step), last));
});
$p.by = (function(a, seed) {
  var h = seed;
  var l = a.I();
  if ((l === 0)) {
    return this.x(h, 0);
  } else if ((l === 1)) {
    return this.x(this.f(h, $m_sr_Statics$().m(a.O(0))), 1);
  } else {
    var initial = $m_sr_Statics$().m(a.O(0));
    h = this.f(h, initial);
    var h0 = h;
    var prev = $m_sr_Statics$().m(a.O(1));
    var rangeDiff = ((prev - initial) | 0);
    var i = 2;
    while ((i < l)) {
      h = this.f(h, prev);
      var hash = $m_sr_Statics$().m(a.O(i));
      if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
        h = this.f(h, hash);
        i = ((1 + i) | 0);
        while ((i < l)) {
          h = this.f(h, $m_sr_Statics$().m(a.O(i)));
          i = ((1 + i) | 0);
        }
        return this.x(h, l);
      }
      prev = hash;
      i = ((1 + i) | 0);
    }
    return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, this.f(this.f(h0, rangeDiff), prev));
  }
});
$p.bA = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.r())) {
    var head = elems.P();
    var tail = elems.J();
    var hash = $m_sr_Statics$().m(head);
    h = this.f(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.bF(initial, rangeDiff, prev, seed) : this.x(h, n));
});
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.aH = s;
  if (writableStackTrace) {
    $thiz.bt();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.aH = null;
  }
  aA() {
    return this.aH;
  }
  bt() {
    var reference = (false ? this.bV : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  i() {
    var className = $objectClassName(this);
    var message = this.aA();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  l() {
    return $c_O.prototype.l.call(this);
  }
  h(that) {
    return $c_O.prototype.h.call(this, that);
  }
  get "message"() {
    var m = this.aA();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.i();
  }
}
/** @constructor */
function $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce(evidence$1) {
  this.aI = null;
  this.aI = evidence$1;
}
$p = $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce.prototype = new $h_O();
$p.constructor = $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce;
/** @constructor */
function $h_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce() {
}
$h_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce.prototype = $p;
$p.ba = (function(objects, ray, minT, maxT, hit) {
  var buffer = new ArrayBuffer(90);
  var tempHit = new $c_T2(new DataView(buffer), 0);
  var elem = false;
  elem = false;
  var elem$1 = 0.0;
  elem$1 = maxT;
  var this$5 = objects.y();
  while (this$5.u()) {
    var x0 = this$5.s();
    if (this.aI.as(x0, ray, minT, elem$1, tempHit)) {
      elem = true;
      var offset$proxy110 = (tempHit.d | 0);
      var _1$1 = tempHit.a;
      elem$1 = (+_1$1.getFloat64(offset$proxy110, true));
      $m_Lraytracer_hit_hit$package$().bk(hit, tempHit);
    }
  }
  return elem;
});
$p.as = (function(obj, ray, minT, maxT, hitBuffer) {
  return this.ba(obj, ray, minT, maxT, hitBuffer);
});
var $d_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce = new $TypeData().i($c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce, "raytracer.hittable.hittable$package$given_Hittable_IterableOnce", ({
  aK: 1,
  z: 1
}));
/** @constructor */
function $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$() {
}
$p = $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$;
/** @constructor */
function $h_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$() {
}
$h_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$.prototype = $p;
$p.aC = (function(sphere, ray, minT, maxT, hit) {
  var offset$proxy1 = ((8 + (hit.d | 0)) | 0);
  var _1 = hit.a;
  var offset$proxy2 = (ray.d | 0);
  var _1$1 = ray.a;
  var value$proxy1 = (+_1$1.getFloat64(offset$proxy2, true));
  _1.setFloat64(offset$proxy1, value$proxy1, true);
  var offset$proxy5 = ((8 + offset$proxy1) | 0);
  var offset$proxy6 = ((8 + offset$proxy2) | 0);
  var value$proxy2 = (+_1$1.getFloat64(offset$proxy6, true));
  _1.setFloat64(offset$proxy5, value$proxy2, true);
  var offset$proxy7 = ((16 + offset$proxy1) | 0);
  var offset$proxy8 = ((16 + offset$proxy2) | 0);
  var value$proxy3 = (+_1$1.getFloat64(offset$proxy8, true));
  _1.setFloat64(offset$proxy7, value$proxy3, true);
  var offset$proxy9 = (sphere.d | 0);
  var _1$2 = sphere.a;
  var value$proxy4 = ((+_1.getFloat64(offset$proxy1, true)) - (+_1$2.getFloat64(offset$proxy9, true)));
  _1.setFloat64(offset$proxy1, value$proxy4, true);
  var offset$proxy13 = ((8 + offset$proxy1) | 0);
  var offset$proxy14 = ((8 + offset$proxy1) | 0);
  var $x_1 = _1.getFloat64(offset$proxy14, true);
  var offset$proxy15 = ((8 + offset$proxy9) | 0);
  var value$proxy5 = ((+$x_1) - (+_1$2.getFloat64(offset$proxy15, true)));
  _1.setFloat64(offset$proxy13, value$proxy5, true);
  var offset$proxy16 = ((16 + offset$proxy1) | 0);
  var offset$proxy17 = ((16 + offset$proxy1) | 0);
  var $x_2 = _1.getFloat64(offset$proxy17, true);
  var offset$proxy18 = ((16 + offset$proxy9) | 0);
  var value$proxy6 = ((+$x_2) - (+_1$2.getFloat64(offset$proxy18, true)));
  _1.setFloat64(offset$proxy16, value$proxy6, true);
  var offset$proxy19 = ((24 + (ray.d | 0)) | 0);
  var _1$3 = ray.a;
  var $x_7 = _1$3.getFloat64(offset$proxy19, true);
  var $x_6 = _1$3.getFloat64(offset$proxy19, true);
  var offset$proxy22 = ((8 + offset$proxy19) | 0);
  var $x_5 = _1$3.getFloat64(offset$proxy22, true);
  var offset$proxy23 = ((8 + offset$proxy19) | 0);
  var $x_4 = _1$3.getFloat64(offset$proxy23, true);
  var offset$proxy24 = ((16 + offset$proxy19) | 0);
  var $x_3 = _1$3.getFloat64(offset$proxy24, true);
  var offset$proxy25 = ((16 + offset$proxy19) | 0);
  var a = ((((+$x_7) * (+$x_6)) + ((+$x_5) * (+$x_4))) + ((+$x_3) * (+_1$3.getFloat64(offset$proxy25, true))));
  var offset$proxy26 = ((24 + (ray.d | 0)) | 0);
  var _1$4 = ray.a;
  var $x_12 = _1.getFloat64(offset$proxy1, true);
  var $x_11 = _1$4.getFloat64(offset$proxy26, true);
  var offset$proxy29 = ((8 + offset$proxy1) | 0);
  var $x_10 = _1.getFloat64(offset$proxy29, true);
  var offset$proxy30 = ((8 + offset$proxy26) | 0);
  var $x_9 = _1$4.getFloat64(offset$proxy30, true);
  var offset$proxy31 = ((16 + offset$proxy1) | 0);
  var $x_8 = _1.getFloat64(offset$proxy31, true);
  var offset$proxy32 = ((16 + offset$proxy26) | 0);
  var halfB = ((((+$x_12) * (+$x_11)) + ((+$x_10) * (+$x_9))) + ((+$x_8) * (+_1$4.getFloat64(offset$proxy32, true))));
  var $x_19 = _1.getFloat64(offset$proxy1, true);
  var $x_18 = _1.getFloat64(offset$proxy1, true);
  var offset$proxy35 = ((8 + offset$proxy1) | 0);
  var $x_17 = _1.getFloat64(offset$proxy35, true);
  var offset$proxy36 = ((8 + offset$proxy1) | 0);
  var $x_16 = _1.getFloat64(offset$proxy36, true);
  var offset$proxy37 = ((16 + offset$proxy1) | 0);
  var $x_15 = _1.getFloat64(offset$proxy37, true);
  var offset$proxy38 = ((16 + offset$proxy1) | 0);
  var $x_14 = _1.getFloat64(offset$proxy38, true);
  var offset$proxy39 = ((24 + (sphere.d | 0)) | 0);
  var _1$5 = sphere.a;
  var $x_13 = _1$5.getFloat64(offset$proxy39, true);
  var offset$proxy40 = ((24 + (sphere.d | 0)) | 0);
  var _1$6 = sphere.a;
  var c = (((((+$x_19) * (+$x_18)) + ((+$x_17) * (+$x_16))) + ((+$x_15) * (+$x_14))) - ((+$x_13) * (+_1$6.getFloat64(offset$proxy40, true))));
  var discriminant = ((halfB * halfB) - (a * c));
  if ((discriminant < 0.0)) {
    return false;
  }
  var sqrtD = (+Math.sqrt(discriminant));
  var root = (((-halfB) - sqrtD) / a);
  if (((root < minT) || (root > maxT))) {
    root = (((-halfB) + sqrtD) / a);
    if (((root < minT) || (root > maxT))) {
      return false;
    }
  }
  var offset$proxy41 = (hit.d | 0);
  var _1$7 = hit.a;
  var value$proxy7 = root;
  _1$7.setFloat64(offset$proxy41, value$proxy7, true);
  var t$proxy1 = root;
  var offset$proxy42 = ((8 + (hit.d | 0)) | 0);
  var _1$8 = hit.a;
  var offset$proxy43 = ((24 + (ray.d | 0)) | 0);
  var _1$9 = ray.a;
  var value$proxy8 = ((+_1$9.getFloat64(offset$proxy43, true)) * t$proxy1);
  _1$8.setFloat64(offset$proxy42, value$proxy8, true);
  var offset$proxy46 = ((8 + offset$proxy42) | 0);
  var offset$proxy47 = ((8 + offset$proxy43) | 0);
  var value$proxy9 = ((+_1$9.getFloat64(offset$proxy47, true)) * t$proxy1);
  _1$8.setFloat64(offset$proxy46, value$proxy9, true);
  var offset$proxy48 = ((16 + offset$proxy42) | 0);
  var offset$proxy49 = ((16 + offset$proxy43) | 0);
  var value$proxy10 = ((+_1$9.getFloat64(offset$proxy49, true)) * t$proxy1);
  _1$8.setFloat64(offset$proxy48, value$proxy10, true);
  var offset$proxy50 = (ray.d | 0);
  var _1$10 = ray.a;
  var value$proxy11 = ((+_1$8.getFloat64(offset$proxy42, true)) + (+_1$10.getFloat64(offset$proxy50, true)));
  _1$8.setFloat64(offset$proxy42, value$proxy11, true);
  var offset$proxy54 = ((8 + offset$proxy42) | 0);
  var offset$proxy55 = ((8 + offset$proxy42) | 0);
  var $x_20 = _1$8.getFloat64(offset$proxy55, true);
  var offset$proxy56 = ((8 + offset$proxy50) | 0);
  var value$proxy12 = ((+$x_20) + (+_1$10.getFloat64(offset$proxy56, true)));
  _1$8.setFloat64(offset$proxy54, value$proxy12, true);
  var offset$proxy57 = ((16 + offset$proxy42) | 0);
  var offset$proxy58 = ((16 + offset$proxy42) | 0);
  var $x_21 = _1$8.getFloat64(offset$proxy58, true);
  var offset$proxy59 = ((16 + offset$proxy50) | 0);
  var value$proxy13 = ((+$x_21) + (+_1$10.getFloat64(offset$proxy59, true)));
  _1$8.setFloat64(offset$proxy57, value$proxy13, true);
  var offset$proxy60 = ((8 + (hit.d | 0)) | 0);
  var _1$11 = hit.a;
  var offset$proxy61 = (sphere.d | 0);
  var _1$12 = sphere.a;
  var offset$proxy62 = ((32 + (hit.d | 0)) | 0);
  var _1$13 = hit.a;
  var value$proxy14 = ((+_1$11.getFloat64(offset$proxy60, true)) - (+_1$12.getFloat64(offset$proxy61, true)));
  _1$13.setFloat64(offset$proxy62, value$proxy14, true);
  var offset$proxy66 = ((8 + offset$proxy62) | 0);
  var offset$proxy67 = ((8 + offset$proxy60) | 0);
  var $x_22 = _1$11.getFloat64(offset$proxy67, true);
  var offset$proxy68 = ((8 + offset$proxy61) | 0);
  var value$proxy15 = ((+$x_22) - (+_1$12.getFloat64(offset$proxy68, true)));
  _1$13.setFloat64(offset$proxy66, value$proxy15, true);
  var offset$proxy69 = ((16 + offset$proxy62) | 0);
  var offset$proxy70 = ((16 + offset$proxy60) | 0);
  var $x_23 = _1$11.getFloat64(offset$proxy70, true);
  var offset$proxy71 = ((16 + offset$proxy61) | 0);
  var value$proxy16 = ((+$x_23) - (+_1$12.getFloat64(offset$proxy71, true)));
  _1$13.setFloat64(offset$proxy69, value$proxy16, true);
  var offset$proxy72 = ((32 + (hit.d | 0)) | 0);
  var _1$14 = hit.a;
  var offset$proxy73 = ((24 + (sphere.d | 0)) | 0);
  var _1$15 = sphere.a;
  var scalar$proxy1 = (+_1$15.getFloat64(offset$proxy73, true));
  var scalar$proxy2 = (1.0 / scalar$proxy1);
  var value$proxy17 = ((+_1$14.getFloat64(offset$proxy72, true)) * scalar$proxy2);
  _1$14.setFloat64(offset$proxy72, value$proxy17, true);
  var offset$proxy76 = ((8 + offset$proxy72) | 0);
  var offset$proxy77 = ((8 + offset$proxy72) | 0);
  var value$proxy18 = ((+_1$14.getFloat64(offset$proxy77, true)) * scalar$proxy2);
  _1$14.setFloat64(offset$proxy76, value$proxy18, true);
  var offset$proxy78 = ((16 + offset$proxy72) | 0);
  var offset$proxy79 = ((16 + offset$proxy72) | 0);
  var value$proxy19 = ((+_1$14.getFloat64(offset$proxy79, true)) * scalar$proxy2);
  _1$14.setFloat64(offset$proxy78, value$proxy19, true);
  var offset$proxy80 = ((24 + (ray.d | 0)) | 0);
  var _1$16 = ray.a;
  var offset$proxy81 = ((32 + (hit.d | 0)) | 0);
  var _1$17 = hit.a;
  var $x_28 = _1$16.getFloat64(offset$proxy80, true);
  var $x_27 = _1$17.getFloat64(offset$proxy81, true);
  var offset$proxy84 = ((8 + offset$proxy80) | 0);
  var $x_26 = _1$16.getFloat64(offset$proxy84, true);
  var offset$proxy85 = ((8 + offset$proxy81) | 0);
  var $x_25 = _1$17.getFloat64(offset$proxy85, true);
  var offset$proxy86 = ((16 + offset$proxy80) | 0);
  var $x_24 = _1$16.getFloat64(offset$proxy86, true);
  var offset$proxy87 = ((16 + offset$proxy81) | 0);
  var frontFace = (((((+$x_28) * (+$x_27)) + ((+$x_26) * (+$x_25))) + ((+$x_24) * (+_1$17.getFloat64(offset$proxy87, true)))) < 0.0);
  var offset$proxy88 = ((56 + (hit.d | 0)) | 0);
  var _1$18 = hit.a;
  var value$proxy20 = (((frontFace ? 1 : 0) << 16) >> 16);
  _1$18.setUint8(offset$proxy88, value$proxy20);
  if ((!frontFace)) {
    var offset$proxy89 = ((32 + (hit.d | 0)) | 0);
    var _1$19 = hit.a;
    var value$proxy21 = (-(+_1$19.getFloat64(offset$proxy89, true)));
    _1$19.setFloat64(offset$proxy89, value$proxy21, true);
    var offset$proxy92 = ((8 + offset$proxy89) | 0);
    var offset$proxy93 = ((8 + offset$proxy89) | 0);
    var value$proxy22 = (-(+_1$19.getFloat64(offset$proxy93, true)));
    _1$19.setFloat64(offset$proxy92, value$proxy22, true);
    var offset$proxy94 = ((16 + offset$proxy89) | 0);
    var offset$proxy95 = ((16 + offset$proxy89) | 0);
    var value$proxy23 = (-(+_1$19.getFloat64(offset$proxy95, true)));
    _1$19.setFloat64(offset$proxy94, value$proxy23, true);
  }
  var offset$proxy96 = ((32 + (sphere.d | 0)) | 0);
  var _1$20 = sphere.a;
  var offset$proxy97 = ((57 + (hit.d | 0)) | 0);
  var _1$21 = hit.a;
  var value$proxy24 = (_1$20.getUint8(offset$proxy96) | 0);
  _1$21.setUint8(offset$proxy97, value$proxy24);
  var offset$proxy100 = ((1 + offset$proxy97) | 0);
  var offset$proxy101 = ((1 + offset$proxy96) | 0);
  var value$proxy25 = (+_1$20.getFloat64(offset$proxy101, true));
  _1$21.setFloat64(offset$proxy100, value$proxy25, true);
  var offset$proxy104 = ((8 + offset$proxy100) | 0);
  var offset$proxy105 = ((8 + offset$proxy101) | 0);
  var value$proxy26 = (+_1$20.getFloat64(offset$proxy105, true));
  _1$21.setFloat64(offset$proxy104, value$proxy26, true);
  var offset$proxy106 = ((16 + offset$proxy100) | 0);
  var offset$proxy107 = ((16 + offset$proxy101) | 0);
  var value$proxy27 = (+_1$20.getFloat64(offset$proxy107, true));
  _1$21.setFloat64(offset$proxy106, value$proxy27, true);
  var offset$proxy108 = ((25 + offset$proxy97) | 0);
  var offset$proxy109 = ((25 + offset$proxy96) | 0);
  var value$proxy28 = (+_1$20.getFloat64(offset$proxy109, true));
  _1$21.setFloat64(offset$proxy108, value$proxy28, true);
  return true;
});
$p.as = (function(obj, ray, minT, maxT, hitBuffer) {
  return this.aC(obj, ray, minT, maxT, hitBuffer);
});
var $d_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$ = new $TypeData().i($c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$, "raytracer.hittable.hittable$package$given_Hittable_Sphere$", ({
  aL: 1,
  z: 1
}));
var $n_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$;
function $m_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$() {
  if ((!$n_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$)) {
    $n_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$ = new $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$();
  }
  return $n_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fSphere$;
}
/** @constructor */
function $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray(x$1) {
  this.aJ = null;
  this.aJ = x$1;
}
$p = $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray.prototype = new $h_O();
$p.constructor = $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray;
/** @constructor */
function $h_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray() {
}
$h_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray.prototype = $p;
$p.aC = (function(arr, ray, minT, maxT, hit) {
  return new $c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fIterableOnce(this.aJ).ba(new $c_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9(arr).y(), ray, minT, maxT, hit);
});
$p.as = (function(obj, ray, minT, maxT, hitBuffer) {
  return this.aC(obj, ray, minT, maxT, hitBuffer);
});
var $d_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray = new $TypeData().i($c_Lraytracer_hittable_hittable$package$given\uff3fHittable\uff3fStructArray, "raytracer.hittable.hittable$package$given_Hittable_StructArray", ({
  aM: 1,
  z: 1
}));
/** @constructor */
function $c_s_Console$() {
  this.aL = null;
  $n_s_Console$ = this;
  this.aL = new $c_s_util_DynamicVariable($m_jl_System$Streams$().aG);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.A = (function() {
  return this.aL.ax;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  aV: 1,
  bs: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.i = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.an = 0.0;
  this.an = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.i = (function() {
  return ("" + this.an);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  bx: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.ao = null;
  this.ao = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.i = (function() {
  return ("" + this.ao);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  by: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ap = 0;
  this.aV = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ap = $f_T__hashCode__I("Seq");
  this.aV = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.bT($m_sci_Nil$(), this.aV);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.bP = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.by(xs, this.ap) : ((xs instanceof $c_sci_List) ? this.bA(xs, this.ap) : this.bE(xs, this.ap)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  bH: 1,
  bG: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType() {
  $m_Lraytracer_material_MaterialType$();
  return $t_Lraytracer_material_MaterialType$__Lambertian;
}
function $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType() {
  $m_Lraytracer_material_MaterialType$();
  return $t_Lraytracer_material_MaterialType$__Metal;
}
/** @constructor */
function $c_Lraytracer_material_MaterialType$() {
  $n_Lraytracer_material_MaterialType$ = this;
  $t_Lraytracer_material_MaterialType$__Lambertian = new $c_Lraytracer_material_MaterialType$$anon$1();
  $t_Lraytracer_material_MaterialType$__Metal = new $c_Lraytracer_material_MaterialType$$anon$2();
  $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType();
  $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType();
}
$p = $c_Lraytracer_material_MaterialType$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_material_MaterialType$;
/** @constructor */
function $h_Lraytracer_material_MaterialType$() {
}
$h_Lraytracer_material_MaterialType$.prototype = $p;
var $d_Lraytracer_material_MaterialType$ = new $TypeData().i($c_Lraytracer_material_MaterialType$, "raytracer.material.MaterialType$", ({
  aN: 1,
  w: 1,
  br: 1
}));
var $n_Lraytracer_material_MaterialType$;
function $m_Lraytracer_material_MaterialType$() {
  if ((!$n_Lraytracer_material_MaterialType$)) {
    $n_Lraytracer_material_MaterialType$ = new $c_Lraytracer_material_MaterialType$();
  }
  return $n_Lraytracer_material_MaterialType$;
}
/** @constructor */
function $c_Lraytracer\uff3fraw_Vec3$() {
}
$p = $c_Lraytracer\uff3fraw_Vec3$.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Vec3$;
/** @constructor */
function $h_Lraytracer\uff3fraw_Vec3$() {
}
$h_Lraytracer\uff3fraw_Vec3$.prototype = $p;
$p.b9 = (function() {
  var p = new $c_Lraytracer\uff3fraw_Vec3(0.0, 0.0, 0.0);
  var continue$1 = true;
  while (continue$1) {
    p = new $c_Lraytracer\uff3fraw_Vec3(((-1.0) + (2.0 * (+Math.random()))), ((-1.0) + (2.0 * (+Math.random()))), ((-1.0) + (2.0 * (+Math.random()))));
    var this$6 = p;
    if ((this$6.D(this$6) < 1.0)) {
      continue$1 = false;
    }
  }
  return p;
});
var $d_Lraytracer\uff3fraw_Vec3$ = new $TypeData().i($c_Lraytracer\uff3fraw_Vec3$, "raytracer_raw.Vec3$", ({
  aU: 1,
  w: 1,
  E: 1
}));
var $n_Lraytracer\uff3fraw_Vec3$;
function $m_Lraytracer\uff3fraw_Vec3$() {
  if ((!$n_Lraytracer\uff3fraw_Vec3$)) {
    $n_Lraytracer\uff3fraw_Vec3$ = new $c_Lraytracer\uff3fraw_Vec3$();
  }
  return $n_Lraytracer\uff3fraw_Vec3$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  if ((n === 0)) {
    return $thiz.a;
  }
  if ((n === 1)) {
    return $thiz.d;
  }
  throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.y();
  while ($thiz.u()) {
    if ((!those.u())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().j($thiz.s(), those.s()))) {
      return false;
    }
  }
  return (!those.u());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.af = null;
  $n_sc_Iterator$ = this;
  this.af = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  b6: 1,
  a: 1,
  b5: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.aS = null;
  this.aS = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.ay = (function(x0) {
  return (0, this.aS)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  bv: 1,
  bu: 1,
  s: 1
}));
/** @constructor */
function $c_Lbufferdata_package$package$StructArray$StructArrayIterator(arr, stride) {
  this.a5 = 0;
  this.aj = 0;
  this.au = null;
  this.aD = 0;
  this.a5 = 0;
  this.aj = (arr.d | 0);
  this.au = arr.a;
  this.aD = ((stride >= 0) ? stride : ((this.aj === 0) ? 0 : (((this.au.buffer.byteLength | 0) / $checkIntDivisor(this.aj)) | 0)));
}
$p = $c_Lbufferdata_package$package$StructArray$StructArrayIterator.prototype = new $h_O();
$p.constructor = $c_Lbufferdata_package$package$StructArray$StructArrayIterator;
/** @constructor */
function $h_Lbufferdata_package$package$StructArray$StructArrayIterator() {
}
$h_Lbufferdata_package$package$StructArray$StructArrayIterator.prototype = $p;
$p.C = (function() {
  return (-1);
});
$p.aq = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.y = (function() {
  return this;
});
$p.i = (function() {
  return "<iterator>";
});
$p.u = (function() {
  return (this.a5 < this.aj);
});
$p.bD = (function() {
  var current = this.a5;
  this.a5 = ((1 + this.a5) | 0);
  return new $c_T2(this.au, Math.imul(current, this.aD));
});
$p.s = (function() {
  return this.bD();
});
var $d_Lbufferdata_package$package$StructArray$StructArrayIterator = new $TypeData().i($c_Lbufferdata_package$package$StructArray$StructArrayIterator, "bufferdata.package$package$StructArray$StructArrayIterator", ({
  ak: 1,
  d: 1,
  e: 1,
  l: 1
}));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  as: 1,
  a: 1,
  f: 1,
  g: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.K)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  K: 1,
  a: 1,
  f: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.v = null;
  this.v = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.i = (function() {
  return this.v;
});
$p.I = (function() {
  return this.v.length;
});
$p.aW = (function(index) {
  return this.v.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  aD: 1,
  x: 1,
  I: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer_scene_Scene(world) {
  this.a7 = null;
  this.a7 = world;
}
$p = $c_Lraytracer_scene_Scene.prototype = new $h_O();
$p.constructor = $c_Lraytracer_scene_Scene;
/** @constructor */
function $h_Lraytracer_scene_Scene() {
}
$h_Lraytracer_scene_Scene.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 178380211, true);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer_scene_Scene)) {
    var x = this.a7;
    var x$2 = x$0.a7;
    return ((x === null) ? (x$2 === null) : x.h(x$2));
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 1;
});
$p.p = (function() {
  return "Scene";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.a7;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
function $isArrayOf_Lraytracer_scene_Scene(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.P)));
}
var $d_Lraytracer_scene_Scene = new $TypeData().i($c_Lraytracer_scene_Scene, "raytracer.scene.Scene", ({
  P: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer\uff3fraw_Hit(t, pos, normal, frontFace, material) {
  this.Z = 0.0;
  this.U = null;
  this.K = null;
  this.a8 = false;
  this.Y = null;
  this.Z = t;
  this.U = pos;
  this.K = normal;
  this.a8 = frontFace;
  this.Y = material;
}
$p = $c_Lraytracer\uff3fraw_Hit.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Hit;
/** @constructor */
function $h_Lraytracer\uff3fraw_Hit() {
}
$h_Lraytracer\uff3fraw_Hit.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().f(acc, 72563);
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().W(this.Z));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().m(this.U));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().m(this.K));
  acc = $m_sr_Statics$().f(acc, (this.a8 ? 1231 : 1237));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().m(this.Y));
  return $m_sr_Statics$().x(acc, 5);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer\uff3fraw_Hit)) {
    if (((this.Z === x$0.Z) && (this.a8 === x$0.a8))) {
      var x = this.U;
      var x$2 = x$0.U;
      var $x_2 = ((x === null) ? (x$2 === null) : x.h(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.K;
      var x$4 = x$0.K;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : x$3.h(x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$5 = this.Y;
      var x$6 = x$0.Y;
      return ((x$5 === null) ? (x$6 === null) : x$5.h(x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 5;
});
$p.p = (function() {
  return "Hit";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.Z;
      break;
    }
    case 1: {
      return this.U;
      break;
    }
    case 2: {
      return this.K;
      break;
    }
    case 3: {
      return this.a8;
      break;
    }
    case 4: {
      return this.Y;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lraytracer\uff3fraw_Hit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Q)));
}
var $d_Lraytracer\uff3fraw_Hit = new $TypeData().i($c_Lraytracer\uff3fraw_Hit, "raytracer_raw.Hit", ({
  Q: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer\uff3fraw_MaterialResult(color, scatteredRay) {
  this.ab = null;
  this.ac = null;
  this.ab = color;
  this.ac = scatteredRay;
}
$p = $c_Lraytracer\uff3fraw_MaterialResult.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_MaterialResult;
/** @constructor */
function $h_Lraytracer\uff3fraw_MaterialResult() {
}
$h_Lraytracer\uff3fraw_MaterialResult.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-207597939), true);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer\uff3fraw_MaterialResult)) {
    var x = this.ab;
    var x$2 = x$0.ab;
    if (((x === null) ? (x$2 === null) : x.h(x$2))) {
      var x$3 = this.ac;
      var x$4 = x$0.ac;
      return ((x$3 === null) ? (x$4 === null) : x$3.h(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 2;
});
$p.p = (function() {
  return "MaterialResult";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.ab;
  }
  if ((n === 1)) {
    return this.ac;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
function $isArrayOf_Lraytracer\uff3fraw_MaterialResult(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.V)));
}
var $d_Lraytracer\uff3fraw_MaterialResult = new $TypeData().i($c_Lraytracer\uff3fraw_MaterialResult, "raytracer_raw.MaterialResult", ({
  V: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer\uff3fraw_Ray(origin, direction) {
  this.a1 = null;
  this.L = null;
  this.a1 = origin;
  this.L = direction;
}
$p = $c_Lraytracer\uff3fraw_Ray.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Ray;
/** @constructor */
function $h_Lraytracer\uff3fraw_Ray() {
}
$h_Lraytracer\uff3fraw_Ray.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-689038566), true);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer\uff3fraw_Ray)) {
    var x = this.a1;
    var x$2 = x$0.a1;
    if (((x === null) ? (x$2 === null) : x.h(x$2))) {
      var x$3 = this.L;
      var x$4 = x$0.L;
      return ((x$3 === null) ? (x$4 === null) : x$3.h(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 2;
});
$p.p = (function() {
  return "Ray";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.a1;
  }
  if ((n === 1)) {
    return this.L;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.bg = (function(t) {
  return this.a1.F(this.L.E(t));
});
function $isArrayOf_Lraytracer\uff3fraw_Ray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
var $d_Lraytracer\uff3fraw_Ray = new $TypeData().i($c_Lraytracer\uff3fraw_Ray, "raytracer_raw.Ray", ({
  X: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer\uff3fraw_Vec3(x, y, z) {
  this.t = 0.0;
  this.q = 0.0;
  this.w = 0.0;
  this.t = x;
  this.q = y;
  this.w = z;
}
$p = $c_Lraytracer\uff3fraw_Vec3.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Vec3;
/** @constructor */
function $h_Lraytracer\uff3fraw_Vec3() {
}
$h_Lraytracer\uff3fraw_Vec3.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().f(acc, 2662207);
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().W(this.t));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().W(this.q));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().W(this.w));
  return $m_sr_Statics$().x(acc, 3);
});
$p.h = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lraytracer\uff3fraw_Vec3) && (((this.t === x$0.t) && (this.q === x$0.q)) && (this.w === x$0.w))));
});
$p.n = (function() {
  return 3;
});
$p.p = (function() {
  return "Vec3";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.t;
      break;
    }
    case 1: {
      return this.q;
      break;
    }
    case 2: {
      return this.w;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
$p.F = (function(other) {
  return new $c_Lraytracer\uff3fraw_Vec3((this.t + other.t), (this.q + other.q), (this.w + other.w));
});
$p.X = (function(other) {
  return new $c_Lraytracer\uff3fraw_Vec3((this.t - other.t), (this.q - other.q), (this.w - other.w));
});
$p.E = (function(scalar) {
  return new $c_Lraytracer\uff3fraw_Vec3((this.t * scalar), (this.q * scalar), (this.w * scalar));
});
$p.H = (function(scalar) {
  return this.E((1.0 / scalar));
});
$p.b2 = (function(other) {
  return new $c_Lraytracer\uff3fraw_Vec3((this.t * other.t), (this.q * other.q), (this.w * other.w));
});
$p.D = (function(other) {
  return (((this.t * other.t) + (this.q * other.q)) + (this.w * other.w));
});
$p.bH = (function(normal) {
  return this.X(normal.E((2.0 * this.D(normal))));
});
$p.bz = (function(other, t) {
  return this.E((1.0 - t)).F(other.E(t));
});
$p.i = (function() {
  return (((((("Vec3(" + this.t) + ", ") + this.q) + ", ") + this.w) + ")");
});
function $isArrayOf_Lraytracer\uff3fraw_Vec3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_Lraytracer\uff3fraw_Vec3 = new $TypeData().i($c_Lraytracer\uff3fraw_Vec3, "raytracer_raw.Vec3", ({
  Z: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.C = (function() {
  return (-1);
});
$p.aq = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.y = (function() {
  return this;
});
$p.i = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.C();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.C();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.y(), that);
}
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  ar: 1,
  j: 1,
  h: 1,
  k: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  at: 1,
  i: 1,
  a: 1,
  f: 1,
  g: 1
}), ((x) => $isByte(x)));
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  av: 1,
  j: 1,
  h: 1,
  k: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aw: 1,
  j: 1,
  h: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  az: 1,
  H: 1,
  F: 1,
  J: 1,
  G: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  aA: 1,
  j: 1,
  h: 1,
  k: 1,
  a: 1
}));
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  aB: 1,
  i: 1,
  a: 1,
  f: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  aF: 1,
  j: 1,
  h: 1,
  k: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aH: 1,
  j: 1,
  h: 1,
  k: 1,
  a: 1
}));
function $ct_Lraytracer_material_MaterialType__S__($thiz, code) {
  $thiz.T = code;
  return $thiz;
}
/** @constructor */
function $c_Lraytracer_material_MaterialType() {
  this.T = 0;
}
$p = $c_Lraytracer_material_MaterialType.prototype = new $h_O();
$p.constructor = $c_Lraytracer_material_MaterialType;
/** @constructor */
function $h_Lraytracer_material_MaterialType() {
}
$h_Lraytracer_material_MaterialType.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
/** @constructor */
function $c_Lraytracer\uff3fraw_HittableList(objects) {
  this.a9 = null;
  this.a9 = objects;
}
$p = $c_Lraytracer\uff3fraw_HittableList.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_HittableList;
/** @constructor */
function $h_Lraytracer\uff3fraw_HittableList() {
}
$h_Lraytracer\uff3fraw_HittableList.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-205570158), true);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer\uff3fraw_HittableList)) {
    var x = this.a9;
    var x$2 = x$0.a9;
    return ((x === null) ? (x$2 === null) : x.h(x$2));
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 1;
});
$p.p = (function() {
  return "HittableList";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.a9;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.aB = (function(ray, minT, maxT) {
  var closestSoFar = new $c_sr_DoubleRef(maxT);
  var closestHit = new $c_sr_ObjectRef($m_s_None$());
  this.a9.bu(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((obj$3) => {
    var hit = obj$3.aB(ray, minT, closestSoFar.an);
    matchResult7: {
      if ((hit instanceof $c_s_Some)) {
        var h = hit.S;
        closestSoFar.an = h.Z;
        closestHit.ao = new $c_s_Some(h);
        break matchResult7;
      }
      if (($m_s_None$() === hit)) {
        break matchResult7;
      }
      throw new $c_s_MatchError(hit);
    }
  })));
  return closestHit.ao;
});
function $isArrayOf_Lraytracer\uff3fraw_HittableList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.S)));
}
var $d_Lraytracer\uff3fraw_HittableList = new $TypeData().i($c_Lraytracer\uff3fraw_HittableList, "raytracer_raw.HittableList", ({
  S: 1,
  R: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer\uff3fraw_Lambertian(color) {
  this.aa = null;
  this.aa = color;
}
$p = $c_Lraytracer\uff3fraw_Lambertian.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Lambertian;
/** @constructor */
function $h_Lraytracer\uff3fraw_Lambertian() {
}
$h_Lraytracer\uff3fraw_Lambertian.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-472362279), true);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer\uff3fraw_Lambertian)) {
    var x = this.aa;
    var x$2 = x$0.aa;
    return ((x === null) ? (x$2 === null) : x.h(x$2));
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 1;
});
$p.p = (function() {
  return "Lambertian";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.aa;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.bc = (function(rayIn, hit) {
  var this$1 = $m_Lraytracer\uff3fraw_Vec3$().b9();
  var a = this$1.D(this$1);
  var randomUnit = this$1.H((+Math.sqrt(a)));
  var this$3 = hit.K.F(randomUnit);
  var a$1 = this$3.D(this$3);
  var scatterDirection = this$3.H((+Math.sqrt(a$1)));
  var this$5 = scatterDirection;
  if ((this$5.D(this$5) < 1.0E-6)) {
    scatterDirection = hit.K;
  }
  var scatteredRay = new $c_Lraytracer\uff3fraw_Ray(hit.U, scatterDirection);
  return new $c_Lraytracer\uff3fraw_MaterialResult(this.aa, new $c_s_Some(scatteredRay));
});
function $isArrayOf_Lraytracer\uff3fraw_Lambertian(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.T)));
}
var $d_Lraytracer\uff3fraw_Lambertian = new $TypeData().i($c_Lraytracer\uff3fraw_Lambertian, "raytracer_raw.Lambertian", ({
  T: 1,
  U: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer\uff3fraw_Metal(color, fuzz) {
  this.a0 = null;
  this.ad = 0.0;
  this.aK = 0.0;
  this.a0 = color;
  this.ad = fuzz;
  var b = (+Math.max(0.0, fuzz));
  this.aK = (+Math.min(1.0, b));
}
$p = $c_Lraytracer\uff3fraw_Metal.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Metal;
/** @constructor */
function $h_Lraytracer\uff3fraw_Metal() {
}
$h_Lraytracer\uff3fraw_Metal.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().f(acc, 74234599);
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().m(this.a0));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().W(this.ad));
  return $m_sr_Statics$().x(acc, 2);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer\uff3fraw_Metal)) {
    if ((this.ad === x$0.ad)) {
      var x = this.a0;
      var x$2 = x$0.a0;
      return ((x === null) ? (x$2 === null) : x.h(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 2;
});
$p.p = (function() {
  return "Metal";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.a0;
  }
  if ((n === 1)) {
    return this.ad;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.bc = (function(rayIn, hit) {
  var this$1 = rayIn.L;
  var a = this$1.D(this$1);
  var reflected = this$1.H((+Math.sqrt(a))).bH(hit.K);
  var fuzzVector = $m_Lraytracer\uff3fraw_Vec3$().b9().E(this.aK);
  var scatterDirection = reflected.F(fuzzVector);
  var scatteredRay = ((scatterDirection.D(hit.K) > 0.0) ? new $c_s_Some(new $c_Lraytracer\uff3fraw_Ray(hit.U, scatterDirection)) : $m_s_None$());
  return new $c_Lraytracer\uff3fraw_MaterialResult(this.a0, scatteredRay);
});
function $isArrayOf_Lraytracer\uff3fraw_Metal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.W)));
}
var $d_Lraytracer\uff3fraw_Metal = new $TypeData().i($c_Lraytracer\uff3fraw_Metal, "raytracer_raw.Metal", ({
  W: 1,
  U: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lraytracer\uff3fraw_Sphere(center, radius, material) {
  this.V = null;
  this.R = 0.0;
  this.a2 = null;
  this.V = center;
  this.R = radius;
  this.a2 = material;
}
$p = $c_Lraytracer\uff3fraw_Sphere.prototype = new $h_O();
$p.constructor = $c_Lraytracer\uff3fraw_Sphere;
/** @constructor */
function $h_Lraytracer\uff3fraw_Sphere() {
}
$h_Lraytracer\uff3fraw_Sphere.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().f(acc, (-1812114451));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().m(this.V));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().W(this.R));
  acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().m(this.a2));
  return $m_sr_Statics$().x(acc, 3);
});
$p.h = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lraytracer\uff3fraw_Sphere)) {
    if ((this.R === x$0.R)) {
      var x = this.V;
      var x$2 = x$0.V;
      var $x_1 = ((x === null) ? (x$2 === null) : x.h(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.a2;
      var x$4 = x$0.a2;
      return ((x$3 === null) ? (x$4 === null) : x$3.h(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 3;
});
$p.p = (function() {
  return "Sphere";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.V;
      break;
    }
    case 1: {
      return this.R;
      break;
    }
    case 2: {
      return this.a2;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
$p.aB = (function(ray, minT, maxT) {
  var oc = ray.a1.X(this.V);
  var halfB = oc.D(ray.L);
  var c = (oc.D(oc) - (this.R * this.R));
  var discriminant = ((halfB * halfB) - c);
  if ((discriminant < 0.0)) {
    return $m_s_None$();
  }
  var sqrtD = (+Math.sqrt(discriminant));
  var t = ((-halfB) - sqrtD);
  if (((t < minT) || (t > maxT))) {
    t = ((-halfB) + sqrtD);
    if (((t < minT) || (t > maxT))) {
      return $m_s_None$();
    }
  }
  var p = ray.bg(t);
  var normal = p.X(this.V).H(this.R);
  var frontFace = (ray.L.D(normal) < 0.0);
  if ((!frontFace)) {
    normal = normal.E((-1.0));
  }
  return new $c_s_Some(new $c_Lraytracer\uff3fraw_Hit(t, p, normal, frontFace, this.a2));
});
function $isArrayOf_Lraytracer\uff3fraw_Sphere(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
var $d_Lraytracer\uff3fraw_Sphere = new $TypeData().i($c_Lraytracer\uff3fraw_Sphere, "raytracer_raw.Sphere", ({
  Y: 1,
  R: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.aN)) {
    if (($thiz.ak === null)) {
      var $x_1 = "null";
    } else {
      try {
        var $x_1 = ((($thiz.ak + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
      }
    }
    $thiz.aM = $x_1;
    $thiz.aN = true;
  }
  return $thiz.aM;
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.ak;
  return ("of class " + $objectClassName(this$1));
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ak = null;
    this.aM = null;
    this.aN = false;
    this.ak = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  aA() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  aW: 1,
  j: 1,
  h: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return (this === $m_s_None$());
});
$p.C = (function() {
  return (this.r() ? 0 : 1);
});
$p.y = (function() {
  return (this.r() ? $m_sc_Iterator$().af : new $c_sc_Iterator$$anon$20(this.b0()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.ae = 0;
  this.aP = 0;
  this.aO = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.aO = outer;
  this.ae = 0;
  this.aP = outer.n();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.u = (function() {
  return (this.ae < this.aP);
});
$p.s = (function() {
  var result = this.aO.o(this.ae);
  this.ae = ((1 + this.ae) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  aY: 1,
  m: 1,
  d: 1,
  e: 1,
  l: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.a = null;
  this.d = null;
  this.a = _1;
  this.d = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.n = (function() {
  return 2;
});
$p.o = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.i = (function() {
  return (((("(" + this.a) + ",") + this.d) + ")");
});
$p.p = (function() {
  return "Tuple2";
});
$p.B = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().bj(this, (-889275714), null);
});
$p.h = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().j(this.a, x$1.a) && $m_sr_BoxesRunTime$().j(this.d, x$1.d))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  a2: 1,
  aZ: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.az() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.u = (function() {
  return false;
});
$p.bC = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.C = (function() {
  return 0;
});
$p.s = (function() {
  this.bC();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  b7: 1,
  m: 1,
  d: 1,
  e: 1,
  l: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.aR = null;
  this.am = false;
  this.aR = a$2;
  this.am = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.u = (function() {
  return (!this.am);
});
$p.s = (function() {
  if (this.am) {
    return $m_sc_Iterator$().af.s();
  } else {
    this.am = true;
    return this.aR;
  }
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  b8: 1,
  m: 1,
  d: 1,
  e: 1,
  l: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.bp(n);
  if (skipped.r()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.P();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else if ((((!a$tailLocal1.r()) && (!b$tailLocal1.r())) && $m_sr_BoxesRunTime$().j(a$tailLocal1.P(), b$tailLocal1.P()))) {
      var a$tailLocal1$tmp1 = a$tailLocal1.J();
      var b$tailLocal1$tmp1 = b$tailLocal1.J();
      a$tailLocal1 = a$tailLocal1$tmp1;
      b$tailLocal1 = b$tailLocal1$tmp1;
    } else {
      return (a$tailLocal1.r() && b$tailLocal1.r());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.ah = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.ah = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.u = (function() {
  return (!this.ah.r());
});
$p.s = (function() {
  var r = this.ah.P();
  this.ah = this.ah.J();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  bb: 1,
  m: 1,
  d: 1,
  e: 1,
  l: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.aU = null;
  this.ai = 0;
  this.aT = 0;
  this.aU = x$1;
  this.ai = 0;
  this.aT = x$1.n();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.u = (function() {
  return (this.ai < this.aT);
});
$p.s = (function() {
  var result = this.aU.o(this.ai);
  this.ai = ((1 + this.ai) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  bA: 1,
  m: 1,
  d: 1,
  e: 1,
  l: 1
}));
/** @constructor */
function $c_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9(arr$2) {
  this.aE = null;
  this.aE = arr$2;
}
$p = $c_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9;
/** @constructor */
function $h_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9() {
}
$h_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9.prototype = $p;
$p.C = (function() {
  return (-1);
});
$p.aq = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.az = (function() {
  return "Iterable";
});
$p.i = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.y = (function() {
  return new $c_Lbufferdata_package$package$StructArray$StructArrayIterator(this.aE, (-1));
});
var $d_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9 = new $TypeData().i($c_Lbufferdata_package$package$StructArray$given\uff3fConversion\uff3fStructArray\uff3fIterable$$anon$9, "bufferdata.package$package$StructArray$given_Conversion_StructArray_Iterable$$anon$9", ({
  al: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.L)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  L: 1,
  i: 1,
  a: 1,
  f: 1,
  g: 1,
  n: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  au: 1,
  i: 1,
  a: 1,
  f: 1,
  g: 1,
  n: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  ax: 1,
  i: 1,
  a: 1,
  f: 1,
  g: 1,
  n: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.b === that.b) && ($thiz.c === that.c)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.b ^ $thiz.c);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().b7($thiz.b, $thiz.c);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  M: 1,
  i: 1,
  a: 1,
  f: 1,
  g: 1,
  n: 1
}), ((x) => (x instanceof $c_RTLong)));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  aC: 1,
  a: 1,
  f: 1,
  x: 1,
  g: 1,
  n: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.l = (function() {
  return 2433880;
});
$p.i = (function() {
  return "None";
});
$p.n = (function() {
  return 0;
});
$p.p = (function() {
  return "None";
});
$p.o = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.bv = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.b0 = (function() {
  this.bv();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  aX: 1,
  a0: 1,
  d: 1,
  b: 1,
  c: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.S = null;
  this.S = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 1323286827, true);
});
$p.h = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().j(this.S, x$0.S)));
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().N(this);
});
$p.n = (function() {
  return 1;
});
$p.p = (function() {
  return "Some";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.S;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.b0 = (function() {
  return this.S;
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  a1: 1,
  a0: 1,
  d: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.C = (function() {
  return (-1);
});
$p.aq = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.az = (function() {
  return this.at();
});
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.aQ = null;
  this.al = 0;
  this.a3 = 0;
  this.aQ = self;
  this.al = 0;
  this.a3 = self.I();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.C = (function() {
  return this.a3;
});
$p.u = (function() {
  return (this.a3 > 0);
});
$p.s = (function() {
  if ((this.a3 > 0)) {
    var r = this.aQ.O(this.al);
    this.al = ((1 + this.al) | 0);
    this.a3 = (((-1) + this.a3) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().af.s();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  b4: 1,
  m: 1,
  d: 1,
  e: 1,
  l: 1,
  a: 1
}));
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
function $f_sc_View__toString__T($thiz) {
  return ($thiz.at() + "(<not computed>)");
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.aF && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.aF = false;
  this.a6 = null;
  this.aF = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.a6 = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.z = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.a6 = (("" + this.a6) + rest);
      rest = "";
    } else {
      var $x_1 = this.a6;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.a6 = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  ay: 1,
  aq: 1,
  ap: 1,
  H: 1,
  F: 1,
  J: 1,
  G: 1,
  I: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.r())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = (((-1) + n$tailLocal1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.J();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.i = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_Lraytracer_material_MaterialType$$anon$1() {
  this.T = 0;
  $ct_Lraytracer_material_MaterialType__S__(this, 0);
}
$p = $c_Lraytracer_material_MaterialType$$anon$1.prototype = new $h_Lraytracer_material_MaterialType();
$p.constructor = $c_Lraytracer_material_MaterialType$$anon$1;
/** @constructor */
function $h_Lraytracer_material_MaterialType$$anon$1() {
}
$h_Lraytracer_material_MaterialType$$anon$1.prototype = $p;
$p.n = (function() {
  return 0;
});
$p.o = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.p = (function() {
  return "Lambertian";
});
$p.i = (function() {
  return "Lambertian";
});
$p.l = (function() {
  return $f_T__hashCode__I("Lambertian");
});
var $d_Lraytracer_material_MaterialType$$anon$1 = new $TypeData().i($c_Lraytracer_material_MaterialType$$anon$1, "raytracer.material.MaterialType$$anon$1", ({
  aO: 1,
  O: 1,
  b: 1,
  c: 1,
  a: 1,
  ah: 1,
  ai: 1,
  w: 1,
  E: 1,
  ag: 1
}));
/** @constructor */
function $c_Lraytracer_material_MaterialType$$anon$2() {
  this.T = 0;
  $ct_Lraytracer_material_MaterialType__S__(this, 1);
}
$p = $c_Lraytracer_material_MaterialType$$anon$2.prototype = new $h_Lraytracer_material_MaterialType();
$p.constructor = $c_Lraytracer_material_MaterialType$$anon$2;
/** @constructor */
function $h_Lraytracer_material_MaterialType$$anon$2() {
}
$h_Lraytracer_material_MaterialType$$anon$2.prototype = $p;
$p.n = (function() {
  return 0;
});
$p.o = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.p = (function() {
  return "Metal";
});
$p.i = (function() {
  return "Metal";
});
$p.l = (function() {
  return $f_T__hashCode__I("Metal");
});
var $d_Lraytracer_material_MaterialType$$anon$2 = new $TypeData().i($c_Lraytracer_material_MaterialType$$anon$2, "raytracer.material.MaterialType$$anon$2", ({
  aP: 1,
  O: 1,
  b: 1,
  c: 1,
  a: 1,
  ah: 1,
  ai: 1,
  w: 1,
  E: 1,
  ag: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.bi($thiz)) {
        return $thiz.bb(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.r)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.r)));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.bb = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bi = (function(that) {
  return true;
});
$p.h = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this);
});
$p.i = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.C)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.C)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.u)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.ag = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.ag = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.O = (function(idx) {
  return this.ag.O(idx);
});
$p.I = (function() {
  return this.ag.I();
});
$p.r = (function() {
  return this.ag.r();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.ag = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.C = (function() {
  return this.I();
});
$p.y = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.at = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  b3: 1,
  ba: 1,
  b0: 1,
  b1: 1,
  t: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  a: 1,
  bc: 1,
  v: 1,
  b9: 1,
  a3: 1,
  b2: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.r();
      var bEmpty = b$tailLocal1.r();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().j(a$tailLocal1.P(), b$tailLocal1.P()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.J();
        var b$tailLocal1$tmp1 = b$tailLocal1.J();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.bb = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.at = (function() {
  return "LinearSeq";
});
$p.y = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.r = (function() {
  return (this === $m_sci_Nil$());
});
$p.bu = (function(f) {
  var these = this;
  while ((!these.r())) {
    f.ay(these.P());
    these = these.J();
  }
});
$p.I = (function() {
  var these = this;
  var len = 0;
  while ((!these.r())) {
    len = ((1 + len) | 0);
    these = these.J();
  }
  return len;
});
$p.az = (function() {
  return "List";
});
$p.h = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.bp = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.ay = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.av = null;
  this.aw = null;
  this.av = head;
  this.aw = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.n = (function() {
  return 2;
});
$p.p = (function() {
  return "::";
});
$p.o = (function(n) {
  if ((n === 0)) {
    return this.av;
  }
  if ((n === 1)) {
    return this.aw;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.P = (function() {
  return this.av;
});
$p.J = (function() {
  return this.aw;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  bd: 1,
  D: 1,
  a9: 1,
  B: 1,
  t: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  s: 1,
  A: 1,
  v: 1,
  b: 1,
  r: 1,
  aa: 1,
  ae: 1,
  ad: 1,
  a4: 1,
  u: 1,
  ac: 1,
  ab: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  af: 1,
  a: 1,
  a8: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.B = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.n = (function() {
  return 0;
});
$p.p = (function() {
  return "Nil";
});
$p.o = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.bx = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.bR = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.C = (function() {
  return 0;
});
$p.y = (function() {
  return $m_sc_Iterator$().af;
});
$p.P = (function() {
  this.bx();
});
$p.J = (function() {
  this.bR();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  be: 1,
  D: 1,
  a9: 1,
  B: 1,
  t: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  s: 1,
  A: 1,
  v: 1,
  b: 1,
  r: 1,
  aa: 1,
  ae: 1,
  ad: 1,
  a4: 1,
  u: 1,
  ac: 1,
  ab: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  af: 1,
  a: 1,
  a8: 1,
  c: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.M = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.M = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.y = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.at = (function() {
  return "IndexedSeq";
});
$p.I = (function() {
  return this.M.I();
});
$p.C = (function() {
  return this.M.I();
});
$p.i = (function() {
  return this.M.v;
});
$p.r = (function() {
  return (this.M.I() === 0);
});
$p.O = (function(i) {
  return $bC(this.M.aW(i));
});
$p.ay = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.M.aW(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  bq: 1,
  bf: 1,
  B: 1,
  t: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  s: 1,
  A: 1,
  v: 1,
  b: 1,
  r: 1,
  bm: 1,
  y: 1,
  bi: 1,
  bp: 1,
  bo: 1,
  bh: 1,
  bj: 1,
  bg: 1,
  bn: 1,
  a3: 1,
  C: 1,
  bl: 1,
  bk: 1,
  x: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
var $t_Lraytracer_material_MaterialType$__Lambertian = null;
var $t_Lraytracer_material_MaterialType$__Metal = null;
let $e_zeroCostStructViews = (function() {
  return $m_Lbufferdata_ZeroCostValidation$().bd();
});
export { $e_zeroCostStructViews as zeroCostStructViews };
let $e_zeroCostDirectNested = (function() {
  return $m_Lbufferdata_ZeroCostValidation$().aZ();
});
export { $e_zeroCostDirectNested as zeroCostDirectNested };
let $e_zeroCostNamedTupleSet = (function() {
  return $m_Lbufferdata_ZeroCostValidation$().b4();
});
export { $e_zeroCostNamedTupleSet as zeroCostNamedTupleSet };
let $e_validateZeroCost = (function() {
  return $m_Lbufferdata_ZeroCostValidation$().bU();
});
export { $e_validateZeroCost as validateZeroCost };
let $e_zeroCostPrimitiveViews = (function() {
  return $m_Lbufferdata_ZeroCostValidation$().b8();
});
export { $e_zeroCostPrimitiveViews as zeroCostPrimitiveViews };
let $e_zeroCostDirect = (function() {
  return $m_Lbufferdata_ZeroCostValidation$().aY();
});
export { $e_zeroCostDirect as zeroCostDirect };
let $e_zeroCostNamedNested = (function() {
  return $m_Lbufferdata_ZeroCostValidation$().b3();
});
export { $e_zeroCostNamedNested as zeroCostNamedNested };
let $e_createParticleBuffer = (function(arg) {
  return $m_Lexample_BufferDataDemo$().aX((arg | 0));
});
export { $e_createParticleBuffer as createParticleBuffer };
let $e_renderRaytracer = (function(arg, arg$2) {
  return $m_Lexample_Main$package$().bM((arg | 0), (arg$2 | 0));
});
export { $e_renderRaytracer as renderRaytracer };
let $e_renderRaytracerRaw = (function(arg, arg$2) {
  return $m_Lexample_Main$package$().bN((arg | 0), (arg$2 | 0));
});
export { $e_renderRaytracerRaw as renderRaytracerRaw };
$s_Lexample_app__main__AT__V(new ($d_T.r().C)([]));
