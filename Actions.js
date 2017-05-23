var mkAction = function(actions, action_name){

  return function(){
    actions.__dispatch({
      type: action_name,
      arguments: arguments
    });
  };
};

export default function(store, custom_reducers){
  var actions = {
    __store: store,
    __dispatch: function(action_config){
      this.__store.dispatch(action_config);
    },
  };
  for( var action_name in custom_reducers ){
    console.log('action name: ', action_name);
    actions[action_name] = mkAction(actions, action_name);
  }
  console.log('actions: ', actions);

  return actions;
}
