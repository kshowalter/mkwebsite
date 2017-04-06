export default function(store, custom_reducers){
  var actions = {
    __store: store,
    __dispatch: function(action_config){
      this.__store.dispatch(action_config);
    },
  };

  for( var action_name in custom_reducers ){
    actions[action_name] = function(){
      //console.log('action name: ', action_name);
      actions.__dispatch({
        type: action_name,
        arguments: arguments
      });
    };
  }

  return actions;
}
