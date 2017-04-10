export default function clone(obj) {
  if ( obj === null || typeof(obj) !== 'object' || 'is_active_clone' in obj ){
    return obj;
  }

  var new_obj;
  if (obj instanceof Date)
    new_obj = new Date(obj);
  else
    new_obj = obj.constructor();

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj['is_active_clone'] = null;
      new_obj[key] = clone(obj[key]);
      delete obj['is_active_clone'];
    }
  }

  return new_obj;
}
