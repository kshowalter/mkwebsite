import Actions from './Actions';
import Reducer from './Reducer';
import Specdom  from 'specdom';

var global = window || global;

export default function(target_element, init_state, custom_reducers, on_change){
  var target_id = target_element.id;
  var specdom = Specdom('#'+target_id);

  var reducer = Reducer(custom_reducers);

  var create_store = require('redux').createStore;
  var store = create_store(reducer, init_state);
  var actions = Actions(store, custom_reducers);

  var stored_route = sessionStorage.getItem('route');
  if( stored_route ){
    actions.route(stored_route);
  }

  /** anonymous function that runs when the store is updated. */
  store.subscribe(function(){
    var state = store.getState();
    var page_spec = on_change(state, actions);
    specdom.load(page_spec);
  });

  return actions;
}
